import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {

  return (
    <div>
      <h2 style={{ marginBottom: "20px", fontSize: "2rem" }}>Sorry</h2>
      <h3>That Page cannot be found</h3>
      <Link to="/">Back to the homepage....</Link>
    </div>
  )
}

export default NotFound
