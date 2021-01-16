import './App.css';
import Pokedex from './Pokedex';
import Container from 'react-bootstrap/Container';
import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <>
      <Header />
    <Container>
      <Pokedex />
    </Container>
    <Footer />
    </>
  );
}

export default App;
