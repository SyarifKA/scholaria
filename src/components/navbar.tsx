import { CgProfile } from "react-icons/cg";
import { IoMdNotifications } from "react-icons/io";

export default function Navbar(){
    return(
        <div className="w-full flex items-center py-2 px-12 rounded-bl-lg justify-between h-12 drop-shadow-[0_3px_10px_rgba(0,0,0,0.15)] bg-green-300">
            <div>
                <span className="font-bold text-2xl text-yellow-500">Scholaria</span>
            </div>
            <div className="flex gap-6 items-center justify-between">
                <button className="rounded-full cursor-pointer flex items-center justify-center p-2 bg-gray-200 hover:bg-gray-300">
                    <IoMdNotifications className="text-2xl"/>
                </button>
                <div className="flex gap-2 items-center py-2">
                    <button className="rounded-full cursor-pointer flex items-center p-2 justify-center bg-gray-200 hover:bg-gray-300">
                        <CgProfile className="text-2xl" />
                    </button>
                    <div className="flex text-sm flex-col">
                        <span>Johny</span>
                        <span>122366672</span>
                    </div>
                </div>
            </div>
        </div>
    )
}