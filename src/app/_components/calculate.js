"use client";

import React from 'react'
import{
    Backgrounddiv,
    Headh4,
    Detp,
    Dollardiv,
    Calculatediv,
    Mandiv,
    Collectivediv,
    Conversiondiv,
    Toconvertdiv,
    Hasconverteddiv,
    Senddiv,
    Textlabel,
    Moneylabel,
    CountryBoxdiv,
    Imagediv,
    Namespan,
    Topddiv,
    Exchangediv,
    Ratediv,
    Feediv,
    Arrivesdiv,
    Labellabel,
    Textolabel,
    Buttondiv,
    Getbutton,
 
   


}from "./styles/calculate.style";
import Script from 'next/script';
import Image from 'next/image';
import BackgroundImage from "../_assets/images/calculate/Background.png";
import Usd from "../_assets/images/calculate/Usd.png";
import Aus from "../_assets/images/calculate/Aus.png";
import TopDown from "../_assets/images/calculate/TopDown.png";
import Man from "../_assets/images/calculate/Man.png";
import Dol from "../_assets/images/calculate/Dol.png";
import { useState } from 'react';



const calculate = () => {


    



  return (
   
   
    
     
      <Backgrounddiv image={BackgroundImage}>

        

        <Headh4>
        Calculate Your Transfer with Ease
        </Headh4>

        <Detp>
        Use our exchange rate calculator to determine
        the exact amount your recipient will receive,
        including all fees. We believe in providing full clarity for your transactions.
        </Detp>

        <Collectivediv>

            
            <Dollardiv>
            <Image className='dolr' src={Dol}/>
            </Dollardiv>

            <Calculatediv>

                <Conversiondiv>

                    <Toconvertdiv>

                        <Senddiv>

                             <Textlabel>
                                 You Send
                             </Textlabel>
                             <Moneylabel>
                                   1,000
                             </Moneylabel>

                        </Senddiv>

                        <CountryBoxdiv>

                        


                        <Imagediv >
                                 <Image src={Usd} className='flaglogo'/>
                            </Imagediv>
 
                            <Namespan>
                                USD
                            </Namespan>

                            <Topddiv >
                               <Image src={TopDown} className='button'/>
                            </Topddiv>

                           
                           


                        </CountryBoxdiv>

                    </Toconvertdiv>

                    <Toconvertdiv>

<Senddiv>

   

     <Textlabel>
        Recipient gets
     </Textlabel>
     <Moneylabel>
           1380.69
     </Moneylabel>

</Senddiv>

<CountryBoxdiv>

    <Imagediv >
         <Image src={Aus} className='flaglogo'/>
    </Imagediv>

    <Namespan>
        AUS
    </Namespan>

    <Topddiv >
       <Image src={TopDown} className='button'/>
    </Topddiv>


</CountryBoxdiv>

</Toconvertdiv>

                    

                </Conversiondiv>


               

                <Exchangediv>

                    <Ratediv>
                       <Labellabel>
                       Exchange Rate:
                       </Labellabel>
                       <Textolabel>
                       1 USD = 1,380.69 AUS
                       </Textolabel>

                    </Ratediv>

                    <Feediv>
                    <Labellabel>
                       Fee
                       </Labellabel>
                       <Textolabel>
                       Included
                       </Textolabel>


                    </Feediv>

                    <Arrivesdiv>
                    <Labellabel>
                       Arrives
                       </Labellabel>
                       <Textolabel>
                      Instantly
                       </Textolabel>

                    </Arrivesdiv>

                </Exchangediv>

                <Buttondiv>
                     <Getbutton>
                        Get Started
                     </Getbutton>
                </Buttondiv>


            </Calculatediv>

            <Mandiv>
     
                <Image className='mane' src={Man}/>

            </Mandiv>




        
        </Collectivediv>





      </Backgrounddiv>
  )
}

export default calculate
