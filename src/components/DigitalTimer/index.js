// Write your code here
import {Component} from 'react'
import './index.css'

class DigitalTimer extends Component {
  state = {
    minutes: 25,
    seconds: 0,
    isStart: false,
  }

  //   componentDidMount = () => {
  //     const {isStart} = this.state
  //     if (isStart === false) {

  //     }
  //   }

  //   componentWillUnmount() {
  //     clearInterval(this.timerID)
  //   }

  isStartPauseBtn = () => {
    this.timerID = setInterval(() => {
      this.setState(prevS => {
        const {minutes, seconds, isStart} = prevS
        if (minutes > 0 && seconds === 0) {
          return {minutes: minutes - 1, seconds: 59, isStart: !isStart}
        }
        if (minutes >= 0 && seconds >= 1) {
          return {seconds: seconds - 1, isStart: !isStart}
        }
        clearInterval(this.timerID)
        return {minutes: 0, seconds: 0, isStart: !isStart}
      })
    }, 1000)
  }

  render() {
    const {minutes, seconds, isStart} = this.state
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
                <p className="timer-status">{isStart ? 'Running' : 'Pasued'}</p>
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
                      <img
                        src="https://assets.ccbp.in/frontend/react-js/play-icon-img.png"
                        className="play-pause-btn"
                        alt="play icon"
                      />
                    ) : (
                      <img
                        src="https://assets.ccbp.in/frontend/react-js/pause-icon-img.png"
                        className="play-pause-btn"
                        alt="pause icon"
                      />
                    )}
                  </button>
                  <h1 className="timer-btn-label">
                    {!isStart ? 'Start' : 'Pause'}
                  </h1>
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
                  </button>
                  <h1 className="timer-btn-label">Reset</h1>
                </div>
              </div>
              <p className="timer-des">Set Timer limit</p>
              <div className="timer-changer">
                <button
                  onClick={this.changeMin}
                  type="button"
                  className="symbol"
                >
                  -
                </button>
                <p className="timer-change-option">{minutes}</p>
                <button
                  onClick={this.changeMin}
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
