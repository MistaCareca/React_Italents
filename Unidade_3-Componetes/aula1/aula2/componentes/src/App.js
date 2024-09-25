import './App.css';
import MensagemDoDia from './components/MensagemDoDia/MensagemDoDia.js';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import Movies from './components/movies/movies.js';
import Form from './components/Form/Form.js';

function App(){
  return(
    <>
      <Header/>
      <div className = 'container'>
        <MensagemDoDia cor = "red"> Tenha uma otima semana </MensagemDoDia>
        <Movies/>
        <section className = 'contato'>
          <h2>Gostou? Entre em contato!</h2>
          <Form/>
        </section> 
      </div>
    <Footer/>
    </>
  );
}

export default App;
