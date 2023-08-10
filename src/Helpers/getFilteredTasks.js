export const getFilteredTasks = (status, searchTerm, allTasks) => {
    return !searchTerm ? getTasksByFilter(status,allTasks) : getTasksBySearch(searchTerm, allTasks);
}

export const getTasksByFilter = (status,allTasks) => {
    const tasks = allTasks.filter((task) => {
        switch (status) {
            case 'All':
                return true;
            case 'Done':
                return task.isActive === false;
            case 'In progress':
                return task.isActive === true;
        }
        return task.isActive === true;
    })
    return tasks;
}

export const getTasksBySearch = (searchTerm, allTasks) => {
    return allTasks.filter((task) => {
        return task.taskName.toLowerCase().includes(searchTerm)
    })
}