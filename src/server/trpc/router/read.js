import { z } from "zod";
import { router, publicProcedure } from "../trpc";
// import { useQuery } from "react-query";
import ololog from "ololog";
import asTable from "as-table";
import ansicolor from "ansicolor";
// import * as ccxt from "ccxt";
var ccxt = require("ccxt");
import fs, { readFile } from "fs";
import readline from "readline";

export const readRouter = router({
  readPrices: publicProcedure
    .input(z.object({ text: z.string().nullish() }).nullish())
    .query(({ input }) => {
      console.log(input);
      const fs = require("fs");
      const log = require("ololog").configure({ locate: false });
      let answerArray = [];

      //   let filterFunc = (() => {
      //     while ((m = blockRegex.exec(coinData)) !== null) {
      //       // This is necessary to avoid infinite loops with zero-width matches
      //       if (m.index === blockRegex.lastIndex) {
      //         blockRegex.lastIndex++;
      //       }

      //       // The result can be accessed through the `m`-variable.
      //       m.forEach((match, groupIndex) => {
      //         console.log(`Group ${groupIndex} match: ${match}`);
      //         answerArray.push([JSON.stringify(groupIndex), JSON.stringify(match)]);
      //       });
      //     }
      //     return answerArray;
      //   })();

      //   //   function readAndParse() {
      //   //     let coins = [];
      //   //     let exchanges = [];
      //   //     const readStream = fs.createReadStream("./coinbase.json", "utf-8");
      //   //     let rl = readline.createInterface({ input: readStream });
      //   //     rl.on("line", (line) => {
      //   //       const coin = line.split(', "')[1];
      //   //       // const geo_count = line.split(',')[3];
      //   //       // if (year === '2020' && geo_count >200) {
      //   //       //     counter++
      //   //       // }
      //   //       console.log(line.split(" , "), "gay line");
      //   //       coins.push(coin);
      //   //     });
      //   //     rl.on("error", (error) => console.log(error.message));
      //   //     rl.on("close", () => {
      //   //       console.log(`${coins} are some stupid coins in this stupid array`);
      //   //       console.log("Data parsing completed");
      //   //     });
      //   //   }
      //   //   readAndParse();
      //   return filterFunc;

      async function firstFunction(_callback) {
        async function readAndParse() {
          let m;
          let id = "bitget";
          let coinJson = fs.readFile(`bitget.json`, "utf8", (err, data) => {
            if (err) throw err;
            //   console.log(data);
            return data;
          });
          // console.log(coinJson)
          // let coinData = await JSON.parse(coinJson);
          const blockRegex = /(?:\s*(?:\"([^\"]*)\"|([^,]+))\s*,?)+?/gm;
          let counter = 0;
          const readStream = fs.createReadStream(`bitget.json`, "utf8");
          let rl = readline.createInterface({ input: readStream });

          rl.on("line", (line) => {
            // const year = line.split(',')[2];
            // const geo_count = line.split(',')[3];
            // if (year === '2020' && geo_count >200) {
            //     counter++
            // }
            counter++;
            while ((m = blockRegex.exec(line)) !== null) {
              // This is necessary to avoid infinite loops with zero-width matches
              if (m.index === blockRegex.lastIndex) {
                blockRegex.lastIndex++;
              }

              // The result can be accessed through the `m`-variable.
              m.forEach((match, groupIndex) => {
                console.log(answerArray.length, "length");
                // console.log(m);
                // console.log(`Group ${groupIndex} match: ${match}`);
                answerArray.push([
                  JSON.stringify(groupIndex),
                  JSON.stringify(match),
                ]);
              });
            }
            if ((m = blockRegex.exec(line)) === null) {
              console.log(answerArray.length, "end length");
              return answerArray;
            }
          });

          rl.on("error", (error) => console.log(error.message));
          rl.on("close", () => {
            console.log(
              `About ${counter} areas have geographic units of over 200 units in 2020`
            );
            console.log("Data parsing completed");
            return answerArray;
          });

          return answerArray;
        }
        readAndParse();
        _callback;
      }
      const secondFunction = async () => {
        firstFunction(() => {
          console.log(answerArray.length, "im done, end length");
          return answerArray;
        });
        console.log("idk");
        // result;
        // // do something else here after firstFunction completes
        // return answerArray;
        return answerArray;
      };
      console.log((() => secondFunction())(), "second function init");

      // ///////////////////////////////// /////////////////////////////

      //   async function firstFunction(_callback) {
      //     let m;
      //     let id = "bitget";
      //     let coinJson = fs.readFile(`bitget.json`, "utf8", (err, data) => {
      //       if (err) throw err;
      //     //   console.log(data);
      //       return data;
      //     });
      //     // console.log(coinJson)
      //     let coinData = await JSON.parse(coinJson);
      //     const blockRegex = /(?:\s*(?:\"([^\"]*)\"|([^,]+))\s*,?)+?/gm;
      //     // do some asynchronous work
      //     while ((m = blockRegex.exec(coinData)) !== null) {
      //       // This is necessary to avoid infinite loops with zero-width matches
      //       if (m.index === blockRegex.lastIndex) {
      //         blockRegex.lastIndex++;
      //       }

      //       // The result can be accessed through the `m`-variable.
      //       m.forEach((match, groupIndex) => {
      //         // console.log(m);
      //         console.log(`Group ${groupIndex} match: ${match}`);
      //         answerArray.push([
      //           JSON.stringify(groupIndex),
      //           JSON.stringify(match),
      //         ]);
      //       });
      //     }
      //     (async () => {
      //       _callback;
      //     })();

      //     return answerArray;
      //     // and when the asynchronous stuff is complete
      //   }
      //   const secondFunction = async () => {
      //     const result = await firstFunction(secondFunction());
      //     console.log(result, "idk");
      //     // do something else here after firstFunction completes
      //     return answerArray;
      //   };
      //   return answerArray;

      //   function secondFunction() {
      //     // call first function and pass in a callback function which
      //     // first function runs when it has completed
      //     let callback = () => {
      //       console.log("first function completed");
      //       return answerArray;
      //     };

      //     firstFunction(function () {
      //       console.log("huzzah, I'm done!");
      //     });
      //   }
      //   return ;
      return answerArray;
    }),
  // getAll: publicProcedure.query(({ ctx }) => {
  //   return ctx.prisma.marketsRouter.findMany();
  // }),
  getCum: publicProcedure
    .input(z.object({ text: z.string().nullish() }).nullish())
    .query(async ({ input }) => {
      const log = require("ololog").configure({ locate: false });
    }),
});
