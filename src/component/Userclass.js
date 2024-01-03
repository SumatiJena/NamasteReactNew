import React from "react";
class Userclass extends React.Component{
    constructor(props){
        super(props)
        this.state={
            count:0,
            count2:2,
        }
    }

    render(){
        return(
            <>
            <h1>Name:{this.props.name}</h1>
            <h3>Location:{this.props.location}</h3>
            <button onClick={()=>this.setState({
                count:this.state.count+1
            
            })}>click</button>
            </>
        )
    }
}
export default Userclass;