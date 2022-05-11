import React, { Component } from 'react';
import { Modal} from 'antd';
import 'antd/dist/antd.css';

class Examen extends Component {
    constructor(props) {
        super(props);
        this.state =  {
            inputArray: [],
            resultados: false,  
            isModalVisible: false,  
        }
        this.onChange = this.onChange.bind(this)
    }
 
    onChange = async (e) =>{ 
        let array =  [...e.target.value];
        this.setState({inputArray:array.sort()})
    }
    cerrar(){
        this.setState({isModalVisible:false})
    }
    consultar = () => {
        this.setState({isModalVisible:true})
    }
    render() {
        let modal; 
        if(this.state.inputArray[0]){
            modal =  
            <Modal title="Resultado" visible={this.state.isModalVisible} okText="Aceptar" canCelText = "Cerrar" onOk={e=>this.cerrar()} onCancel={e=>this.cerrar()}>
                {this.state.inputArray.map(rows=>{
                    return(
                        <ul>
                            <li>{rows}</li>
                        </ul>
                    )
                })}
            </Modal>
        }
        return ( 
            <div style={{marginTop:"20px"}}>
                <label><strong>Ingresa una cadena dentro del input, almacena en un array los valores e imprime el resultado de menor a mayor.</strong></label>
                <br/>
                    <div style={{marginTop:"20px"}}>
                        <input type="number" placeholder = "Ingrese un valor" onChange={this.onChange}/>
                        <button type="primary" onClick = {e=>this.consultar()}>Consultar</button>
                    </div>
                {modal}
            </div>
         );
    }
}
 
export default Examen;