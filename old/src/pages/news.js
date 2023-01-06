import React, { Component } from "react";
import NewsBanner from "../components/news-banner";
import NewsContent from "../components/news-content";

class News extends Component {
    render() {
        return (
            <>
                <NewsBanner />
                <NewsContent />
            </>
        );
    }
}

export default News;