import React from "react";

class Lista extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            itens: ["item1", "item2", "item3", "item4",]
        };
        //this.changeName = this.changeName.bind(this);
    }
  
    render(){
        
        return(
            <>
                <ul>
                    {this.state.itens.map((item, indice) => <li key={indice}>{item}</li>)}
                </ul>
            </>
        );
    }
}

export default Lista;