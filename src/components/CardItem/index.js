// Write your code here.
import './index.css'

const CardItem = props => {
  const {cardDetails} = props
  const {title, description, imgUrl, className} = cardDetails
  return (
    <li className={`card-item-container ${className}`}>
      <div>
        <h1 className="card-item-title">{title}</h1>
        <p className="card-item-description">{description}</p>
        <div className="image-container">
          <img src={imgUrl} className="image" alt={title} />
        </div>
      </div>
    </li>
  )
}

export default CardItem
