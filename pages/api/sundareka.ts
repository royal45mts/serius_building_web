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

import { axios_api } from "~/scripts/axios";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const json_parse = req?.body === "" ? {} : req?.body;
  switch (json_parse?.name) {
    case "produk": {
      return axios_api
        .post("/v1/user/signin", json_parse.data)
        .then((r: any) => {
          res.status(200).json({ data: r.data });
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
