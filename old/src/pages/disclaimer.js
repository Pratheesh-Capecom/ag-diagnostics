import React, { Component } from "react";
import DisclaimerBanner from "../components/disclaimer-banner";
import DisclaimerContent from "../components/disclaimer-content";

class Disclaimer extends Component {
    render() {
        return (
            <>
                <DisclaimerBanner />
                <DisclaimerContent />
            </>
        );
    }
}

export default Disclaimer;