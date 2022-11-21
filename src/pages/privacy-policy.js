import React, { Component } from "react";
import PrivacyBanner from "../components/privacy-policy-banner";
import PrivacyContent from "../components/privacy-policy-content";

class PrivacyPolicy extends Component {
    render() {
        return (
            <>
                <PrivacyBanner />
                <PrivacyContent />
            </>
        );
    }
}

export default PrivacyPolicy;