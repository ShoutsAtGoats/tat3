import { z } from "zod";
import ccxt from "ccxt";
// let Router = require('./')
import { router, publicProcedure } from "../trpc";

export const seedRouter = router({
  market: publicProcedure
    .input(z.object({ text: z.string().nullish() }).nullish())
    .query(({ input }) => {
      // let market = new ccxt.binance();
      // if (input == "market") {
      //   console.log("yes");

      //   let stat_list = market.fetchTicker("BTC/USDT");
      //   console.log("Binance", stat_list["bid"], stat_list["ask"]);
      // }

      const streams = {
        binance: "BTC/USDT",
        bittrex: "BTC/USDT",
        poloniex: "BTC/USDT",
        bitfinex: "BTC/USDT",
        hitbtc: "BTC/USDT",
        upbit: "BTC/USDT",
        coinbasepro: "BTC/USD",
        ftx: "BTC/USDT",
        okex: "BTC/USDT",
        gateio: "BTC/USDT",
      };

      Promise.all(
        Object.keys(streams).map((exchangeId) =>
          (async () => {
            const exchange = new ccxt.pro[exchangeId]({
              enableRateLimit: true,
            });
            const symbol = streams[exchangeId];
            while (true) {
              try {
                const orderbook = await exchange.watchOrderBook(symbol);
                console.log(
                  new Date(),
                  exchange.id,
                  symbol,
                  orderbook["asks"][0],
                  orderbook["bids"][0]
                );
              } catch (e) {
                console.log(symbol, e);
              }
            }
          })()
        )
      );

      return {
        greeting: market,
      };
    }),
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.example.findMany();
  }),
  scrapeAll: publicProcedure.query(({ text: string }) => {
    return "scrapeAll";
  }),
});
