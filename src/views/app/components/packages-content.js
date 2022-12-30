import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import packageIcon1 from "assets/images/packages/icon1.png";
import flask from "assets/images/flask.png";
import { BsArrowRightShort } from "react-icons/bs";
import { Link } from "react-router-dom";
import { usePackages } from "hooks/packages";
import Loader from "./loader";


const PackagesContent = (props) => {
  const { defaultCity } = props;

  const [packageData, setPackageData] = useState(null);
  const { mutate: packages, isLoading: loading } = usePackages();

  const onFetchPackages = (searchParams) => {
    const nformData = JSON.stringify(searchParams);
    packages(nformData, {
      onSuccess: (data) => {
        setPackageData(data?.packages)
      }
    });
  }

  useEffect(() => {
    if (defaultCity) {
      const params = {
        "cityId": defaultCity,
        "package_name": null,
      }
      onFetchPackages(params);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defaultCity]);

  return (
    <section className="bg-light-orange">
      <Container>
        <Row>
          <Col>
            <h2 className="text-center">Our Packages</h2>
            <h3 className="text-center">Preventive Health Packages</h3>
          </Col>
        </Row>
        {loading ? <div className="common-loading"><Loader /></div> : packageData === undefined || packageData === null || packageData?.length === 0 ? (
          <div className="common-loading">
            <h3 className="no-data">No Data Found</h3>
          </div>
        ) : (
          <Row>
            {packageData?.map((common, a) => (
              <Col xs={12} sm={12} md={6} lg={4} key={a}>
                <Link to={`/package-details?discountFee=${common?.discountFees}&fee=${common?.fees}&packageId=${common?.id}&hide=hide`} className="package-slide">
                  <div className="icon-img">
                    <img src={packageIcon1} alt="" />
                  </div>
                  <h3>{common?.packageName}</h3>
                  <div className="inc-test">
                    <img src={flask} alt="" /> Includes {common?.test_count} tests
                  </div>
                  <p>
                    {common?.testLists}
                  </p>
                  <div className="pckge_price">
                    <span>{common?.discountFees === "0" ? null : (`₹${common?.discountFees}/-`)}</span> ₹{common?.fees}/-
                    <Link to={`/package-details?discountFee=${common?.discountFees}&fee=${common?.fees}&packageId=${common?.id}&hide=hide`} className="viewbtn">
                      <BsArrowRightShort className="text-white" />
                    </Link>
                  </div>
                </Link>
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </section >
  );
}


export default PackagesContent;
