import React from 'react'
import movies from '../data/movies'
import { Link } from 'react-router'
import Card from 'react-bootstrap/Card';


function Movies() {
    return (
        <div>
            <h1 className='text-center text-light'>Movies</h1>
            <div className='d-flex flex-column align-items-center'>
                {movies.map((mov) => (
                    <div className='pb-3 crds-div'>
                        <Card  style={{ width: '18rem' }} className='crds' key={mov.id}>
                            <Card.Body>
                                <Card.Title>{mov.title}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{mov.year}</Card.Subtitle>

                                <Link to={`/movies/${mov.id}`} class="card-link">see details</Link>

                            </Card.Body>
                        </Card>
                    </div>

                ))}
            </div>


        </div>
    )
}

export default Movies