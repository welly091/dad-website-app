import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'

export default () =>{  
    return (
        // <div className="container ">
        //     <nav className='navbar navbar-expand-lg navbar-light'>
        //         <a className="navbar-brand">山水老師</a>
        //         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu" >
        //             <span className="navbar-toggler-icon"></span>
        //         </button>
        //         <div className="collapse navbar-collapse nav-justified" id="navmenu">
        //             <Link className="nav-item nav-link text-secondary" to="/">Home</Link>
        //             <Link className="nav-item nav-link text-secondary" to="/about">About</Link>
        //             <Link className="nav-item nav-link text-secondary" to="/classes">Classes</Link>
        //             <Link className="nav-item nav-link text-secondary" to="/contact">Contact Me</Link>
        //         </div>
        //     </nav>
        // </div>
        <Navbar bg='light' expand='lg'>
            <Container>
                <Navbar.Brand href='/'>山水老師</Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav'/>
                <Navbar.Collapse id="basic-navbar-nav" className='nav-justified' >
                    <Nav.Link className="text-secondary" href="/">Home</Nav.Link>
                    <Nav.Link className="text-secondary" href="/about">About</Nav.Link>
                    <Nav.Link className="text-secondary" href="/classes">Classes</Nav.Link>
                    <Nav.Link className="text-secondary" href="/Contact">Contact Me</Nav.Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
  
}
