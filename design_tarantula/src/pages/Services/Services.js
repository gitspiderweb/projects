import React from "react";
import FeatureHeader from "../../components/FeatureHeader/FeatureHeader";

const Services = ({ content }) => {
    return (
        <div className="Services">
            <FeatureHeader
                backgroundImage={content.featureImage}
                heading="Services"
                subheading="Unlocking Possibilities, Delivering Excellence"
            />
        </div>
    );
};

export default Services