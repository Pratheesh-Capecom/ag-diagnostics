import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import packageIcon1 from "assets/images/packages/icon1.png";
import packageIcon2 from "assets/images/packages/icon2.png";
import packageIcon3 from "assets/images/packages/icon3.png";
import packageIcon4 from "assets/images/packages/icon4.png";
import packageIcon5 from "assets/images/packages/icon5.png";
import packageIcon6 from "assets/images/packages/icon6.png";
import packageIcon7 from "assets/images/packages/icon7.png";
import packageIcon8 from "assets/images/packages/icon8.png";
import packageIcon9 from "assets/images/packages/icon9.png";
import packageIcon10 from "assets/images/packages/icon10.png";
import packageIcon11 from "assets/images/packages/icon11.png";
import packageIcon12 from "assets/images/packages/icon12.png";
import packageIcon13 from "assets/images/packages/icon13.png";
import packageIcon14 from "assets/images/packages/icon14.png";
import packageIcon15 from "assets/images/packages/icon15.png";
import packageIcon16 from "assets/images/packages/icon16.png";
import packageIcon17 from "assets/images/packages/icon17.png";
import packageIcon18 from "assets/images/packages/icon18.png";
import packageIcon19 from "assets/images/packages/icon19.png";
import flask from "assets/images/flask.png";
import { BsArrowRightShort } from "react-icons/bs";
import { Link } from "react-router-dom";


