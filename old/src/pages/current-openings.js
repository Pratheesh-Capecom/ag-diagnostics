import React, { Component } from "react";
import CurrentOpeningsBanner from "../components/current-opeings-banner";
import CurrentOpeningsContent from "../components/current-openings-content";

class CurrentOpeings extends Component {
    render() {
        return (
            <>
                <CurrentOpeningsBanner />
                <CurrentOpeningsContent />
            </>
        );
    }
}

export default CurrentOpeings;