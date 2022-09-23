import React from "react";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ProgressBar from "react-bootstrap/ProgressBar";

function Details({ pokemones }) {
  const { id } = useParams();
  const foundPokemone = pokemones.find((elt) => elt.id == id);
  //console.log(foundPokemone);
  return (
    <Card
      style={{
        width: "18rem",
        marginLeft: "40%",
        marginTop: "5%",
        marginBottom: "5%",
      }}
    >
      <h3>{foundPokemone.order}</h3>
      <Card.Img
        variant="top"
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${foundPokemone.id}.svg`}
      />
      <Card.Body>
        <Card.Title>{foundPokemone.name}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>
          <strong>Type:</strong>
          {foundPokemone.abilities.map((poke) => {
            return <h6>{poke.ability.name}</h6>;
          })}
        </ListGroup.Item>
        <ListGroup.Item>
          <strong>Stats:</strong>
          {foundPokemone.stats.map((poke) => {
            return (
              <>
                <h6>{poke.stat.name}</h6>
                <ProgressBar variant="success" now={poke.base_stat} />
              </>
            );
          })}
        </ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="/">Back</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default Details;
