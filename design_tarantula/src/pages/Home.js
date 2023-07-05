import React, { useRef } from 'react'
import Header from '../components/Header'
import TwoColumnLayout from '../components/layouts/TwoColumnLayout'
import Footer from '../components/Footer';
import RowStandard from '../components/layouts/RowStandard';
import Image from '../components/Image';
import resume from '../assets/files/resume.pdf'
import coe from '../assets/files/coe.pdf'
import udemy from '../assets/files/udemy.pdf'
import Grid from '../components/layouts/Grid';


const Home = ({ content }) => {
    const twoColumnRef = useRef(null);

    const scrollToTwoColumnLayout = () => {
        twoColumnRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className='App'>
            <Header scrollToTwoColumnLayout={scrollToTwoColumnLayout} />
            <div ref={twoColumnRef}>
                <RowStandard section="About">
                    <TwoColumnLayout
                        leftColumn={
                            <>
                                <h1>About</h1>
                                {content.section1.bio.map((paragraph, index) => (
                                    <p key={index}>{paragraph}</p>
                                ))}
                                <p className='text-center'>
                                    <a href={resume} target="_blank" rel="noopener noreferrer">Resume</a>
                                    {' | '}
                                    <a href={udemy} target="_blank" rel="noopener noreferrer">Udemy Certificate</a>
                                    {' | '}
                                    <a href={coe} target="_blank" rel="noopener noreferrer">Certificate of Employment</a>
                                </p>
                            </>


                        }
                        rightColumn={
                            <Image imageUrl={content.section1.profileImg} />

                        }
                    />

                </RowStandard>

                <RowStandard section="design-work">
                    <h1>Design Works</h1>
                </RowStandard>
                <RowStandard section="design-work">
                    <Grid items={content.section2.items} />
                </RowStandard>
            </div>
            <Footer />
        </div>
    );
};

export default Home