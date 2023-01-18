import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FaPaperPlane } from 'react-icons/fa';
import { BsTrash } from 'react-icons/bs';
import { useForm } from "react-hook-form";
import { useHomeVisitPackageDropDown, useHomeVisit } from "hooks/homeVisit";
import { useService } from "hooks/service";
import { Select, message } from "antd";
import { useHistory } from "react-router-dom";
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";
import Table from 'react-bootstrap/Table';
import Accordion from "react-bootstrap/Accordion";

const { Option } = Select;

const HomeVisitForm = (props) => {
    const { defaultCity } = props;

    var url_string = window.location.href;
    var url = new URL(url_string);
    var id = url.searchParams.get("id");
    var packagename = url.searchParams.get("packagename");
    var amount = url.searchParams.get("amount");

    let history = useHistory();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();


    const { mutate: packages, isLoading: load } = useHomeVisitPackageDropDown();
    const [packageData, setPackageData] = useState(null);

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

    useEffect(() => {
        if (packagename) {
            document.getElementById('home-visit-form').scrollIntoView({ behavior: 'smooth', block: "start" });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [packagename]);



    const [testData, setTestData] = useState(null);
    const { mutate: testDropdown, isLoading: loading } = useService();

    const onFetch = (searchParams) => {
        const nformData = JSON.stringify(searchParams);
        testDropdown(nformData, {
            onSuccess: (data) => {
                setTestData(data?.test)
            }
        });
    }

    useEffect(() => {
        if (defaultCity) {
            const params = {
                "cityId": defaultCity,
            }
            onFetch(params);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [defaultCity]);




    const [name, setName] = useState(null)
    const [test, setTest] = useState(null)


    const onChangePackage = (e) => {
        let data = [];
        packageData?.length > 0 && packageData?.map((item) => {
            e?.forEach((val) => {
                if (item.id === val) {
                    data.push(item);
                }
            })
            return data;
        });
        setName(data);
    }

    const onChangeTest = (e) => {
        let data = [];
        testData?.length > 0 && testData?.map((item) => {
            e?.forEach((val) => {
                if (item.id === val) {
                    data.push(item);
                }
            })
            return data;
        });
        setTest(data);
    }




    const { mutate: addVisit, isLoading: btnloading } = useHomeVisit();
    const submitHandler = (e) => {
        if (e?.packageId === undefined || e?.packageId === null || e?.packageId === "-- Select Package --") {
            message.error("Kindly Select Package")
        } else if (test?.testName === undefined) {
            message.error("Kindly Select Search by Test Title")
        } else if (e?.timing === undefined || e?.timing === "-- Select Time --") {
            message.error("Kindly Select a timing")
        } else {
            const formData = new FormData();
            formData.append("packageId", (id ? id : e.packageId))
            formData.append("title", test?.testName)
            formData.append("first_name", e.first_name)
            formData.append("last_name", e.last_name)
            formData.append("email", e.email)
            formData.append("gender", e.gender)
            formData.append("mobile", e.mobile)
            formData.append("dob", e.dob)
            formData.append("address", e.address)
            formData.append("date", e.date)
            formData.append("timing", e.timing)
            addVisit(formData, {
                onSuccess: (item) => {
                    if (item?.Status === 200) {
                        message.success(item?.Message)
                        reset();
                        setName(null);
                        setTest(null);
                        setTimeout(() => {
                            history.push("/packages")
                        }, 1000);
                    }
                    else {
                        message.error(item?.Message)
                        reset();
                    }
                },
                onError: (error) => {
                    console.log(error)
                }
            });
        }
    }


    const packagetotal = name?.map((item) => item?.fees)?.reduce(
        (acc, cur) => Number(acc) + Number(cur),
        0) ?? 0;

    const testTotal = test?.map((item) => item?.fees)?.reduce(
        (acc, cur) => Number(acc) + Number(cur),
        0) ?? 0;

    const total = packagetotal + testTotal;

    const selectProps = {
        mode: 'multiple',
        placeholder: 'Select Item...',
        maxTagCount: 'responsive',
    };

    return (
        <section className="bg-light-orange" id="home-visit-form">
            <Container>
                <Row className="mb-4">
                    <Col>
                        <h2 className="text-center">Fill out this below Form and</h2>
                        <h3 className="text-center">Get tested in the comfort of your home</h3>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col xs={12} sm={12} md={12} lg={10} xl={9}>
                        <form onSubmit={handleSubmit(submitHandler)}>
                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>I want to select package/ test/s.</Accordion.Header>
                                    <Accordion.Body>
                                        <Row>
                                            <Col xs={12} sm={12} md={6} lg={6} className="pb-4">
                                                <p className="mb-0 text-dark">Select Package</p>
                                                {id ?
                                                    <Form.Control value={packagename} />
                                                    :
                                                    <Select
                                                        {...selectProps}
                                                        {...register("title")} mode="multiple" placeholder={load ? "Please Wait....." : "Search by Package Name"} filterOption={(input, option) => option?.children?.includes(input)} getPopupContainer={trigger => trigger.parentNode} disabled={loading} loading={loading} onChange={onChangePackage} showSearch>
                                                        <option>-- Select Package --</option>
                                                        {packageData && packageData.map((common, a) => (
                                                            <option key={a} value={common?.id}>{common?.packageName}</option>
                                                        ))}
                                                    </Select>}
                                            </Col>
                                            <Col xs={12} sm={12} md={6} lg={6} className="pb-4">
                                                <p className="mb-0 text-dark">Search by Test Title</p>
                                                <Select
                                                    {...selectProps}
                                                    {...register("title")} mode="multiple" placeholder={loading ? "Please Wait....." : "Search by Test Title"} filterOption={(input, option) => option?.children?.includes(input)} getPopupContainer={trigger => trigger.parentNode} disabled={loading} loading={loading} onChange={onChangeTest} showSearch>
                                                    {testData && testData?.map((common, a) => (
                                                        <Option key={a} value={common?.id}>{common?.testName}</Option>
                                                    ))}
                                                </Select>
                                            </Col>
                                            <Col xs={12} sm={12} md={12} lg={12}>

                                                {name || test || id ?
                                                    <p className="services-table">
                                                        <Table striped className="mb-0">
                                                            <thead>
                                                                <tr>
                                                                    <th>Name</th>
                                                                    <th>Type</th>
                                                                    <th>Price</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {name?.map((item, i) => (
                                                                    <tr key={i}>
                                                                        <td>{item?.packageName}</td>
                                                                        <td>Package</td>
                                                                        <td>{item?.fees}</td>
                                                                    </tr>
                                                                ))}
                                                                {test?.map((item, i) => (
                                                                    <tr key={i}>
                                                                        <td>{item?.testName}</td>
                                                                        <td>Test</td>
                                                                        <td>{item?.fees}</td>
                                                                    </tr>
                                                                ))}

                                                                {id ? <tr>
                                                                    <td>{packagename}</td>
                                                                    <td>Package</td>
                                                                    <td>{amount}</td>
                                                                </tr> : null}
                                                                <tr>
                                                                    <td className="text-end" colSpan={2}><h5 className="mb-0"><strong className="text-dark">Total</strong></h5></td>
                                                                    <td><h5 className="mb-0"><strong className="text-dark">{total && `₹ ${total}`} </strong></h5></td>
                                                                </tr>
                                                            </tbody>
                                                        </Table>
                                                    </p> : null}
                                            </Col>
                                        </Row>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                            <Row>

                                <Col xs={12} sm={12} md={12} lg={12}>
                                    <h4 className="mb-3 mt-3 pb-0">Patient Details</h4>
                                </Col>
                                <Col xs={12} sm={12} md={6} lg={6} className="pb-4">
                                    <p className="mb-0 text-dark">Visit Date <strong className="text-red">*</strong></p>
                                    <Form.Control type="date" {...register("date", { required: true })} name="date" />
                                    {errors.date && <span>This field is required</span>}
                                </Col>
                                <Col xs={12} sm={12} md={6} lg={6} className="pb-4">
                                    <p className="mb-0 text-dark">City <strong className="text-red">*</strong></p>
                                    <Form.Select aria-label="city" {...register("city", { required: true })}>
                                        <option>-- Select City --</option>
                                        <option value="1">City 1</option>
                                        <option value="2">City 2</option>
                                        <option value="3">City 3</option>
                                        <option value="3">City 4</option>
                                        <option value="3">City 5</option>
                                    </Form.Select>
                                    {errors.first_name && <span>This field is required</span>}
                                </Col>
                                <Col xs={12} sm={12} md={6} lg={6} className="pb-4">
                                    <p className="mb-0 text-dark">Locality / Area <strong className="text-red">*</strong></p>
                                    <Form.Select aria-label="area" {...register("area", { required: true })}>
                                        <option>-- Select Locality / Area --</option>
                                        <option value="1">Locality / Area 1</option>
                                        <option value="2">Locality / Area 2</option>
                                        <option value="3">Locality / Area 3</option>
                                        <option value="3">Locality / Area 4</option>
                                        <option value="3">Locality / Area 5</option>
                                    </Form.Select>
                                    {errors.last_name && <span>This field is required</span>}
                                </Col>
                                <Col xs={12} sm={12} md={6} lg={6} className="pb-4">
                                    <p className="mb-0 text-dark">Your Name <strong className="text-red">*</strong></p>
                                    <Form.Control type="text" {...register("last_name", { required: true })} placeholder="Enter Your Name" />
                                    {errors.last_name && <span>This field is required</span>}
                                </Col>
                                <Col xs={12} sm={12} md={6} lg={6} className="pb-4">
                                    <p className="mb-0 text-dark">Mobile Number <strong className="text-red">*</strong></p>
                                    <Form.Control type="tel" minlength="10" maxlength="10" {...register("mobile", { required: true })} placeholder="Enter Your Phone Number" />
                                    {errors.mobile && <span>This field is required</span>}
                                </Col>
                                <Col xs={12} sm={12} md={6} lg={6} className="pb-4">
                                    <p className="mb-0 text-dark">Email ID</p>
                                    <Form.Control type="email" {...register("email", { required: true })} placeholder="Enter Your Email Address" />
                                    {errors.email && <span>This field is required</span>}
                                </Col>
                                <Col xs={12} sm={12} md={12} lg={12} className="pb-4">
                                    <p className="mb-0 text-dark">Address</p>
                                    <Form.Control as="textarea" {...register("address", { required: true })} rows={3} />
                                    {errors.address && <span>This field is required</span>}
                                </Col>
                                <Col xs={12} sm={12} md={12} lg={12} className="pb-4">
                                    <p className="mb-0 text-dark">Remarks</p>
                                    <Form.Control as="textarea" {...register("remarks", { required: true })} rows={3} />
                                    {errors.address && <span>This field is required</span>}
                                </Col>
                                <Col xs={12} sm={12} md={12} lg={12}>
                                    <p className="text-center">
                                        {btnloading ? <Button className="btn1" disabled><FaPaperPlane /> &nbsp; Book Home Visit</Button> : <Button className="btn1" type="submit"><FaPaperPlane /> &nbsp; Book Home Visit</Button>}
                                    </p>
                                </Col>
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}


export default HomeVisitForm;