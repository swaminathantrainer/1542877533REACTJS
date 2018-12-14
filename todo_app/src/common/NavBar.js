import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {

    render() {
        const { headerStyle, divStyle, logoStyle, spaceStyle, navMenuStyle } = styles;

        return (
            <header style={headerStyle}>
                <nav style={{ height: '100%' }}>
                    <div style={divStyle}>
                        <Link style={logoStyle} to='/'>Title</Link>
                        <div style={spaceStyle} />
                        <Link style={navMenuStyle} to='/add_todo'>Add Todo</Link>
                    </div>
                </nav>
            </header>
        );
    }
};

const styles = {
    headerStyle: {
        position: 'fixed',
        left: 0,
        right: 0,
        height: 75,
        width: '100%',
        padding: 8,
        boxShadow: '1px 1px 4px #888888',
        background: '#7ec0ee'
    },

    divStyle: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: '100%'
    },

    navMenuStyle: {
        padding: '24px',
        color: '#fff',
        fontSize: '24px',
        textDecoration: 'none'
    },

    logoStyle: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: '32px',
        textDecoration: 'none'
    },

    spaceStyle: {
        display: 'flex',
        flex: 1
    }

}

export default NavBar;