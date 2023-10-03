import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './PersonDetail.css';
import PropTypes from 'prop-types';

// withParams function from: https://stackoverflow.com/a/72961184/5047481
function withParams(Component) {
  return (props) => <Component {...props} params={useParams()} />;
}

function getHomePlanet(planet) {
  const planetNames = ["Tatooine", "Alderaan", "Yavin IV", "Hoth", "Dagobah", "Bespin", "Endor", "Naboo","Coruscant", "Kamino", "Geonosis", "Utapau", "Mustafar", "Kashyyyk", "Polis Massa", "Mygeeto", "Felucia", "Cato Neimoidia", "Saleucami", "Stewjon", "Eriadu", "Corellia", "Rodia", "Nal Hutta", "Dantooine", "Bestine IV", "Ord Mantell", "unknown", "Trandosha", "Socorro", "Mon Cala", "Chandrila", "Sullust", "Toydaria", "Malastare", "Dathomir", "Ryloth", "Aleen Minor", "Vulpter", "Troiken", "Tund", "Haruun Kal", "Cerea", "Glee Anselm", "Iridonia", "Tholoth", "Iktotch", "Quermia", "Dorin", "Champala", "Mirial", "Serenno", "Concord Dawn", "Zolan", "Ojom", "Skako", "Muunilinst", "Shili", "Kalee", "Umbara", "Jakku"]
  const url = planet;
  let planetNum = url.split('/').reverse()[1];
  planetNum = planetNum - 1;
  const finalPlanet = planetNames[planetNum];
  return (
    <span>
      {finalPlanet}
    </span>
  );
};

function getFilmList(films) {
  const filmNames = ["A New Hope", "The Empire Strikes Back", "Return of the Jedi", "The Phantom Menace", "Attack of the Clones", "Revenge of the Sith", "The Force Awakens", "The Last Jedi", "The Rise of Skywalker"];
  let finalFilmList = [];
  films.forEach(film => {
    let filmNum = film.split('/').reverse()[1];
    filmNum = filmNum - 1;
    finalFilmList.push(filmNames[filmNum]);
  })
  let componetizedFilmList = finalFilmList.map((finalFilmList, idx) => {
      return (
        <span key={idx}>
          {finalFilmList}{idx < (films.length - 1) && ','} 
        </span>
      )
  })
  return (
    <span>
      {componetizedFilmList}
    </span>
  );
};

function PersonDetail() {
  const [ person, setPerson ] = useState({});
  const { name, height, mass, hair_color, skin_color, eye_color, birth_year, gender, homeworld, films } = person;

  const params = useParams();
  const peopleId = params.peopleId;
  const backgroundStyles = {
    backgroundImage: 'url(\'/characters/character-' + peopleId + '.jpg\')',
  };

  useEffect(function() {
    async function getPersonInfo() {
      let url = `https://swapi.dev/api/people/${params.peopleId}/`;
      let res = await axios.get(url);
      setPerson(res.data);
    }
    getPersonInfo();
  }, [params]);

  return (
    <div className="page-content">
        <section className="person-detail">
          <div className="content">
            <h1>{name}</h1>
            <aside className="stats">
              <h2>Vital Stats</h2>
              <div className="stats--shape">
                <div className="stat--chart">
                  <dl><dt>Height:</dt><dd>{height} cm</dd></dl>
                  <dl><dt>Mass:</dt><dd>{mass} kg</dd></dl>
                  <dl><dt>Hair color:</dt><dd>{hair_color}</dd></dl>
                  <dl><dt>Skin color:</dt><dd>{skin_color}</dd></dl>
                </div>
                <div className="stat--chart">
                  <dl><dt>Eye color:</dt><dd>{eye_color}</dd></dl>
                  <dl><dt>Birth year:</dt><dd>{birth_year}</dd></dl>
                  <dl><dt>Gender:</dt><dd>{gender}</dd></dl>
                  <dl><dt>Homeworld:</dt>{homeworld ? getHomePlanet(homeworld) : "unknown"}<dd></dd></dl>
                </div>
                <div className="stat--notes">
                  <p> Appears in: <span className="emph">{films ? getFilmList(films) : "none" }</span></p>
                </div>
              </div>
            </aside>
          </div>

          <div className="media" style={backgroundStyles}>
            <div className="styleized-font">{name}</div>
            <div className="styleized-font">{name}</div>
          </div>
        </section>
      </div>
  )
}

PersonDetail.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string.isRequired,
    height: PropTypes.string,
    mass: PropTypes.string,
    hair_color: PropTypes.string,
    skin_color: PropTypes.string,
    eye_color: PropTypes.string,
    birth_year: PropTypes.string,
    gender: PropTypes.string,
    homeworld: PropTypes.string,
    films: PropTypes.arrayOf(PropTypes.string)
  })
};

export default withParams(PersonDetail);
