import React, { Fragment } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions/auth';
import Alert from './Alert';
import PropTypes from 'prop-types';

const navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
    const authLinks = (
        <>
         <Link className='navbar__top__auth__link navbar__mobile navbar__mobile__btn' to="/profile">Profile</Link>
        <a className='navbar__top__auth__link navbar__mobile navbar__mobile__btn' onClick={logout} href='#!'>Logout</a>
        </>
    );

    const guestLinks = (
        <Fragment>
            <Link className='navbar__top__auth__link navbar__mobile navbar__mobile__btn' to='/login'>Login</Link>
            <Link className='navbar__top__auth__link navbar__mobile navbar__mobile__btn' to='/signup'>Sign Up</Link>
        </Fragment>
    );

    return (
        <Fragment>
            <nav className='navbar'>
                <div className='navbar__top  navbar__mobile'>
                    <div className='navbar__top__logo navbar__mobile navbar__mobile__title'>
                        <Link className='navbar__top__logo__link' to='/'>Estatic</Link>
                    </div>
                    <div className='navbar__top__auth navbar__mobile navbar__mobile__btn' >
                        { !loading && (<Fragment>{ isAuthenticated ? authLinks : guestLinks }</Fragment>) }
                    </div>
                </div>
                <div className='navbar__bottom'>
                    <li className='navbar__bottom__item'>
                        <NavLink className='navbar__bottom__item__link' exact to='/'>Home</NavLink>
                    </li>
                    <li className='navbar__bottom__item'>
                        <NavLink className='navbar__bottom__item__link' exact to='/listings'>Listings</NavLink>
                    </li>
                    <li className='navbar__bottom__item'>
                        <NavLink className='navbar__bottom__item__link' exact to='/about'>About</NavLink>
                    </li>
                    <li className='navbar__bottom__item'>
                        <NavLink className='navbar__bottom__item__link' exact to='/contact'>Contact</NavLink>
                    </li>
                </div>
            </nav>
            <Alert />
        </Fragment>
    );
};

navbar.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, { logout })(navbar);