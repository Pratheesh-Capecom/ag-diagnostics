import React, { Component } from "react";
import MediaBanner from "../components/media-banner";
import MediaContent from "../components/media-content";

class Media extends Component {
    render() {
        return (
            <>
                <MediaBanner />
                <MediaContent />
            </>
        );
    }
}

export default Media;