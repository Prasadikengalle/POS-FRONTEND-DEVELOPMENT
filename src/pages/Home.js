import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <h1>Home</h1>

            <ul>
                <li>
                    <Link to={"/products"}/>
                </li>
            </ul>
        </>

        
    )
}

export default Home;