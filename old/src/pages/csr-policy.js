import React, { Component } from "react";
import CsrBanner from "../components/csr-policy-banner";
import CsrContent from "../components/csr-policy-content";

class CsrPolicy extends Component {
    render() {
        return (
            <>
                <CsrBanner />
                <CsrContent />
            </>
        );
    }
}

export default CsrPolicy;