import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteAction } from "../redux/Action";

function CardTeam({ pokemone, idx }) {
  const navigate = useNavigate();
  const handleClick = (e) => {
    navigate(`/details/${pokemone.id}`);
  };
  const dispatch = useDispatch();
  const handleDelete = (idx) => {
    dispatch(deleteAction(idx));
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
          variant="danger"
          style={{ marginLeft: "10px" }}
          onClick={() => handleDelete(idx)}
        >
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CardTeam;
