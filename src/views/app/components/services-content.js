import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import { useService } from "hooks/service";
import Loader from "./loader";
import { RiSearchLine } from "react-icons/ri";
import {StickyTable, Row, Cell} from 'react-sticky-table';

const ServicesContent = (props) => {
    const [query, setQuery] = useState("")
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
    const handleChange = (e) => {
        const results = tableData.filter(data => {
            if (e.target.value === "") return tableData
            return data.testName.toLowerCase().includes(e.target.value.toLowerCase())
        })
        setQuery(results)
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
                    <Container fluid>
                        <Row className="justify-content-center d-flex">
                            <Col xs={12} sm={12} md={12} lg={12} xl={11} className="text-center">
                                <div className="services-table">
                                <div className="services-search"><input type="search" name={query} onChange={handleChange} placeholder="Search Test Name"/> <RiSearchLine /></div>
                                <div style={{width: '100%', height: '600px'}}>
                                <StickyTable  stickyHeaderCount={1}>
                                    <Row className="table-header">
                                    <Cell>Test Code</Cell>
                                    <Cell>Test Name</Cell>
                                    <Cell>Details</Cell>
                                    <Cell>Sample</Cell>
                                    <Cell>Container</Cell>
                                    <Cell>QTY</Cell>
                                    <Cell>Storage</Cell>
                                    <Cell>Method</Cell>
                                    <Cell>Comments</Cell>
                                    <Cell className="text-right">₹ Price</Cell>
                                    </Row>
                                    {
                                                query ? query?.map((common, a) => (
                                                    <Row key={a}>
                                                        <Cell>{common?.testCode}</Cell>
                                                        <Cell>{common?.testName}</Cell>
														<Cell>{common?.details}</Cell>
														<Cell>{common?.sample}</Cell>
														<Cell>{common?.container}</Cell>
														<Cell>{common?.qty}</Cell>
														<Cell>{common?.storage}</Cell>
														<Cell>{common?.method}</Cell>
														<Cell>{common?.comments}</Cell>
                                                        <Cell>₹ {common?.fees}</Cell>
                                                    </Row>
                                                )) : tableData?.map((common, a) => (
                                                    <Row key={a}>
                                                        <Cell>{common?.testCode}</Cell>
                                                        <Cell>{common?.testName}</Cell>
														<Cell>{common?.details}</Cell>
														<Cell>{common?.sample}</Cell>
														<Cell>{common?.container}</Cell>
														<Cell>{common?.qty}</Cell>
														<Cell>{common?.storage}</Cell>
														<Cell>{common?.method}</Cell>
														<Cell>{common?.comments}</Cell>
                                                        <Cell>₹ {common?.fees}</Cell>
                                                    </Row>
                                                ))
                                            }
                                </StickyTable>
                                </div>
								
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