import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import logo from  "../../assets/logo.png";

const Header  = () => {
    return (
        <Container>
            <Image src={logo} width="270px" />
            <h1 className='my-2 title'> Greatest Players</h1>
        </Container>
    )
}

export default Header;
