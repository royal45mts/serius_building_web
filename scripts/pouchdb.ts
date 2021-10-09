import Pouchdb from "pouchdb";
Pouchdb.plugin(require("pouchdb-find"));
Pouchdb.plugin(require("pouchdb-authentication"));

const pouchdb = (local: string) => {
  const db = new Pouchdb(local);
  const remote = new Pouchdb("/api/couchbase");

  return {
    db: db,
    remote: remote,
  };
};

export { pouchdb };
