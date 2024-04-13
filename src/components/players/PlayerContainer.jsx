import Form from 'react-bootstrap/Form';
import {data} from "../../helpers/data";
import {Container,Row,Col} from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const PlayerContainer = () => {
    return (
        <div>
           <Form.Control type="search" placeholder="Search" />
           <Container>
            <Row>
                {data.map((legend) => (
                    <Col xs={10} sm={8} md={6} lg={4} xl={2}>
                        <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                          <Card.Title>Card Title</Card.Title>
                          <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                          </Card.Text>
                          <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                      </Card>
                    </Col>
                ))}
            </Row>
           </Container>
        </div>
    )
}

export default PlayerContainer;
