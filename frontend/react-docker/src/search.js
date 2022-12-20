//search
import React, { Component } from 'react';
import axios from 'axios';
import God from './God.js';


class Search extends Component {

    constructor() {
        super();
        this.state = {
            gods: "",
            godID: "",
            name: "",
            godOf: "",
            children: "",
            powers: "",
            godImage: ""
        }
        this.update = this.update.bind(this);
        this.handleInputID = this.handleInputID.bind(this);
    }

    handleInputID(event) {
        this.setState({ godID: event.target.value }, () => {
        });

    }

    update = (event) => {
        axios({
            method: 'get',
            url: 'http://localhost:8081/Solo-Project/api/god/findGod/' + this.state.godID,
            responseType: 'json'
        }).then(response => {
            this.setState({ godID: response.data.godID });
            this.setState({ name: response.data.name });
            this.setState({ godOf: response.data.godOf });
            this.setState({ children: response.data.children });
            this.setState({ powers: response.data.powers });
            this.setState({ godImage: response.data.godImage })
            console.log(response.data);
        })
    }
    render() {
        return (
            <div className="Search">
                <div className="Search-Bar">
                    <form onSubmit={this.update} id = "Search-Form">
                        God :
                    <input id="text" type="text" onChange={(this.handleInputID)} id = "search-box-q"></input>
                        <input type="button" onClick={this.update} value="Find God" id="search-God-Button"></input>
                    </form>
                    ID: {this.state.godID}
                    <br></br>
                    Name: {this.state.name}
                    <br></br>
                    God Of: {this.state.godOf}
                    <br></br>
                    Children: {this.state.children}
                    <br></br>
                    Powers: {this.state.powers}
                    <br></br>
                </div>
                <div className="Display-Image">
                    Image: <img src={require("./" + this.state.godImage)} />
                </div>
            </div>
        );
    }
}
export default Search;