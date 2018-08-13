/**
 * Created by basavarajy on 8/14/17.
 */
import React from 'react'
import { Container, Row, Col, Media, Button } from 'reactstrap'
import { AppDownload, RadioStars, NavigationBar, Footer } from 'rf-components'

import { Link } from 'react-router-dom'

const HomePage = () => (
    <div className="appContainer">
        <NavigationBar transparent={true} />
        <div id="home">
            <header id="intro">
                <div className="view">
                    <picture>
                        <source media="(min-width: 768px)" srcSet="img/new/banner.png" />
                        <source media="(min-width: 480px)" srcSet="img/new/banner-bg@3x.png" />
                        <Media
                            object
                            src="img/new/banner-bg@2x.png"
                            className="img-fluid banner-bg w-100"
                        />
                    </picture>
                    <div className="mask">
                        <div className="mask-content">
                            <h4>Connective Listening</h4>
                            <p>
                                {' '}
                                A social radio network for active listeners<br />
                                and creators of audio content with intent.
                            </p>
                        </div>
                    </div>
                </div>
            </header>
            <main>
                <section id="prod-services">
                    <Container fluid={true} className="p-0">
                        <h4 className="text-center">
                            DISCOVER, LISTEN, SHARE AND <br />CONNECT GLOBALLY
                        </h4>
                        <Row noGutters={true}>
                            <Col lg={6} md={6} sm={12} xs={12} id="for_listeners">
                                <div className="view">
                                    <picture>
                                        <source
                                            media="(max-width: 768px)"
                                            srcSet="img/products-services/for-listeners-mobile.png"
                                        />
                                        <Media
                                            object
                                            src="img/products-services/for-listeners.png"
                                            width="100%"
                                        />
                                    </picture>
                                    <div className="mask">
                                        <Link
                                            to="/for-listeners"
                                            className="d-block d-md-none phone-touch-div"
                                        />
                                        <div className="mask-content">
                                            <div>
                                                <p>FOR</p>
                                                <p>Listeners</p>
                                                <p>
                                                    Listen anytime anywhere{' '}
                                                    <span className="d-none d-md-inline">
                                                        , access fresh and unique content and
                                                        connect with an international user base
                                                        around common interests
                                                    </span>
                                                    <Link to="/for-listeners">
                                                        <span className="d-none d-md-inline">
                                                            <br />LEARN MORE{' '}
                                                        </span>&gt;
                                                    </Link>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={6} md={6} sm={12} xs={12} className="no-gutters">
                                <Col id="for_djs">
                                    <div className="view">
                                        <picture>
                                            <source
                                                media="(max-width: 768px)"
                                                srcSet="img/products-services/djs-promoters-mobile.png"
                                            />
                                            <Media
                                                object
                                                src="img/products-services/for-artists.png"
                                                width="100%"
                                            />
                                        </picture>
                                        <div className="mask">
                                            <Link
                                                to="/for-djs"
                                                className="d-block d-md-none phone-touch-div"
                                            />

                                            <div className="mask-content">
                                                <div>
                                                    <p>FOR</p>
                                                    <p>DJs & Presenters</p>
                                                    <p>
                                                        Promote your show and content<span className="d-none d-md-inline">
                                                            , interact with listeners everywhere and
                                                            expand your audience globally
                                                        </span>
                                                        <Link to="/for-djs">
                                                            <span className="d-none d-md-inline">
                                                                <br />LEARN MORE{' '}
                                                            </span>{' '}
                                                            &gt;
                                                        </Link>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col id="for_artists">
                                    <div className="view">
                                        <picture>
                                            <source
                                                media="(max-width: 768px)"
                                                srcSet="img/products-services/for-artists-mobile.png"
                                            />
                                            <Media
                                                object
                                                src="img/products-services/for-artists.png"
                                                width="100%"
                                            />
                                        </picture>
                                        <div className="mask">
                                            <Link
                                                to="/for-artists"
                                                className="d-block d-md-none phone-touch-div"
                                            />
                                            <div className="mask-content">
                                                <div>
                                                    <p>FOR</p>
                                                    <p>Music Artists</p>
                                                    <p>
                                                        Showcase your band<span className="d-none d-md-inline">
                                                            , get airplay from radio DJ's introduce
                                                            listeners to your music and grow your
                                                            fan base worldwide.
                                                        </span>
                                                        <Link to="/for-artists">
                                                            <span className="d-none d-md-inline">
                                                                <br />LEARN MORE{' '}
                                                            </span>{' '}
                                                            &gt;
                                                        </Link>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section id="app-download">
                    <AppDownload />
                </section>
                <section id="social-radio">
                    <Container fluid={true}>
                        <h4 className="text-center">
                            SOCIAL RADIO ENTERPRISE <br className="d-block d-md-none" />SOLUTIONS<span className="d-none d-md-block">
                                POWERED BY RADIOFLAG
                            </span>
                        </h4>
                        <Row noGutters={true}>
                            <Col xs={6} className="no-gutters">
                                <Col id="powering_music_sports">
                                    <div className="view">
                                        <picture>
                                            <source
                                                media="(min-width: 768px)"
                                                srcSet="/img/social-radio/powering-music.png"
                                            />
                                            <Media
                                                object
                                                src="img/social-radio/powering-music.png"
                                                width="100%"
                                            />
                                        </picture>
                                        <div className="mask">
                                            <Link
                                                to="/powering-music"
                                                className="d-block d-md-none phone-touch-div"
                                            />
                                            <div className="mask-content">
                                                <p>POWERING</p>
                                                <p>MUSIC & SPORTS</p>
                                                <p className="d-none d-md-block">
                                                    Stream content directly to your fans anytime.
                                                    Broadcast eventslive iwth your own branded
                                                    social radio platform
                                                    <br />
                                                    <Link to="/powering-music">LEARN MORE ></Link>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col id="powering_brands">
                                    <div className="view">
                                        <picture>
                                            <source
                                                media="(min-width: 768px)"
                                                srcSet="/img/social-radio/powering-brands.png"
                                            />
                                            <Media
                                                object
                                                src="img/social-radio/powering-brands.png"
                                                className="img-fluid"
                                                width="100%"
                                                height="100%"
                                            />
                                        </picture>
                                        <div className="mask">
                                            <Link
                                                to="/powering-brands"
                                                className="d-block d-md-none phone-touch-div"
                                            />
                                            <div className="mask-content">
                                                <p>POWERING</p>
                                                <p>BRANDS</p>
                                                <p className="d-none d-md-block">
                                                    Deliver your message worldwide, grow brand
                                                    awareness and interact with a new audience with
                                                    your own internet radio station<br />
                                                    <Link to="/powering-brands">LEARN MORE></Link>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Col>
                            <Col xs={6} id="powering_education">
                                <div className="view">
                                    <picture>
                                        <source
                                            media="(min-width: 768px)"
                                            srcSet="/img/social-radio/powering-education.png"
                                        />
                                        <Media
                                            object
                                            src="img/social-radio/powering-education.png"
                                            width="100%%"
                                            height="100%"
                                            className="img-fluid"
                                        />
                                    </picture>
                                    <div className="mask">
                                        <Link
                                            to="/powering-education"
                                            className="d-block d-md-none phone-touch-div"
                                        />
                                        <div className="mask-content">
                                            <p>POWERING</p>
                                            <p>EDUCATION</p>
                                            <p className="d-none d-md-block">
                                                Connect students and teachers anywhere - anytime.
                                                Enable remote radio education access to students in
                                                area of the world with challending circumstances<br />
                                                <Link to="/powering-education">LEARN MORE ></Link>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section id="radioflag-banner">
                    <Container fluid={true} className="p-0">
                        <Row noGutters={true}>
                            <Col sm={12} className="d-none d-md-block">
                                <div className="view text-center">
                                    <Media
                                        object
                                        src="/img/new/app-banner2.png"
                                        width="100%"
                                        className="img-fluid"
                                    />
                                    <div className="mask">
                                        <div className="mask-content">
                                            <div>
                                                <h4>
                                                    CONTENT CREATORS, GET YOUR OWN <br />STATION &
                                                    BRANDED SOCIAL RADIO APP
                                                </h4>
                                                <p>
                                                    {' '}
                                                    and start streaming your programming <br />all
                                                    powered by RadioFlag.
                                                </p>
                                                <Button
                                                    size="sm"
                                                    className="btn-responsive rf-button">
                                                    GET YOURS NOW
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section id="word-art">
                    <Media object src="/img/new/wordart.png" className="img-fluid" />
                </section>
                <section id="our-vision">
                    <Container fluid={true} className="p-0">
                        <h4 className="text-center">OUR VISION</h4>
                        <Row className="row-eq-height m-0">
                            <Col sm={6} className="d-none d-md-block">
                                <h5>
                                    Watch our talk at Tedx on the<br />
                                    campus of Monmouth University
                                </h5>
                                <p>
                                    To connect and introduce to new ideas and local perspectives
                                    from around the world, opening ears to not only news, education,
                                    information, entertainment, sports, emerging artists and fresh
                                    sound, but also new cultures entirely
                                </p>
                            </Col>
                            <Col xs={12} md={{ size: 6, offset: 0 }}>
                                <iframe
                                    src="https://www.youtube.com/embed/W7qWa52k-nE"
                                    frameBorder="0"
                                    allowFullScreen
                                />
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section id="radio-stars">
                    <Container fluid={true} className="p-0">
                        <h4 className="text-center">OUR RADIOSTARS</h4>
                        <Row noGutters={true}>
                            <Col sm={12}>
                                <RadioStars />
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section id="radio-dj">{/**/}</section>
            </main>
        </div>
        <Footer />
    </div>
)

export default HomePage
