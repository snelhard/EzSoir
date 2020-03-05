import React from 'react';
import './App.css';

class ChoixScene extends React.Component{
    state = {
        id: 1,
        texte: "",
        idSuivant:2
     }
     handleChangeTexteNouveauChoix = (event) => {
        const value = event.currentTarget.value;
        this.setState({texte : value});
        console.log(this.state.texte);
    }
    handleChangeidSuivant = (event) => {
        const value = event.currentTarget.value;
        this.setState({idSuivant : value});
        console.log(this.state.idSuivant);
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmitChoix}>
                    <div className="choixContainer">
                        <label>Texte choix:</label><input type="text" onChange={this.handleChangeTexteNouveauChoix} value={this.state.texte}/>
                        <label>Id Scene:</label><input type="number" onChange={this.handleChangeidSuivant} value={this.state.idSuivant}/>
                    </div>
                </form>
            </div>

        )
    }
}

export default ChoixScene;