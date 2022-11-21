import React, { Component } from "react";
import FindALabBanner from "../components/find-a-lab-banner";
import FindALabContent from "../components/find-a-lab-content";

class FindALab extends Component {
    render() {
        return (
            <>
                <FindALabBanner />
                <FindALabContent />
            </>
        );
    }
}

export default FindALab;