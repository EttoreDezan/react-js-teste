import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import { useState } from "react";
import "./Formulario.css"
 

const Formulario = (props) => {

    const times = [ 
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');

    
    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome, 
            cargo, 
            imagem, 
            time
        })
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador!</h2>
                <CampoTexto valor={nome} aoAlterado={valor => setNome(valor)} obrigatorio={true} label="Nome" placeholder="Digite o seu nome" />
                <CampoTexto valor={cargo} aoAlterado={valor => setCargo(valor)} obrigatorio={true} label="Cargo" placeholder="Digite o seu cargo" />
                <CampoTexto valor={imagem} aoAlterado={valor => setImagem(valor)} label="imagem" placeholder="Digite o seu endereço da imagem" />
                <ListaSuspensa 
                obrigatorio={true} 
                label="Time" 
                itens={times}
                valor={time}
                aoAlterado={valor => setTime(valor)}
                ></ListaSuspensa>
                <Botao>
                Criar Card
                </Botao>
            </form>
        </section>
    )
  }

export default Formulario;