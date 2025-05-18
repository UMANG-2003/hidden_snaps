import React from 'react'
import Navbar2 from './Navbar2'
import UserCard from './UserCard'
import AddPhotos from './AddPhotos'
import Gallery from './Gallery'
function page() {
  return (
    <div>
      <Navbar2 />
      <UserCard></UserCard>
      <AddPhotos />
      <Gallery />
    </div>
  )
}

export default page