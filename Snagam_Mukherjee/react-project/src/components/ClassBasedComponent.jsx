
import { Component } from "react"
class ClassBasedComponent extends Component{
    //state
    state={
        showText:false
    }

    handleClick=()=>{
        console.log("button clicked");
        this.setState({
            showText:!this.state.showText
        })
    }


    //ComponentDidMount
    //ComponentDidUpdate
    //ComponentWillUnmount

    componentDidMount(){
        console.log("Component did mount called");
        
    }
   
    render(){

        console.log(this.state.showText);
        
        return(
            <>
                {this.state.showText? <h1>Class Based Component</h1>:null}
               
                <button onClick={this.handleClick}>Toggle text</button>
            </>
        )
    }
}

export default ClassBasedComponent;