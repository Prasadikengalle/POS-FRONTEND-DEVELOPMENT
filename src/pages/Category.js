import { useEffect, useState } from "react";
import axios from "axios";
import NavigationBar from "./NavigationBar";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Container, Row, Col } from 'react-bootstrap';

const Category = () => {

    const [categories, setCategories] = useState(null);

    const getCategories = async () => {
        const response = await axios.get("http://localhost:8081/categories");
        setCategories(response.data);
    }

    useEffect(() => {
        getCategories();
    },[])

    const CategoryCard = ({ category }) => {

        return (

                <Card style={{ width: "18rem", margin: "10px" }}>
                    <Card.Body>
                        <Card.Title>{category.name}</Card.Title>
                        <Card.Text>
                            ID: {category.id}
                        
                        </Card.Text>
                        <Button variant="primary"  >
                            View Products
                        </Button>

                        <Button variant="secondary"  style={{marginLeft: '10px'}}>
                            Edit
                        </Button>

                    </Card.Body>
                </Card>
        );
    };

    return (
        <>
            <NavigationBar />

            <Container>
                <Row>
                    {/* Categories Section */}
                    <Col md={8}>
                        <h1>Categories</h1>
                        <Row>
                            {categories &&
                                categories.map((category) => (
                                    <Col md={6} key={category.id}>
                                        <CategoryCard category={category} />
                                    </Col>
                                ))}
                        </Row>
                    </Col>

                    {/* Form Section */}
                    <Col md={4}>
                        
                    </Col>
                </Row>

                <Row className="mt-4">
                    
                </Row>
            </Container>
        </>
    )
}

export default Category;