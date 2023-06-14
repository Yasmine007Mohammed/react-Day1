import { Container, Row, Col, Card } from "react-bootstrap";
import React from "react";
import img1 from './images/image1.png'
import img2 from './images/images2.png'
import img3 from './images/image3.png'
import img4 from './images/image4.jpg'
import img5 from './images/image5.png'
import img6 from './images/image6.png'


function Services() {
    return(
        <>
            <Container >
                    <div className="d-flex justify-content-center">
                        <h1 className="text-white p-3" >My Services</h1>
                    </div>
                    <div>
                    <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque auctor eleifend aliquet. Vivamus vitae consectetur elit. Donec placerat </p>
                    </div>
                    <Row className="mt-5">
                        <Col className="md-4" >
                            <Card className="p-3 text-white" style={{backgroundColor:'rgb(39, 37, 37)'}}>
                                <div className="d-flex flex-row mb-3"><div class="d-flex flex-column ml-2"><span></span><span class="text-black-50"></span><span class="ratings"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></span></div>
                                </div>
                                <img src={img1} alt="" />
                                <h2 className="text-center">Web Development</h2>
                                <div className="text-center">Biog,E-commerce</div>
                            </Card>
                        </Col>
                        <Col className="md-4">
                            <Card className="p-4 text-white" style={{backgroundColor:'rgb(39, 37, 37)'}}>
                                <div className="d-flex flex-row mb-3 "><div class="d-flex flex-column ml-2"><span></span><span class="text-black-50"></span><span class="ratings"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></span></div>
                                </div>
                                <img src={img2} alt="" />
                                <h2 className="text-center">UI,UX Design</h2>
                                <div className="text-center">Mobile app, website design</div>
                            </Card>
                        </Col>
                        <Col className="md-4">
                            <Card className="p-3 text-white" style={{backgroundColor:'rgb(39, 37, 37)'}}>
                                <div className="d-flex flex-row mb-3"><div class="d-flex flex-column ml-2"><span></span><span class="text-black-50"></span><span class="ratings"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></span></div>
                                </div>
                                <img src={img3} alt="" />
                                <h2 className="text-center">Sound Design</h2>
                                <div className="text-center">Voice over, Beat making</div>
                            </Card>
                        </Col>
                        <Col className="md-4">
                            <Card className="p-3 text-white" style={{backgroundColor:'rgb(39, 37, 37)'}}>
                                <div className="d-flex flex-row mb-3"><div class="d-flex flex-column ml-2"><span></span><span class="text-black-50"></span><span class="ratings"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></span></div>
                                </div>
                                <img src={img4} alt="" />
                                <h2 className="text-center">Game Design</h2>
                                <div className="text-center">character Design, props&objects</div>
                            </Card>
                        </Col>
                        <Col className="md-4">
                            <Card className="p-3 text-white" style={{backgroundColor:'rgb(39, 37, 37)'}}>
                                <div className="d-flex flex-row mb-3"><div class="d-flex flex-column ml-2"><span></span><span class="text-black-50"></span><span class="ratings"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></span></div>
                                </div>
                                <img src={img5} alt="" />
                                <h2 className="text-center">Photography</h2>
                                <div className="text-center">Portrate, product peotography</div>
                            </Card>
                        </Col>
                        <Col className="md-4">
                            <Card className="p-3 text-white" style={{backgroundColor:'rgb(39, 37, 37)'}}>
                                <div className="d-flex flex-row mb-3"><div class="d-flex flex-column ml-2"><span></span><span class="text-black-50"></span><span class="ratings"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></span></div>
                                </div>
                                <img src={img6} alt="" />
                                <h2 className="text-center">Advertising</h2>
                                <div className="text-center">Voice over,Beat making </div>
                            </Card>
                        </Col>
                    </Row>

            </Container>
        </>
    )
}
export default Services