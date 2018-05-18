import React, { Component } from "react";
import axios from "axios";
import PostBox from "./PostBox";
class Feeds extends React.Component {
    constructor() {
        super();
        this.state = {
            feeds: []
        }
    }
    componentDidMount() {
        axios
            .get('/api/posts/category')
            .then((res) => {
                console.log(res)
                this.setState({
                    feeds: res.data
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }
    render() {
        console.log(this.state.feeds)
        return (
            <div>
                <div className='container'>
                    <h1>Feeds</h1>
                    
                    {this.state.feeds.map((post) => {
                        return (

                            <div className='row'>
                            <br/>
                                <div className='col-sm-6 post'>
                                    <PostBox
                                        body={post.body}
                                        category={post.category}
                                        likes={post.likes}
                                        createdAt={post.createdAt}
                                    />
                                </div>
                                <div className='col-sm-6'>
                                </div>
                            </div>
                        )
                    }

                    )}

                </div>
            </div>
        )
    }
}

export default Feeds;