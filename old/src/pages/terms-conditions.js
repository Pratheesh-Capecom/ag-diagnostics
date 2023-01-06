import React, { Component } from "react";
import TermsConditionsBanner from "../components/terms-conditions-banner";
import TermsConditionsContent from "../components/terms-conditions-content";

class PrivacyPolicy extends Component {
    render() {
        return (
            <>
                <TermsConditionsBanner />
                <TermsConditionsContent />
            </>
        );
    }
}

export default PrivacyPolicy;