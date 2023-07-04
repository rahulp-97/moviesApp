import {Link} from 'react-router-dom';
import {Card} from 'react-bootstrap';
import Rating from './Rating';

const Movie = (props) => {
    const {title, image,storyline,rating, numReviews} = props;
  return (
          <Card className='my-3 p-3 rounded'>
              <Card.Img src={image} style={{height:'300px'}} />
            <Card.Body>
              <Card.Title as='div' className='movie-title'>{title}</Card.Title>
              <Card.Text as='div'><Rating value={rating} text={`${numReviews} reviews`}/></Card.Text>
              {/* <Card.Text as='div'>reviews : {numReviews}</Card.Text> */}
              <Card.Text as='div' className='movie-description'>{storyline}</Card.Text>
            </Card.Body>
          </Card>
  )
}

export default Movie;