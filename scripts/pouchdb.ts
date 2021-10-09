import Pouchdb from "pouchdb";
Pouchdb.plugin(require("pouchdb-find"));
Pouchdb.plugin(require("pouchdb-authentication"));

const pouchdb = (local: string) => {
  const db = new Pouchdb(local);
  const auth =
    "Basic " + Buffer.from("root" + ":" + "12345678").toString("base64");
  const remote = new Pouchdb("http://localhost:5984/", {
    fetch(url: any, opts: any) {
      opts.headers.set("Authorization", auth);
      opts.headers.set("Content-Type", "application/json");

      return Pouchdb.fetch(url, opts);
    },
  });
  return {
    db: db,
    remote: remote,
  };
};

export { pouchdb };
