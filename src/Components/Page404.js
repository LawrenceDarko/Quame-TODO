import { Link } from "react-router-dom"

const Page404 = () => {
    return (
        <div>
            <h2>Sorry</h2>
            <p>Page not Found</p>
            <Link to="/">Back to home</Link>
        </div>
    )
}

export default Page404
