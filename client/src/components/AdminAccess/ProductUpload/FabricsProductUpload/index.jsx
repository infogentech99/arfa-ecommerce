import CottonProductUpload from "./cotton";
//import HandbagProductUpload from "./handbag";
import ChiffonProductUpload from "./chiffon";
import NetProductUpload from "./net";
import LawnProductUpload from "./lawn";
// import SunglassProductUpload from "./sunglass";
// import WatchProductUpload from "./watches";
//import VelvetProductUpload from "./velvetClothing";
import VelvetProductUpload from "./velvetClothing";

const FabProductUpload = () => {
  return (
    <section className="flex flex-col gap-2 p-3 sm:px-5 bg-gray-200 rounded-lg w-full sm:w-4/5">
      <h2 className="text-lg md:text-xl lg:text-2xl font-medium ml-3 mb-1">
    Fabrics
      </h2>

      {/* Render product upload components for each caegory */}
      <LawnProductUpload />
      <VelvetProductUpload />
      <ChiffonProductUpload />
      <CottonProductUpload />
      <NetProductUpload />
      {/* <WatchProductUpload />
      <HandbagProductUpload />
      <SunglassProductUpload /> */}
    </section>
  );
};

export default FabProductUpload;
