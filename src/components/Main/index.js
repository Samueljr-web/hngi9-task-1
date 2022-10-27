import React from 'react'
import '../../styles/main.css'
import Profile__img from '../../assets/profile__img.png'
import Github from '../../assets/github.png'
import Slack from '../../assets/slack.png'

export default function index({Link}) {
  return (
    <div className='main'>
      <div className='profile'>
        <img src={Profile__img} id='profile__img' alt='profile_img' />
        <h2>Samuel Adeyemi</h2>
        {/* <a href='' id='slack'>samueljr-web</a> */}
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
