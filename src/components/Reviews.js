function Reviews(props) {
    return (
        <div className="reviews" id={`reviews-${props.reviews}`}>
            <h4>Reviews</h4>
            <h3>
                {props.reviews}
            </h3>
        </div>
    )
}

export default Reviews