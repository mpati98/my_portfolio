import { Col, Container, Row } from "react-bootstrap"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import meter1 from "../assets/img/meter1.svg"
import meter2 from "../assets/img/meter2.svg"
import meter3 from "../assets/img/meter3.svg"
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return(
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                    <div className="skill-bx">
                        <h2>
                            Skills
                        </h2>
                        <p>Web development is a dynamic and creative field that offers many opportunities and challenges for web developers. Web developers need to constantly learn new skills and technologies, as well as follow the best practices and standards for web development. Web development can also be fun and rewarding, as web developers can create websites that serve various purposes and audiences, such as e-commerce, social media, education, entertainment, and more.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image"></img>
                                <h5>Web Dummy Development</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image"></img>
                                <h5>AI Dummy Development</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image"></img>
                                <h5>Data Engineer Intern</h5>
                            </div>
                        </Carousel>
                    </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp}></img>
        </section>
    )
} 