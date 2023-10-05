import styled from "styled-components";


export const Main = styled.div`
max-width: 1440px;
min-height: 697px;
background: rgba(242, 243, 249, 0.50);
position: relative;
overflow: hidden;
display: flex;
align-items: center;
justify-content: center;

.Clock
{
    position: absolute;
    top: -100px;
    left: 0;
    z-index: -1;
}

@media (max-width: 1024px)
   {
    flex-direction: column !important;
   }
`

export const InfoPart =styled.div`

width: 60%;
padding: 98px 0px 109px 81px;
position: relative;
span
     {
    color: var(--purple, #4743C9);
    font-family: Jost;
    font-size: 19px;
    font-weight: 500;
   }

   h1
   {
    color: #0D1B3E;
    font-family: Jost;
    font-size: 50px;
    font-weight: 600;
    line-height: 65px; 
    padding-top: 26px;
   }
   p{
    color: var(--Blue, #0D1B3E);
    font-family: Jost;
    font-size: 18px;
    font-weight: 400;
    padding-top: 23px;
   }
   .BottomClock
   {
    position: absolute;
    bottom: -45px;
    right: 0;
    transform: rotate(270deg);
    z-index: -1;
   }
   .Money
   {
    position: absolute;
    top: 54px;
    right: 0;
    z-index: -1;
   }
   @media (max-width: 1301px) {
    .Money
    {
        right: 50px !important;
    }
   }

   @media (max-width: 1220px) and (min-width: 1150px)
   {
     h1
   {
    font-size: 40px;
    line-height: 50px; 
   }
   p{
    font-size: 16px;
   }
   .BottomClock
   {
    bottom: -65px !important;
   }
   .Money
    {
        right: 70px !important;
    }
   }

   @media (max-width: 1150px) and (min-width: 1024px) {
    h1
   {
    font-size: 40px;
    line-height: 50px; 
   }
   p{
    font-size: 14px !important;
   }
   .BottomClock
   {
    bottom: -65px !important;
   }
   .Money
    {
        top: -20px;
        right: 70px !important;
    }
   }

   @media (max-width: 1024px) and  (min-width: 616px)
   {
    width: 100%;
    h1
   {

    font-size: 50px;
    line-height: 65px; 
   }
   p{
    font-size: 18px !important;
    padding-top: 23px;
   }
   .Money
   {
    top: 54px;
    right: 0;
   }
   .BottomClock
   {
    transform: rotate(180deg);
   }
   }

   @media (max-width: 696px) {
    padding: 98px 0px 109px 31px;
   }

   @media (max-width: 616px) and (min-width: 503px) {
    width: 100%;
    h1
   {

    font-size: 35px;
    line-height: 45px; 
   }
   p{
    font-size: 14px !important;
    padding-top: 23px;
   }
   .Money
   {
    top: 54px;
    right: 0;
   }
   .BottomClock
   {
    transform: rotate(180deg);
   }
   }

   @media (max-width: 519px)
   {
    .Money
   {
    top: 0;
    right: 0;
   }
   }

   @media (max-width: 503px) {
    width: 100%;
    h1
   {
    font-size: 28px;
    line-height: 35px; 
   }
   p{
    font-size: 10px !important;
    padding-top: 23px;
   }
   .Money
   {
    display: none;
   }
   .BottomClock
   {
    transform: rotate(180deg);
   }
    
   }
`

export const BtnDiv =styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: flex-start;
gap: 21px;
padding-top: 55px;

.BtnImg
{
    cursor: pointer;
}
@media (max-width: 1150px) and (min-width: 1024px)
{
    .BtnImg
    {
        width: 150px !important;
        height: 50px !important;
    }
}

@media (max-width: 616px)
{
    .BtnImg
    {
        width: 150px !important;
        height: 50px !important;
    }
}

@media (max-width: 503px)
{
    .BtnImg
    {
        width: 120px !important;
        height: 40px !important;
    }
}
`

export const BannerPart=styled.div `
width:40%;
height: 100%;
padding: 76px 117px 94px 0px;
display: flex;
align-items: center;
justify-content: end;
background-image: url('./../_assets/images/BannerImage.png');

