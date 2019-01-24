import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './newsitem.scss';

class NewsItem extends PureComponent {
    
    render() {
        debugger;
        const article = this.props.article;
        const imgUrl = article.urlToImage;
        const title = article.title;
        return (
            <React.Fragment>
                <div className='news_container'>
                  <span className='news_title'><a href={article.url}>{title}</a></span>
                  <span className='news_publish_date'>{article.publishedAt}</span>
                  <img className='news_img' src={imgUrl} alt={title}></img>
                  <div className='news_content'>{article.content}</div>
                </div>
            </React.Fragment>
        )
    }
}


NewsItem.propTypes = {
    article: PropTypes.object.isRequired,
};

export default NewsItem;