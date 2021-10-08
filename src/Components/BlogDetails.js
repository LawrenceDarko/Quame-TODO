import { useParams } from "react-router-dom"
import useFetch from "./useFetch";
import { useHistory } from "react-router";

const BlogDetails = () => {
    // The useParams() function is used to grab variables from the router in the navigation bar. In this case 'id'
    const { id } = useParams();
    const {tasks, error, isPending} = useFetch('http://localhost:8000/task/'+id);
    const history = useHistory();

    const handleClick = () => {
        fetch('http://localhost:8000/task/'+ tasks.id, {
            method: 'DELETE'
        }).then(()=>{
            history.push('/');
        })
    }
    

    return (
        <div className="blog-details">
            {error && <div>{ error }</div>}
            {isPending && <div>Blog Loading...</div>}
            {tasks && (
                <article>
                    <h2>{ tasks.title}</h2>
                    <p>Category: {tasks.taskCategoryId}</p>
                    <div>{ tasks.description }</div>
                    <p>Date Started: {tasks.dateStarted}</p>
                    <p>Date Ending: {tasks.dateEnded}</p>
                    <div>Status: {tasks.status}</div>
                    <div>Comments: {tasks.comments}</div>
                    <button onClick={()=>handleClick()}>Delete</button>
                </article>
                
            )}
        </div>
    )
}

export default BlogDetails
