import './index.css'

const LanguageItem = props => {
  const {onClickButton, buttonDetails, isActive} = props
  const {id, buttonText} = buttonDetails

  const onClickButtonImage = () => {
    onClickButton(id)
  }
  const className = isActive ? 'activeBtn' : ''

  return (
    <li>
      <button
        type="button"
        data-testid="button"
        className={`button ${className}`}
        onClick={onClickButtonImage}
      >
        {buttonText}
      </button>
    </li>
  )
}
export default LanguageItem
