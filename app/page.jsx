import Model from "@/app/components/model/model";
import EboxData from "./components/data/eboxData";
import BpsData from "./components/data/bpsData";
import ChartView from "./components/charts/chart-view";

export default function Home() {
  return (
    <div className="">
      <div className="grid grid-cols-1 h-[850px] mb-2">
        <div className="relative">
          <Model />
          <ChartView />
        </div>
      </div>
      <div className="my-4 px-4">
        <h2 className="text-2xl underline text-white mb-2">
          Data from Ebox API
        </h2>
        <div className="grid grid-cols-3 text-white border-2 p-4">
          {/* <EboxData /> */}
        </div>
      </div>
      <div className="my-4 px-4">
        <h2 className="text-2xl underline text-white mb-2">
          Data from BPS Backend
        </h2>
        <div className="grid grid-cols-3 text-white border-2 p-4">
          {/* <BpsData /> */}
        </div>
      </div>
    </div>
  );
}
