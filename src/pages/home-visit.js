import React, { Component } from "react";
import HomeVisitBanner from "../components/home-visit-banner";
import HomeVisitContent from "../components/home-visit-content";
import HomeVisitForm from "../components/home-visit-form";

class HomeVisit extends Component {
    render() {
        return (
            <>
                <HomeVisitBanner />
                <HomeVisitContent />
                <HomeVisitForm />
            </>
        );
    }
}

export default HomeVisit;