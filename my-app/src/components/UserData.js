import React from 'react'

function UserData(props) {
  return (
    <div>
        <h1>{props.isLoadeded ? 'Data Loaded' : 'Loading...'}</h1>
    </div>
  )
}

export default UserData