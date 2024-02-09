import { Link} from "react-router-dom";
import NavigationBar from './NavigationBar';


const Home = () => {

    return (
        <>
            <NavigationBar/>

            <h1>Home</h1>

            <ul>
                <li>
                    <Link to="/products">Products</Link>


                </li>

                <button className="btn btn-primary">Load Products</button>
            </ul>

            

            

        </>

        
    )
}

export default Home;