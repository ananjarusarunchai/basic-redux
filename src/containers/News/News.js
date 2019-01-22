
import React, { Component } from 'react';
import { API_ROOT_URL } from '../../constants/Constant';

// import { PropTypes } from 'prop-types';


class News extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            users: [],
            isLoading: true
        }
    }

    componentWillMount() {
        fetch(`${API_ROOT_URL}?results=${10}`)
            .then(response => response.json())    }



    render() {
        return (
            // <React.Fragment>
                <div>News</div>
            // </React.Fragment>
        )
    }
};

export default News;



