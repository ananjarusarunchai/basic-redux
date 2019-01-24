import React from 'react'
import { PropTypes } from 'prop-types';
import NewsItem from './NewsItem';

const NewsList = ({ articles }) => {
    return (
        articles.map((article) => {
            return (
                <React.Fragment key={`${article.publishedAt}`}>
                    <NewsItem article={article}/>
                </React.Fragment>
            );
        })
    )
}

NewsList.propTypes = {
    articles: PropTypes.array.isRequired,
}

export default NewsList;