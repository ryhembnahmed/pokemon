import CardPokemone from "./CardPokemone";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useSelector } from "react-redux";
import Pagination from "../Pagination";

function List({ pokemones, nextUrl, prevUrl, setUrl, setPokeData }) {
  const state = useSelector((state) => state);

  const styled = {
    display: "flex",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
    marginBottom: "10px",
    paddingTop: "80px",
  };

  function goToNext() {
    setPokeData([]);
    setUrl(nextUrl);
  }
  function goToPrev() {
    setPokeData([]);
    setUrl(prevUrl);
  }

  return (
    <>
      <Container>
        <Row>
          <Col>
            <div style={styled}>
              {pokemones.length > 0
                ? pokemones.map((elt) => (
                    <CardPokemone
                      key={elt.id}
                      pokemone={elt}
                      team={state.listItems}
                    />
                  ))
                : "loading"}
            </div>
          </Col>
        </Row>
      </Container>
      <Pagination
        goToNext={nextUrl ? goToNext : null}
        goToPrev={prevUrl ? goToPrev : null}
      />
    </>
  );
}

export default List;
