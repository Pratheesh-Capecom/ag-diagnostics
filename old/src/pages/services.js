import React, { Component } from "react";
import ServicesBanner from "../components/services-banner";
import ServicesContent from "../components/services-content";

class Services extends Component {
    render() {
        return (
            <>
                <ServicesBanner />
                <ServicesContent />
            </>
        );
    }
}

export default Services;