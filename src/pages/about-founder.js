import React, { Component } from "react";
import FounderBanner from "../components/founder-banner";
import FounderContent from "../components/founder-content";
import ExpertiseScroll from "../components/expertise-scroll";

class AboutFounder extends Component {
    render() {
        return (
            <>
                <FounderBanner />
                <FounderContent />
                <ExpertiseScroll />
            </>
        );
    }
}

export default AboutFounder;