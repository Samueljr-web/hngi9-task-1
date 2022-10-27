import React from "react";
import '../../styles/main.css'
import Zuri from '../../assets/Zuri.Internship_Logo.png'
import I4G from '../../assets/I4G.png'

export default function index() {
  return (
    <div className="footer">
      <div className="main-footer">
        <img src={Zuri} alt="zuri-internship" />
        <h2>HNG Internship 9 Frontend Task</h2>
        <img src={I4G} alt="i4g" />
      </div>
    </div>
  );}
