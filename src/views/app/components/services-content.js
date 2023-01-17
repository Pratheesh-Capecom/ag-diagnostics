import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import { useService } from "hooks/service";
import Loader from "./loader";


const ServicesContent = (props) => {

    const { defaultCity } = props;
    const [tableData, setTableData] = useState([]);
    const { mutate: table, isLoading: loading } = useService();

    const onFetchPackages = (searchParams) => {
        const nformData = JSON.stringify(searchParams);
        table(nformData, {
            onSuccess: (data) => {
                setTableData(data?.test)
            }
        });
    }

    useEffect(() => {
        if (table) {
            setTableData(table?.test)
        }
    }, [table]);


    useEffect(() => {
        if (defaultCity) {
            const params = {
                "cityId": defaultCity,
            }
            onFetchPackages(params);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [defaultCity]);

    return (
        <>
            {loading ? <div className="table-center"><Loader /></div> : tableData === undefined || tableData === null || tableData?.length === 0 ? (
                <div className="table-center">
                    <h3 className="no-data">No Data Found</h3>
                </div>
            ) : (
                <section>
                    <Container>
                        <Row className="justify-content-center">
                            <Col xs={12} sm={12} md={12} lg={10}>
                                <div className="services-table">
                                    <Table striped>
                                        <thead>
                                            <tr>
                                                <th>SL #</th>
                                                <th>Test Code</th>
                                                <th>Test Name</th>
                                                <th width="100">₹ Price</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {tableData?.map((common, a) => (
                                                <tr key={a}>
                                                    <td>{common?.id}</td>
                                                    <td>{common?.testCode}</td>
                                                    <td>{common?.testName}</td>
                                                    <td>₹ {common?.fees}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </Table>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            )}
        </>
    );
}

export default ServicesContent;