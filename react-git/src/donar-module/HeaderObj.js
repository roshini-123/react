import react from "react";
import { Bell } from "lucide-react";


const HeaderObj = () => {
    return (
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
            <div className="text-white">
                <h1 className="text-2xl md:text-3xl font-semibold">Donor Dashboard</h1>
                <p className="text-slate-400 text-sm md:text-base">Welcome back, Alexx! Here's your giving overview.</p>
            </div>
            <div className="flex items-center gap-3 self-start md:self-auto">
                <button className="w-12 h-12 rounded-xl flex justify-center items-center bg-gray-700">
                     <Bell className="w-5 h-5 text-slate-200"/>
                </button>
                <button className="flex items-center gap-3 bg-gray-700 rounded-xl p-2 md:px-4">
                  <p className="text-white text-sm md:text-base">Alexx Thompson</p>
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-violet-500 flex justify-center items-center text-white font-medium">
                    AT
                  </div>
                </button>
                
            </div>
   
        </div>
    )

}

export default HeaderObj

