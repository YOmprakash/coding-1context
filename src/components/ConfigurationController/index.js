// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onChangeContent = () => {
        onToggleShowContent()
      }

      const onChangeLeftNavbar = event => {
        onToggleShowLeftNavbar(event.target.value)
      }

      const onChangeRightNavbar = event => {
        onToggleShowRightNavbar(event.target.value)
      }

      return (
        <div className="controls-container">
          <div className="checkbox-container">
            <input
              checked={showContent}
              onChange={onChangeContent}
              type="checkbox"
              id="content"
            />
            <label className="label-text" htmlFor="content">
              Content
            </label>
          </div>
          <div className="checkbox-container">
            <input
              checked={showLeftNavbar}
              onChange={onChangeLeftNavbar}
              type="checkbox"
              id="left-navbar"
            />
            <label className="label-text" htmlFor="left-navbar">
              Left Navbar
            </label>
          </div>
          <div className="checkbox-container">
            <input
              checked={showRightNavbar}
              onChange={onChangeRightNavbar}
              type="checkbox"
              id="right-navbar"
            />
            <label className="label-text" htmlFor="right-navbar">
              Right Navbar
            </label>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
