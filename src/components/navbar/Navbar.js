import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './navbar.scss';


const createItems = (items) => {
    const itemsList = items.map((item) => {
        return <li key={item.id}><NavLink exact activeClassName="active" onlyActiveOnIndex to={item.link}>{item.text}</NavLink></li>
    });

    return itemsList;
};


const Navbar = ({ items }) => {
    return (
        <React.Fragment>
            <nav>
                <ul>
                    {createItems(items)}
                </ul>
            </nav>
        </React.Fragment>
    )
};


Navbar.propTypes = {
    items: PropTypes.array
}

export default Navbar;