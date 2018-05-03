import React, { Component } from 'react'
import Footer from './Footer'
import Logo from './Logo'

class Header extends Component {
    render() {
        const { leagueMatchday } = this.props
        const styles = {

            strong: {
                color: '#ffffff',
                fontWeight: '400',
            }
        }
        return (
            <header id="header">
                <div className="inner">
                    <a href="#" className="image avatar"><Logo /></a>
                    <h1><strong style={styles.strong}>Premier League</strong></h1>
                    <h1>A simple football database.</h1>
                </div>
                <iframe src="https://open.spotify.com/embed/user/plplaylists/playlist/4x7T8AjUHcikyQowTJoxOj" width="250" height="250" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            </header>
        )
    }
}

export default Header
