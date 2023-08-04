import './index.css'

const EventItem = props => {
  const {eventItem, isActive, setActiveId} = props
  const {name, location, imageUrl, id} = eventItem
  const imageClassName = isActive ? 'active-event-image' : 'event-image'

  const onClickEventItem = () => setActiveId(id)

  return (
    <li className="event-item-container">
      <button onClick={onClickEventItem} className="image-button" type="button">
        <img src={imageUrl} alt="event" className={imageClassName} />
      </button>

      <p className="event-name">{name}</p>
      <p className="event-location">{location}</p>
    </li>
  )
}

export default EventItem
