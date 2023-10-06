import styled from "styled-components";



export const Backgrounddiv = styled.div`

   width: 100%;
   height: 542px;
   background-image: url(${(props)=> props.image.src});
   display: flex;
   flex-direction: column;
   background-size: cover;
   margin-bottom: 412px;

   @media (max-width: 1289px) and (min-width: 1081px)  {
    height: 500px;
    margin-bottom: 350px;

   }
   @media (max-width: 1080px) and (min-width: 958px)  {
    height: 400px;
    margin-bottom: 320px;

   }


   @media (max-width: 957px) and (min-width: 775px)  {
    height: 400px;
    margin-bottom: 220px;

   }

   
   @media (max-width: 774px) and (min-width: 750px)  {
    height: 400px;
    margin-bottom: 220px;

    

   }

   @media (max-width: 749px) and (min-width: 459px)  {
    height: 500px;
    margin-bottom: 170px;

   }

   @media (max-width: 458px) {
    height: 420px;
    margin-bottom: 210px;

   }



   
`;

export const Headh4 = styled.div`
    
    padding-top: 53px;
    color:  #FFF;
    text-align: center;
    font-family: Jost;
    font-size: 50px;
    font-style: normal;
    font-weight: 600;
    line-height: 65px;
    padding-left: 421px;
    padding-right: 421px;

    @media (max-width: 1412px) and (min-width: 1168px){
       
        padding-left: 351px;
    padding-right: 351px;
    
       }

       @media (max-width: 1167px) and (min-width: 1080px){
       
       padding-left: 300px;
   padding-right: 300px;
   
      }

    @media (max-width: 1079px) and (min-width: 958px){
       
       
       font-size: 45px;
       padding-left: 200px;
   padding-right: 200px;
       }

       @media (max-width: 957px) and (min-width: 750px){
       
        font-size: 38px;
        line-height: 50px;
        padding-left: 140px;
   padding-right: 140px;
       }   

       
       

       @media (max-width: 749px) and (min-width: 600px) {

        font-size: 29px;
        line-height: 35px;
        padding-left: 150px;
        padding-right: 150px;

       }
       @media (max-width: 599px) and (min-width: 456px) {

font-size: 29px;
line-height: 35px;
padding-left: 100px;
padding-right: 100px;

}

       @media (max-width: 455px) {

font-size: 29px;
line-height: 35px;
padding-left: 50px;
padding-right: 50px;

}

`;

export const Detp = styled.p`
     
     color: #FFF;
     text-align: center;
     font-family: Jost;
     font-size: 20px;
     font-style: normal;
     font-weight: 400;
     line-height: normal;
     padding-left: 341px;
     padding-right: 341px;
     padding-top: 28px;

     @media (max-width: 1320px) and (min-width: 1272px){
       
       padding-left: 270px;
       padding-right: 270px;
       }

       @media (max-width: 1370px) and (min-width: 1321px){
       
       padding-left: 250px;
       padding-right: 250px;
       }

       @media (max-width: 1271px) and (min-width: 1140px){
       
       padding-left: 200px;
       padding-right: 200px;
       }

       @media (max-width: 1139px) and (min-width: 1080px){
       
       padding-left: 100px;
       padding-right: 100px;
       }

       @media (max-width: 1079px) and (min-width: 900px){
       
       padding-left: 100px;
       padding-right: 100px;
       font-size: 17px;
       }

       @media (max-width: 899px) and (min-width: 790px){
       
        padding-left: 120px;
       padding-right: 120px;
       font-size: 15px;
      }  

      @media (max-width: 789px) and (min-width: 750px){
       
         
        padding-left: 50px;
       padding-right: 50px;
       font-size: 14px;
    
      }  

      @media (max-width: 749px) {

        padding-left: 30px;
       padding-right: 30px;
       font-size: 14px;

       padding-top: 10px;
      }

`;

export const Videodiv = styled.div`

   padding-top: 58px;
   display: flex;
   justify-content: space-between;
   
   
   .vido{

    width: 846.888px;
    height: 519px;
   }

   @media (max-width: 1289px) and (min-width: 1081px)   {

    .vido{

width: 688px;
height: 422px;
}

   }

   @media (max-width: 1080px) and (min-width: 958px)  {


    .vido{

width: 563px;
height: 345px;
}


   }

   @media (max-width: 957px) and (min-width: 750px)  {

    .vido{

width: 448px;
height: 275px;
}

   }

   
   @media (max-width: 749px) and (min-width: 459px) {

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding-left: 0px;
padding-top: 0px;


.vido{

width: 448px;
height: 275px;
}



}

@media (max-width: 458px) and (min-width: 400px) {

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding-left: 0px;
padding-top: 0px;


.vido{

width: 392px;
height: 241px;
}



}

@media (max-width: 399px) {

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding-left: 0px;
padding-top: 0px;


.vido{

width: 326px;
height: 200px;
}



}




`;

export const Viddiv = styled.div`

@media (max-width: 749px)  {
    padding-top: 30px;
    
}
 

`;
export const Alarmdiv = styled.div`

padding-top: 217px;
.alm{

    width: 193px;
height: 223px;
}

@media (max-width: 1340px) and (min-width: 1290px)  {

    .alm{

width: 155px;
height: 180px;
}

}
  

@media (max-width: 1289px) and (min-width: 1081px)   {

  
    padding-top: 173px;
.alm{

    width: 155px;
height: 180px;
}
}


@media (max-width: 1080px) and (min-width: 958px)  {

    padding-top: 83px;
.alm{

    width: 155px;
height: 180px;
}

}

@media (max-width: 957px) and (min-width: 900px)  {

    
    padding-top: 114px;
.alm{

    width: 108px;
height: 126px;
}

}

@media (max-width: 957px) and (min-width: 791px)  {

    
padding-top: 118px;
.alm{

width: 108px;
height: 126px;
}

}

@media (max-width: 790px) and (min-width: 750px)  {

    
padding-top: 122px;
.alm{

width: 108px;
height: 126px;
}

}

@media (max-width: 749px)  {

    padding-top: 0px;
    align-self: flex-end;
    margin-top: -20px;
    z-index: -3;
    display: none;
.alm{

width: 108px;
height: 126px;
}
display: none;

}

`;

export const Doldiv = styled.div`

padding-top: 237px;
padding-left: 48px;

.dolw{
    width: 199.85px;
    height: 165px;
}

@media (max-width: 1340px) and (min-width: 1290px)  {

padding-top: 180px;

.dolw{
width: 165px;
height: 137px;
}

}



@media (max-width: 1289px) and (min-width: 1081px)  {

    padding-top: 180px;

    .dolw{
    width: 165px;
    height: 137px;
}

}

@media (max-width: 1080px) and (min-width: 958px)  {

    padding-top: 120px;
    padding-left: 15px;

.dolw{
width: 165px;
height: 137px;
}

}

@media (max-width: 957px) and (min-width: 750px)  {

    padding-top: 120px;
    padding-left: 10px;

.dolw{
width: 135px;
height: 112px;
}

}


@media (max-width: 790px) and (min-width: 750px)  {

    
    padding-top: 123px;
    padding-left: 5px;

.dolw{
width: 135px;
height: 112px;
}

}

@media (max-width: 749px){

    padding-top: 30px;
    padding-left: 0px;

.dolw{
width: 135px;
height: 112px;
}

}
  

`;



