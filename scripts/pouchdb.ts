import Pouchdb from "pouchdb";
PouchDB.plugin(require("pouchdb-find"));

const pouchdb = (data: string, local: string) => {
  const db = new Pouchdb(local);

  return {
    db,
  };
};

export { pouchdb };
