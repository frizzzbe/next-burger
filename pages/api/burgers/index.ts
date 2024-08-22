import { getBurgers } from "@/locales/burgersApi"
import type { NextApiRequest, NextApiResponse } from "next"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { locale } = req.query
    res.status(200).send({
      items: getBurgers(locale),
    })
  } catch (err) {
    res.status(500).send({ error: "failed to fetch data" })
  }
}