const PackagesContent = () => {

  return (
    <section className="bg-light-orange">
      <Container>
        <Row>
          <Col>
            <h2 className="text-center">Our Packages</h2>
            <h3 className="text-center">Preventive Health Packages</h3>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={6} lg={4}>
            <Link to="/package-details" className="package-slide">
              <div className="icon-img">
                <img src={packageIcon1} alt="" />
              </div>
              <h3>AG-CARE BASIC</h3>
              <div className="inc-test">
                <img src={flask} alt="" /> Includes 8 tests
              </div>
              <p>
                Hemogram, Blood Sugar (Fasting), Cholesterol, Triglycerides &
                4 more tests
              </p>
              <div className="pckge_price">
                <span>₹1690/-</span> ₹1250/-
                <Link to="/package-details" className="viewbtn">
                  <BsArrowRightShort className="text-white" />
                </Link>
              </div>
            </Link>
          </Col>
          <Col xs={12} sm={12} md={6} lg={4}>
            <Link to="/package-details" className="package-slide">
              <div className="icon-img">
                <img src={packageIcon2} alt="" />
              </div>
              <h3>AG-CARE ESSENTIAL</h3>
              <div className="inc-test">
                <img src={flask} alt="" /> Includes 9 tests
              </div>
              <p>
                Hemogram, Blood Sugar (Fasting), Lipid Profile (Mini), Liver
                Function Tests & 5 more tests
              </p>
              <div className="pckge_price">
                <span>₹1690/-</span> ₹1250/-
                <Link to="/package-details" className="viewbtn">
                  <BsArrowRightShort className="text-white" />
                </Link>
              </div>
            </Link>
          </Col>
          <Col xs={12} sm={12} md={6} lg={4}>
            <Link to="/package-details" className="package-slide">
              <div className="icon-img">
                <img src={packageIcon3} alt="" />
              </div>
              <h3>AG-CARE ESSENTIAL EXTENDED</h3>
              <div className="inc-test">
                <img src={flask} alt="" /> Includes 11 tests
              </div>
              <p>
                Hemogram, Blood Sugar (Fasting), Lipid Profile (Maxi), Liver
                Function Tests & 7 more tests
              </p>
              <div className="pckge_price">
                <span>₹1690/-</span> ₹1250/-
                <Link to="/package-details" className="viewbtn">
                  <BsArrowRightShort className="text-white" />
                </Link>
              </div>
            </Link>
          </Col>
          <Col xs={12} sm={12} md={6} lg={4}>
            <Link to="/package-details" className="package-slide">
              <div className="icon-img">
                <img src={packageIcon4} alt="" />
              </div>
              <h3>
                AG-CARE MASTER <span>(Male above 40 years)</span>
              </h3>
              <div className="inc-test">
                <img src={flask} alt="" /> Includes 11 tests
              </div>
              <p>
                Hemogram, ESR, Blood Sugar (Fasting), Lipid Profile (Mini) & 7
                more tests
              </p>
              <div className="pckge_price">
                <span>₹1690/-</span> ₹1250/-
                <Link to="/package-details" className="viewbtn">
                  <BsArrowRightShort className="text-white" />
                </Link>
              </div>
            </Link>
          </Col>
          <Col xs={12} sm={12} md={6} lg={4}>
            <Link to="/package-details" className="package-slide">
              <div className="icon-img">
                <img src={packageIcon5} alt="" />
              </div>
              <h3>
                AG-CARE MADAM <span>(Female above 40 years)</span>
              </h3>
              <div className="inc-test">
                <img src={flask} alt="" /> Includes 11 tests
              </div>
              <p>
                Hemogram, ESR, Blood Sugar (Fasting), Lipid Profile (Mini) & 7
                more tests
              </p>
              <div className="pckge_price">
                <span>₹1690/-</span> ₹1250/-
                <Link to="/package-details" className="viewbtn">
                  <BsArrowRightShort className="text-white" />
                </Link>
              </div>
            </Link>
          </Col>
          <Col xs={12} sm={12} md={6} lg={4}>
            <Link to="/package-details" className="package-slide">
              <div className="icon-img">
                <img src={packageIcon6} alt="" />
              </div>
              <h3>AG-CARE SOULMATE INDIVIDUAL</h3>
              <div className="inc-test">
                <img src={flask} alt="" /> Includes 6 tests
              </div>
              <p>
                Hemogram, Blood Group, Abnormal Haemoglobin Study with Iron
                TIBC & 3 more tests
              </p>
              <div className="pckge_price">
                <span>₹1690/-</span> ₹1250/-
                <Link to="/package-details" className="viewbtn">
                  <BsArrowRightShort className="text-white" />
                </Link>
              </div>
            </Link>
          </Col>
          <Col xs={12} sm={12} md={6} lg={4}>
            <Link to="/package-details" className="package-slide">
              <div className="icon-img">
                <img src={packageIcon7} alt="" />
              </div>
              <h3>AG-CARE SOULMATE COUPLE</h3>
              <div className="inc-test">
                <img src={flask} alt="" /> Includes 6 tests
              </div>
              <p>
                Hemogram, Blood Group, Abnormal Haemoglobin Study with Iron
                TIBC & 3 more tests
              </p>
              <div className="pckge_price">
                <span>₹1690/-</span> ₹1250/-
                <Link to="/package-details" className="viewbtn">
                  <BsArrowRightShort className="text-white" />
                </Link>
              </div>
            </Link>
          </Col>
          <Col xs={12} sm={12} md={6} lg={4}>
            <Link to="/package-details" className="package-slide">
              <div className="icon-img">
                <img src={packageIcon8} alt="" />
              </div>
              <h3>AG-CARE BABY PLAN (MALE)</h3>
              <div className="inc-test">
                <img src={flask} alt="" /> Includes 7 tests
              </div>
              <p>
                Hemogram, Blood Group, Abnormal Haemoglobin Study with Iron
                TIBC & 4 more tests
              </p>
              <div className="pckge_price">
                <span>₹1690/-</span> ₹1250/-
                <Link to="/package-details" className="viewbtn">
                  <BsArrowRightShort className="text-white" />
                </Link>
              </div>
            </Link>
          </Col>
          <Col xs={12} sm={12} md={6} lg={4}>
            <Link to="/package-details" className="package-slide">
              <div className="icon-img">
                <img src={packageIcon9} alt="" />
              </div>
              <h3>AG-CARE BABY PLAN (FEMALE)</h3>
              <div className="inc-test">
                <img src={flask} alt="" /> Includes 9 tests
              </div>
              <p>
                Hemogram, Blood Group, Abnormal Haemoglobin Study with Iron
                TIBC & 6 more tests
              </p>
              <div className="pckge_price">
                <span>₹1690/-</span> ₹1250/-
                <Link to="/package-details" className="viewbtn">
                  <BsArrowRightShort className="text-white" />
                </Link>
              </div>
            </Link>
          </Col>
          <Col xs={12} sm={12} md={6} lg={4}>
            <Link to="/package-details" className="package-slide">
              <div className="icon-img">
                <img src={packageIcon10} alt="" />
              </div>
              <h3>AG-CARE FOR CANCER (MALE)</h3>
              <div className="inc-test">
                <img src={flask} alt="" /> Includes 12 tests
              </div>
              <p>
                Hemogram, Thyroglobulin, Calcitonin, Acid Phosphatase & 8 more
                tests
              </p>
              <div className="pckge_price">
                <span>₹1690/-</span> ₹1250/-
                <Link to="/package-details" className="viewbtn">
                  <BsArrowRightShort className="text-white" />
                </Link>
              </div>
            </Link>
          </Col>
          <Col xs={12} sm={12} md={6} lg={4}>
            <Link to="/package-details" className="package-slide">
              <div className="icon-img">
                <img src={packageIcon11} alt="" />
              </div>
              <h3>AG-CARE FOR CANCER (FEMALE)</h3>
              <div className="inc-test">
                <img src={flask} alt="" /> Includes 12 tests
              </div>
              <p>
                Hemogram, Thyroglobulin, Calcitonin, Calcium & 8 more tests
              </p>
              <div className="pckge_price">
                <span>₹1690/-</span> ₹1250/-
                <Link to="/package-details" className="viewbtn">
                  <BsArrowRightShort className="text-white" />
                </Link>
              </div>
            </Link>
          </Col>
          <Col xs={12} sm={12} md={6} lg={4}>
            <Link to="/package-details" className="package-slide">
              <div className="icon-img">
                <img src={packageIcon12} alt="" />
              </div>
              <h3>AG-CARE CHEENI KUM (MINI)</h3>
              <div className="inc-test">
                <img src={flask} alt="" /> Includes 8 tests
              </div>
              <p>
                Hemogram, Blood Sugar Fasting, Blood Sugar PP & 5 more tests
              </p>
              <div className="pckge_price">
                <span>₹1690/-</span> ₹1250/-
                <Link to="/package-details" className="viewbtn">
                  <BsArrowRightShort className="text-white" />
                </Link>
              </div>
            </Link>
          </Col>
          <Col xs={12} sm={12} md={6} lg={4}>
            <Link to="/package-details" className="package-slide">
              <div className="icon-img">
                <img src={packageIcon13} alt="" />
              </div>
              <h3>AG-CARE CHEENI KUM (MAXI)</h3>
              <div className="inc-test">
                <img src={flask} alt="" /> Includes 9 tests
              </div>
              <p>
                Hemogram, Blood Sugar Fasting, Blood Sugar PP & 6 more tests
              </p>
              <div className="pckge_price">
                <span>₹1690/-</span> ₹1250/-
                <Link to="/package-details" className="viewbtn">
                  <BsArrowRightShort className="text-white" />
                </Link>
              </div>
            </Link>
          </Col>
          <Col xs={12} sm={12} md={6} lg={4}>
            <Link to="/package-details" className="package-slide">
              <div className="icon-img">
                <img src={packageIcon14} alt="" />
              </div>
              <h3>AG-CARE DIL KI DHADKAN</h3>
              <div className="inc-test">
                <img src={flask} alt="" /> Includes 7 tests
              </div>
              <p>Hemogram, ESR, Blood Sugar (Fasting) & 4 more tests</p>
              <div className="pckge_price">
                <span>₹1690/-</span> ₹1250/-
                <Link to="/package-details" className="viewbtn">
                  <BsArrowRightShort className="text-white" />
                </Link>
              </div>
            </Link>
          </Col>
          <Col xs={12} sm={12} md={6} lg={4}>
            <Link to="/package-details" className="package-slide">
              <div className="icon-img">
                <img src={packageIcon15} alt="" />
              </div>
              <h3>AG-CARE HOLISTIC PACKAGE</h3>
              <div className="inc-test">
                <img src={flask} alt="" /> Includes 14 tests
              </div>
              <p>
                Hemogram, Blood Sugar (Fasting), HbA1c, BUN & 10 more tests
              </p>
              <div className="pckge_price">
                <span>₹1690/-</span> ₹1250/-
                <Link to="/package-details" className="viewbtn">
                  <BsArrowRightShort className="text-white" />
                </Link>
              </div>
            </Link>
          </Col>
          <Col xs={12} sm={12} md={6} lg={4}>
            <Link to="/package-details" className="package-slide">
              <div className="icon-img">
                <img src={packageIcon16} alt="" />
              </div>
              <h3>AG-CARE MASTER COMPREHENSIVE</h3>
              <div className="inc-test">
                <img src={flask} alt="" /> Includes 18 tests
              </div>
              <p>
                Hemogram, ESR, Urine Routine exam, Blood Sugar Fasting & 14
                more tests
              </p>
              <div className="pckge_price">
                <span>₹1690/-</span> ₹1250/-
                <Link to="/package-details" className="viewbtn">
                  <BsArrowRightShort className="text-white" />
                </Link>
              </div>
            </Link>
          </Col>
          <Col xs={12} sm={12} md={6} lg={4}>
            <Link to="/package-details" className="package-slide">
              <div className="icon-img">
                <img src={packageIcon17} alt="" />
              </div>
              <h3>AG-CARE MASTER COMPREHENSIVE ADVANCE</h3>
              <div className="inc-test">
                <img src={flask} alt="" /> Includes 20 tests
              </div>
              <p>
                Hemogram, ESR, Urine Routine exam, Blood Sugar Fasting & 16
                more tests
              </p>
              <div className="pckge_price">
                <span>₹1690/-</span> ₹1250/-
                <Link to="/package-details" className="viewbtn">
                  <BsArrowRightShort className="text-white" />
                </Link>
              </div>
            </Link>
          </Col>
          <Col xs={12} sm={12} md={6} lg={4}>
            <Link to="/package-details" className="package-slide">
              <div className="icon-img">
                <img src={packageIcon18} alt="" />
              </div>
              <h3>AG-CARE MADAM COMPREHENSIVE</h3>
              <div className="inc-test">
                <img src={flask} alt="" /> Includes 18 tests
              </div>
              <p>
                Hemogram, ESR, Urine Routine exam, Blood Sugar Fasting & 14
                more tests
              </p>
              <div className="pckge_price">
                <span>₹1690/-</span> ₹1250/-
                <Link to="/package-details" className="viewbtn">
                  <BsArrowRightShort className="text-white" />
                </Link>
              </div>
            </Link>
          </Col>
          <Col xs={12} sm={12} md={6} lg={4}>
            <Link to="/package-details" className="package-slide">
              <div className="icon-img">
                <img src={packageIcon19} alt="" />
              </div>
              <h3>AG-CARE MADAM COMPREHENSIVE ADVANCE</h3>
              <div className="inc-test">
                <img src={flask} alt="" /> Includes 21 tests
              </div>
              <p>
                Hemogram, ESR, Urine Routine exam, Blood Sugar Fasting & 17
                more tests
              </p>
              <div className="pckge_price">
                <span>₹1690/-</span> ₹1250/-
                <Link to="/package-details" className="viewbtn">
                  <BsArrowRightShort className="text-white" />
                </Link>
              </div>
            </Link>
          </Col>
          <Col xs={12} sm={12} md={6} lg={4}>
            <Link to="/package-details" className="package-slide">
              <div className="icon-img">
                <img src={packageIcon14} alt="" />
              </div>
              <h3>AG-CARE DIL KI DHADKAN ADVANCE</h3>
              <div className="inc-test">
                <img src={flask} alt="" /> Includes 10 tests
              </div>
              <p>Hemogram, ESR, Blood Sugar Fasting & 7 more tests</p>
              <div className="pckge_price">
                <span>₹1690/-</span> ₹1250/-
                <Link to="/package-details" className="viewbtn">
                  <BsArrowRightShort className="text-white" />
                </Link>
              </div>
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
}


export default PackagesContent;
