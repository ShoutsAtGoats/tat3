import { type NextApiRequest, type NextApiResponse } from "next";

import { prisma } from "../../server/db/client";

const seeds = async (req: NextApiRequest, res: NextApiResponse) => {
  const seeds = await prisma.cryptoExchange.findMany();
  res.status(200).json(seeds);
};

export default seeds;
