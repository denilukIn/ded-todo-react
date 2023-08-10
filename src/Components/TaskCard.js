import {Button} from 'react-bootstrap';

export function TaskCard(props) {
    // for LocalStorage
    // const {taskID, taskName, isActive} = JSON.parse(props.task)
    const {taskID, taskName, isActive} = props.task;

    const selectButton = () => {
        props.setAllTasks((prevState) => {
            return prevState.map(task => {
                return task.taskID === taskID ? {...task, isActive: !task.isActive} : task;
            });
        })
    }

    const deleteButton = () => {
        props.setAllTasks((prevState) => {
            return prevState.filter((task) => {
                return task.taskName !== taskName;
            })
        })
    }

    return <>
        <div className={"task_card " + (isActive ? 'undone' : 'done')}>
            <div className="task_name_div">
                <span id='task_name'>{taskName}</span>
            </div>

            <Button onClick={selectButton} variant='success' size='sm'>{isActive ? 'Done' : 'Undone'}</Button>
            <Button onClick={deleteButton} variant='secondary' size='sm'>Delete</Button>

        </div>
        <br/>
    </>
}