import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FiDownload } from "react-icons/fi";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { useBrochure } from "hooks/brochure";
import Loader from "./loader";
import CorpBroc from "assets/images/corporate-brochure.jpg";
import CorpBrocPdf from "assets/images/Corporate-Brochure-Dec-23.pdf";

export default function PackagesBookletContent() {

  const [brochureDatas, setBrochureDatas] = useState(null);
  const [upDate, setUpdate] = useState("package_booklets");
  const [initValues, setInitValues] = useState({ "type": upDate });
  const { mutate: brochure, isLoading: loading } = useBrochure();

  const onFetchPackages = (searchParams) => {
    const nformData = JSON.stringify(searchParams);
    brochure(nformData, {
      onSuccess: (data) => {
        setBrochureDatas(data?.data)
      }
    });
  }

  const handleSelect = (val) => {
    initValues.type = val;
    let data = { ...initValues };
    setInitValues(data);
    setUpdate(val)
  }

  useEffect(() => {
    onFetchPackages(initValues);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [upDate]);

  return (
    <section className="bg-light-orange">
      <Container>
        <Row>
          <Col>
            <Tabs defaultActiveKey="package_booklets" onSelect={handleSelect}>
              <Tab eventKey="package_booklets" title="Package Booklets">
                {loading ? <div className="common-loading"><Loader /></div> : brochureDatas === undefined || brochureDatas === null || brochureDatas?.length === 0 ? (
                  <div className="common-loading">
                    <h3 className="no-data">No Data Found</h3>
                  </div>
                ) : (
                  <Row className="justify-content-center top-pack">
                    <>
                      {brochureDatas?.map((common, a) => (
                        <Col xs={12} sm={6} md={6} lg={4} xl={3} key={a}>
                          <div className="package-slide">
                            <a href={common?.brochure} className="booklet-download" target="_blank" rel="noreferrer">
                              <img
                                src={common?.image}
                                alt=""
                                className="img-fluid"
                              />
                              <span>
                                <FiDownload />
                              </span>
                            </a>
                          </div>
                        </Col>
                      ))}
                    </>
                  </Row>
                )}
              </Tab>
              <Tab eventKey="technical_leaflets" title="Technical Leaflets">
                {loading ? <div className="common-loading"><Loader /></div> : brochureDatas === undefined || brochureDatas === null || brochureDatas?.length === 0 ? (
                  <div className="common-loading">
                    <h3 className="no-data">No Data Found</h3>
                  </div>
                ) : (
                  <Row className="justify-content-center">
                    <>
                      {brochureDatas?.map((common, a) => (
                        <Col xs={12} sm={6} md={6} lg={4} xl={3} key={a}>
                          <div className="package-slide">
                            <a href={common?.brochure} className="booklet-download" target="_blank" rel="noreferrer">
                              <img
                                src={common?.image}
                                alt=""
                                className="img-fluid"
                              />
                              <span>
                                <FiDownload />
                              </span>
                            </a>
                          </div>
                        </Col>
                      ))}
                    </>
                  </Row>)}

              </Tab>
              <Tab eventKey="corporate_brochure" title="Corporate Brochure">
                <Row className="justify-content-center">
                  <Col xs={12} sm={6} md={6} lg={4} xl={3}>
                    <div className="package-slide">
                    <a href={CorpBrocPdf} className="booklet-download" target="_blank" rel="noreferrer"> 
                    <img src={CorpBroc} alt="" className="img-fluid" />                            
                              <span>
                                <FiDownload />
                              </span>
                            </a>
                    </div>
                  </Col>
                </Row>
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
