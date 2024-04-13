import Form from 'react-bootstrap/Form';
import {data} from "../../helpers/data";
import {Container,Row,Col} from "react-bootstrap";
import Card from 'react-bootstrap/Card';

const PlayerContainer = () => {
    return (
        <div>
           <Form.Control type="search" placeholder="Search" />
           <Container>
            <Row>
                {data.map((footballers) => (
                    <Col xs={10} sm={8} md={6} lg={4} xl={2}>
                        <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={footballers.img} />
                        <Card.Body>
                          <Card.Title>{footballers.name}</Card.Title>
                        </Card.Body>
                        <ul>
                          {
                          footballers.statistics.map(item=> <li className='list-unstyled h5 text-start'> ⚽ {item} </li>)
                          }
                        </ul>
                        <span>{footballers.official_career}</span>
                      </Card>
                    </Col>
                ))}
            </Row>
           </Container>
        </div>
    )
}

export default PlayerContainer;
