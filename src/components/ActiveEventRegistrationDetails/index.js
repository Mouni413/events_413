import './index.css'

const registrationStatusConstants = {
  yetToRegister: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registrationsClosed: 'REGISTRATIONS_CLOSED',
}

const ActiveRegistrationDetails = props => {
  const {activeRegistrationStatus} = props

  const renderYetToRegister = () => (
    <div className="initial-container-view">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="yet-to-register-img"
      />
      <p className="yet-to-register-description">
        A live performance brings so much to your relationship with dance.Seeing
        dance live can often make you fall totally in love with this beautiful
        art form
      </p>
      <button className="register-here-button" type="button">
        Register Here
      </button>
    </div>
  )

  const renderRegistered = () => (
    <div className="initial-container-view ">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="registered-image"
      />
      <h1 className="yet-to-register-description">
        You have already registered for the event
      </h1>
    </div>
  )

  const renderNoView = () => (
    <div className="initial-container-view">
      <p className="initial-description">
        Click on an event, to view its registration details
      </p>
    </div>
  )

  const renderRegistrationsClosed = () => (
    <div className="initial-container-view">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="registrations-closed-image"
      />
      <h1>Registrations Are Closed Now!</h1>
      <p className="initial-description">
        Stay tuned. We will reopen the registrations soon!
      </p>
    </div>
  )

  switch (activeRegistrationStatus) {
    case registrationStatusConstants.yetToRegister:
      return renderYetToRegister()
    case registrationStatusConstants.registered:
      return renderRegistered()
    case registrationStatusConstants.registrationsClosed:
      return renderRegistrationsClosed()
    default:
      return renderNoView()
  }
}

export default ActiveRegistrationDetails
