import React from 'react'
import MovieItem from '../../components/Movie item/MovieItem'

const Movies = (props) => {
  const movie = props.movieitem.map((mov) => {
    return (
      <MovieItem
        title={mov.title}
        key={mov.id}
        year={mov.year}
        poster={mov.poster}
        type={mov.type}
      />
    );
  });
  return (
    <section className="upcoming">
      <div className="overlay">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2> Movies</h2>
            </div>
          </div>
          <div className="row">{movie}</div>
        </div>
      </div>
    </section>
  )
}

export default Movies
