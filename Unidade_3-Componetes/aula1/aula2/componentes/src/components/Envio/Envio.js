import './Envio.css';

const Envio = ({texto, ...props}) =>{
    return(
        <button class = 'button-form' type = {props.type}>{texto}</button>
    );
}

export default Envio;