import React, {Component} from 'react';
import './estilo.css'
 
import biscoito from'./assets/biscoito.png';



class App extends Component{
  constructor (props){
    super(props);
    this.state = {
      textofrases: ''
     };
     this.quebrarBiscoito = this.quebrarBiscoito.bind(this);
     this.frases = ['Siga os bons e aprenda com eles','O Bom-senso vale mais do que muito conhecimento', 'O riso é amenor distancia entre duas pessoas', 'Deixe de lado as preocupaçoes e seja feliz', 'Realize o obvio, pense no improvavel e conquiste o impossivel','Acredite em milagres, mas não dependa deles', 'a maior barreira para o sucesso é o medo do fracassso' ];


      }

    quebrarBiscoito(){

      
      let state = this.state;
      let numeroAleatorio = Math.floor (Math.random() * this.frases.lenght)
      state.textofrases = this.frases[numeroAleatorio];
      this.setState(state);
    }
      
    
    render(){

        return(
         <div className="container">
          <img src={biscoito} className="img"/>
          <Botao nome="Abrir Biscoito" acao={this.quebrarBiscoito} />
          <h3 classname='Textofrase'>{this.state.textofrase}
          </h3>


         </div>
        


        )
    }
    
      
      
    
  

}


class Botao extends Component{

    render(){

      return(
        <div>
          <button onClick={this.props.acao}> {this.props.nome} </button>
        </div>

      );
    }


}


export default App;