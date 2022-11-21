import { z } from "zod";
import { router, publicProcedure } from "../trpc";
import ololog from "ololog";
import asTable from "as-table";
import ansicolor from "ansicolor";
import ccxt from "ccxt";

export const marketsRouter = router({
  getMarkets: publicProcedure
    .input(z.object({ text: z.string().nullish() }).nullish())
    .query(({ input }) => {
      console.log(input);
      //   const ccxt = require("../../ccxt.js");
      //   const countries = require("../../build/countries.js");
      //   const asTable = require("as-table");
      const log = require("ololog").configure({ locate: false });
      require("ansicolor").nice;
      process.on("uncaughtException", (e) => {
        log.bright.red.error(e);
        process.exit(1);
      });
      process.on("unhandledRejection", (e) => {
        log.bright.red.error(e);
        process.exit(1);
      });

      let exchanges = {};

      ccxt.exchanges.forEach((id) => {
        exchanges[id] = new ccxt[id]();
      });

      log(
        "The ccxt library supports",
        ccxt.exchanges.length.toString().green,
        "exchanges:"
      );
      return {
        greeting: exchanges,
      };
    }),
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.marketsRouter.findMany();
  }),
  // readData: publicProcedure
  //   .input(z.object({ text: z.string().nullish() }).nullish())
  //   .query(({ input }) => {
  //     ccxt.exchanges.forEach((exchange) => {
  //       console.log(`${exchange}.json`);
  //       // log(fs.readFileSync(`${exchange}.json`));
  //     });
  //     log(fs.readFileSync(`coinbase.json`, "utf-8"));
  //     return {
  //       greeting: input,
  //     };
  //   }),
  readPrices: publicProcedure
    .input(z.object({ text: z.string().nullish() }).nullish())
    .query?.(({ input }) => {
      console.log(input);

      return () => {
        return {
          greeting: input,
        };
      };
      return input;
    }),
  getPrices: publicProcedure
    .input(z.object({ text: z.string().nullish() }).nullish())
    .query(({ input }) => {
      console.log(input);
      // async resolve({ input }) {
      const ccxt = require("ccxt"),
        log = require("ololog").noLocate, // npm install ololog
        fs = require("fs"),
        // the numWorkers constant defines the number of concurrent workers
        // those aren't really threads in terms of the async environment
        // set this to the number of cores in your CPU * 2
        // or play with this number to find a setting that works best for you
        numWorkers = 8;

      (async () => {
        // make an array of all exchanges
        const exchanges = ccxt.exchanges

          // filter coinmarketcap and theocean
          // coinmarketcap isn't really an exchange
          // theocean requires web3 dependencies to be installed

          .filter((id) => !["coinmarketcap", "theocean"].includes(id))

          // instantiate each exchange and save it to the exchanges list

          .map(
            (id) =>
              new ccxt[id]({
                enableRateLimit: true,
              })
          );

        // the worker function for each "async thread"
        const worker = async function () {
          // while the array of all exchanges is not empty
          while (exchanges.length > 0) {
            // pop one exchange from the array
            const exchange = exchanges.pop();

            // check if it has the necessary method implemented
            if (exchange.has["fetchTickers"]) {
              // try to do "the work" and handle errors if any
              try {
                // fetch the response for all tickers from the exchange
                const tickers = await exchange.fetchTickers();

                // make a filename from exchange id
                const filename = exchange.id + ".json";

                // save the response to a file
                fs.writeFileSync(filename, JSON.stringify({ tickers }));

                // print out a message on success
                log.green(exchange.id, "tickers saved to", filename);
              } catch (e) {
                // in case of error - print it out and ignore it further
                log.red(e.constructor.name, e.message);
              }
            } else {
              log.red(exchange.id, "has['fetchTickers'] = false");
            }
          }
        };

        // create numWorkers "threads" (they aren't really threads)
        const workers = [...Array(numWorkers)].map((_) => worker());

        // wait for all of them to execute or fail
        return await Promise.all(workers).then(() => {
          log("Done!");
          return input;
        });
      })();
      return {
        greeting: input,
      };
    }),
  // getPrices: publicProcedure
  //   .input(z.object({ text: z.string().nullish() }).nullish())
  //   .query(({ input }) => {
  //     console.log(input);
  //     // async resolve({ input }) {
  //     console.log(input);
  //     const { method } = req;
  //     const symbol = "BTC/USD";
  //     const exchanges = ["coinbasepro", "gemini", "kraken"];
  //     let markets = [];

  //     const marketz = exchanges.map(async (id) => {
  //       switch (method) {
  //         case "GET":
  //           await res.status(200).json(fetchTickers(symbol));
  //           break;
  //         case "POST":
  //           const { todo, completed } = req.body;
  //           markets.push({
  //             id: markets.length + 1,
  //             todo,
  //             completed,
  //           });
  //           await res.status(200).json(markets);
  //           break;
  //         default:
  //           await res.setHeader("Allow", ["GET", "POST"]);
  //           await res.status(405).end(`Method ${method} Not Allowed`);
  //           break;
  //       }
  //     });

  //     marketz;

  //     return markets;
  //     // },
  //   }),
});
