import React, { Component } from "react";
import ContactUsBanner from "../components/contact-us-banner";
import ContactUsContent from "../components/contact-us-content";

class ContactUs extends Component {
    render() {
        return (
            <>
                <ContactUsBanner />
                <ContactUsContent />
            </>
        );
    }
}

export default ContactUs;