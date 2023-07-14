import React from "react";
import FeatureHeader from "../../components/FeatureHeader/FeatureHeader";

const Services = ({ content }) => {
    return (
        <div className="Services">
            <FeatureHeader
                backgroundImage={content.featureImage}
                heading="Contact"
                subheading="Get in Touch: Let's Connect and Collaborate"
            />
        </div>
    );
};

export default Services