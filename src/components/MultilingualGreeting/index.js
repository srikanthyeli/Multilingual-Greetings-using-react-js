import {Component} from 'react'
import LanguageButton from '../LanguageButton'

import './index.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]
class MultilingualGreeting extends Component {
  state = {
    activeId: '',
    imageUrl: languageGreetingsList[0].imageUrl,
    imageAlt: languageGreetingsList[0].imageAltText,
  }

  onClickButton = id => {
    const ActiveLanguage = languageGreetingsList.find(
      eachLanguage => eachLanguage.id === id,
    )
    console.log(ActiveLanguage)
    const {imageUrl, imageAltText} = ActiveLanguage

    this.setState({imageUrl, activeId: id, imageAlt: imageAltText})
  }

  render() {
    const {imageUrl, activeId, imageAlt} = this.state

    return (
      <div className="app-container">
        <div className="responsive-container">
          <h1 className="heading">Multilingual Greetings</h1>
          <ul className="list-container">
            {languageGreetingsList.map(eachLanguage => (
              <LanguageButton
                buttonDetails={eachLanguage}
                key={eachLanguage.id}
                onClickButton={this.onClickButton}
                isActive={eachLanguage.id === activeId}
              />
            ))}
          </ul>
          <img src={imageUrl} alt={imageAlt} className="image-1" />
        </div>
      </div>
    )
  }
}

export default MultilingualGreeting
