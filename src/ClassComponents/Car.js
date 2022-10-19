import React from "react";

class Car extends React.Component{

    constructor(){
        super();
        this.state={
            name:'Maruti Suzuki',
            model:'TY850',
            color:'Red'
        }
      
    }

    //  React does not recommended componentWillMount method 
    // componentWillMount(){
    //     console.log("componentWillMount::: I run before render");
    // }

    componentDidMount(){
        console.log("componentDidMount::: I run after render");
    }

    shouldComponentUpdate(){
        console.log("shouldComponentUpdate::: me check karne aaya ki update hoga ya nhi...");
        return true;  // ByDefault: true hota hai
    }

    //  React does not recommended componentWillUpdate method 
    // componentWillUpdate(){
    //     console.log("componentWillUpdate::: I run before updation");
    // }

    componentDidUpdate(){
        console.log("componentDidUpdate::: I run after updation");
    }

    componentWillUnmount(){
        console.log("componentWillUnmount::: I run when component is about to removed");
    }

    changeCarData = () => {
         this.setState({
            name:'Farari',
            model:'GRE15',
            color:'Orange'
         })
    }
    
  render(){
    console.log("render::: I am inside the render method...");
    return(
        <>
          <h2>I have {this.props.totalCar} Car {this.state.name} , Model {this.state.model} and Color is {this.state.color} and {this.props.secondCarColor}</h2>
          <br /><br />
          <button onClick={this.changeCarData}>Change Data</button> 

        </>
    )
  }
}

export default Car; 