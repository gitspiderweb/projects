import React from "react"
import ArticleFigure from "../ArticleFigure"

const Education = ({ details }) => {
    return (
        <ArticleFigure
            heading={details.heading}
            subheadings={details.subheadings}
            paragraphs={details.paragraphs}
            imgSrc={details.imgSrc}
            imgCptn={details.imgCptn} />
    )
}

export default Education