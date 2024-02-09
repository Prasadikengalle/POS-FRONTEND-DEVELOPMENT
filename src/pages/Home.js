import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar, Nav , Container, Row, Col, Form , Button , Card} from "react-bootstrap"
import NavigationBar from './NavigationBar';
import axios from "axios";


const Home = () => {

    const [products, setProducts] = useState(null);

    useEffect(() => {
        getProducts();
    },[]);

    const getProducts = async () =>{
        const response = await axios.get("http://localhost:8081/products");
        setProducts(response.data);
    };

    const ProductCard = ({ product }) => {
        
        return (
            <Card style={{ width: "18rem", margin: "10px" }}>
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>
                        ID: {product.id}
                        
                    </Card.Text>
                    <Button variant="primary" >
                        View Details
                    </Button>
                </Card.Body>
            </Card>
        );
    };


    return (
        <>
            <NavigationBar/>

            <Container className="mt-5">
                

                <Row>
                
                    <Col md={8}>
                        <Row>
                        <h1 className="mb-4">Products</h1>
                            {products && products.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </Row>
                    </Col>

                    <Col md={4}>
                        <h2 className="mb-4 text-center">Add New Product</h2>
                        
                    </Col>
                </Row>
            </Container>

        </>

        
    )
}

export default Home;