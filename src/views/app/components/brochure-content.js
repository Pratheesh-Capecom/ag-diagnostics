import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FiDownload } from "react-icons/fi";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { useBrochure } from "hooks/brochure";

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
                <Row className={brochureDatas === undefined || brochureDatas === null || brochureDatas?.length === 0 ? ' justify-content-center empty-pack' : 'justify-content-center'}>
                  <>
                    {loading ? <h1>Loading.... </h1> : brochureDatas === undefined || brochureDatas === null || brochureDatas?.length === 0 ? (
                      <div className="d-flex">
                        <h3 className="no-data">No Data Found</h3>
                      </div>
                    ) : brochureDatas?.map((common, a) => (
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
              </Tab>
              <Tab eventKey="technical_leaflets" title="Technical Leaflets">
                <Row className={brochureDatas === undefined || brochureDatas === null || brochureDatas?.length === 0 ? ' justify-content-center empty-pack' : 'justify-content-center'}>
                  <>
                    {loading ? <h1>Loading.... </h1> : brochureDatas === undefined || brochureDatas === null || brochureDatas?.length === 0 ? (
                      <div className="d-flex">
                        <h3 className="no-data">No Data Found</h3>
                      </div>
                    ) : brochureDatas?.map((common, a) => (
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
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
