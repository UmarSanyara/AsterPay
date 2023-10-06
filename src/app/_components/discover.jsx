"use client";

import React from 'react';
import{
    Backgrounddiv,
    Headh4,
    Detp,
    Videodiv,
    Alarmdiv,
    Doldiv,
    Viddiv,
 
   


}from "./styles/discover.style";

import BackgroundImage from "../_assets/images/discover/Background.png";
import Play from "../_assets/images/discover/Play.png";
import Watch from "../_assets/images/discover/Watch.png";
import Dol from "../_assets/images/discover/Dol.png";
import Video from "../_assets/images/discover/Video.png";
import Image from 'next/image';

const discover = () => {
  return (
   
    <Backgrounddiv image={BackgroundImage}>

        

    <Headh4>
    Discover How Easy It Is to Send Money
    </Headh4>

    <Detp>
    Watch this brief video to see how Aster-Pay simplifies the money transfer process.
    In just a few clicks, you can confidently send funds to your recipients.
    </Detp>

    <Videodiv>

        <Doldiv>

        <Image className='dolw' src={Dol}/>

        </Doldiv>

        <Viddiv>

          <Image className='vido' src={Video}/>


        </Viddiv>

        <Alarmdiv>

           
        <Image className='alm' src={Watch}/>

        </Alarmdiv>




    </Videodiv>

    





  </Backgrounddiv>
  )
}

export default discover
