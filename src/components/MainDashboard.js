import Dashboard from "./Dashboard"
import Reviews from "./Reviews"
import AverageRating from "./AverageRating"
import SentimentAnalysis from "./SentimentAnalysis"
import WebsiteVisitors from "./WebsiteVisitors"

function MainDashboard(props) {
    return (
        <div id="maindash">
            <Dashboard />
            <Reviews reviews="1281"/>
            <AverageRating avg="4.6"/>
            <SentimentAnalysis sentimentNum1="960" sentimentNum2="122" sentimentNum3="321"/>
            
            <WebsiteVisitors visitorNum="821"/>
        </div>
    )
}

export default MainDashboard
