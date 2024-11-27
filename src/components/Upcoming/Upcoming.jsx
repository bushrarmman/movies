import MovieItem from "../Movie item/MovieItem";
import "./upcoming.css";

const Upcoming = (props) => {
  const movies = props.moviesitem2.map((movie) => {
    return (
      <MovieItem
        title={movie.title}
        key={movie.id}
        year={movie.year}
        poster={movie.poster}
        type={movie.type}
      />
    );
  });
  return (
    <section className="upcoming">
      <div className="overlay">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <span>online streaming</span>
              <h2>Upcoming Movies</h2>
            </div>
          </div>
          <div className="row">{movies}</div>
        </div>
      </div>
    </section>
  );
};

export default Upcoming;
