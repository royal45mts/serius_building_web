import Pouchdb from "pouchdb";
Pouchdb.plugin(require("pouchdb-find"));

const pouchdb = (local: string) => {
  const db = new Pouchdb(local);
  const remote = new Pouchdb("http://localhost:8092/", {
    fetch(url: any, opts: any) {
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
