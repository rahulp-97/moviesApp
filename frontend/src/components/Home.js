import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import {Row, Col,} from 'react-bootstrap';
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
    <div className='d-flex justify-content-start'>
        Home
        <Row className='d-flex justify-content-start'>
            {arr.map((item, index) => {
                return (
                <Col className='d-flex justify-content-start' key={item.episode_id} sm={12} md={6} lg={4} xl={3}>
                    <Movie  
                    title={item.title}
                    episode_id={item.episode_id}
                    image={item.image}
                    opening_crawl={item.opening_crawl}
                    characters={item.characters}
                    />
                </Col>);
            })}
        </Row>
    </div>
  )
}

export default Home;