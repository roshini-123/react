import react from "react";
import { CreditCard } from "lucide-react";
import { FaQuestionCircle } from "react-icons/fa";




const DashboardObj = () => {
    return(
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-7 pt-5">
             <div className="col-span-1 lg:col-span-3 h-auto bg-gradient-to-br from-blue-500 to-violet-500 rounded-3xl  p-8">
                <div className="flex items-center gap-2 text-white pb-6">
                    <CreditCard/>
                    <p>Mastercard •••• 0469</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 text-white gap-6">
                    <div className="gap-2">
                        <h1 className="text-5xl">$9.75</h1>
                        <p className="pt-2">Contributions This Month</p>
                    </div>
                    <div className="flex flex-col items-end">
                        <h1 className="text-3xl">$19.75</h1>
                        <p className="mt-2">All Time Total</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6">
                  <div>
                    <h1 className="text-2xl">$19.75</h1>
                    <p className="text-sm">Round-Up Donations</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                        <h1 className="text-2xl">$0.00</h1>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-help w-4 h-4 text-blue-200"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg>
                    </div>
                    <p className="text-sm">Sponsor Rewards</p>
                  </div>
                
                </div>
                </div>
            <div className="col-span-1 lg:col-span-2 rounded-3xl border border-slate-700 bg-slate-800 p-8">
                <div className="flex justify-between mb-4 text-white">
                    <h1 className="text-lg">Monthly Goal</h1>
                    <span className="text-sm text-blue-400 hover:text-blue-300 font-medium">Edit</span>
                </div>
                <div>
                    <div className="text-4xl text-white">
                        $9
                        <span className="text-2xl text-slate-500">  / $10</span>
                    </div>
                    <div className="flex gap-2 rounded-full border border-emerald-500/20 w-fit px-3 py-1.5 mt-4  bg-emerald-500/10 text-sm text-emerald-400 items-center">
                        <div className="rounded-full bg-emerald-500 w-1.5 h-1.5"></div>
                        <span>90% Complete</span>
                    </div>
                </div>
                <div className="rounded-full mt-3 h-3 bg-slate-700 overflow-hidden">
                    <div className="bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 h-full rounded-full" style={{width:"90%"}}></div>
                </div>
                <div className="text-sm text-slate-400 mt-3">$1.00 to reach your goal</div>
                <div className="flex gap-2 pt-4 border-t border-slate-700 mt-5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-target w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
                    <p className="text-emerald-500">You're exceeding your pace this month! Increasing your monthly goal, even by a small amount, fuels more support for your community.</p>
                </div>
            </div>
            <div className="col-span-1 lg:col-span-3 rounded-3xl border border-white bg-slate-800 p-8">
                <div className="flex justify-between">
                    <div className="text-white text-lg flex gap-2 items-center mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart w-5 h-5 text-pink-400"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
                        <h3>Your Impact</h3>
                        </div>
                    <span className="text-blue-400 hover:text-blue-300">View details</span>
                </div>
                <div className="grid grid-cols-4 gap-4 h-[40%]">
                    <div className="border border-white bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl p-6
                    text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all items-center">
                        <h1 className="text-4xl mb-2">3</h1>
                        <p>Months Active</p>
                    </div>
                   <div className="border border-white bg-gradient-to-br from-emerald-600 to-teal-700 rounded-xl p-6 
                    text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all">
                        <h1 className="text-4xl mb-2">$19.75</h1>
                        <p>Total Donated</p>
                    </div>
                    <div className="border border-white  bg-gradient-to-br from-violet-600 to-purple-700 rounded-xl p-6
                    text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all">
                        <h1 className="text-4xl mb-2">Top 30%</h1>
                        <p>Among Donors</p>
                    </div>
                    <div className="border border-white bg-gradient-to-br from-rose-600 to-pink-700
                    rounded-xl p-6
                    text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all">
                        <h1 className="text-4xl mb-2">47</h1>
                        <p>Transactions</p>
                    </div>

                </div>
                <div></div>
                <div></div>
            </div>
            <div className= "col-span-1 lg:col-span-2 rounded-3xl border border-white bg-slate-800">cjewnejnewjnwjn</div>
            <div className="col-span-1 lg:col-span-5 rounded-3xl border border-white bg-slate-800">cjewnejnewjnwjn</div>
        </div>
      
    )
}

export default DashboardObj;