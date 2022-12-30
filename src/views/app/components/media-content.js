import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { HiArrowNarrowRight } from "react-icons/hi";
import NewsImage1 from "assets/images/dummy-pdf.jpg";
import { useMedia } from "hooks/media";
import Loader from "./loader";

const MediaContent = () => {

  const { data: media, isLoading: loading } = useMedia();
  const [mediaData, setMediaData] = useState([]);

  useEffect(() => {
    if (media) {
      setMediaData(media?.media)
    }
  }, [media]);

  return (
    <section className="bg-light-orange">
      <Container>
        <Row className={mediaData === undefined || mediaData === null || mediaData?.length === 0 ? ' justify-content-center empty-pack' : 'justify-content-center'}>
          {loading ? <div className="txt-center"><Loader /></div> : mediaData === undefined || mediaData === null || mediaData?.length === 0 ? (
            <div>
              <h3 className="no-data">No Data Found</h3>
            </div>
          ) : mediaData?.map((common, a) => (
            <Col xs={12} sm={6} md={6} lg={4} xl={3} key={a}>
              <div className="package-slide small-size">
                <a
                  rel="noreferrer"
                  href={common?.pdf}
                  target="_blank"
                  className="booklet-download"
                >
                  {common?.pdf ? <img src={common?.pdf} alt="" className="img-fluid" /> : <img src={NewsImage1} alt="" className="img-fluid" />}
                  <h4>{common?.story_title}</h4>
                  <span>
                    <HiArrowNarrowRight />
                  </span>
                </a>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}


export default MediaContent;
