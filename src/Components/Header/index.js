import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './index.css'
function Header() {
  return (
    <Navbar fixed='top' expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>
            <Link className='text-dark' to='/'>
                Logo
            </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
          >
             <Nav.Link>
                <Link className='text-dark text-decoration-none' to='/fulfilment'>
                    Fulfilment
                </Link>
            </Nav.Link>
            <Nav.Link>
                <Link className='text-dark text-decoration-none' to='/withdraw'>
                    Withdraw
                </Link>
            </Nav.Link>
            <Nav.Link>
                <Link className='text-dark text-decoration-none' to='/buy-offer'>
                    Buy Offer
                </Link>
            </Nav.Link>
            <Nav.Link>
                <Link className='text-dark text-decoration-none' to='/sell-offer'>
                    Sell Offer
                </Link>
            </Nav.Link >
          </Nav>
            <Button variant="outline-dark">Connect Wallet</Button>
            <Button className='bg-dark text-white ms-3 border-none' variant='outline-dark'>
                <Link className='text-white text-decoration-none' to='/signup'>
                    Sign up
                </Link>
            </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;