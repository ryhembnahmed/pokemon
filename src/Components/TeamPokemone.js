import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useSelector } from "react-redux";
import CardTeam from "./CardTeam";

function TeamPokemone() {
  const state = useSelector((state) => state);
  const styled = {
    display: "flex",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
    paddingTop: "80px",

  };
  return (
    <Container>
      <Row>
        <Col>
          <div style={styled}>
            {state.listItems.length > 0
              ? state.listItems.map((elt, i) => <CardTeam pokemone={elt} idx={i} key={i}/>)
              : "No member"}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default TeamPokemone;
