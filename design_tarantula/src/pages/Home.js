import React, { useRef } from 'react'
import Header from '../components/Header'
import TwoColumnLayout from '../components/layouts/TwoColumnLayout'
import Footer from '../components/Footer';
import RowStandard from '../components/layouts/RowStandard';
import Image from '../components/Image';
import ButtonView from '../components/ButtonView';
import resume from '../assets/files/resume.pdf'
import coe from '../assets/files/coe.pdf'
import udemy from '../assets/files/udemy.pdf'


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
                                {content.bio.map((paragraph, index) => (
                                    <p key={index}>{paragraph}</p>
                                ))}
                                <div className='button-group'>
                                    <ButtonView text='Resume' file={resume} />
                                    <ButtonView text='Certificate' file={udemy} />
                                    <ButtonView text='COE' file={coe} />
                                </div>
                            </>


                        }
                        rightColumn={
                            <Image imageUrl={content.profileImg} />

                        }
                    />

                </RowStandard>
            </div>
            <Footer />
        </div>
    );
};

export default Home