// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "./url";

type Data = {
  name: object;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case "GET":
      //...
      axios
        .get("/api/v2/private/permohonan-dana/getwithfilter", {
          params: req.query,
        })
        .then((r) => {
          res.status(200).json(r.data);
        })
        .catch((error) => {
          res.status(400).json({ name: error });
        });
      break;
    case "POST":
      break;
    default:
      res.status(405).end(); //Method Not Allowed
      break;
  }

  // console.log(req.body, "body", req.query);
}
