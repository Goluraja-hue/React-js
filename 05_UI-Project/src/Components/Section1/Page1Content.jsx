import React from 'react'
import LeftPage from './LeftPage'
import RightPage from './RightPage'

const Page1Content = (props) => {
  return (
    <div className="pb-10  h-[90vh]  px-18 flex gap-10 items-center">
      <LeftPage />
      <RightPage users={props.user} />
    </div>
  );
}

export default Page1Content