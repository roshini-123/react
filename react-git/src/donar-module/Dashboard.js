import react from "react";
import { CreditCard } from "lucide-react";



const DashboardObj = () => {
    return(
        <div className="w-1/2 h-90 bg-gradient-to-br from-blue-500 to-violet-500 rounded-3xl p-5 border border-white">
            <div className="flex flex-row border border-black gap-3 items-center text-white h-20">
                <CreditCard className="w-5 h-5 " />
                <p>Master Card ****0469</p>
            </div>
            <div className="flex flex-row justify-between border border-black">
                <div className="text-white flex flex-col gap-3">
                    <h1 className="text-3xl">$9.75</h1>
                    <p>Contributions This Month</p>
                </div>
                <div className= "items-right text-white flex flex-col gap-3">
                    <h1 className="text-2xl">$19.75</h1>
                    <p>All Time Total</p>
                </div>

            </div>
            <hr className="text-white p-2 mt-3"></hr>
            <div className="flex flex-row  border border-black">
                <div className="flex-start border border-black">
                    <h1>$19.75</h1>
                    <p>Round-Up Donations</p>
                </div>
                <div className="text-white flex-center border border-black">
                    <h1>$0.00</h1>
                    <p >Sponsor Rewards</p>
                </div>

            </div>

        </div>
    )
}

export default DashboardObj;