import React from 'react'

const Article = ({ heading, subheadings, paragraphs, descriptions }) => {

    return (
        <>
            <article className='left-article'>
                <h1>{heading}</h1>
                {subheadings.map((subheading) => (
                    <h2 key={subheading}>{subheading}</h2>
                ))}

            </article>
            <article className='right-article'>
                {descriptions.map((description) => (
                    <p key={description}>{description}</p>
                ))}
            </article>
        </>
    )
}

export default Article