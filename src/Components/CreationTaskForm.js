import {useState} from "react";
import {Button} from 'react-bootstrap';

export function CreationTaskForm(props) {
    const [taskName, setTaskName] = useState('');

    const createTask = (e) => {
        e.preventDefault();
        const NewTask = {'taskID': Date.now(), 'taskName': taskName, 'isActive': true};

        props.setAllTasks((prevState) => [...prevState, NewTask])
        setTaskName('');
    }

    return <form onSubmit={createTask}>
        <input id='task_name_input' name='task_name' value={taskName}
               onChange={(e) => {
                   setTaskName(e.target.value)
               }}/>
        <Button disabled={!Boolean(taskName.trim())} class="btn btn-outline-primary" type='submit' size='sm'>Create new
            Task</Button>
    </form>
}