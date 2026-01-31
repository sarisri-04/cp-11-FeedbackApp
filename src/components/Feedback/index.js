import {useState} from 'react'
import './index.css'

const Feedback = props => {
  const {resources} = props
  const {emojis, loveEmojiUrl} = resources

  const [isFeedbackSubmitted, setFeedbackSubmitted] = useState(false)

  const onClickEmoji = () => {
    setFeedbackSubmitted(true)
  }

  return (
    <div className="app-container">
      <div className="feedback-container">
        {!isFeedbackSubmitted ? (
          <div className="feedback">
            <h1 className="heading">
              How satisfied are you with our customer support performance?
            </h1>
            <div className="emoji-container">
              {emojis.map(eachEmoji => (
                <button key={eachEmoji.id} type="button" onClick={onClickEmoji}>
                  <img
                    src={eachEmoji.imageUrl}
                    alt={eachEmoji.name}
                    className="emoji"
                  />
                  <p>{eachEmoji.name}</p>
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="thank-you-container">
            <img src={loveEmojiUrl} alt="love emoji" className="heart-emoji" />
            <h1 className="thank-you-text">Thank You!</h1>
            <p className="description">
              We will use your feedback to improve our customer support
              performance.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Feedback
