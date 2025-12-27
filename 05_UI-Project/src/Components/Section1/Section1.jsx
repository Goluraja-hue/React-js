import React from 'react'
import Header from './Header'
import Page1Content from './Page1Content'

const Section1 = (props) => {
  console.log(props.users);
  return (
    <div className='h-screen w-full text-amber-50'>
        <Header />
        <Page1Content user={props.users} />
    </div>
  )
}

export default Section1