
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as NewsAction from '../../actions/NewsAction';
import { PropTypes } from 'prop-types';
import { bindActionCreators } from 'redux';
import NewsList from '../../components/News/NewsList';

class News extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            news: {},
            isLoading: true
        }
    }


    componentWillMount() {
        this.props.newsAction.fetchNews();
    }

    componentWillReceiveProps(nextProps) {
        debugger;
    }


    render() {
        return (
            <React.Fragment>
                <div>
                    <NewsList articles={this.props.news} />
                </div>
            </React.Fragment>

        )
    }
};

News.propTypes = {
    news: PropTypes.array,
    newsAction: PropTypes.object
}


const mapStateToProps = (state, ownProps) => {
    return {
        news: state.News
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        newsAction: bindActionCreators(NewsAction, dispatch)
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(News);



