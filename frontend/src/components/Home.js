import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import {Row, Col} from 'react-bootstrap';
import Movie from './Movie';


const Home = () => {
    // const result1 = await fetch('https://api.quotable.io/random');
    //'https://swapi.dev/api/films
    //const {data} = await axios.get('https://swapi.dev/api/films');
    const [arr, setArr] = useState([]);
    useEffect(()=>{
        const myFunc = async () => {
            const {data} = await axios.get('http://localhost:8000/api/movies');
            console.log(data);
            setArr(data);
        }
        myFunc();
    }, []);
    
  return (
    <Fragment>
        Home
        <Row>   
            {arr.map((item, index) => (
            <Col sm={12} md={6} lg={4} xl={3} >
                    <Movie
                    title={item.title}
                    image={item.image}
                    storyline={item.storyline}
                    rating={item.rating}
                    numReviews={item.numReviews}
                    />
                </Col>
                ))}
        </Row>
    </Fragment>
  )
}

export default Home;