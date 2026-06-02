import react from "react";
import { Bell } from "lucide-react";


const HeaderObj = () => {
    return (
        <div className="flex flex-row flex-wrap justify-between border border-indigo-600 h-24">
            <div className="text-white">
                <h1 className="text-3xl">Donor Dashboard</h1>
                <p className="text-slate-400">Welcome back, Alexx! Here's your giving overview.</p>
            </div>
            <div className="flex flex-row justify-end gap-3 border border-purple-500 w-1/2">
                <button className="relative w-12 h-12 mt-3 border border-slate-500 rounded-2xl flex justify-center items-center bg-gray-700">
                     <Bell className="w-5 h-5 text-slate-200"/>
                </button>
                <button className="w-2/5 h-3/4 border border-slate-500 rounded-xl flex flex-row justify-center items-center gap-3 bg-gray-700">
                  <p className="text-white">Alexx Thompson</p>
                  <div className="w-12 h-12 border border-slate-500 rounded-2xl bg-gradient-to-br from-blue-500 to-violet-500 items-center text-white flex justify-center">
                    AT
                  </div>
                </button>
                
            </div>
   
        </div>
    )

}

export default HeaderObj

