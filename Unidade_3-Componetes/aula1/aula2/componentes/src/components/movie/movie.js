import './movie.css';

const Movie = ({ filme }) => {
    return (
        <li className="filme-item">
            <img src={filme.poster} alt={filme.nome} />
            <h4>{filme.nome}</h4>
            <p>{filme.diretor}</p>
        </li>
    );
}

export default Movie;