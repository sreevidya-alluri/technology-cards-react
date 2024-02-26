// Write your code here.
import './index.css'

const CardItem = props => {
  const cardDetails = props
  const {title, imageUrl, description, className} = cardDetails
  return (
    <li className={className}>
      <h1 className="card-title">{title}</h1>
      <p className="card-description">{description}</p>
      <div className="img-container">
        <img src={imageUrl} alt={title} className="card-image" />
      </div>
    </li>
  )
}

export default CardItem
