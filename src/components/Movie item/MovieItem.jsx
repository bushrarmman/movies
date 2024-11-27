import './MoviesItem.css'
const MovieItem = (props) => {
  return (
    <div className="col-lg-3 col-md-6">
      <div className="box">
        <div className="img-box">
          <img src={props.poster} alt="movies poster" />
        </div>
        <div className="text">
          <div className="text-header">
            <a href="">{props.title}</a>
            <span>{props.year}</span>
          </div>
          <div className="text-footer">
            <span>{props.type}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieItem;
