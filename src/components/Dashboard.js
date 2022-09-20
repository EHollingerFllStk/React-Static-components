import Widget from "./Widget"
import Reviews from "./Reviews"
import Customers from "./Customers"
import OnlineAnalysis from "./OnlineAnalysis"
import Settings from "./Settings"

function Dashboard() {
    return (
        <div id="dashboard">
            <div class="center">
            <h4>Dashboard</h4>
            <Widget/>
            <Reviews/>
            <Customers/>
            <OnlineAnalysis/>
            <Settings/>
            </div>
        </div>
    )
}

export default Dashboard