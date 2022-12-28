import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { HiArrowNarrowRight } from 'react-icons/hi';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { AiOutlineFileSearch } from 'react-icons/ai';
import { useNews } from "hooks/news";
import { dateFormat, yearFormat } from "helpers/commonFunctions";
import { useForm } from "react-hook-form";

const NewsContent = () => {

    const { register, handleSubmit } = useForm();
    const [newsData, setNewsData] = useState(null);
    const [year, setYear] = useState(null);
    const [month, setMonth] = useState(null);
    const [initValues, setInitValues] = useState({ "year": year, "month": month, });
    const { mutate: news, isLoading: loading } = useNews();

    const onFetchNews = (searchParams) => {
        const nformData = JSON.stringify(searchParams);
        news(nformData, {
            onSuccess: (data) => {
                setNewsData(data?.event)
            }
        });
    }

    const changeHandler = (e) => {
        initValues.year = e.year;
        initValues.month = e.month;
        let data = { ...initValues };
        setInitValues(data);
        setYear(e.year)
        setMonth(e.month)
    }

    useEffect(() => {
        onFetchNews(initValues);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [year, month]);


    return (
        <>
            <section className="bg-purple pad-top-20 pb-0">
                <Container>
                    <form onSubmit={handleSubmit(changeHandler)} className="contact-form">
                        <Row className="justify-content-end">
                            <Col xs={12} sm={6} md={4} lg={4} xl={3} className="pad-bot-20">
                                <div className="d-flex align-items-center justify-content-between">
                                    {/* <span className="text-nowrap text-white">Year: &nbsp;</span> */}
                                    <Form.Select {...register("year")} className="border-0">
                                        <option>- Select Year -</option>
                                        <option value="2022">2022</option>
                                        <option value="2021">2021</option>
                                    </Form.Select>
                                </div>
                            </Col>
                            <Col xs={12} sm={6} md={5} lg={4} xl={3} className="pad-bot-20">
                                <div className="d-flex align-items-center justify-content-between">
                                    {/* <span className="text-nowrap text-white">Month : &nbsp;</span> */}
                                    <Form.Select className="border-0" {...register("month")}>
                                        <option>- Select Month -</option>
                                        <option value="1">January</option>
                                        <option value="2">February</option>
                                        <option value="3">March</option>
                                        <option value="4">April</option>
                                        <option value="5">May</option>
                                        <option value="6">June</option>
                                        <option value="7">July</option>
                                        <option value="8">August</option>
                                        <option value="9">September</option>
                                        <option value="10">October</option>
                                        <option value="11">November</option>
                                        <option value="12">December</option>
                                    </Form.Select>
                                </div>
                            </Col>
                            <Col xs={6} sm={6} md={3} lg={3} xl={2} className="pad-bot-20">
                                <Button type="submit" className="orange-btn hover-white border-0 mt-0 mb-0 w-100"><AiOutlineFileSearch /> Search</Button>
                            </Col>
                        </Row>
                    </form>
                </Container>
            </section>
            <section className="bg-light-orange">
                <Container>
                    <Row className={newsData === undefined || newsData === null || newsData?.length === 0 ? 'empty-pack' : null}>
                        <>
                            {loading ? <h1>Loading.... </h1> : newsData === undefined || newsData === null || newsData?.length === 0 ? (
                                <div className="d-flex">
                                    <h3 className="no-data">No Data Found</h3>
                                </div>
                            ) : newsData?.map((common, a) => (
                                <Col xs={12} sm={12} md={6} lg={6} xl={4} key={a}>
                                    <div className="package-slide small-size news-content">
                                        <Link to={`/news-details/${common?.id}`} className="booklet-download">
                                            <div className="date"><strong>{dateFormat(common?.start)}</strong> {yearFormat(common?.start)}</div>
                                            <h3>{common?.event_name}</h3>
                                            <p>{common?.description}</p>
                                            <span><HiArrowNarrowRight /></span>
                                        </Link>
                                    </div>
                                </Col>
                            ))}
                        </>

                    </Row>
                </Container>
            </section>
        </>
    );
}

export default NewsContent;