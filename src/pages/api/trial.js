import { NextApiRequest, NextApiResponse } from "next";
import ccxt from "ccxt";
import { useEffect } from "react";
import { trpc } from "../../utils/trpc";
import { nextTick } from "process";

// import { todos } from "../../todo";

// const result = await Promise.all(
//     exchanges.map(async (id) => {
//       const CCXT = ccxt; // Hack!
//       const exchange = new CCXT[id]({ enableRateLimit: true });
//       const ticker = await exchange.fetchTicker(symbol);
//       const exchangeExtended = exchange.extend({ exchange: id }, ticker);
//       return exchangeExtended;
//     })
//   );

export function handler(req, res) {
  const { method } = req;
  const symbol = "BTC/USD";
  const exchanges = ["coinbasepro", "gemini", "kraken"];
  let markets = [];

  exchanges.map(async (id) => {
    switch (method) {
      case "GET":
        await res.status(200).json(fetchTickers(symbol));
        break;
      case "POST":
        const { todo, completed } = req.body;
        markets.push({
          id: markets.length + 1,
          todo,
          completed,
        });
        res.status(200).json(markets);
        break;
      default:
        res.setHeader("Allow", ["GET", "POST"]);
        res.status(405).end(`Method ${method} Not Allowed`);
        break;
    }
  });

  return result;
}

// let getManyData = async (req, res) => {
//   console.log("trial");
//   const ccxt = require("ccxt");
//   const log = require("ololog");

//   const symbol = "BTC/USD";
//   const exchanges = ["coinbasepro", "gemini", "kraken"];

//   const fetchTickers = async (symbol) => {
//     const result = await Promise.all(
//       exchanges.map(async (id) => {
//         const CCXT = ccxt; // Hack!
//         const exchange = new CCXT[id]({ enableRateLimit: true });
//         const ticker = await exchange.fetchTicker(symbol);
//         const exchangeExtended = exchange.extend({ exchange: id }, ticker);
//         return exchangeExtended;
//       })
//     );
//     log(result);
//   };
//   //   console.log(fetchTickers(symbol));
//   return await res.status(200).json(fetchTickers(symbol));
// };
// getManyData();

// export default getManyData;
