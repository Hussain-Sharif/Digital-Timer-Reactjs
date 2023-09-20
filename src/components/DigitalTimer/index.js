// Write your code here
// Write your code here
import {Component} from 'react'
import './index.css'

class DigitalTimer extends Component {
  state = {
    minutes: 25,
    seconds: 0,
    isStart: false,
    changeTime: 25,
  }

  incrementTimeElapsedInSeconds = () => {
    this.setState(prev => {
      const {minutes, seconds} = prev
      if (minutes > 0 && seconds === 0) {
        return {minutes: minutes - 1, seconds: 59}
      }
      if (minutes >= 0 && seconds >= 1) {
        return {seconds: seconds - 1}
      }
      clearInterval(this.timerID)
      return {minutes: 0, seconds: 0}
    })
  }

  isStartPauseBtn = () => {
    const {isStart} = this.state
    if (isStart) {
      clearInterval(this.timerID)
    } else {
      this.timerID = setInterval(this.incrementTimeElapsedInSeconds, 1000)
    }
    this.setState(prevState => ({isStart: !prevState.isStart}))
  }

  onRestart = () => {
    clearInterval(this.timerID)
    this.setState({minutes: 25, seconds: 0, isStart: false})
  }

  decreaseMin = () => {
    this.setState(prev => {
      const {isStart, changeTime} = prev
      if (isStart === false && changeTime > 0) {
        return {changeTime: changeTime - 1, minutes: changeTime - 1, seconds: 0}
      }
      return null
    })
  }

  increaseMin = () => {
    this.setState(prev => {
      const {isStart, changeTime} = prev
      if (isStart === false && changeTime <= 59) {
        return {changeTime: changeTime + 1, minutes: changeTime + 1, seconds: 0}
      }
      return null
    })
  }
  //   if (minutes > 0 && seconds === 0) {
  //       return {minutes: minutes - 1, seconds: 59}
  //   }
  //   if (minutes >= 0 && seconds >= 1) {
  //       return {seconds: seconds - 1}
  //   }
  //   clearInterval(this.timerID)
  //   return {minutes: 0, seconds: 0}

  render() {
    const {minutes, seconds, isStart, changeTime} = this.state
    console.log(seconds, isStart)
    return (
      <div className="bg">
        <div className="card">
          <h1 className="timer-head">Digital Timer</h1>
          <div className="timer-Operation">
            <div className="timer-display-cont">
              <div className="timer">
                <h1 className="timer-display">
                  {minutes > 9 ? minutes : `0${minutes}`}:
                  {seconds > 9 ? seconds : `0${seconds}`}
                </h1>
                <p className="timer-status">{isStart ? 'Running' : 'Paused'}</p>
              </div>
            </div>
            <div className="timer-changes">
              <div className="timer-btns">
                <div className="btn-cont">
                  <button
                    onClick={this.isStartPauseBtn}
                    type="button"
                    className="timer-btn"
                  >
                    {!isStart ? (
                      <>
                        <img
                          src="https://assets.ccbp.in/frontend/react-js/play-icon-img.png"
                          className="play-pause-btn"
                          alt="play icon"
                        />
                        <h1 className="timer-btn-label">Start</h1>
                      </>
                    ) : (
                      <>
                        <img
                          src="https://assets.ccbp.in/frontend/react-js/pause-icon-img.png"
                          className="play-pause-btn"
                          alt="pause icon"
                        />
                        <h1 className="timer-btn-label">Pause</h1>
                      </>
                    )}
                  </button>
                  {/* <h1 className="timer-btn-label">
                    {!isStart ? 'Start' : 'Pause'}
                  </h1> */}
                </div>
                <div className="btn-cont">
                  <button
                    onClick={this.onRestart}
                    type="button"
                    className="timer-btn"
                  >
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                      className="reset-btn"
                      alt="reset icon"
                    />
                    <h1 className="timer-btn-label">Reset</h1>
                  </button>
                </div>
              </div>
              <p className="timer-des">Set Timer limit</p>
              <div className="timer-changer">
                <button
                  onClick={this.decreaseMin}
                  type="button"
                  className="symbol"
                >
                  -
                </button>
                <p className="timer-change-option">{changeTime}</p>
                <button
                  onClick={this.increaseMin}
                  type="button"
                  className="symbol"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
