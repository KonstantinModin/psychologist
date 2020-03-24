import React from "react";
import ava from "./img/ava.jpg";
import { Container, Button, Row, Col } from "react-bootstrap";
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
                                <h3>Lorem ipsum dolor sit amet</h3>
                                <h1>Repudiandae necessita</h1>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur,
                                    adipisicing elit. Repudiandae necessitatibus
                                    ullam eaque dolor perferendis enim odit
                                    tempora neque assumenda illo, fuga
                                    laudantium vel dolores numquam consequatur
                                    similique? Possimus, tempora praesentium.
                                </p>
                            </Col>
                        </Row>
                        <Row className="justify-content-md-center buttonRow">
                            <Button variant="primary">Узнать Больше</Button>
                            <Button variant="outline-primary">
                                Записаться на консультацию
                            </Button>
                        </Row>
                    </Col>
                </Container>
            </div>
            <div>
                <h1>Next</h1>
            </div>
        </div>
    );
};

export default Home;
