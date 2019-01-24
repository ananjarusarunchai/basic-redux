import { FETCH_NEWS_SUCCESS } from '../constants/NewsActionTypes';
import { NEWS_API_KEY, NEWS_API_ROOT_URL } from '../constants/Constant';

export function fetchNewsSuccess(news) {
    return { type: FETCH_NEWS_SUCCESS, news: news.articles }
}


export function fetchNews() {
    return function (dispatch) {
        const url = NEWS_API_ROOT_URL.replace('{0}', NEWS_API_KEY);
        fetch(`${url}`)
            .then(response => response.json())
            .then(news => dispatch(fetchNewsSuccess(news)));
    }
};
