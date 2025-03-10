import React from 'react'

export const SideBar = () => {
  return (
    <div className='p-5 shadow-lg col-span-1 w-48'>
       <ul>
        <li>Home</li>
        <li>Shorts</li>
        <li>videos</li>
        <li>Live</li>
      </ul>
      <h1 className='font-bold pt-5'>Subscriptions</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <h1 className='font-bold pt-5'>Watch Later</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
  )
}
export default SideBar