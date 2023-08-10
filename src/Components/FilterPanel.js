import { Button } from 'react-bootstrap';

export function FilterPanel(props) {
    const {setFilteredStatus, setSearchTerm} = props;

    const changeFilter = (e) => {
        setFilteredStatus(e.target.value)
    }

    const search = (e) => {
        setSearchTerm(() => {
            return e.target.value;
        });
    }

    return <div class='filters'>
        <input type="text" className="search_panel" placeholder='Type a task' onChange={search}/>
        <Button value='All' variant='primary' onClick={changeFilter} size='sm'>All</Button>
        <Button value='Done' variant='success' onClick={changeFilter} size='sm'>Done</Button>
        <Button value='In progress' variant='info' onClick={changeFilter} size='sm'>In progress</Button>
        <br/>
    </div>
}