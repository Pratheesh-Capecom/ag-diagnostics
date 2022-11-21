import React, { Component } from "react";
import BrochuresBanner from "../components/brochure-banner";
import BrochureContent from "../components/brochure-content";

class Brochures extends Component {
    render() {
        return (
            <>
                <BrochuresBanner />
                <BrochureContent />
            </>
        );
    }
}

export default Brochures;