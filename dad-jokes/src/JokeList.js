import React, { Component } from 'react'
import axios from "axios";
import "./JokeList.css"

class JokeList extends Component {
    static  defaultProps = {
        numJokesToGet: 10
    };
    constructor(props){
        super(props);
        this.state = { jokes: [] };
    }

    async componentDidMount() {
        let jokes = [];
        while(jokes.length < this.props.numJokesToGet) {
            let res = await axios.get("https://icanhazdadjoke.com/", {headers: {accept: "application/json"}});
            jokes.push(res.data.joke);
        }
       this.setState({ jokes: jokes });
    }

    render() {

        return (
            <div className="JokeList">
                <div className="JokeList-sidebar"> 
                <h1 className="JokeList-title">
                    <span>Dad</span> Jokes
                </h1>
                <img src="https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg" />
                <button className="JokeList-getMore">New Jokes</button>
                </div>
                <h1>Dad Jokes</h1>
                <div calssName="JokeList-Jokes">
                    {this.state.jokes.map(j => (
                        <div>{j}</div>
                    ))}
                </div>
            </div>
        )
    }
}

export default JokeList;
