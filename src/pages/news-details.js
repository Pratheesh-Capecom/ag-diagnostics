import React, { Component } from "react";
import NewsBanner from "../components/news-banner";
import NewsDetailsContent from "../components/news-details-content";

class NewsDetails extends Component {
    render() {
        return (
            <>
                <NewsBanner />
                <NewsDetailsContent />
            </>
        );
    }
}

export default NewsDetails;