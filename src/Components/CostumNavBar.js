import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function CostumNavBar() {
  const styledNav = {
    boxShadow: "0 6px 10px rgba(0,0,0,.08), 0 0 6px rgba(0,0,0,.05)",
    position: "fixed",
    top: "0",
    width: "100%",
    overflow: "hidden",
    zIndex: "2000",

  };
  return (
    <Navbar bg="light" expand="lg" style={styledNav}>
      <Container>
        <Navbar.Brand href="/">Poké-Site</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/team">Team</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CostumNavBar;
