import Sidebar from "../components/sidebar"
import Navbar from "../components/navbar"
import { FaStar } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";

export default function Home() {
  return (
    <div className="flex flex-row w-full gap-2">
      <div className="w-1/5">
        <Sidebar/>
      </div>
      <div className="w-4/5">
        <Navbar/>
        <div className="my-4 ml-4">
          <span className="font-bold text-3xl">Dashboard</span>
        </div>
        <div className="flex">
          <div className="bg-purple-400 flex flex-col p-4 rounded-lg">
            <div className="flex items-center gap-2">
              <div className="bg-purple-200 flex p-2 rounded-lg">
                <FaStar/>
              </div>
              <span>NILAI RATA-RATA</span>
            </div>
            <div className="flex items-center justify-around">
              <span>7,5</span>
              <div className="text-yellow-500 flex items-center">
                <IoIosStar/>
                <IoIosStar/>
                <IoIosStar/>
                <IoIosStar/>
                <IoIosStarHalf/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
