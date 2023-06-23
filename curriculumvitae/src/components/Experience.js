import React from "react"
import Article from "../Article"

const Experience = ({ details }) => {
    return (
        <main className="Experience">
            {details.map((detail) => (
                <Article
                    key={detail.heading}
                    heading={detail.heading}
                    subheadings={detail.subheadings}
                    paragraphs={detail.paragraphs}
                    descriptions={detail.descriptions} />
            )
            )}

        </main>
    )
}

export default Experience
