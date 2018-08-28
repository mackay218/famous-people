import React, { Component } from 'react';

class Star extends Component{
    
    constructor() {
        super();

        this.state = {star: {}};

    }
    
    handleChange = (event) => {
        let star = this.state.star;
        let name = event.target.name;
        let value = event.target.value;
    
        star[name] = value;
       
        this.setState({star});
    }
    
    saveStar = () => {
        console.log(this.state.star);
    } 

    render(){
        return(
            <div className="starContainer"> 
                <label for="#starName">Star:</label>
                <input name="name" id="starName" type="text" onChange={this.handleChange}></input>
                <label for="#roleName">Role:</label>
                <input name="role" id="roleName" type="text" onChange={this.handleChange}></input>
                <button onClick={this.saveStar}>Submit</button>
                <br/>
                {this.state.star.name} is famous for {this.state.star.role}
                
            </div>
        );
    }
}

export default Star;