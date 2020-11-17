import React from 'react'
import { Link } from 'react-router-dom';
import {
Navbar,
Nav,
NavItem,
NavbarBrand,
Container
} from 'reactstrap'

export const Heading = () => {
    return (
        <Navbar color="dark" dark>
            <Container>
                <NavbarBrand href='/'>My Person</NavbarBrand>
                <Nav>
                    <NavItem>
                        <Link className='btn btn-primary' to='/addperson'>Add Person</Link>
                    </NavItem>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Heading;