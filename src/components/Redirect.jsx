// Importing

import { Navigate } from 'react-router-dom'

// Redirect component

function Redirect(props) {
  switch (props.location) {
    case 'destination': return <Navigate to='/destination/moon' />
    case 'crew': return <Navigate to='/crew/comander' />
  }
}

export default Redirect