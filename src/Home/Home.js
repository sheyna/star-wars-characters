import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import PersonCard from '../PersonCard/PersonCard';
import './Home.css';

const initialPage = 1;

function Home() {
  const [ page, setPage ] = useState(initialPage);
  const [ people, setPeople ] = useState([]);

  useEffect(function() {
    async function getPeopleInfo() {
      let url = `https://swapi.dev/api/people/?page=${page}`;
      let res = await axios.get(url);
      setPeople(res.data.results)
    }
    getPeopleInfo();
  }, [page]);

  function next() {
    setPage(p => p + 1);
  }

  function previous() {
    setPage(p => p - 1);
  }
  return (
    <div className="home">
      <section className="page-content">
        {people.length && people.map((people, idx) => {
          return (
            <PersonCard 
              key={idx} 
              people={people}
            />
          );
        })}
      </section>
      <div className="pagination">
        {
          page > 1 
            ? <button onClick={previous}>Previous</button> 
            : null
        }
        {
          page < 9 
            ? <button onClick={next}>Next</button> 
            : null
        }
      </div>
    </div>
  );
  
}

export default Home;
