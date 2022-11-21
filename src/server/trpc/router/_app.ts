import { router } from "../trpc";
import { authRouter } from "./auth";
import { exampleRouter } from "./example";
import { seedRouter } from "./seed";
import { marketsRouter } from "./market";
import { subMarketRouter } from "./subMarketRouter";
import { readRouter } from "./read";

export const appRouter = router({
  // seed: seedRouter,
  example: exampleRouter,
  //
  auth: authRouter,
  //
  markets: marketsRouter,

  readMarkets: readRouter,
  //subMarkets.getSubs
  subMarkets: subMarketRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
