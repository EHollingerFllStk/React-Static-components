function SentimentAnalysis(props) {
    return (
        <div className="sentiment" id={`sentiment-${props.sentimentNum}`}>
            <h4>Sentiment Analysis</h4>
            <h3>{props.sentimentNum1}</h3>
            <h3>{props.sentimentNum2}</h3>
            <h3>{props.sentimentNum3}</h3>
        </div>
    )
}

export default SentimentAnalysis