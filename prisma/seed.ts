import { prisma } from "../src/server/db/client";
import ccxt from "ccxt";
import log from "ololog";

const symbol = "BTC/USD";
const exchanges = ["coinbasepro", "gemini", "kraken"];

async function main() {
  console.log("main func");

  const fetchTickers = async (symbol: string) => {
    const result = await Promise.all(
      exchanges.map(async (id: string): Promise<ccxt.Exchange> => {
        const CCXT = ccxt as any; // Hack!
        const exchange = new CCXT[id]({
          enableRateLimit: true,
        }) as ccxt.Exchange;
        const ticker = await exchange.fetchTicker(symbol);
        const exchangeExtended = exchange.extend(
          { exchange: id },
          ticker
        ) as ccxt.Exchange;
        return exchangeExtended;
      })
    );
    log(result);
  };

  fetchTickers(symbol);
  // prisma.user.create({})
  let ccxt = require("ccxt");

  function func1() {
    let binance = ccxt.binance();
    let stat_list = binance.fetchTicker("BTC/USDT");
    console.log("Binance", stat_list["bid"], stat_list["ask"]);
  }

  function func2() {
    let coinbase = ccxt.coinbase();
    let stat_list = coinbase.fetchTicker("BTC-USD");
    console.log("Coinbase", stat_list["bid"], stat_list["ask"]);
  }

  function func3() {
    let ftx = ccxt.ftx();
    let stat_list = ftx.fetchTicker("BTC/USDT");
    console.log("FTX", stat_list["bid"], stat_list["ask"]);
  }

  function func4() {
    let kraken = ccxt.kraken();
    let stat_list = kraken.fetchTicker("BTC/USDT");
    console.log("Kraken", stat_list["bid"], stat_list["ask"]);
  }

  function func5() {
    let kucoin = ccxt.kucoin();
    let stat_list = kucoin.fetchTicker("BTC/USDT");
    console.log("Kucoin", stat_list["bid"], stat_list["ask"]);
  }
  func1();
  if (require.main === module) {
    console.log("help");
    // func1();
    // func2();
    // func3();
    // func4();
    // func5();
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
  });
