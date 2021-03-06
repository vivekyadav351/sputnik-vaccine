import Styled from 'styled-components'

const NewsPreviewStyle = Styled.div `

    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin: 0 0 50px 0;
    padding: 0;
    box-sizing: border-box;
    font-family: inherit;

    img {
        width: 400px;
        height: 220px;
        margin: 0 40px 0 0;
        padding: 0;
        border: 1px solid rgb(235, 224, 224);
        border-radius: 2px;
    }

    a {
        text-decoration: none;
    }

    .news {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        width: 800px;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: inherit;
    }

    .news h3 {
        color: hsl(35, 100%, 49%);
        padding: 0 0 15px 0;
        margin: 0;
    }

    .news h1 {
        font-size: 30px;
        text-align: justify;
        line-height: 35px;
        padding: 0;
        margin: 0;
    }

    .news p {
        color: #737373;
        font-size: 18px;
        line-height: 35px;
        text-align: justify;
        padding: 20px 0;
        margin: 0;
    }

`;

export default NewsPreviewStyle;