import React from "react";
import ava from "./img/ava.jpg";
import p11 from "./img/11.jpg";
import p12 from "./img/12.jpg";
import p13 from "./img/13.jpg";
import { Container, Button, Row, Col, Carousel } from "react-bootstrap";
import "./Home.css";

const Home = () => {
    return (
        <div className="page home">
            <div className="top">
                <Container>
                    <Col>
                        <Row>
                            <Col className="avaContainer" md={{ order: 12 }}>
                                <img className="ava" src={ava} alt="avatar" />
                            </Col>
                            <Col md={{ order: 1 }} className="topText">
                                <h3>Ваш персональный психолог</h3>
                                <h1>Елена Власова</h1>
                                <p>
                                    Я работаю в качестве консультирующего
                                    психолога с 2011 года. Являюсь
                                    сертифицированным клиническим и юнгианским
                                    психологом, действительным членом
                                    Общероссийской профессиональной
                                    психотерапевтической лиги (проверяемо на
                                    официальном сайте организации).
                                </p>
                            </Col>
                        </Row>
                        <Row className="justify-content-md-center buttonRow">
                            <Button variant="success">Узнать Больше</Button>
                            <Button variant="outline-secondary">
                                Записаться на консультацию
                            </Button>
                        </Row>
                    </Col>
                </Container>
            </div>
            <Carousel interval={3000}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={p11}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Пищевые расстройства</h3>
                        <p>Найти баланс и умеренность в питании</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={p12}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Расстройства сна</h3>
                        <p>Разобраться с новящевыми сноведениями</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={p13}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Жизненный путь</h3>
                        <p>Разобрать с мотивацией и целеустремлённостью</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            {/* <div>
                <h1>Next</h1>
            </div> */}
        </div>
    );
};

export default Home;
