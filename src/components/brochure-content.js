import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PackagesBooket from '../images/packages-booklet-image1.jpg';
import { Link } from 'react-router-dom';
import { FiDownload } from 'react-icons/fi';
import Pdf from '../images/diagnostics.pdf';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import AllergyLeaflet from '../images/brochures/Allergy-Leaflet.jpg';
import AllergyLeafletPdf from '../images/brochures/Allergy-Leaflet.pdf';
import AutoimmuneDiseasePanelLeaflet from '../images/brochures/Autoimmune-Disease-Panel-Leaflet.jpg';
import AutoimmuneDiseasePanelLeafletPdf from '../images/brochures/Autoimmune-Disease-Panel-Leaflet.pdf';
import BiofirelatestAugust from '../images/brochures/Biofire-latest-August-2022.jpg';
import BiofirelatestAugustPdf from '../images/brochures/Biofire-latest-August-2022.pdf';
import CovidLeafletJuly from '../images/brochures/Covid-A4-Leaflet-July-2022.jpg';
import CovidLeafletJulyPdf from '../images/brochures/Covid-A4-Leaflet-July-2022.pdf';
import FoodIntolerance from '../images/brochures/Food-Intolerance-Leaflet-2022.jpg';
import FoodIntolerancePdf from '../images/brochures/Food-Intolerance-Leaflet-2022.pdf';
import JAK2Leaflet from '../images/brochures/JAK2-Leaflet.jpg';
import JAK2LeafletPdf from '../images/brochures/JAK2-Leaflet.pdf';
import OBGGyncLeaflet from '../images/brochures/OBG-Gync-A4-leaflet.jpg';
import OBGGyncLeafletPdf from '../images/brochures/OBG-Gync-A4-leaflet.pdf';
import PigeonPoster from '../images/brochures/Pigeon-Poster-2022.jpg';
import PigeonPosterPdf from '../images/brochures/Pigeon-Poster-2022.pdf';
import SQASDFJuly from '../images/brochures/SQA-SDF-July-2022.jpg';
import SQASDFJulyPdf from '../images/brochures/SQA-SDF-July-2022.pdf';
import ThalassemiaLeaflet from '../images/brochures/Thalassemia-Leaflet-2022.jpg';
import ThalassemiaLeafletPdf from '../images/brochures/Thalassemia-Leaflet-2022.pdf';
import TuberculosisBooklet from '../images/brochures/Tuberculosis-Booklet-2022.jpg';
import TuberculosisBookletPdf from '../images/brochures/Tuberculosis-Booklet-2022.pdf';
import WheatGlutenAllergyJuly from '../images/brochures/Wheat-Gluten-Allergy-July-2022.jpg';
import WheatGlutenAllergyJulyPdf from '../images/brochures/Wheat-Gluten-Allergy-July-2022.pdf';


export default function PackagesBookletContent() {
    const brochures = [
        { id: 1, image: AllergyLeaflet, file: AllergyLeafletPdf },
        { id: 2, image: AutoimmuneDiseasePanelLeaflet, file: AutoimmuneDiseasePanelLeafletPdf },
        { id: 3, image: BiofirelatestAugust, file: BiofirelatestAugustPdf },
        { id: 4, image: CovidLeafletJuly, file: CovidLeafletJulyPdf },
        { id: 5, image: FoodIntolerance, file: FoodIntolerancePdf },
        { id: 6, image: JAK2Leaflet, file: JAK2LeafletPdf },
        { id: 7, image: OBGGyncLeaflet, file: OBGGyncLeafletPdf },
        { id: 8, image: PigeonPoster, file: PigeonPosterPdf },
        { id: 9, image: SQASDFJuly, file: SQASDFJulyPdf },
        { id: 10, image: ThalassemiaLeaflet, file: ThalassemiaLeafletPdf },
        { id: 11, image: TuberculosisBooklet, file: TuberculosisBookletPdf },
        { id: 12, image: WheatGlutenAllergyJuly, file: WheatGlutenAllergyJulyPdf },
    ];

    return (
        <section className="bg-light-orange">
            <Container>
                <Row>
                    <Col>
                        <Tabs
                            defaultActiveKey="package-booklets">
                            <Tab eventKey="package-booklets" title="Package Booklets">
                                <Row className="justify-content-center">     
                                    <Col xs={12} sm={6} md={6} lg={4} xl={3}>
                                        <div className="package-slide">
                                            <Link to={Pdf} target="_blank" className="booklet-download">
                                                <img src={PackagesBooket} alt="" className="img-fluid" />
                                                <span><FiDownload /></span>
                                            </Link>
                                        </div>
                                    </Col>
                                </Row>
                            </Tab>
                            <Tab eventKey="technical-leaflets" title="Technical Leaflets">
                                <Row className="justify-content-center">
                                    {brochures.map(brochure => {
                                        return (
                                            <Col xs={12} sm={6} md={6} lg={4} xl={3}>
                                                <div key={brochure.id} className="package-slide">
                                                    <Link to={brochure.file} target="_blank" className="booklet-download">
                                                        <img src={brochure.image} alt="" className="img-fluid" />
                                                        <span><FiDownload /></span>
                                                    </Link>
                                                </div>
                                            </Col>
                                        );
                                    })}
                                </Row>
                            </Tab>
                        </Tabs>
                    </Col>
                </Row>
            </Container>

            
        </section>
    );
}