import { getBurgers } from "@/locales/burgersApi";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id, locale } = req.query;
  try {
    res.status(200).send(getBurgers(locale).find((item) => String(item.id) === id));
  } catch (err) {
    res.status(500).send({ error: "failed to fetch data" });
  }
}
