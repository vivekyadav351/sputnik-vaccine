import React from 'react'
import {Helmet} from "react-helmet";

import FullArticleStyle from './fullArticle.styled'

const FullArticle = (props) => {
    const image = props.image;
    console.log(image);
    return (
        <FullArticleStyle>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{props.title}</title>
                <meta name="description" content={props.desc} />
            </Helmet>
            <h1>{props.title}</h1>
            <img src={require(`../../../assets/news_images/${props.image}`)} alt='' />
            <h4>Published on <b>{props.date}</b></h4>
            <p>{props.desc}</p>
            
        </FullArticleStyle>
    )
}

export default FullArticle
