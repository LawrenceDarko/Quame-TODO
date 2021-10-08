import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
    // const [tasks, setBlogs] = useState([
    //     {title: 'My new website', body: "lorem ipsum dolor sint...", author: "Quame", id: 1},
    //     {title: 'Welcome party', body: 'lorem ipsum dolor sint...', author: "Nana", id: 2},
    //     {title: 'Web development  practice', body: 'lorem ipsum dolor sint...', author: 'Quame', id: 3}

    // ]);

    
    // const handleDelete = (currentBlogId) => {
    //     setBlogs (tasks.filter((task)=>task.id !== currentBlogId))
    // }
    
    // useEffect run once anytime the page re-renders. It can also have a dependency which means the useEffect will run when the dependency changes
    
    const {tasks, isPending, error} = useFetch('http://localhost:8000/task')

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Data Loading...</div>}
            {/* This is how conditional templating is done in React. If the the LHS is True the RHS executes else it doesn't */}
            {/* {tasks && <BlogList tasks={tasks} title='All Tasks'/>} */}
            {/* This is how to filter from an array */}
            {tasks && <BlogList tasks={tasks.filter((task)=> task.taskCategoryId === 'Personal')} title="Personal Tasks"/>}
            
        </div>
    )
}

export default Home
