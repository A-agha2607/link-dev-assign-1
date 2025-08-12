import React from 'react'
import { Link, useParams } from 'react-router'
import movies from '../data/movies';
import { Card } from 'react-bootstrap';



function MovieDetails() {
    const {id}=useParams();
    const movie=movies.find(m=>m.id==id);
    if(!movie){
        return(
            <div className='d-flex flex-column align-items-center'>
                <h2>Movie not found</h2>
                <Link to={'/movies'} class="card-link" >Back to movies</Link>
            </div>
        )
    }
  return (
    <div className='d-flex justify-content-center align-items-center'>
            <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{movie.director}</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">{movie.year}</Card.Subtitle>
        <Card.Text>
            {movie.description}
        </Card.Text>
        <Card.Subtitle className="mb-2 text-muted">{movie.rating}</Card.Subtitle>
        <Link to={'/movies'} class="card-link">get back to movies</Link>
      </Card.Body>
    </Card>
    </div>
  )
}

export default MovieDetails