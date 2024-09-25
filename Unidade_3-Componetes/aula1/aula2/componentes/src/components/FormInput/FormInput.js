import './FormInput.css';

const FormInput = ({inputName, ...props}) => {
    return(
        <div>
            <label htmlFor={props.id}>{inputName}</label>
            <input type = {props.type}></input>
        </div>
    );
}

export default FormInput;