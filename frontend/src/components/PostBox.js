import React, { Component } from "react";

class PostBox extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {body, category, likes, createdAt} = this.props;
        var time = new Date(createdAt).toUTCString().slice(0, 26)
        return(
            <div>
                <h4>{body}</h4>
                <h4>{category}</h4>
                <h4>{likes}</h4>
                <h4>{time}</h4>
            </div>
        )
    }
}
export default PostBox;