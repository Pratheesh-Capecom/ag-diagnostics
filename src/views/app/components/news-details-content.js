import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNewsId } from "hooks/news";
import { useParams } from "react-router-dom";


const NewsDetailsContent = () => {


  const { id } = useParams();
  const { data: news, isLoading: loading } = useNewsId(id);

  return (
    <section className="bg-light-orange">
      <Container>
        {loading ? "Loading...." :
          <Row className="justify-content-center">
            <Col xs={12} sm={12} md={12} lg={10} xl={8}>
              <div className="mar-bot-30">
                <a
                  href={news?.event?.news_url}
                  className="booklet-download"
                  data-fancybox="images-preview"
                  data-thumbs='{"autoStart":true}'
                >
                  <img className="d-block w-100" src={news?.event?.photo} alt="" />
                </a>
              </div>
              <h3 className="text-start mar-bot-20">
                {news?.event?.event_name}
              </h3>
              <p>
                {news?.event?.description}
              </p>
            </Col>
          </Row>}
      </Container>
    </section>
  );
}

export default NewsDetailsContent;
