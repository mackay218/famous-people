import React, { Component } from 'react';

class Star extends Component{
    
    constructor() {
        super();

        this.state = {name: '' , role: ''};

    }
    
    handleNameChange = (event) => {
        this.setState({ name: event.target.value});
       
    }
    
    handleRoleChange = (event) => {
        this.setState({ role: event.target.value});
        
    }

    saveStar = () => {
        console.log(this.state);
    } 

    render(){
        return(
            <div className="starContainer"> 
                <label for="#starName">Star:</label>
                <input id="starName" type="text" onChange={this.handleNameChange}></input>
                <label for="#roleName">Role:</label>
                <input id="roleName" type="text" onChange={this.handleRoleChange}></input>
                <button onClick={this.saveStar}>Submit</button>
                <br/>
                {this.state.name} is famous for {this.state.role}
                
            </div>
        );
    }
}

export default Star;