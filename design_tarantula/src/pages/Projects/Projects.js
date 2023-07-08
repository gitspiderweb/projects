import React from "react";
import RowFull from "../../components/layouts/RowFull/RowFull";
import TwoColumn from "../../components/layouts/TwoColumn/TwoColumn";
import Image from "../../components/Image/Image";
import styles from './Projects.module.css'
import FeatureHeader from "../../components/FeatureHeader/FeatureHeader";

const Projects = ({ content }) => {
    return (
        <div className="Projects">
            <FeatureHeader
                backgroundImage={content.featureImage}
                heading="Projects"
                subheading="Mark's work in the past"
            />

        </div>
    );
};

export default Projects