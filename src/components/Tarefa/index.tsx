import './tarefa.css';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import { MdOutlineDoneOutline } from 'react-icons/md';
import { BsTrash, BsPencil } from 'react-icons/bs';
import { TextField, Button } from '@mui/material';

export const Tarefa = () => {
    const tarefasDefault = ["Estudar Java", "Estudar React"];
    const [tarefas, setTarefas] = useState<string[]>(tarefasDefault);
    const [tarefa, setTarefa] = useState("");

    const aoAlterar = (index: number) => {

    }

    const handleChange = (evento: any) => {
        setTarefa(evento.target.value)
    }

    const handleSubmit = () => {
        setTarefas([...tarefas, tarefa])
        setTarefa("");
    }

    return (
        <form>
            <label className='title'> Descreva sua tarefa</label>
            <TextField
                variant='standard'
                className='input-tarefa'
                value={tarefa}
                onChange={handleChange}
            />

            <Button
                sx={{mt: 1, mb: 5}}
                endIcon={<AddIcon />}
                onClick={handleSubmit}
                variant="contained"
                size='small'
            >
                Adicionar
            </Button>

            {tarefas.map((tarefa, index) => (
                <div className='card' key={index}>
                    <span className='task-name'>{tarefa}</span>

                    <div className='icons'>
                        <BsPencil onClick={() => aoAlterar(index)} />
                        <MdOutlineDoneOutline />
                        <BsTrash />
                    </div>
                </div>

            ))
            }
        </form>
    )
}