@media (max-width: 1150px) and (min-width: 1024px)
  {
    padding: 76px 50px 94px 0px;
  }

  @media (max-width: 1024px)  and  (min-width: 616px)
  {
    width:100%;
    justify-content: center;
    padding: 20px 0px 70px 0px  !important;
  }

  @media (max-width: 616px)
  {
    width:100%;
    justify-content: center;
    padding: 20px 0px 70px 0px  !important;
  }
`

export const Banner=styled.div`
width: 405px;
height: 523px;
border-radius: 10px;
background: #FFF;
box-shadow: 0px 4px 15px 0px rgba(13, 27, 62, 0.10);
text-align: center;
padding:23px 19px 24px;

h3
   {
    color: var(--purple, #4743C9);
    font-family: Jost;
    font-size: 26px;
    font-weight: 600;
  }
  p
  {
    color: #6A6969;
text-align: center;
font-family: Jost;
font-size: 14px;
font-weight: 400;
line-height: 18px; 
padding-top: 19px;
padding-bottom: 19px;
  }
  button
  {
    width: 218px;
    height: 48px;
    margin-top: 19px;
    border-radius: 10px;
    background: var(--purple, #4743C9);
    border: none;
    outline: none;
    color: #FFF;
    font-family: Jost;
    font-size: 18px;
    font-weight: 500;
  }
  @media (max-width: 1024px)  and  (min-width: 616px)
  {
    width: 500px !important;
    button
  {
    width: 318px !important;
  }
  }

  @media (max-width: 450px) {
    width: 350px;
    h3
   {
    font-size: 20px !important;
  }
  p
  {
   font-size: 12px;

  }
  button
  {
    width: 218px;
    height: 48px;
    margin-top: 19px;
    border-radius: 10px;
    background: var(--purple, #4743C9);
    border: none;
    outline: none;
    color: #FFF;
    font-family: Jost;
    font-size: 18px;
    font-weight: 500;
  }
  }
`

export const PaymentDetails=styled.div`
width: 367px;
height: 73px;
border-radius: 10px;
background: #EDEFFF;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 12px 0 18px;

.send
{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
span
 {
    color: var(--Blue, #0D1B3E);
    font-family: Jost;
    font-size: 14px;
    font-weight: 400;
 }
 h3
 {
    color: var(--Blue, #0D1B3E);
    font-family: Jost;
    font-size: 22px;
    font-weight: 600;
 }

 .country {
  width: 151px;
  height: 53px;
  border-radius: 10px;
  background: #FFF;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  position: relative;

  .Arrow
  {
    cursor: pointer;
  }
}

.dropdown {
  padding: 10px 20px;
  border-radius: 10px;
  background: #EDEFFF;
  display: none;
  position: absolute;
  top: 120%;
  left: 0;
  z-index: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  animation: move 1s;
}
.Menu
{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 35px;
  cursor: pointer;
}
.Menu:hover
{
  border-bottom: 1px solid #fff;
  border-top: 1px solid #fff;
  padding-bottom: 5px;
  padding-top: 5px;
}



.countrySec {
  width: 151px;
  height: 53px;
  border-radius: 10px;
  background: #FFF;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  position: relative;

  .Arrow
  {
    cursor: pointer;
  }
}

.dropdownSec {
  padding: 10px 20px;
  border-radius: 10px;
  background: #EDEFFF;
  display: none;
  position: absolute;
  top: 120%;
  left: 0;
  z-index: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  animation: move 1s;
}
.MenuSec
{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 35px;
  cursor: pointer;
}
.MenuSec:hover
{
  border-bottom: 1px solid #fff;
  border-top: 1px solid #fff;
  padding-bottom: 5px;
  padding-top: 5px;
}
@keyframes move {
  from{
    transform : translateY(-100%);
    opacity: 0;
  }
  to
  {
    transform: translateY(0%);
    opacity: 1;
  }
}
 @media (max-width: 1024px) and  (min-width: 616px)
  {
    width: 467px !important;
  }
  @media (max-width: 450px)
  {
    width: 307px !important;
  }
`
export const Exchange = styled.div`
width: 100%;
height: 77px;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 11px;
text-align: left;
.rate
{
    text-align: left;
}
 span
{
color: var(--purple, #4743C9);
font-family: Jost;
font-size: 12px;
font-weight: 400;
}
 h5
{
    color: var(--black, #000);
font-family: Jost;
font-size: 13px;
font-weight: 400;
}
.dets
{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 35px;
}
`