import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel';
import Banner1 from '../images/banners/Banner-1.webp';
import Banner2 from '../images/banners/Banner-2.webp';
import Banner3 from '../images/banners/Banner-3.webp';
import Banner4 from '../images/banners/Banner-4.webp';
import Banner1Mobile from '../images/banners/Banner-Mobile1.webp';
import Banner2Mobile from '../images/banners/Banner-Mobile2.webp';
import Banner3Mobile from '../images/banners/Banner-Mobile3.webp';
import Banner4Mobile from '../images/banners/Banner-Mobile4.webp';
import { Link } from 'react-router-dom';


class Homeslider extends Component {
    render() {
        return (
            <section className="home-slider-bg">
                            <Carousel fade className="d-none d-lg-block d-md-block">
                                <Carousel.Item>
                                    <Link to="/packages/">
                                        <img className="d-block w-100" src={Banner1} alt="" />
                                    </Link>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Link to="/packages/">
                                        <img className="d-block w-100" src={Banner2} alt="" />
                                    </Link>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Link to="/packages/">
                                        <img className="d-block w-100" src={Banner3} alt="" />
                                    </Link>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Link to="/packages/">
                                        <img className="d-block w-100" src={Banner4} alt="" />
                                    </Link>
                                </Carousel.Item>
                            </Carousel>
                            <Carousel fade className="d-block d-lg-none d-md-none">
                                <Carousel.Item>
                                    <Link to="/packages/">
                                        <img className="d-block w-100" src={Banner1Mobile} alt="" />
                                    </Link>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Link to="/packages/">
                                        <img className="d-block w-100" src={Banner2Mobile} alt="" />
                                    </Link>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Link to="/packages/">
                                        <img className="d-block w-100" src={Banner3Mobile} alt="" />
                                    </Link>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Link to="/packages/">
                                        <img className="d-block w-100" src={Banner4Mobile} alt="" />
                                    </Link>
                                </Carousel.Item>
                            </Carousel>
            </section>
        );
    }
}

export default Homeslider;