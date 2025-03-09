import Sidebar from "../components/sidebar"
import Navbar from "../components/navbar"

export default function Home() {
  return (
    <div className="flex flex-row w-full gap-2">
      <div className="w-1/5">
        <Sidebar/>
      </div>
      <div className="w-4/5">
        <Navbar/>
      </div>
    </div>
  );
}
