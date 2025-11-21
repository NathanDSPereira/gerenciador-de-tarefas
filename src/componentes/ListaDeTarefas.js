import Tarefa from './Tarefa'
import "./ListaDeTarefas.css"

function ListaDeTarefas({tarefas, concluirTarefa}) {
    return (
        <div className='div-pai-lista-tarefas'>
            <h1>Tarefas</h1>
            <ul className='lista-tarefas'>
                {tarefas.map((tarefa) => (
                    <Tarefa key={tarefa.id} tarefa={tarefa} concluirTarefa={concluirTarefa} />
                ))}
            </ul>
        </div>
    )
}

export default ListaDeTarefas