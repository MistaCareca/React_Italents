import './movies.css';
import Movie from '../movie/movie';

const Movies = () => {
    const filmes = [
        {
            nome: 'Pulp Fiction',
            poster: 'https://static.thcdn.com/images/large/original//productimg/1600/1600/13988562-6465000849537058.jpg',
            diretor: 'Quentin Tarantino'
        },
        {
            nome: 'O Labirinto Do Fauno',
            poster: 'https://br.web.img2.acsta.net/medias/nmedia/18/87/14/49/19872468.jpg',
            diretor: 'Guillermo del Toro'
        },
        {
            nome: 'Bob Esponja - O Filme',
            poster: 'https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/90/53/98/20101535.jpg',
            diretor: 'Stephen Hillenburg'
        }
    ];

    return (
        <section className="movies">
            <h2>Meus Filmes Favoritos</h2>
            <ul className="filmes-lista">
                {filmes.map((filme, index) => (
                    <Movie filme={filme} key={index}/>
                ))}
            </ul>
        </section>
    );
}

export default Movies;