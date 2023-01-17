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


    const { mutate: packages } = useHomeVisitPackageDropDown();
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



    const [testDropDown, setTestDropDown] = useState(null);
    const { mutate: testDropdown, isLoading: loading } = useService();

    const onFetch = (searchParams) => {
        const nformData = JSON.stringify(searchParams);
        testDropdown(nformData, {
            onSuccess: (data) => {
                setTestDropDown(data?.test)
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
        let data = packageData.filter(stu => stu.id === +e.target.value)
        setName(data?.[0])
    }

    const onChangeTest = (e) => {
        let data = testDropDown.filter(stu => stu.id === e)
        setTest(data?.[0])
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
                            history.push("/thank-you-home-visit")
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
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>I want to select package/ test/s.</Accordion.Header>
                                <Accordion.Body>
                                    <form onSubmit={handleSubmit(submitHandler)}>
                                        <Row>
                                            <Col xs={12} sm={12} md={6} lg={6} className="pb-4">
                                                <p className="mb-0 text-dark">Select Package</p>
                                                <DropdownMultiselect options={["Package 1", "Package 2", "Package 3", "Package 4", "Package 5", "Package 6"]} name="packages" /><br />
                                                <Form.Select aria-label="select package" {...register("packageId", { required: true })} onChange={onChangePackage}>

                                                    {id ? <option>{packagename}</option> : <option>-- Select Package --</option>}
                                                    {id ? null :
                                                        <>
                                                            {packageData && packageData.map((common, a) => (
                                                                <option key={a} value={common?.id}>{common?.packageName}</option>
                                                            ))}
                                                        </>
                                                    }
                                                </Form.Select>
                                                {errors.name && <span>This field is required</span>}
                                                <p className="selected-package">
                                                    Selected Package: <span>
                                                        {id ? <strong>{packagename}</strong> : null}
                                                        {id ? null : <strong>{name?.packageName || "Select Packages"}</strong>}
                                                        <strong className="text-orange orange-text">₹ {id ? null : (name?.fees || "0")} {amount}</strong></span>
                                                </p>
                                            </Col>
                                            <Col xs={12} sm={12} md={6} lg={6} className="pb-4">
                                                <p className="mb-0 text-dark">Search by Test Title</p>
                                                <DropdownMultiselect options={["Test 1", "Test 2", "Test 3", "Test 4", "Test 5", "Test 6"]} name="tests" /><br />
                                                <Select {...register("title")} placeholder={loading ? "Please Wait....." : "Search by Test Title"} filterOption={(input, option) => option?.children?.includes(input)} getPopupContainer={trigger => trigger.parentNode} disabled={loading} loading={loading} onChange={onChangeTest} showSearch>
                                                    {testDropDown && testDropDown?.map((common, a) => (
                                                        <Option key={a} value={common?.id}>{common?.testName}</Option>
                                                    ))}
                                                </Select>

                                                <p className="selected-package">
                                                    Selected Test: <span><strong>{test?.testName || "Select Test Name"}</strong>
                                                        <strong className="text-orange orange-text">₹ {test?.fees || "0"}</strong></span>
                                                </p>
                                            </Col>
                                            <Col xs={12} sm={12} md={12} lg={12}>
                                                <p className="services-table">
                                                    <Table striped className="mb-0">
                                                        <thead>
                                                            <tr>
                                                                <th>Selected Package</th>
                                                                <th>Package Price</th>
                                                                <th>Selected Test</th>
                                                                <th>Test Price</th>
                                                                <th className="text-center">Action</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>Package 1</td>
                                                                <td>₹ 3250</td>
                                                                <td>Test 1</td>
                                                                <td>₹ 1750</td>
                                                                <td className="text-center"><Button className="delete-btn" type="submit"><BsTrash /></Button></td>
                                                            </tr>
                                                            <tr>
                                                                <td>Package 2</td>
                                                                <td>₹ 3250</td>
                                                                <td>Test 2</td>
                                                                <td>₹ 1750</td>
                                                                <td className="text-center"><Button className="delete-btn" type="submit"><BsTrash /></Button></td>
                                                            </tr>
                                                            <tr>
                                                                <td>Package 3</td>
                                                                <td>₹ 3250</td>
                                                                <td>Test 3</td>
                                                                <td>₹ 1750</td>
                                                                <td className="text-center"><Button className="delete-btn" type="submit"><BsTrash /></Button></td>
                                                            </tr>
                                                            <tr>
                                                                <td>Package 4</td>
                                                                <td>₹ 3250</td>
                                                                <td>Test 4</td>
                                                                <td>₹ 1750</td>
                                                                <td className="text-center"><Button className="delete-btn" type="submit"><BsTrash /></Button></td>
                                                            </tr>
                                                            <tr>
                                                                <td><strong>Sub Total</strong></td>
                                                                <td><strong>₹ 3250</strong></td>
                                                                <td></td>
                                                                <td><strong>₹ 1750</strong></td>
                                                                <td></td>
                                                            </tr>
                                                            <tr>
                                                                <td className="text-end" colSpan={3}><h5 className="mb-0"><strong className="text-dark">Total</strong></h5></td>
                                                                <td><h5 className="mb-0"><strong className="text-dark">₹ 7750</strong></h5></td>
                                                                <td></td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                </p>
                                            </Col>
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
                                                <Form.Control type="text" {...register("first_name", { required: true })} placeholder="Enter Your City" />
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
                                                <Form.Control type="text" {...register("area", { required: true })} placeholder="Enter Your Locality / Area" />
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
                                            <Col xs={12} sm={12} md={6} lg={6} className="pb-4">
                                                <p className="mb-0 pb-2 text-dark">Gender</p>
                                                <Form.Check inline label="Male" type="radio" aria-label="radio 1" value="Male" {...register("gender", { required: true })} />
                                                <Form.Check inline label="Female" type="radio" aria-label="radio 1" value="Female"  {...register("gender", { required: true })} />
                                                {errors.gender && <span>This field is required</span>}
                                            </Col>
                                            <Col xs={12} sm={12} md={6} lg={6} className="pb-4">
                                                <p className="mb-0 text-dark">DOB</p>
                                                <Form.Control type="date" {...register("dob", { required: true })} name="dob" />
                                                {errors.dob && <span>This field is required</span>}
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
                                                <h4 className="mb-3 mt-3 pb-0">Lab Date / Timing Details</h4>
                                            </Col>

                                            <Col xs={12} sm={12} md={6} lg={6} className="pb-4">
                                                <p className="mb-0 text-dark">Time</p>
                                                <Form.Select aria-label="select time" {...register("timing", { required: true })}>
                                                    <option>-- Select Time --</option>
                                                    <option value="1">8:00am to 10:00am</option>
                                                    <option value="2">10:00am to 12:00am</option>
                                                    <option value="3">12:00pm to 2:00pm</option>
                                                    <option value="3">2:00pm to 4:00pm</option>
                                                    <option value="3">4:00pm to 6:00pm</option>
                                                </Form.Select>
                                                {errors.timing && <span>This field is required</span>}
                                            </Col>
                                            <Col xs={12} sm={12} md={12} lg={12}>
                                                <p className="text-center">
                                                    {btnloading ? <Button className="btn1" disabled><FaPaperPlane /> &nbsp; Book Home Visit</Button> : <Button className="btn1" type="submit"><FaPaperPlane /> &nbsp; Book Home Visit</Button>}
                                                </p>
                                            </Col>
                                        </Row>
                                    </form>

                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}


export default HomeVisitForm;