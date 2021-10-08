import { useState } from "react"
import { useHistory } from "react-router"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Create = () => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [taskCategoryId, setCategoryId] = useState('Personal')
    const [comments, setComment] = useState('')
    const [dateStarted, setDateStarted] = useState(new Date())
    const [dateEnded, setDateEnded] = useState(new Date())
    const [isPending, setIsPending] = useState(false)
    const history = useHistory();

    const taskObj = {title, description, taskCategoryId, comments, dateStarted, dateEnded }

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsPending('true')
        setTimeout(() => {
            fetch('http://localhost:8000/task', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(taskObj)
        }).then(()=>{
            console.log('New Post Added');
            setIsPending(false)
            history.push('/');    
        })
        }, 600);

        console.log(taskObj)
        
    }
    

    return (
        <div className="create">
            <h2>Add New Task</h2>
            {isPending && <div>Loading...</div>}
            <form action="" onSubmit={handleSubmit}>
                <label>Task title:</label>
                <input type="text" required 
                    value = {title}
                    onChange={(e)=>{setTitle(e.target.value)}}
                    // console.log(e.target.value)
                />

                <label>Task description:</label>
                <textarea 
                value = {description}
                onChange={(e)=>{setDescription(e.target.value)}}
                required></textarea>

                <label>Task category:</label>
                <select
                value = {taskCategoryId}
                onChange={(e)=>{setCategoryId(e.target.value)}}
                >
                    <option value="Personal">Personal</option>
                    <option value="Work">Work</option>
                </select>

                <label>Task Comment:</label>
                <textarea 
                value = {comments}
                onChange={(e)=>{setComment(e.target.value)}}>
                </textarea>

                <label>Start Date:</label>
                <DatePicker selected={dateStarted}
                ShowTimeSelect
                dateFormat="MMMM d, yyy h:mmaa"
                onChange={dateStarted => setDateStarted(dateStarted)}/>

                <label>End Date:</label>
                <DatePicker selected={dateEnded}
                ShowTimeSelect
                dateFormat="MMMM d, yyy h:mmaa"
                onChange={dateEnded => setDateEnded(dateEnded)} required/>

                {!isPending && <button>Add Task</button>}
                {isPending && <button disabled>Adding Task...</button>}
            </form>
        </div>
    )
}

export default Create
