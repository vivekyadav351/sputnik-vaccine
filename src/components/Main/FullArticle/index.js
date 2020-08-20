import React from 'react'
import {Helmet} from "react-helmet";

import './fullArticle.css';

const FullArticle = (props) => {
    const image = props.image;
    console.log(image);
    return (
        <div className="fullArticle">
            <Helmet>
                <meta charSet="utf-8" />
                <title>{props.title}</title>
                <meta name="description" content={props.desc} />
            </Helmet>
            <h1>{props.title}</h1>
            <img src={require(`../../../assets/news_images/${props.image}`)} alt='' />
            <h4>Published on <b>{props.date}</b></h4>
            <p>{props.desc}</p>
            
        </div>
    )
}

export default FullArticle
