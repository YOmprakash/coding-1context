// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      return (
        <div className="body-container">
          {showLeftNavbar ? (
            <div className="left-navbar">
              <h1 className="body-header-text">Left Navbar Menu</h1>
              <li className="item">Item 1</li>
              <li className="item">Item 1</li>
              <li className="item">Item 1</li>
              <li className="item">Item 1</li>
            </div>
          ) : null}

          {showContent ? (
            <div className="content">
              <h1 className="">Content</h1>
              <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
          ) : null}

          {showRightNavbar ? (
            <div className="right-navbar">
              <h1 className="">Right Navbar</h1>
              <div className="ad-box-container">
                <p className="ad-box">ad 1</p>
                <p className="ad-box">ad 1</p>
              </div>
            </div>
          ) : null}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
