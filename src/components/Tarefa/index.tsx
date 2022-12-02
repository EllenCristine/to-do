import './tarefa.css';
import { useState } from 'react';
import { MdOutlineDoneOutline } from 'react-icons/md';
import { BsTrash, BsPencil } from 'react-icons/bs';

export const Tarefa = () => {
    const tarefasDefault = ["Estudar Java", "Estudar React"];
    const [tarefas, setTarefas] = useState<string[]>(tarefasDefault);
    const [tarefa, setTarefa] = useState("");

    const aoAlterar = (index: number) => {
        
    }
    
    const handleChange = (evento: any) => {
        setTarefa(evento.target.value)
        console.log(tarefa)
    }

    const handleSubmit = () => {
        setTarefas([...tarefas, tarefa])
        setTarefa("");
    }

    console.log(tarefas)

    return (
        <form>
            <label className='title'> Descreva sua tarefa</label>
            <input
                type="text"
                className='input-tarefa'
                value={tarefa}
                onChange={handleChange}
            />
            <button
                type='button'
                className='adicionar'
                onClick={handleSubmit}
            >
                Adicionar
            </button>


            {tarefas.map((tarefa, index) => (
                <div className='card' key={index}>
                    <span className='task-name'>{tarefa}</span>

                        <div className='icons'>
                        <BsPencil onClick={() => aoAlterar(index)}/>
                        <MdOutlineDoneOutline />
                        <BsTrash />
                        </div>
                </div>

            ))
            }
        </form>
    )
}