//delete js
import React, { Component } from 'react';
import axios from 'axios';


class Delete extends Component {

    constructor(){
        super();
        this.state = {
            godID: "",
            message: ""
        }
        this.update = this.update.bind(this);
        this.handleInputID = this.handleInputID.bind(this);
    }

     handleInputID = (event) => {
        this.setState({godID:event.target.value});
    }

    update = (event) =>{
        axios({
            method:'delete',
            url: 'http://localhost:8081/Solo-Project/api/god/deleteGod/' + this.state.godID,
          data: {
              godID: this.state.godID
            }
        })
        .then(response => {
            this.setState({
                message: response.data.message
            })
            alert(this.state.message);
        });

    }

    render(){
        return(
            <div className = "Delete">
                    <form className = "Delete-Form">
                    <br></br>
                    <input type="text" placeholder="Delete God.." onChange={(this.handleInputID)} name="Delete" id = "Delete-Bar"></input>
                    <input type="button" value="Delete" onClick={this.update} id="delete-button"></input>
                    </form>
                </div>
        );
    }
}
export default Delete;