import Image from "next/image";
import BBSCard from "./BBSCard";

const BBSCardList = () => {
  return (
    <div className="grid lg:grid-cols-3 px-4 py-4 gap-4">
      <BBSCard />
      <BBSCard />
      <BBSCard />
    </div>
  );
};

export default BBSCardList;
