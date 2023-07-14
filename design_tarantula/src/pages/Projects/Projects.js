import React, { useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from '../../components/Image/Image';
import FeatureHeader from '../../components/FeatureHeader/FeatureHeader';
import RowOffsetMd from '../../components/layouts/RowOffsetMd/RowOffsetMd';
import TwoColumn from '../../components/layouts/TwoColumn/TwoColumn';

const Projects = ({ content }) => {
    const { itemId } = useParams();
    const projectRefs = useRef([]);
    const navHeight = 100;

    useEffect(() => {
        console.log(itemId); // Log the value of itemId to the console

        // Scroll to the project with the matching itemId when the component mounts
        const index = content.projects.findIndex((project) => project.id === parseInt(itemId));
        scrollToProject(index);
    }, [content.projects, itemId]);

    const scrollToProject = (index) => {
        if (projectRefs.current[index]) {
            const scrollOptions = {
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest',
            };

            window.scrollTo({
                top: projectRefs.current[index].offsetTop - navHeight,
                ...scrollOptions,
            });
        }
    };

    return (
        <div className="Projects">
            <FeatureHeader
                backgroundImage={content.featureImage}
                heading="Projects"
                subheading="Mark's work in the past"
                scrollToTwoColumnLayout={() => scrollToProject(0)}
            />
            <div>
                <RowOffsetMd />
            </div>

            {content.projects.map((project, index) => (
                <div key={index} ref={(ref) => (projectRefs.current[index] = ref)}>
                    <RowOffsetMd>
                        <TwoColumn
                            leftColumn={<Image imageUrl={project.image} maxWidth="350px" />}
                            rightColumn={
                                <>
                                    <h3 className="text-center">{project.name}</h3>
                                    <p className="text-justify">{project.text}</p>
                                </>
                            }
                        />
                    </RowOffsetMd>
                </div>
            ))}
        </div>
    );
};

export default Projects;
