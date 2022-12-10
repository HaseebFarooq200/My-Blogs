import 'bootstrap/dist/css/bootstrap.min.css';
import { React, Nav, Navbar, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'
import { UserContext } from '../App';
import { useContext } from 'react';


export default function Navs() {
  const {state} = useContext(UserContext)

  const RenderMenu = () => {
    if (state) {
      return (
        <>
          <LinkContainer to="/Home">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>

          <LinkContainer to="/About">
            <Nav.Link>Blogs</Nav.Link>
          </LinkContainer>

          <LinkContainer to="/Contact">
            <Nav.Link>Contact</Nav.Link>
          </LinkContainer>

          <LinkContainer to="/Logout">
            <Nav.Link>Logout</Nav.Link>
          </LinkContainer>
        </>
      )
    }
    else {
      return (
        <>
          <LinkContainer to="/">
            <Nav.Link>Sign in</Nav.Link>
          </LinkContainer>
        </>
      )
    }
  }
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid >
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="my-2 my-lg-0 " style={{ maxHeight: '100px', marginLeft: 'auto' }} navbarScroll>
            <RenderMenu />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}
