import React from 'react'
import MovieItem from '../../components/Movie item/MovieItem'

const Tvshow = (props) => {
  const tvshow = props.tvitem.map((movie) => {
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
              <h2>TV Shows</h2>
            </div>
          </div>
          <div className="row">{tvshow}</div>
        </div>
      </div>
    </section>
  )
}

export default Tvshow
