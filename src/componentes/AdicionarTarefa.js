import { useState } from "react"
import './AdicionarTarefa.css'

function AdicionarTarefa({ aoAdicionarNovaTarefa, filtrarTarefas, listaTarefas }) {
    const [name, setName] = useState("");
    const [ativo, setAtivo] = useState("todas");

    let tarefa = {
        id: Math.random(),
        nome: name,
        concluido: false
    }

    function enviarTarefa(e) {
        e.preventDefault();
        if (name === "") {
            alert("Por favor, insira um nome para a tarefa")
            return
        } else if (verificaTarefaDuplicada()) {
            alert("Tarefa já adicionada, por favor insira com outro nome")
            return
        }

        aoAdicionarNovaTarefa(tarefa)
    }

    function verificaTarefaDuplicada() {
        return listaTarefas.some((tarefa) => tarefa.nome.trim().toLowerCase() === name.trim().toLowerCase())
    }

    return (
        <div className="div-pai">
            <h1>Lista de Tarefas</h1>
            <form className="formulario">
                <div className="div-input-adicionar-tarefa">
                    <label htmlFor="nome">Nome da tarefa:</label>
                    <input
                        type="text"
                        name="nome"
                        id="nome"
                        value={name}
                        placeholder="Digite o nome da tarefa"
                        className="input-nova-tarefa"
                        onChange={(e) => setName(e.target.value)}
                    >
                    </input>
                </div>

                <button className="botao-adicionar" onClick={enviarTarefa}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                    </svg>
                </button>
            </form>
            <div name='filtro' className="filtro-tarefas" onClick={(e) => filtrarTarefas(e.target.value)}>
                <button onClick={() => setAtivo("todas")} className={ativo === "todas" ? "botao-filtro-ativo" : "botao-filtro"} value="todas">Todas</button>
                <button onClick={() => setAtivo("pendente")} className={ativo === "pendente" ? "botao-filtro-ativo" : "botao-filtro"} value="pendente">Pendentes</button>
                <button onClick={() => setAtivo("concluido")} className={ativo === "concluido" ? "botao-filtro-ativo" : "botao-filtro"} value="concluido">Concluídas</button>
            </div>
        </div>
    )
}

export default AdicionarTarefa