import LogoTWH from "../assets/photo/twh.png"
import { AiOutlineDashboard } from "react-icons/ai";
import { GrSchedules } from "react-icons/gr";
import { MdCoPresent } from "react-icons/md";
import { GrScorecard } from "react-icons/gr";
import { LiaMoneyBillWaveSolid } from "react-icons/lia";

export default function Sidebar(){
    return(
        <div className="flex flex-col w-full gap-8 pt-12 px-8 bg-blue-200 pb-18 rounded-br-lg">
            <div className="flex flex-col items-center gap-4 w-full">
                <img src={LogoTWH.src} alt="Tut Wuri Handayani" className="w-24 h-24" />
                <span className="font-semibold">SMA BUNGA MATAHARI</span>
            </div>
            <div className="flex flex-col pl-4">
                <button className="flex cursor-pointer gap-2 items-center hover:bg-blue-500 hover:text-white rounded-lg p-2">
                    <AiOutlineDashboard className="text-xl"/>
                    <span>Dashboard</span>
                </button>
                <button className="flex cursor-pointer gap-2 items-center hover:bg-blue-500 hover:text-white rounded-lg p-2">
                    <GrSchedules className="text-xl"/>
                    <span>Jadwal Pelajaran</span>
                </button>
                <button className="flex cursor-pointer gap-2 items-center hover:bg-blue-500 hover:text-white rounded-lg p-2">
                    <MdCoPresent className="text-xl"/>
                    <span>Kehadiran</span>
                </button>
                <button className="flex cursor-pointer gap-2 items-center hover:bg-blue-500 hover:text-white rounded-lg p-2">
                    <GrScorecard className="text-xl"/>
                    <span>Nilai</span>
                </button>
                <button className="flex cursor-pointer gap-2 items-center hover:bg-blue-500 hover:text-white rounded-lg p-2">
                    <LiaMoneyBillWaveSolid className="text-xl"/>
                    <span>Biaya Sekolah</span>
                </button>
            </div>
        </div>
    )
}