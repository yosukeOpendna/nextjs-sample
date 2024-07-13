import Image from "next/image";
import BBSCard from "./BBSCard";
import { BBSData } from "../types/types"; // BBSData 型をインポート
interface BBSDataProps {
  bbsAllData: BBSData[];
}
const BBSCardList = ({ bbsAllData }: BBSDataProps) => {
  // BBSData[] 型を使用
  return (
    <div className="grid lg:grid-cols-3 px-4 py-4 gap-4">
      {bbsAllData.map((bbsData: BBSData) => (
        <BBSCard key={bbsData.id} bbsData={bbsData} />
      ))}
    </div>
  );
};

export default BBSCardList;
