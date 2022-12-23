import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NewsDetailsImg1 from "assets/images/our-values-image1.jpg";
import NewsDetailsImg2 from "assets/images/our-values-image2.jpg";
import NewsDetailsImg3 from "assets/images/our-values-image3.jpg";
import NewsDetailsImg4 from "assets/images/our-values-image4.jpg";
import NewsDetailsImg5 from "assets/images/our-values-image5.jpg";


const NewsDetailsContent = () => {
  return (
    <section className="bg-light-orange">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} sm={12} md={12} lg={10} xl={8}>
            <div className="mar-bot-30">
              <a
                href={NewsDetailsImg2}
                className="booklet-download"
                data-fancybox="images-preview"
                data-thumbs='{"autoStart":true}'
              >
                <img className="d-block w-100" src={NewsDetailsImg2} alt="" />
              </a>
            </div>
            <div className="d-none">
              <a
                href={NewsDetailsImg1}
                className="booklet-download"
                data-fancybox="images-preview"
                data-thumbs={NewsDetailsImg1}
              >
                <img className="d-block w-100" src={NewsDetailsImg1} alt="" />
              </a>
              <a
                href={NewsDetailsImg3}
                className="booklet-download"
                data-fancybox="images-preview"
                data-thumbs={NewsDetailsImg3}
              >
                <img className="d-block w-100" src={NewsDetailsImg3} alt="" />
              </a>
              <a
                href={NewsDetailsImg4}
                className="booklet-download"
                data-fancybox="images-preview"
                data-thumbs={NewsDetailsImg4}
              >
                <img className="d-block w-100" src={NewsDetailsImg4} alt="" />
              </a>
              <a
                href={NewsDetailsImg5}
                className="booklet-download"
                data-fancybox="images-preview"
                data-thumbs={NewsDetailsImg5}
              >
                <img className="d-block w-100" src={NewsDetailsImg5} alt="" />
              </a>
            </div>
            <h3 className="text-start mar-bot-20">
              AG Diagnostics invites Franchisees for its network of collection
              centers across Pune
            </h3>
            <p>
              People residing in Pune urban, suburban and rural areas are
              welcome to send applications to become AG Diagnostics
              franchisees.
            </p>
            <p>
              In the year 1978, a young doctor- Dr. Ajit Golwilkar, dreamt of
              bringing world class pathology services to the city of Pune &
              founded his pathology laboratory on Karve Road, called Golwilkar
              Laboratories. His name has been considered as synonymous with
              quality laboratory services in Pune & the country for four over
              decades now. To begin with, the samples used to test with the
              then available basic diagnostic techniques, none the less
              maintaining highest accuracy and reliability. His endeavour had
              been to deliver results in shortest possible time and yet at
              affordable cost.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default NewsDetailsContent;
