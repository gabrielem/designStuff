import React, { useState } from 'react'
import './style.css'

export const RightSideMenu = (props) => {
  const [menuStatus, setMenuStatus] = useState('closed')
  const bgStyle = { background: props.bgColor ? props.bgColor : '#000000cc' }
  return (
    <div className='SideMenu'>
      <div className={`action ${menuStatus}`} onClick={(e) => {
        e.preventDefault()
        setMenuStatus(menuStatus === 'open' ? 'closed' : 'open')
      }}>
        <div className='f' />
        <div className='m' />
        <div className='c' />
        <div className='l' />
      </div>
      <div className={`menu ${menuStatus}`} style={bgStyle}>
        <div className='links'>
          {props.children}
          {/* Example: <a href='/path'><span><FontAwesomeIcon icon={faHome} /></span> Home</a> */}
        </div>
      </div>
      <div className={`${menuStatus} overlay`} onClick={(e) => {
        e.preventDefault()
        setMenuStatus('')
      }} />
    </div>
  )
}
