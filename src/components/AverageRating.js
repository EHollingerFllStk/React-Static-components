
function AverageRating(props) {
    return (
        <div className="avg" id={`avg-${props.avgNum}`}>
            <h4>Average Rating</h4>
            <h3>{props.avg}</h3>        </div>
    );
   }
   
   export default AverageRating;