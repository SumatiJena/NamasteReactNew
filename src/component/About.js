import Userclass from "./Userclass";
import React from "react";
class About extends React.Component{
    constructor(props){
        super(props)
        console.log("constructor called")
        this.state={
            details:{
                name:"domiName",
                location:"domiLoaction",
            }
        }
    }
    async componentDidMount(){
      const data= await fetch("https://api.github.com/users/akshaymarch7");
      const jsonData= await data.json();
      this.setState({
        details:jsonData
      })
      console.log("component didMount called");
    }
    componentDidUpdate(){
        console.log("component did update called");
    }
    componentWillUnmount(){
        console.log("component Willmount is called");
    }
   render(){
    console.log("Render called");
    return (
        <>
       <Userclass name={this.state.details.name} location={this.state.details.location} child={1}/>
       <h1>{this.state.name}</h1>
        </>
    )
   }
}
export default About;
