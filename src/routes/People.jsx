import {
  NavLink,
} from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Card from 'react-bootstrap/Card';
import {
  getPeople,
}
  from '../services/people';
import '../style.css';
import SearchBox from '../components/SearchBox';

function People() {
  const [search, setSearch] = useState('');
  const [people, setPeople] = useState([]);
  useEffect(() => {
    getPeople().then((personas) => setPeople(personas));
  }, []);
  const filterPeople = people.filter((person) => person.name.toLowerCase()
    .includes(search.toLowerCase()));
  return (
    <div>
      <SearchBox
        placeholder="Búsqueda People"
        onSearchChange={(e) => setSearch(e.target.value)}
      />
      <h1 className="text-center">Listado People</h1>
      <div className="row">
        {filterPeople.map((person) => (
          <Card className="carta" key={person.id}>
            <NavLink
              to={`${person.id}`}
            >
              <Card.Img className="imagen" variant="top" src={person.image ? person.image.original : 'src\\img\\no-image.jpg'} />
              <Card.Body>
                <Card.Title className="texto-carta">{person.name}</Card.Title>
              </Card.Body>
            </NavLink>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default People;
