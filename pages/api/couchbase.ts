// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import Pouchdb from "pouchdb";
Pouchdb.plugin(require("pouchdb-find"));

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const auth =
    "Basic " + Buffer.from("root" + ":" + "12345678").toString("base64");
  const remote = new Pouchdb("http://localhost:5984/", {
    fetch(url: any, opts: any) {
      opts.headers.set("Authorization", auth);
      opts.headers.set("Access-Control-Allow-Origin", "*");
      opts.headers.set("Content-Type", "application/json");

      return Pouchdb.fetch(url, opts);
    },
  });
  remote
    .allDocs({
      include_docs: true,
    })
    .then((r: any) => {
      console.log(r);
    });
  return remote;
}
