import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { addAction } from "../redux/Action";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function CardPokemone({ pokemone, team }) {
  const dispatch = useDispatch();
  const handleAdd = (pokemone) => {
    const found = team.find((elt) => elt.name == pokemone.name);
    //console.log(found);
    if (team.length >= 5) {
      alert("The team is full !");
    } else {
      if (found) {
        alert("The pokemon is already exist !");
      } else {
        dispatch(addAction(pokemone));
      }
    }
  };
  const navigate = useNavigate();
  const handleClick = (e) => {
    navigate(`/details/${pokemone.id}`);
  };

  const styledCard = {
    width: "18rem",
    marginBottom: "5%",
    boxShadow: "0 6px 10px rgba(0,0,0,.08), 0 0 6px rgba(0,0,0,.05)",
    textAlign: "center",
  };
  const styledImg = {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "50%",
  };
  return (
    <Card style={styledCard}>
      <h3 style={{textAlign: "center"}}>{pokemone.id}</h3>
      <Card.Img
        style={styledImg}
        variant="top"
        src={pokemone.sprites.front_default}
      />
      <Card.Body>
        <Card.Title>
          <strong>{pokemone.name}</strong>
        </Card.Title>
        <Button variant="success" onClick={handleClick}>
          See Details
        </Button>
        <Button
          variant="dark"
          style={{ marginLeft: "10px" }}
          onClick={() => handleAdd(pokemone)}
        >
          Add To Team
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CardPokemone;
