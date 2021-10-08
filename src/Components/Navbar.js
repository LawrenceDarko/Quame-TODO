import { Link } from "react-router-dom";
import useFetch from './useFetch';

function Navbar() {

    const {tasks, isPending, error} = useFetch('http://localhost:8000/taskCategory')

    return (
      <nav className="navbar">
          <h1>Quame Todo</h1>

          <div className="links" >
              <Link to="/">Home</Link>
          {tasks && tasks.map((task)=>(
              <Link key={task.id} to={`/${task.name}`}>{task.name}</Link>
              ))}
              <Link to="/create" style={{color: '#fff', backgroundColor: '#f1235d', borderRadius: '8px'}}>Add Task</Link>
          </div>
          
      </nav>  
    );
}

export default Navbar
