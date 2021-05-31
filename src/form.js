import React from "react";
import REACT from "react";
import App from "./App";
export default function 
class MyForm extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        menu:'About'
    };
    
}
render(){
    return (
    <form>
    <select value={this.state.menu}>
    <option value="Projects">Projects</option>
    <option value="About"> About</option>
    <option value="Portfolio">Portfolio</option>
    </select> 
    </form>
    );
}
}

export default myForm