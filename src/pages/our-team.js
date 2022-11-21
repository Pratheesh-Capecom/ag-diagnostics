import React, { Component } from "react";
import TeamBanner from "../components/team-banner";
import TeamContent from "../components/team-content";

class OurTeam extends Component {
    render() {
        return (
            <>
                <TeamBanner />
                <TeamContent />
            </>
        );
    }
}

export default OurTeam;