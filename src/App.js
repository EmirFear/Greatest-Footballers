import Container from 'react-bootstrap/Container';
import Header from './components/header/Header';
import PlayerContainer from './components/players/PlayerContainer';

function App() {
  return (
    <Container className='text-center mt-5'>
      <Header/>
      <PlayerContainer/>
    </Container>
  
  );
}

export default App;
