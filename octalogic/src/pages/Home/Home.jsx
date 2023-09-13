import React, { useEffect, useState } from "react";
import logo from "../../icons/logo.png";
import home from "../../icons/Home.png";
import cource from "../../icons/Cource.png";
import logout from "../../icons/Logout.png";
import { Course } from "../../components/Course/Course";
import { useNavigate } from "react-router-dom";
import { Overview } from "../../components/Overview/Overview";

export const Home = () => {

  const navigate = useNavigate()
  const [Bool, setBool] = useState(true)


  const HandelLogout = () =>{
    localStorage.setItem("octaMyUser", "")
    navigate("/login")
  }

useEffect(() => {
  let user = localStorage.getItem("octaMyUser") || ""
  if(user == ""){
    navigate("/login")
  }
}, [])


  return (
    <div className="flex">
      <div className="w-24 min-h-screen border-2 px-3 py-2 ">
        <div className="mb-12 flex justify-center">
          <img className="w-12 h-12" src={logo} alt="" />
        </div>

        <div className="w-16 h-32  grid gap-x-1">
          <img onClick={()=>setBool(true)} className="w-16 h-14 py-1 rounded-md" src={home} alt="" />
          <img onClick={()=>setBool(false)} className="w-16 h-14 py-1 rounded-md" src={cource} alt="" />
        </div>

        <div className="absolute bottom-5 left-0 m-auto w-6/12 p-3">
          <img onClick={HandelLogout} className="w-16 h-12 p-1 rounded-md" src={logout} alt="" />
        </div>
      </div>

      <div  className="border-red-1 w-full ">
      {Bool ? <Overview /> : <Course />}
      </div>
    </div>
  );
};
