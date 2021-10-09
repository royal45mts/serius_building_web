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
  const remote = new Pouchdb("http://localhost:8092");
  return remote;
  // res.status(200).json({ name: "John Doe" });
}
