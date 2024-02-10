import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import NavigationBar from "./NavigationBar";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Container, Row, Col } from 'react-bootstrap';


const Category = () => {

    const [categories, setCategories] = useState(null);

    const [name, setName] = useState(null);

    const [products, setProducts] = useState(null);

    const params = useParams();

    
    useEffect(() => {
        getCategories();
    },[])
    

    const getCategories = async () => {
        const response = await axios.get("http://localhost:8081/categories");
        setCategories(response.data);
    }

    const handleName = (event) => {
        setName(event.target.value);
    };

    const handleSubmit= async (event) => {
        event.preventDefault();

        const data = {
            name: name,
        };

        const response = await axios.post("http://localhost:8081/categories", data);
        setCategories([...categories, data]);
        setName('');
    }

    const navigate = useNavigate();

    const getProductByCategory = async (categoryId) => {

            const response = await axios.get(`http://localhost:8081/categories/${categoryId}/products`);
            setProducts(response.data);
            navigate(`/categories/${categoryId}/products`);

    }

    const CategoryCard = ({ category }) => {

        const navigate = useNavigate(); 

        
        const handleEditCategory = () => {
            navigate(`/categories/${category.id}`); 
        };

        return (

                <Card style={{ width: "18rem", margin: "10px" }}>
                    <Card.Body>
                        <Card.Title>{category.name}</Card.Title>
                        <Card.Text>
                            ID: {category.id}
                        
                        </Card.Text>
                        <Button variant="primary" onClick={() => 
                            getProductByCategory(category.id)} >
                            View Products
                        </Button>

                        <Button variant="secondary" onClick={ () => handleEditCategory(category.
                            id)} style={{marginLeft: '10px'}}>
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
                    <h1>Add Category</h1>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="categoryName" className="form-label">
                                    Category Name
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="categoryName"
                                    required
                                    onChange={handleName}
                                    value={name}
                                />
                            </div>

                            <button type="submit" className="btn btn-primary">
                                Save Category
                            </button>
                        </form>
                    </Col>
                </Row>

                <Row className="mt-4">
                    
                </Row>
            </Container>
        </>
    )
}

export default Category;