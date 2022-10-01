import React, {useState, useEffect} from 'react'
import Banner_office from './Banner_office'
import Body_office from './Body_office'
import Nav_office from './Nav_office'
import "./office.css";

function Office() {

  const [hrefState, setHrefState] = useState('chongdae');
  return (
    <>
    <Banner_office/>
    <Nav_office setHrefState={setHrefState}/>
    <Body_office hrefState={hrefState} />
    </>
  )
}

export default Office