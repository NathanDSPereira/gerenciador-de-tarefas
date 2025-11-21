import './App.css';
import './App.css';

import ListaDeTarefas from './componentes/ListaDeTarefas';
import AdicionarTarefa from './componentes/AdicionarTarefa';
import { useState } from 'react';

function App() {

  const [listaTarefas, setListaTarefas] = useState([])
  const [status, setStatus] = useState("todas");

  function adicionarNovaTarefa(novaTarefa) {
    setListaTarefas([...listaTarefas, novaTarefa])  
  }

  function concluirTarefa(id) {
    let novaListaTarefa = listaTarefas.map((tarefa) => {
      return tarefa.id === id ? {...tarefa, concluido: !tarefa.concluido} : tarefa
    })

    setListaTarefas(novaListaTarefa)
  }
  
  function filtrarTarefas(statusFiltrado) {
    setStatus(statusFiltrado)
  }

      
  let listaTarefaFiltrada = listaTarefas.filter((tarefa) => {
    if(status === "pendente") {
      return tarefa.concluido === false
    } else if(status === "concluido") {
      return tarefa.concluido === true
    } else {
      return true;
    }
  })

  return (
    <div className="App">
      <AdicionarTarefa listaTarefas={listaTarefas} aoAdicionarNovaTarefa={adicionarNovaTarefa} filtrarTarefas={filtrarTarefas} />
      <ListaDeTarefas tarefas={listaTarefaFiltrada} concluirTarefa={concluirTarefa}/>
    </div>
  );
}

export default App;
