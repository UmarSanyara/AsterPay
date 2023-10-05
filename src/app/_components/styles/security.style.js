import styled from "styled-components";


export const Maindiv = styled.div`

  padding-left: 19px;
  padding-right: 79px; 

  @media(max-width: 1300px) and (min-width: 1200px){
    padding-right: 50px; 
  }

  @media(max-width: 1200px) and (min-width: 1000px){
    padding-right: 30px; 
  }

  @media(max-width: 999px) and (min-width: 850px){
    padding-right: 20px; 
  }

  @media(max-width: 849px) and (min-width: 750px){
    padding-right: 20px; 
  }

  @media(max-width: 425px) {
    padding-right: 10px;
    padding-left : 10px ;
  }


  @media(max-width: 749px) and (min-width: 426px){
    padding-right: 20px;
    padding-left : 20px ;
  }



`;

export const Contentdiv = styled.div`

  padding-top: 142px;
  display:  flex;

  @media(max-width: 999px) and (min-width: 850px){
    padding-top: 100px; 
  }

  @media(max-width: 849px) and (min-width: 750px){
    padding-top: 70px;
  }

  @media(max-width: 425px) {
    padding-top: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media(max-width: 749px) and (min-width: 426px){
    padding-top: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }


  


`;


export const Prioritydiv = styled.div`
    
     display: flex;
     flex-direction: column;



`;

export const Pointsiv = styled.div`
    
     display: flex;
     flex-direction: column;

     

`;


export const Textdiv = styled.div`

     display: flex;
     flex-direction: column;
     padding-right: 105px;
     padding-left: 60px;
     gap: 41px;

     @media (max-width: 1200px) and (min-width: 1000px){
        gap: 31px;
        padding-right: 50px;
     }

     @media(max-width: 999px) and (min-width: 850px){
        padding-right: 0px;
        gap: 26px;
     }

     @media(max-width: 849px) and (min-width: 750px){
        padding-right: 0px;
        gap: 22px;

     }

     @media(max-width: 425px) {

     display: flex;
     flex-direction: column;
     padding-right: 50px;
     padding-left: 50px;
     gap: 22px;

     }

     @media(max-width: 749px) and (min-width: 426px){

display: flex;
flex-direction: column;
padding-right: 70px;
padding-left: 70px;
gap: 22px;

}
   
`;


export const Headingh4 = styled.h4`
  
  color: #0D1B3E;
  font-family: "Jost";
  font-size: 50px;
  font-style: normal;
  font-weight: 600;
  line-height: 65px;
  padding-right: 80px;
  
  @media (max-width: 1200px) and (min-width: 1000px){
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: 50px;
  padding-right: 50px;
  }

  @media(max-width: 999px) and (min-width: 850px){
    font-size: 35px;
  font-style: normal;
  font-weight: 600;
  line-height: 38px;
  padding-right: 25px;

  }

  @media(max-width: 849px) and (min-width: 750px){

    font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: 34px;
  padding-right: 25px;
  }

  @media(max-width: 425px) {

    font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: 34px;
  padding-right: 0px;
  text-align: center;
  

  }

  @media(max-width: 749px) and (min-width: 426px){

font-size: 30px;
font-style: normal;
font-weight: 600;
line-height: 34px;
padding-right: 0px;
text-align: center;


}

   

`;

export const Detailp = styled.p`
  
  color: #0D1B3E;
  font-family: "Jost";
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  @media (max-width: 1200px) and (min-width: 1000px){
    font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  }

  @media (max-width: 999px) and (min-width: 850px){
    font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  }

  @media(max-width: 849px) and (min-width: 750px){
    font-size: 11px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  }

  @media(max-width: 425px) {
    font-size: 11px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-align: center;
  }

  @media(max-width: 749px) and (min-width: 426px){
    font-size: 11px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-align: center;
  }

  
`;


export const Imagediv = styled.div`

padding-top: 52px;

.SecuityBanSize{

    width: 686px;
    height: 831px;
  
    


  }

  @media (max-width: 1200px) and (min-width: 1000px){

    .SecuityBanSize{

width: 563px;
height: 685px;




}
  }


  @media (max-width: 999px) and (min-width: 850px){

.SecuityBanSize{

width: 403px;
height: 491px;




}
}

@media(max-width: 849px) and (min-width: 750px){

    .SecuityBanSize{

width: 327px;
height: 398px;




}

}

@media(max-width: 425px) {

    display: flex;
    justify-content: center;
    align-items: center;
.SecuityBanSize{

width: 352px;
height: 429px;




}

}

@media(max-width: 749px) and (min-width: 426px){

display: flex;
justify-content: center;
align-items: center;
.SecuityBanSize{

width: 416px;
height: 506px;




}

}


`;

export const Featuresdiv = styled.div`

    padding-left: 20px;
    padding-top: 23px;
    padding-right: 25px;
    padding-bottom: 23px;
    display: flex;
    justify-content: center;


`;

