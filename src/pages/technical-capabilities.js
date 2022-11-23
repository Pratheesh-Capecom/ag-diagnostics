import React, { Component } from "react";
import TechnicalCapabilitiesBanner from "../components/technical-capabilities-banner";
import TechnicalCapabilitiesContent from "../components/technical-capabilities-content";

class TechnicalCapabilities extends Component {
    render() {
        return (
            <>
                <TechnicalCapabilitiesBanner />
                <TechnicalCapabilitiesContent />
            </>
        );
    }
}

export default TechnicalCapabilities;