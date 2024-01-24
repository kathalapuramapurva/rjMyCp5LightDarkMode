import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {
    isDark: true,
  }

  changeMode = () => {
    this.setState(prevState => ({isDark: !prevState.isDark}))
  }

  getText = () => {
    const {isDark} = this.state
    console.log(isDark)
    return {
      btnText: isDark ? 'Light Mode' : 'Dark Mode',
      bgColor: isDark ? 'bg-black' : 'bg-white',
      textColor: isDark ? 'text-white' : 'text-black',
    }
  }

  render() {
    const {btnText, bgColor, textColor} = this.getText()
    console.log(bgColor)
    console.log(textColor)
    return (
      <div className="main-container">
        <div className={`${bgColor} content-container`}>
          <h1 className={`${textColor} style-heading`}>Click to Change Mode</h1>
          <button
            className="style-button"
            type="button"
            onClick={this.changeMode}
          >
            {btnText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
