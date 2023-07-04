import React from 'react';
import {Card} from 'react-bootstrap';

const Movie = (props) => {
    const {title,episode_id, image,opening_crawl,} = props;
  return (
          <Card className='my-3 p-3'>
            <Card.Img width='100px' height='150px' src={image} variant='top' />
            <Card.Body>
              <Card.Title as='div' className='movie-title'>{title}</Card.Title>
              <Card.Text as='div'>episode: {episode_id}</Card.Text>
              {/* <Card.Text as='div'>{opening_crawl}</Card.Text> */}
            </Card.Body>
          </Card>
  )
}

export default Movie;