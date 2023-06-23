import React from 'react'
import ArticleFigure from '../ArticleFigure'


const Home = ({ details }) => {
    return (
        <ArticleFigure
            heading={details.heading}
            subheadings={details.subheadings}
            paragraphs={details.paragraphs}
            imgSrc={details.imgSrc}
            imgCptn={details.imgCptn} />
    )
}

export default Home