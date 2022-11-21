// import { type NextApiRequest, type NextApiResponse } from "next";
import ccxt from "ccxt";
import { prisma } from "../../server/db/client";

const marketPlace = async (req, res) => {
  const examples = ccxt.exchanges;
//   console.log(markets);
  res.status(200).json(examples);
};

export default marketPlace;
