import React, { Component } from "react";
import ApplyNowBanner from "../components/apply-now-banner";
import ApplyNowContent from "../components/apply-now-content";

class ApplyNow extends Component {
    render() {
        return (
            <>
                <ApplyNowBanner />
                <ApplyNowContent />
            </>
        );
    }
}

export default ApplyNow;