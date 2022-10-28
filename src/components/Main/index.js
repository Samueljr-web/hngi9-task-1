import React from 'react'
import '../../styles/main.css'
import Profile__img from '../../assets/profile__img.png'
import Github from '../../assets/github.png'
import Slack from '../../assets/slack.png'
import Share_icon from '../../assets/share.png'
import Ellipses_icon from '../../assets/ellipses.png'

export default function index({Link}) {
  return (
    <div className='main'>
      <div className='profile_wrapper'>
        <div className='profile'>
        <img src={Profile__img} id='profile__img' alt='profile_img' />
        <h2>Samuel Adeyemi</h2>
        {/* <a href='' id='slack'>samueljr-web</a> */}
       </div>
       <div className='all_btn'>
        <a href='/' className='share_btn'><img src={Share_icon} alt="share-btn"/></a>
        <a href='/' className='ellipse_btn'><img src={Ellipses_icon} alt="ellipse-btn"/></a>
       </div>
      </div>
      
      <div className='links'>
        {Link.map((link, id) =>{
          return(
              <a href={link.href} id={link.id} key={id} target="_blank" rel='noreferrer' className="link_btn" title={link.title}>{link.name}</a>
          )
        })}
       </div>
       <div className='social__icons'>
        <a href='/'><img src={Slack} alt="slack-icon"/></a>
        <a href='https://github.com/Samueljr-web'><img src={Github} alt="github-icon"/></a>
       </div>
    </div>
  )}
