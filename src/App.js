import Container from 'react-bootstrap/Container';
import Header from './components/header/Header';
import PlayerContainer from './components/players/PlayerContainer';

function App() {
  return (
    <Container>
      <Header/>
      <PlayerContainer/>
    </Container>
  
  );
}

export default App;