export const Logodiv = styled.div`


.F{
        background: #FFE5E9;
        opacity: 0.5;
    }

    .Thr{
        background: #E1E4FF;
        opacity: 0.5;
    }

    .Bio{
        background: #FFF1D7;
        opacity: 0.5;
    }

    .Fra{
        background: #DEF3FF;
        opacity: 0.5;
    }

    .Cer{
        background: #FFE5E9;
        opacity: 0.5;
    }
`;


export const Textingdiv = styled.div`

  padding-left: 25px;
  gap: 19px;
  display: flex;
  flex-direction: column;

  @media (max-width: 1200px) and (min-width: 1000px){
    padding-left: 8px;
  }

  @media (max-width: 999px) and (min-width: 850px){
    padding-left: 8px;
    gap: 15px
  }
  @media(max-width: 849px) and (min-width: 750px){
    padding-left: 8px;
    gap: 15px
  }
  @media(max-width: 749px) {
    padding-left: 8px;
    gap: 7px
  }


`;

export const LogoImgdiv = styled.div`

   width: 80px;
   height: 80px;
   display: flex;
   justify-content: center;
   align-items: center;
   border-radius: 200px;

  
   
   


   .Financial{

  
width: 61.98px;
height: 45.94px;
   }


   .ThreeD{
    width: 39px;
height: 45px;
   }

   .Biometric{

    width: 46px;
height: 52px;

   }

   .Fraud{
    width: 51.88px;
height: 51.696px;
   }

   .Certified{
    width: 37.951px;
height: 46.029px;
   }


   @media(max-width: 849px) and (min-width: 750px){


    width: 40px;
   height: 40px;
   display: flex;
   justify-content: center;
   align-items: center;
   border-radius: 200px;

  
   
   


   .Financial{

  
width: 28px;
height: 21px;
   }


   .ThreeD{
    width: 25px;
height: 29px;
   }

   .Biometric{

    width: 25px;
height: 28px;

   }

   .Fraud{
    width: 28px;
height: 28px;
   }

   .Certified{
    width: 25px;
height: 31px;
   }

   }


   @media(max-width: 425px) {


width: 40px;
height: 40px;
display: flex;
justify-content: center;
align-items: center;
border-radius: 200px;






.Financial{


width: 28px;
height: 21px;
}


.ThreeD{
width: 25px;
height: 29px;
}

.Biometric{

width: 25px;
height: 28px;

}

.Fraud{
width: 28px;
height: 28px;
}

.Certified{
width: 25px;
height: 31px;
}

}

@media(max-width: 749px) and (min-width: 426px){


width: 40px;
height: 40px;
display: flex;
justify-content: center;
align-items: center;
border-radius: 200px;






.Financial{


width: 28px;
height: 21px;
}


.ThreeD{
width: 25px;
height: 29px;
}

.Biometric{

width: 25px;
height: 28px;

}

.Fraud{
width: 28px;
height: 28px;
}

.Certified{
width: 25px;
height: 31px;
}

}



`;

export const Headh5 = styled.h5`


font-family: "Jost";
font-size: 26px;
font-style: normal;
font-weight: 600;
line-height: normal;

@media (max-width: 1200px) and (min-width: 1000px){

    font-size: 21px;
font-style: normal;
font-weight: 600;
line-height: normal;
}

@media (max-width: 999px) and (min-width: 850px){

font-size: 19px;
font-style: normal;
font-weight: 600;
line-height: normal;
}

@media(max-width: 849px) and (min-width: 750px){
    font-size: 17px;
font-style: normal;
font-weight: 600;
line-height: normal;

}

@media(max-width: 425px) {
    font-size: 17px;
font-style: normal;
font-weight: 600;
line-height: normal;

}
 



@media(max-width: 749px) and (min-width: 426px){
    font-size: 17px;
font-style: normal;
font-weight: 600;
line-height: normal;

}


`;


export const Parap = styled.p`


color: #6A6969;
font-family: "Jost";
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: 25px;

@media (max-width: 1200px) and (min-width: 1000px){

    font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 25px;


}

@media (max-width: 999px) and (min-width: 850px){

font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 18px;


}

@media(max-width: 849px) and (min-width: 750px){

    font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: 18px;
}

@media(max-width: 425px) {
    padding-top: 5px;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: 18px;
}

@media(max-width: 749px) and (min-width: 426px){
    padding-top: 5px;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: 18px;
}


 


`;

export const Paraextp = styled.p`
 
 padding-top: 10px;
 color: #6A6969;
font-family: "Jost";
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: 25px;

@media (max-width: 1200px) and (min-width: 1000px){

font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 25px;


}

@media (max-width: 999px) and (min-width: 850px){
    padding-top: 8px;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 18px;


}

@media(max-width: 849px) and (min-width: 750px){
    padding-top: 5px;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: 18px;
}

@media(max-width: 425px) {
    padding-top: 5px;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: 18px;
}

@media(max-width: 749px) and (min-width: 426px){
    padding-top: 5px;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: 18px;
}


`;

