import React, { Component } from "react";
import AwardsBanner from "../components/awards-banner";
import AwardsContent from "../components/awards-content";

class Awards extends Component {
    render() {
        return (
            <>
                <AwardsBanner />
                <AwardsContent />
            </>
        );
    }
}

export default Awards;