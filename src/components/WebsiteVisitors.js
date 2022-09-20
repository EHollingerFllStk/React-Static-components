function WebsiteVisitors(props) {
    return (
        <div className="visitors graphics" id={`visitors-${props.visitorNum}`}>
            <h4>Website Visitors</h4>
            <h3>{props.visitorNum}</h3>
            <div class="box"></div>
        </div>
    )
}

export default WebsiteVisitors