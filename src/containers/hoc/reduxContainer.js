import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function (
    ComposedComponent,
    extraProps
) {
    class ReduxContainer extends Component {

        componentWillMount() { }

        componentDidMount() { }

        render() {
            return (
                <ComposedComponent
                    {...this.props}
                />
            )
        }
    };

    const mapStateToProps = (state, ownProps) => {
        const props = {};
        Object.keys(extraProps.reducers).forEach((key) => {
            props[key] = state[extraProps.class];
        });
        return props;
    };

    return connect(
        mapStateToProps,
        extraProps.mapDispatchToProps
    )(ReduxContainer);
};



