import {TaskCard} from "./TaskCard";
import {CreationTaskForm} from "./CreationTaskForm";
import {FilterPanel} from "./FilterPanel";
import {useEffect, useState} from "react";
import {getTasksByFilter, getTasksBySearch} from "../Helpers/getFilteredTasks";
import {transformTasksFromLocalStorage} from "../Helpers/transformTasksFromLocalStorage";

export function Container() {
    const tasksFromLocalAStorage = localStorage.getItem('tasks') ? transformTasksFromLocalStorage(localStorage.getItem('tasks')) : [];

    const [allTasks, setAllTasks] = useState(tasksFromLocalAStorage);
    const [filteredStatus, setFilteredStatus] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');

    const tasks = getTasksByFilter(filteredStatus, allTasks);
    const tasksBySearch = getTasksBySearch(searchTerm, tasks);


    useEffect(() => {
        const stringifyTasks = allTasks.map((task) => {
            return JSON.stringify(task)
        });

        localStorage.setItem('tasks', JSON.stringify(allTasks))
    }, [allTasks]);

    return <div class='container'>
        <FilterPanel setFilteredStatus={setFilteredStatus} setSearchTerm={setSearchTerm}/>

        {tasksBySearch.length ?
            <div class='tasks'>
                <span>There are {tasksBySearch.length} tasks </span>
                {tasksBySearch.map((task) => (<TaskCard task={task} setAllTasks={setAllTasks}/>))}
            </div>
            :
                <p>There's no task here yet</p>
        }

        <CreationTaskForm allTasks={allTasks} setAllTasks={setAllTasks}/>
    </div>;
}