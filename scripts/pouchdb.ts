import Pouchdb from "pouchdb";
Pouchdb.plugin(require("pouchdb-find"));
Pouchdb.plugin(require("pouchdb-authentication"));

const pouchdb = (name: string, local: string) => {
  const db = new Pouchdb(local, {
    revs_limit: 1,
  });
  const auth =
    "Basic " + Buffer.from("serius" + ":" + "12345678").toString("base64");
  const remote = new Pouchdb(`http://localhost:5984/${name}_${local}`, {
    revs_limit: 1,
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
