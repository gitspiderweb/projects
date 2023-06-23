import React from 'react'

const ArticleFigure = ({ heading, subheadings, paragraphs, imgSrc, imgCptn }) => {

    return (
        <main className='Article-Figure'>
            <article>
                <h1>{heading}</h1>
                {subheadings.map((subheading) => (
                    <h2 key={subheading}>{subheading}</h2>
                ))}
                {paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                ))}
            </article>
            <figure>
                <img className={imgCptn} src={imgSrc} alt={imgCptn} />
            </figure>
        </main>
    )
}

export default ArticleFigure