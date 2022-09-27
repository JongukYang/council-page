import React, {useState} from 'react'
import NoticeArea from '../NoticeArea';
import NoticeBoard from '../NoticeBoard';
import '../Notice.css'

function Notice_main() {
  return (
     <div className="container">
     <NoticeArea/>
    <NoticeBoard/>
   </div>
  )
}

export default Notice_main