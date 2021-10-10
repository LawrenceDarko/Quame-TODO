import { Link } from "react-router-dom";
import { useState } from "react"

const BlogList = (props) => {
    const tasks = props.tasks;
    const title = props.title;
    // const [checked, setChecked] = useState(false);
    const [status, setStatus] = useState('Ongoing')
    // const handleDelete = props.handleDelete;

    // const handleChange = () => {
    //     setStatus('Completed')
    // }
    
    
    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {tasks.map((task)=> (
                <div className="blog-preview" key = {task.id}>
                    <Link to={`/tasks/${task.id}`}>
                        <h2>{task.title}</h2>
                        <p style={{color: "#333"}}>category: {task.taskCategoryId}</p>
                        
                        {/* <button onClick={()=>handleDelete(task.id)}>Delete</button> */}
                    </Link>
                    {/* <p>{status}</p> */}
                    {/* <button  onClick={()=>handleChange()}>Done</button> */}
                </div>
            ))}
        </div>
    )
}

export default BlogList
