import { trpc } from "../utils/trpc";
import { useEffect, useState } from "react";

export default function MarketComp(props: any): any {
  let [active, setActive] = useState<any>([]);
  let [loaded, setLoaded] = useState<boolean>(false);
  // console.log(props.activeMarkets, "props");

  useEffect(() => {
    // console.log("new effect");
    if (!active.length) {
      setActive(props.activeMarkets);
    } else if (active.length) {
      let aCopy = active.map((s: any) => s);
      let pCopy = props.activeMarkets.map((d: any) => d);
      // console.log(aCopy, pCopy, "aCopy");
      if (aCopy.length !== pCopy.length) {
        setActive(props.activeMarkets);
      } else {
        console.log("same length");
      }
    }
  }, []);
  useEffect(() => {}, []);

  let loadItAll = async () => {
    // console.log(active, "based");
    let names: any = [];
    active.forEach((w: any) => {
      // console.log(Object.values(w)[0], "gayer");
      let name: any[] = Object.values(w).map((d) => d);
      let myName: any[] = name[0].map((d: any) => d);
      // console.log(Array.isArray(myName), myName[0], "my name");
      names.push(myName[0]);
    });
    console.log(names.toString(), "names");
    let newQuery: any = trpc.subMarkets.getCum.useQuery(
      { text: names.toString() },
      {
        enabled: false,
        staleTime: Infinity, //never refetch
      }
    );
    try {
      trpc.subMarkets.getCum.useQuery({ text: names.toString() }, newQuery);
    } catch (e) {
      console.log(e, "error");
    } finally {
      console.log("loaded");

      if (loaded == false) {
        // setLoaded(!loaded);
        setLoaded(true);
      } else {
        return;
      }
    }

    // console.log(newQuery, "new query");
    // console.log(newQuery.data?.greeting, "cum data");
    // if (loaded) {
    //   console.log("loaded");
    //   setLoaded(!loaded);
    // }
  };
  loadItAll();

  return (
    <div>
      <div>
        {active.map((i: any, index: number) => {
          console.log(i[index][0], "i");
          return (
            <div key={index}>
              <h1 className="text-3xl text-white">{i[index][0]}</h1>
              <div className="flex flex-grow flex-row">
                <div className="flex flex-grow flex-row text-white">
                  {Object.keys(i[index][1].currencies).map((a) => {
                    return <div className="flex ">{a.toString()}, </div>;
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
