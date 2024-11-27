import "./Best.css";
import MovieItem from "../Movie item/MovieItem";
const Best = (props) => {
  const bestmovies = props.moviesitem3.filter((item)=>{
    return(
      item.year>=2015
    )
  }).map((movie) => {
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
    <section className="best">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <span>best tv series</span>
            <h2>world best tv series</h2>
          </div>
        </div>
        <div className="row">{bestmovies}</div>
      </div>
    </section>
  );
};

export default Best;
