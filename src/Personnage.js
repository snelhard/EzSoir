import React from 'react';
import './App.css';

class Personnage extends React.Component{


    downloadJsonFile = () => {
        // Définie le contenu qui va être dans le fichier JSON
        var debug = {nom: document.getElementById('myInput').value};

        // crée le fichier json avec le contenu
        const file = new Blob([JSON.stringify(debug, null, 2)], {type : 'application/json'});

        // Ouverture du lecteur
        var reader = new FileReader();
        // Attend que le fichier à fini de charger
        reader.addEventListener("loadend", (e) => {
            // Récupère la chaine contenu dans le fichier json
            const text = e.srcElement.result;
            // Analyse une chaîne de caractères JSON et construit la valeur JavaScript ou l'objet décrit par cette chaîne
            const contenu = JSON.parse(text);
            // renvoie le contenu affecté à nom dans le json
            console.log(contenu.nom)
            
            document.getElementById('Affichage').value=contenu.nom;
        });
        // Renvoyer le resultat de la lecture du fichier sous forme txt
        reader.readAsText(file);
      }

    render() {
        return(
            <div>
                <label>Nom du personnage </label> <input id="myInput" onBlur={this.setNom}/> 
                    <button onClick={this.downloadJsonFile}>Valider</button>
                <input id="Affichage"/>
            </div>
        )
    }
}


export default Personnage;
