import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { GrLocation } from 'react-icons/gr';
import { AiOutlineFieldTime } from 'react-icons/ai';
import { FiPhoneCall } from 'react-icons/fi';
import { TbMap2 } from 'react-icons/tb';
import { useFindLab } from "hooks/findLab";
import { useCity } from "hooks/home";
import Loader from "./loader";


const FindALabContent = () => {

    const { data: city } = useCity();
    const { mutate: packages, isLoading: loading } = useFindLab();
    const [findData, setFindData] = useState(null);
    const [cityData, setCityData] = useState([]);
    // const [cityId, setCityId] = useState(localStorage.getItem("city_id") || "");
    const [cityId, setCityId] = useState("");
    const [searchKey, setSearchKey] = useState("");
    const [initValues, setInitValues] = useState({ "cityId": cityId, "search": searchKey, });

    const cityChangeHandler = (e) => {
        initValues.cityId = e.target.value;
        let data = { ...initValues };
        data.cityId = e.target.value;
        setInitValues(data);
        setCityId(e.target.value)
    }

    const searchHandler = (e) => {
        initValues.search = e.target.value;
        let data = { ...initValues };
        data.search = e.target.value;
        setInitValues(data);
        setSearchKey(e.target.value);
    }

    const onFetchPackages = (searchParams) => {
        const nformData = JSON.stringify(searchParams);
        packages(nformData, {
            onSuccess: (data) => {
                setFindData(data?.data)
            }
        });
    }

    useEffect(() => {
        if (city) {
            setCityData(city?.city)
        }
    }, [city]);

    useEffect(() => {
        onFetchPackages(initValues);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchKey, cityId]);

    return (
        <>
            <section className="bg-purple pad-top-20 pb-0">
                <Container>
                    <Row className="justify-content-between">
                        <Col xs={12} sm={12} md={6} lg={6} xl={5} className="pad-bot-20">
                            <div className="d-flex align-items-center justify-content-between">
                                <span className="text-nowrap text-white">Filter by: &nbsp;</span>
                                <Form.Select aria-label="select package" className="border-0" onChange={cityChangeHandler} >
                                    <option>-- Select Location --</option>
                                    {cityData && cityData.map((common, a) => (
                                        <option key={a} value={common?.cityId}>{common?.city}</option>
                                    ))}
                                    {/* selected={cityId === common?.cityId ? true : false} */}
                                </Form.Select>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6} xl={4} className="pad-bot-20">
                            <Form.Control type="text" className="border-0" placeholder="Search by Lab Title / Nearby" onChange={searchHandler} />
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="bg-light-orange pt-5">
                <Container>
                    <Row>
                        <Col>
                            <div className="main-lab-address">
                                <h3 className="mb-0 text-orange">Main Laboratory :</h3> &nbsp; <small><strong>A.G Diagnostics</strong> - "Nayantara", Opp. TVS showroom, Bhandarkar Road, Pune - 411 004</small>
                            </div>
                        </Col>
                    </Row>
                    {loading ? <div className="common-loading"><Loader /></div> : findData === undefined || findData === null || findData?.length === 0 ? (
                        <div className="common-loading">
                            <h3 className="no">No Data Found</h3>
                        </div>
                    ) : (
                        <Row>
                            {findData?.map((common, a) => (
                                <Col xs={12} sm={12} md={6} lg={6} xl={4} key={a}>
                                    <div className="package-slide">
                                        <h5 className="text-purple">{common?.location}<span>{common?.city}, {common?.state}</span></h5>
                                        <div className="location">
                                            <GrLocation /> {common?.address}
                                        </div>
                                        <div className="working-hours"><AiOutlineFieldTime /> <strong>Week Days:</strong> {common?.timing}
                                            <br />
                                            {/*<strong>Sunday:</strong> {common?.timing} */}
                                        </div>
                                        <div className="phone">
                                            <FiPhoneCall /> {common?.phone}
                                        </div>
                                        <a className="orange-btn" href={`https://maps.google.com/?q=${common?.latitude},${common?.longitude}`} target="_blank" rel="noreferrer">
                                            <TbMap2 /> Get Direction
                                        </a>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    )}
                </Container>
            </section>
        </>
    );
}


export default FindALabContent;