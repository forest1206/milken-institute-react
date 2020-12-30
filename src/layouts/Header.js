import React from 'react';
import { Nav } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

export default function Header() {
    const history = useHistory();

    return (
        <div className="container-fluid p-4">
            <Nav defaultActiveKey="/" as="ul" onSelect={(key) => history.push(`/${key}`)}>
                <Nav.Item as="li">
                    <Nav.Link href="/">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link eventKey="contents">Contents</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link eventKey="centers">Centers</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link eventKey="livestream">Livestream</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link eventKey="nav">NavMenu</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    );
}
