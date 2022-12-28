import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import { useService } from "hooks/service";

const ServicesContent = () => {

    const { data: table, isLoading: loading } = useService();

    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        if (table) {
            setTableData(table?.test)
        }
    }, [table]);

    return (
        <>
            <section>
                <Container>
                    <Row className="justify-content-center">
                        <Col xs={12} sm={12} md={12} lg={10}>
                            <Table striped hover>
                                <thead>
                                    <tr>
                                        <th>SL #</th>
                                        <th>Test Code</th>
                                        <th>Test Name</th>
                                        <th>₹ Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {loading ? <h1>Loading... </h1> : tableData === undefined || tableData === null || tableData?.length === 0 ? (
                                        <div className="d-flex">
                                            <h3 className="no-data">No Data Found</h3>
                                        </div>
                                    ) : tableData?.map((common, a) => (
                                        <tr key={a}>
                                            <td>{common?.id}</td>
                                            <td>{common?.testCode}</td>
                                            <td>{common?.testName}</td>
                                            <td>₹ {common?.fees}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default ServicesContent;