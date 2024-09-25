import './Form.css';
import FormInput from '../FormInput/FormInput';
import Envio from '../Envio/Envio';

const Form = () => {
    return(
        <form class='form'>
            <FormInput inputName = "Nome: " id = 'nome' type = 'text'/>
            <FormInput inputName = "E-mail: " id = 'email' type = 'email'/>
            <Envio texto = 'Enviar' type = 'submit'/>
        </form>
    );
};

export default Form; 