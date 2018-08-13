import React from 'react'
import { Container, Row, Col, Navbar, NavbarBrand, Media, Button } from 'reactstrap'
import { PasswordResetForm, UniversalFooter, UniversalNav } from 'rf-components'
import { Link } from 'react-router-dom'

const PasswordResetPage = () => (
    <div>
        <header>
            <UniversalNav basic />
        </header>
        <Container style={{ marginBottom: '10rem', minHeight: '60vh' }}>
            <Row>
                <Col
                    xs={{ size: 10, offset: 1 }}
                    md={{ size: 8, offset: 2 }}
                    lg={{ size: 6, offset: 3 }}
                    className="text-center my-5">
                    <h1>Password Reset</h1>
                    <p>
                        Enter your <strong>RadioFlag username</strong>, or the{' '}
                        <strong>email address</strong> that you used to register. We'll send you an
                        email with your username and a link to reset your password.
                    </p>
                </Col>
                <Col
                    xs={{ size: 10, offset: 1 }}
                    md={{ size: 8, offset: 2 }}
                    lg={{ size: 6, offset: 3 }}>
                    <PasswordResetForm />
                </Col>
            </Row>
        </Container>
        <UniversalFooter />
    </div>
)

export default PasswordResetPage
