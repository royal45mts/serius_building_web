import axios from "axios";
import { emit } from "pouchdb";

const desing_document = (name: string) => {
  return {
    _id: `_design/${name}`,
    views: {
      product: {
        map: 'function(doc) {\r\n    if (doc.type === "product") {\r\n        emit(doc.name);\r\n    }\r\n}',
      },
      product2: {
        map: function (doc) {
          emit(doc.tes);
        }.toString(),
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
      require("name");
      require("email");
      require("id_product");
    }.toString(),
    language: "javascript",
  };
};
// axios.setHeader("Authorization", "Bearer " + data_token);
// axios_api.defaults.headers.common["Authorization"] ;

export { desing_document };
