//create.js
import React, { Component } from 'react';
import axios from 'axios';
import Message from './Message.js'

class Create extends Component {

    constructor() {
        super();
        this.state = {
            name: "",
            godOf: "",
            children: "",
            powers: "",
            godImage: "",
            userID: "",
            message: ""
        };
        this.update = this.update.bind(this);
        this.handleInputName = this.handleInputName.bind(this);
        this.handleInputGodOf = this.handleInputGodOf.bind(this);
        this.handleInputChildren = this.handleInputChildren.bind(this);
        this.handleInputPowers = this.handleInputPowers.bind(this);
        this.handleInputGodImage = this.handleInputGodImage.bind(this);

    }

    handleInputName = (event) => {
        this.setState({name:event.target.value});
    }

    handleInputGodImage = (event) => {
        this.setState({godImage:event.target.value});
    }

     handleInputGodOf = (event) => {
        this.setState({godOf:event.target.value});
    }

    handleInputChildren = (event) => {
        this.setState({children:event.target.value});
    }

    handleInputPowers = (event) => {
        this.setState({powers:event.target.value});
    }

     update = (event) =>{
        axios({
            method:'post',
            url: 'http://localhost:8081/Solo-Project/api/god/createGod',
            data: {
                name: this.state.name,
                godOf: this.state.godOf,
                children: this.state.children,
                powers:this.state.powers,
                godImage: this.state.godImage
            }
        })
        .then(response => {
            this.setState({ 
                message: response.data.message
            })
            console.log(this.state.godRace)
            alert(this.state.message);
        });

    }

    render(){
        return(
            <div className = "Create">
                <form className = "Create-Form">
                    <br></br>
                    <input type="text" placeholder="Name" value={this.state.name} onChange={(this.handleInputName)}></input>
                    <br></br>
                    <input type="text" placeholder="God Of" value={this.state.godOf} onChange={(this.handleInputGodOf)}></input>
                    <br></br>
                    <input type="text" placeholder="Children" value={this.state.children} onChange={(this.handleInputChildren)}></input>
                    <br></br>
                    <input type="text" placeholder="Powers" value={this.state.powers} onChange={(this.handleInputPowers)}></input>
                    <br></br>
                    <input type="text" placeholder="URL Image" value={this.state.godImage} onChange={(this.handleInputGodImage)}></input>
                    <br></br>
                    <input type="button" value="Create" onClick={this.update} id = "create-God-Button"></input>
                </form>
            </div>  
    
        );
    }
}
export default Create;