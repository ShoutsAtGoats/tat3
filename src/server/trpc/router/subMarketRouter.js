import { z } from "zod";
import { router, publicProcedure } from "../trpc";
// import { useQuery } from "react-query";
import ololog from "ololog";
import asTable from "as-table";
import ansicolor from "ansicolor";
// import * as ccxt from "ccxt";
var ccxt = require("ccxt");

export const subMarketRouter = router({
  getSubs: publicProcedure
    .input(z.object({ text: z.string().nullish() }).nullish())
    .query(({ input }) => {
      console.log(input);
      // const log = require("ololog").configure({ locate: false });

      // const symbol = "BTC/USD";
      // const exchanges = ["coinbasepro", "gemini", "kraken"];

      // const fetchTickers = async (symbol: string) => {
      //   const result = await Promise.all(
      //     exchanges.map(async (id: string): Promise<ccxt.Exchange> => {
      //       const CCXT = ccxt as any; // Hack!
      //       const exchange = new CCXT[id]({
      //         enableRateLimit: true,
      //       }) as ccxt.Exchange;
      //       const ticker = await exchange.fetchTicker(symbol);
      //       const exchangeExtended = exchange.extend(
      //         { exchange: id },
      //         ticker
      //       ) as ccxt.Exchange;
      //       return exchangeExtended;
      //     })
      //   );
      //   log(result);
      // };

      return {
        greeting: input,
      };
    }),
  // getAll: publicProcedure.query(({ ctx }) => {
  //   return ctx.prisma.marketsRouter.findMany();
  // }),
  getCum: publicProcedure
    .input(z.object({ text: z.string().nullish() }).nullish())
    .query(async ({ input }) => {
      const log = require("ololog").configure({ locate: false });
      // const query = useQuery((), {
      //   enabled: false,
      //   staleTime: Infinity,
      // })
      // // log(input, typeof input);
      // const symbol = "BTC/USD";
      // let newExchanges = JSON.stringify(input)
      //   .split(":")[1]
      //   .slice(1)
      //   .split(",");
      // // const exchanges = input.split(",");
      // log(newExchanges);
      // // console.log(symbol);
      // const fetchTickers = async (symbol) => {
      //   log("firing", symbol);

      //   const result = async () => {
      //     const symbol = "BTC/USD";
      //     try {
      //       const exchange = new ccxt["btcbox"]();
      //       log(exchange, "exchange");
      //       const ticker = await exchange.fetchTicker(symbol);
      //       const exchangeExtended = await exchange.extend(
      //         { exchange: id },
      //         ticker
      //       );
      //       return exchangeExtended;
      //     } catch (e) {
      //       console.log(e);
      //     }
      //   };
      //   // newExchanges.map(async (id) => {
      //   //   // const CCXT = ccxt as any; // Hack!

      //   //   const exchange = new ccxt['coinspot']();
      //   //   const ticker = await exchange.fetchTicker(symbol);
      //   //   const exchangeExtended = exchange.extend({ exchange: id }, ticker);
      //   //   return exchangeExtended;
      //   // })
      //   let res = await result();
      //   log(res);
      //   log(result);
      // };
      // fetchTickers(symbol);
      // // let res = await fetchTickers(symbol);
      // // log(fetchTickers(symbol), "hard log");

      require("ansicolor").nice;

      //-----------------------------------------------------------------------------

      process.on("uncaughtException", (e) => {
        log.bright.red.error(e);
        process.exit(1);
      });
      process.on("unhandledRejection", (e) => {
        log.bright.red.error(e);
        process.exit(1);
      });

      //-----------------------------------------------------------------------------

      let test = async function (exchange) {
        try {
          await exchange.loadMarkets();
          log(
            exchange.id.green,
            "loaded",
            exchange.symbols.length.toString().bright.green,
            "symbols"
          );
        } catch (e) {
          if (e instanceof ccxt.DDoSProtection) {
            log.bright.yellow(exchange.id, "[DDoS Protection] " + e.message);
          } else if (e instanceof ccxt.RequestTimeout) {
            log.bright.yellow(exchange.id, "[Request Timeout] " + e.message);
          } else if (e instanceof ccxt.AuthenticationError) {
            log.bright.yellow(
              exchange.id,
              "[Authentication Error] " + e.message
            );
          } else if (e instanceof ccxt.ExchangeNotAvailable) {
            log.bright.yellow(
              exchange.id,
              "[Exchange Not Available] " + e.message
            );
          } else if (e instanceof ccxt.ExchangeError) {
            log.bright.yellow(exchange.id, "[Exchange Error] " + e.message);
          } else if (e instanceof ccxt.NetworkError) {
            log.bright.yellow(exchange.id, "[Network Error] " + e.message);
          } else {
            throw e;
          }
        }
      };

      //-----------------------------------------------------------------------------

      let exchanges = [];

      async function main() {
        // instantiate all exchanges
        await Promise.all(
          ccxt.exchanges.map(async (id) => {
            log(id);
            let exchange = new ccxt[id]();
            exchanges.push(exchange);
            await test(exchange);
          })
        );

        let succeeded = exchanges
          .filter((exchange) => (exchange.markets ? true : false))
          .length.toString().bright.green;
        let failed = exchanges.filter((exchange) =>
          exchange.markets ? false : true
        ).length;
        let total = ccxt.exchanges.length.toString().bright.white;
        let numSymbols = 0;
        exchanges.map((exchange) => {
          numSymbols += exchange.symbols ? exchange.symbols.length : 0;
        });
        log(
          numSymbols,
          "symbols from",
          succeeded,
          "of",
          total,
          "exchanges loaded",
          ("(" + failed + " errors)").red
        );
      }
      await main();
      // let answer = "done";

      return {
        greeting: input,
        // greeting: input,
      };
    }),
});
