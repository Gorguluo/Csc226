//home
import React, { Component } from 'react';
import axios from 'axios';
import God from './God.js';


class Home extends Component {

    constructor(){
        super();
        this.state = {
            gods:""
        }
    }

    update = (event) =>{
        axios({
            method: 'get',
            url: 'http://localhost:8081/Solo-Project/api/god/getAllGods',
            responseType: 'json'
        }).then(response =>{
            this.setState({gods:response.data});
            console.log(response.data);
        })
    }
    render(){
        let norseGods = [];
        if(this.state.gods){
            for(let god of this.state.gods)
                norseGods.push(<God data = {god}/>);
        }
        return(
            <div className = "Home">
            <form onSubmit={this.update}>
                    <input type="button" value = "Get all Gods" id = "Gods-Button" onClick= {this.update} ></input>
                {norseGods}
            </form>
            </div>
        );
    }
}
export default Home;