import React, { useState } from 'react';
import api from '../services/Api';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

function CreateTask() {

    const [title, setTitle] = useState([]);
    const [description, setDescription] = useState([]);
    const [status, setStatus] = useState('to_do');
    const [requester, setRequester] = useState([]);
    const [owners, setOwners] = useState([]);
    const [due_date, setDueDate] = useState('');

    const handleChange = e => {
        setTitle(e.target.value);

    }

    const handleDescriptionChange = e => {
        setDescription(e.target.value);
    }

    const handleStatusChange = e => {
        setStatus(e.target.value);
    }

    const handleRequesterChange = e => {
        setRequester(e.target.value);
    }

    const handleOwnersChange = e => {
        setOwners(e.target.value);
    }

    const handleDueDateChange = e => {
        setDueDate(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();

        async function uploadTask() {

            const addedTask = {
                "title": title.toString().trim(),
                "description": description.toString().trim(),
                "status": status.toString().trim(),
                "requester": requester.toString().trim(),
                "owners": owners.toString().trim(),
                "due_date": due_date.toString().trim(),
            };

            console.log(addedTask);

            const response = await api.post('/tasks', addedTask).then(() => console.log('Sending to backend')).catch(err => {
                console.log(err);
            });

            console.log(response);
        }
        uploadTask();

        setTitle('');
        setDescription('');
        setStatus('');
        setRequester('');
        setOwners('');
        setDueDate('');

    }

    return (
        <>
            <form className="App-header" onSubmit={handleSubmit}>
                <h3>Add a new Task</h3>
                <TextField id="filled-basic" label="title" variant="filled" type="text" required name="title" value={title} onChange={handleChange} />
                <TextField id="filled-basic" label="description" variant="filled" type="text" name="description" value={description} onChange={handleDescriptionChange} />
                {/* <TextField id="filled-basic" label="status" variant="filled" type="text" required name="status" value={status} onChange={handleStatusChange}/> */}
                <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label">Status</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="to_do"
                        name="status"
                        onChange={handleStatusChange}
                    >
                        <FormControlLabel value="to_do" control={<Radio />} label="to_do" />
                        <FormControlLabel value="doing" control={<Radio />} label="doing" />
                        <FormControlLabel value="done" control={<Radio />} label="done" />
                    </RadioGroup>
                </FormControl>
                <TextField id="filled-basic" label="requester" variant="filled" type="text" required name="requester" value={requester} onChange={handleRequesterChange} />
                <TextField id="filled-basic" label="owners" variant="filled" type="text" required name="owners" value={owners} onChange={handleOwnersChange} />
                <TextField id="filled-basic" label="due_date: yyyy-mm-dd" variant="filled" type="text" required name="due_date" value={due_date} onChange={handleDueDateChange} />
                {/* <TextField label="Outlined secondary" color="secondary" focused /> */}
                <Button type="submit" variant="contained">Add Task</Button>

            </form>
        </>
    );

    // return (
    //     <>
    //         <h3>from create task component</h3>
    //     </>
    // );
}

export default CreateTask;