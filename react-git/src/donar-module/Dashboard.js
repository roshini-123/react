import react from "react";
import { CreditCard } from "lucide-react";



const DashboardObj = () => {
    return(
        <div className="h-80 bg-gradient-to-br from-blue-500 to-violet-500 rounded-3xl">
            <div className="flex flex-row mt-8 ml-4">
                <CreditCard className="w-5 h-5 text-white" />
                <p>Master Card ****0469</p>
            </div>
            <div className="flex flex-row">
                <div className="text-white">
                    <h1>$9.75</h1>
                    <p>Contributions This Month</p>
                </div>
                <div className="items-right text-white">
                    <h1>$19.75</h1>
                    <p>All Time Total</p>
                </div>

            </div>
            <hr className="text-white"></hr>
            <div className="flex flex-row">
                <div>
                    <h1>$19.75</h1>
                    <p>Round-Up Donations</p>
                </div>
                <div className="text-white">
                    <h1>$0.00</h1>
                    <p className="items-left">Sponsor Rewards</p>
                </div>

            </div>

        </div>
    )
}

export default DashboardObj;