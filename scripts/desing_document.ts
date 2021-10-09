import axios from "axios";

const desing_document = (name: string) => {
  return {
    _id: `_design/${name}`,
    views: {
      product: {
        map: 'function(doc) {\r\n    if (doc.type === "product") {\r\n        emit(doc.name);\r\n    }\r\n}',
      },
    },
    updates: {
      updatefun1: "function(doc,req) {/* function code here - see below */}",
      updatefun2: "function(doc,req) {/* function code here - see below */}",
    },
    filters: {
      filterfunction1:
        "function(doc, req){ /* function code here - see below */ }",
    },
    validate_doc_update:
      "function(newDoc, oldDoc, userCtx, secObj) { /* function code here - see below */ }",
    language: "javascript",
  };
};
// axios.setHeader("Authorization", "Bearer " + data_token);
// axios_api.defaults.headers.common["Authorization"] ;

export { desing_document };
