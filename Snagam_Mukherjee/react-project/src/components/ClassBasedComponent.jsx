
import { Component } from "react"
class ClassBasedComponent extends Component{
    //state
    state={
        showText:false,
        changeColor:false,
        count:0,
        changeCountStyle:false
    }



    handleClick=()=>{
        console.log("button clicked");
        this.setState({
            showText:!this.state.showText,
            changeColor:!this.state.changeColor
        })
    }


    //ComponentDidMount
    //ComponentDidUpdate
    //ComponentWillUnmount

    componentDidMount(){
        console.log("Component did mount called");
        
        this.setState({
            showText:!this.state.showText,
            changeColor:!this.state.changeColor,
        });

    }

    componentDidUpdate(prevProps,prevState){
        console.log(prevState);
        
        if(prevState && prevState.count!==this.state.count && this.state.count===5 ){
            console.log(prevState.count, this.state.count);
            
            this.setState({
                ...this.state,
                changeCountStyle:true,
            })
        }
        
    }

    handleCount=()=>{
        this.setState({      
            ...this.state,     
            count:this.state.count + 1
        })
    }
   
    render(){

        const{showText,changeColor,count,changeCountStyle}=this.state;
        return(
            <>
                {showText? <h1 style={{color: changeColor ? "red" : "blue"}}>Class Based Component</h1>:null}
               
                <button onClick={this.handleClick}>Toggle text</button>
                <h1 style={{color:changeCountStyle?"blue":"green"}}>Count is {count}</h1>
                <button onClick={this.handleCount}>Increase Count</button>
            </>
        )
    }
}

export default ClassBasedComponent;