import React from 'react'

import punkLogo from '../../assets/header/cryptopunk-logo.png'
import searchIcon from '../../assets/header/search.png'
import themeSwitchIcon from '../../assets/header/theme-switch.png'

import './index.css'

const Header = () => {
  return (
    // ! Header Icon
    <div className="header">
      <div className="logo-container">
        <img src={punkLogo} className="punkLogo" alt="punkLogo" />
      </div>

      {/* //! Header SearchBar */}

      <div className="searchBar">
        <div className="searchIconContainer">
          <img src={searchIcon} alt="searchIcon" />
        </div>
        <input
          className="searchInput"
          placeholder="Collection, Item or User..."
        />
      </div>

      {/* //! Header Items */}

      <div className="headerItems">
        <p>Drops</p>
        <p>Marketplace</p>
        <p>Create</p>
      </div>

      {/* //! Header Theme Switch */}

      <div className="headerActions">
        <div className="themeSwitchContainer">
          <img src={themeSwitchIcon} alt="themeSwitchIcon" />
        </div>
      </div>

      <div className="logginButton"> Sign In </div>
      <div className="logginButton">Sign Up</div>
    </div>
  )
}

export default Header
