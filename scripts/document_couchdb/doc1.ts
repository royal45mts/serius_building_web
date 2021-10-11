import axios from "axios";
import { emit } from "pouchdb";

const doc1 = (name: string) => {
  return {
    _id: `_design/${name}`,
    views: {
      product: {
        map: 'function(doc) {\r\n    if (doc.type === "product") {\r\n        emit(doc.name);\r\n    }\r\n}',
      },
      product1: {
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
    validate_doc_update: function (newDoc, oldDoc, userCtx, secObj) {
      function require(field, message) {
        message = message || "Document must have a " + field;
        if (!newDoc[field]) throw { forbidden: message };
      }
      if (newDoc.type === "post") {
        require("_id");
        require("name");
        require("email");
        require("id_product");
      }
    }.toString(),
    language: "javascript",
  };
};
// axios.setHeader("Authorization", "Bearer " + data_token);
// axios_api.defaults.headers.common["Authorization"] ;

export { doc1 };
