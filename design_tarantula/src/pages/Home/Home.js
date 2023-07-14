import React, { useRef } from 'react';
import TwoColumn from '../../components/layouts/TwoColumn/TwoColumn';
import RowStandard from '../../components/layouts/RowStandard/RowStandard';
import Image from '../../components/Image/Image';
import resume from '../../assets/files/resume.pdf';
import coe from '../../assets/files/coe.pdf';
import udemy from '../../assets/files/udemy.pdf';
import FeatureHeader from '../../components/FeatureHeader/FeatureHeader';
import styles from './Home.module.css';
import ListSlider from '../../components/Slider/ListSlider';

const Home = ({ content }) => {
    const twoColumnRef = useRef(null);

    const scrollToTwoColumn = () => {
        twoColumnRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className={styles.homePage}>
            <FeatureHeader
                backgroundImage={content.featureImage}
                heading="Hi, I'm Mark"
                subheading="web developer and graphic designer"
                scrollToTwoColumnLayout={scrollToTwoColumn}
            />

            <div ref={twoColumnRef}>
                <RowStandard />
            </div>
            <RowStandard section="About">
                <TwoColumn
                    leftColumn={
                        <div className={styles.column}>
                            <h1>About</h1>
                            <div className="text-justify">
                                {content.about.bio.map((paragraph, index) => (
                                    <p key={index}>{paragraph}</p>
                                ))}
                            </div>
                            <p className="text-center">
                                <a href={resume} target="_blank" rel="noopener noreferrer">Resume</a>
                                {' | '}
                                <a href={udemy} target="_blank" rel="noopener noreferrer">Udemy Certificate</a>
                                {' | '}
                                <a href={coe} target="_blank" rel="noopener noreferrer">Certificate of Employment</a>
                            </p>
                        </div>
                    }
                    rightColumn={
                        <div className={styles.column}>
                            <Image imageUrl={content.about.profileImg} maxHeight="520px" />
                        </div>
                    }
                />
            </RowStandard>

            <RowStandard section="design-work" >
                <h1>Design Works</h1>
            </RowStandard>
            <RowStandard>
                <ListSlider items={content.projects} />
            </RowStandard>
            <RowStandard />


        </div>
    );
};

export default Home;
