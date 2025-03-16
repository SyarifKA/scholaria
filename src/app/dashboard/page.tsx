import Image from 'next/image';
import Student from "../../assets/photo/student.jpg"
import Sidebar from "../../components/sidebar"
import Navbar from "../../components/navbar"
import { FaStar } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { SiGoogleclassroom } from "react-icons/si";
import { MdEmojiPeople } from "react-icons/md";
import { BsFillPieChartFill } from "react-icons/bs";

export default function Login(){
    return(
        <div className="flex flex-row w-full gap-2">
      <div className="w-1/5">
        <Sidebar/>
      </div>
      <div className="w-4/5">
        <Navbar/>
        <div className="my-4 ml-4">
          <span className="font-bold text-3xl">Dashboard</span>
        </div>
        <div className="flex justify-around">
          <div className="bg-purple-400 flex flex-col p-4 gap-2 rounded-lg">
            <div className="flex items-center gap-2 text-white border-b-2 pb-2 border-white">
              <div className="bg-[rgba(255,255,255,0.3)] flex p-2 rounded-lg">
                <FaStar/>
              </div>
              <span className="font-semibold">NILAI RATA-RATA</span>
            </div>
            <div className="flex items-center justify-around">
              <span className="font-semibold text-xl text-white">7,5</span>
              <div className="text-yellow-500 flex items-center">
                <IoIosStar/>
                <IoIosStar/>
                <IoIosStar/>
                <IoIosStar/>
                <IoIosStarHalf/>
              </div>
            </div>
            <div className="flex items-center gap-2 text-white">
              <FaLongArrowAltRight/>
              <span>Tetap dari semester lalu</span>
            </div>
          </div>
          <div className="bg-purple-400 flex flex-col p-4 gap-2 rounded-lg">
            <div className="flex items-center gap-2 text-white border-b-2 pb-2 border-white">
              <div className="bg-[rgba(255,255,255,0.3)] flex p-2 rounded-lg">
                <FaMoneyBillTransfer/>
              </div>
              <span className="font-semibold">TAGIHAN</span>
            </div>
            <div className="flex items-center justify-around">
              <span className="font-semibold text-xl text-white">RP 250.000</span>
              {/* <div className="text-yellow-500 flex items-center">
                <IoIosStar/>
                <IoIosStar/>
                <IoIosStar/>
                <IoIosStar/>
                <IoIosStarHalf/>
              </div> */}
            </div>
            <div className="flex items-center gap-2 text-white">
              {/* <FaLongArrowAltRight/> */}
              <span>Total tunggakan terakhir</span>
            </div>
          </div>
          <div className="bg-purple-400 flex flex-col p-4 gap-2 rounded-lg">
            <div className="flex items-center gap-2 text-white border-b-2 pb-2 border-white">
              <div className="bg-[rgba(255,255,255,0.3)] flex p-2 rounded-lg">
                <SiGoogleclassroom/>
              </div>
              <span className="font-semibold">KELAS</span>
            </div>
            <div className="flex items-center justify-around">
              <span className="font-semibold text-xl text-white">XI IPS 2</span>
              {/* <div className="text-yellow-500 flex items-center">
                <IoIosStar/>
                <IoIosStar/>
                <IoIosStar/>
                <IoIosStar/>
                <IoIosStarHalf/>
              </div> */}
            </div>
            <div className="flex items-center gap-2 text-white">
              {/* <FaLongArrowAltRight/> */}
              <span>Semester Ganjil</span>
            </div>
          </div>
          <div className="bg-purple-400 flex flex-col p-4 gap-2 rounded-lg">
            <div className="flex items-center gap-2 text-white border-b-2 pb-2 border-white">
              <div className="bg-[rgba(255,255,255,0.3)] flex p-2 rounded-lg">
                <MdEmojiPeople/>
              </div>
              <span className="font-semibold">KEHADIRAN</span>
            </div>
            <div className="flex items-center justify-around">
              <div className="text-3xl text-white">
                <BsFillPieChartFill/>
              </div>
              <span className="font-semibold text-xl text-white">85%</span>
              {/* <div className="text-yellow-500 flex items-center">
                <IoIosStar/>
                <IoIosStar/>
                <IoIosStar/>
                <IoIosStar/>
                <IoIosStarHalf/>
              </div> */}
            </div>
            <div className="flex items-center gap-2 text-white">
              {/* <FaLongArrowAltRight/> */}
              <span>Minimal kehadiran 85%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}