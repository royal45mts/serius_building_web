// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name?: string;
  data?: string;
};

type Name = {
  name?: string;
  data?: any;
};

import { axios_api } from "~/scripts";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const json_parse = JSON.parse(req.body);
  switch (json_parse.name) {
    case "produk": {
      return axios_api
        .get("/v1/user/signin")
        .then((r: any) => {
          res.status(200).json({ name: "aws" });
        })
        .catch((error) => {
          res.status(200).json({ name: error });
        });
    }
    default: {
      return res.status(200).json({ data: "null" });
    }
  }
}
