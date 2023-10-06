import styled from "styled-components";


export const Backgrounddiv = styled.div`

   width: 100%;
   height: 442px;
   background-image: url(${(props)=> props.image.src});
   display: flex;
   flex-direction: column;
   background-size: cover;


   @media (max-width: 1079px) and (min-width: 900px){
       
       
       height: 390px;
       width: 100%;
       }

       @media (max-width: 899px) and (min-width: 790px){
       
       
       height: 350px;
       width: 100%;
       } 
       
       @media (max-width: 790px) and (min-width: 680px){
       
       
       height: 320px;
       width: 100%;
       } 
       
       @media (max-width: 679px) {
       
       
       height: 450px;
       width: 100%;
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

    @media (max-width: 1079px) and (min-width: 900px){
       
       
       font-size: 45px;
       }

       @media (max-width: 899px) and (min-width: 790px){
       
        font-size: 38px;
        line-height: 50px;
       }   

       
       @media (max-width: 790px) and (min-width: 680px){
       
         
        font-size: 39px;
        line-height: 50px;
     
       }  

       @media (max-width: 679px) {

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

      @media (max-width: 790px) and (min-width: 680px){
       
         
        padding-left: 50px;
       padding-right: 50px;
       font-size: 14px;
    
      }  

      @media (max-width: 679px) {

        padding-left: 30px;
       padding-right: 30px;
       font-size: 14px;

       padding-top: 10px;
      }

`;

export const Collectivediv = styled.div`

    display: flex;
    padding-left: 79px;
    padding-right: 44px;
    padding-top: 53px;
    justify-content: space-between;
    width: 100%;

    @media (max-width: 1370px) and (min-width: 1321px){
       
       padding-left: 50px;
       padding-right: 50px;
       }

    @media (max-width: 1320px) and (min-width: 1272px){
       
    padding-left: 30px;
    padding-right: 30px;
    }

    @media (max-width: 1271px) and (min-width: 1140px){
       
       padding-left: 10px;
       padding-right: 10px;
       }
       @media (max-width: 1139px) and (min-width: 1080px){
       
       padding-left: 10px;
       padding-right: 10px;
       }

       @media (max-width: 1079px) and (min-width: 900px){
       
        padding-left: 20px;
       padding-right: 20px;
      
       }

       @media (max-width: 899px) and (min-width: 790px){
       
       padding-left: 16px;
      padding-right: 16px;
      
     }  

     @media (max-width: 790px) and (min-width: 680px){

        padding-left: 16px;
      padding-right: 16px;
      gap: 20px;
      
     }

     @media (max-width: 679px) {

        display: flex;
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 10px;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    gap: 47px;

     }

`;
export const Dollardiv = styled.div`

padding-top: 159px;
.dolr{
    width: 135px;
    height: 111.46px
}

@media (max-width: 1079px) and (min-width: 900px){
      
    .dolr{
        width: 111px;
    height: 92px;

    }
   
    
       }

       @media (max-width: 899px) and (min-width: 790px){
       
        padding-top: 130px;

        .dolr{
        width: 95px;
    height: 79px;

    }
      
     } 

     @media (max-width: 790px) and (min-width: 680px){

        padding-top: 104px;

.dolr{
width: 95px;
height: 79px;

}

     }

     @media (max-width: 679px){

        padding-top: 30px;

.dolr{
width: 132px;
height: 109px;

}
        
     }

`;

export const Calculatediv = styled.div`

padding-top: 37px;
padding-left: 57px;
padding-right: 57px;
padding-bottom: 33px;

border-radius: 10px;
background: #FFF;
box-shadow: 0px 4px 15px 0px rgba(13, 27, 62, 0.10);

display: flex;
flex-direction: column;

@media (max-width: 1271px) and (min-width: 1140px){
       
       padding-left: 20px;
       padding-right: 20px;
       }

       @media (max-width: 1139px) and (min-width: 1080px){
       
   
        padding-top: 20px;
padding-left: 20px;
padding-right: 20px;
padding-bottom: 20px;
          }

          @media (max-width: 1079px) and (min-width: 900px){
       
            padding-top: 17px;
padding-left: 17px;
padding-right: 17px;
padding-bottom: 17px;
       }

       @media (max-width: 899px) and (min-width: 790px){

        padding-top: 17px;
padding-left: 17px;
padding-right: 17px;
padding-bottom: 17px;

       }

       @media (max-width: 790px) and (min-width: 680px){

        padding-top: 17px;
padding-left: 17px;
padding-right: 17px;
padding-bottom: 17px;

width: 100%;

       }

       
     @media (max-width: 679px) {

        padding-top: 17px;
padding-left: 17px;
padding-right: 17px;
padding-bottom: 17px;

width: 87%;


     }
         





`;

export const Conversiondiv = styled.div`
 
    display: flex;
    justify-content: space-between;
    gap: 55px;

    @media (max-width: 1271px) and (min-width: 1140px){
       
       gap: 30px;
       }

       @media (max-width: 1139px) and (min-width: 1080px){
       
       gap: 20px;
       }

       @media (max-width: 1079px) and (min-width: 900px){
       
       gap: 15px;
  }

  @media (max-width: 899px) and (min-width: 790px){

gap: 15px;
}

@media (max-width: 790px) and (min-width: 680px){
    display: flex;
   flex-direction: column;
    gap: 15px;
}

@media (max-width: 679px) {

    display: flex;
   flex-direction: column;
    gap: 15px;

}





`;

export const Toconvertdiv = styled.div`
 
 padding-left: 18px;
 padding-top: 10px;
 padding-bottom: 10px;
 padding-right: 12px;
 display: flex;
 justify-content: space-between;
 width: 376px;
 border-radius: 10px;
background: #EDEFFF;



@media (max-width: 1139px) and (min-width: 1080px){
       
    width: 340px;
       }

       
       @media (max-width: 1079px) and (min-width: 900px){
       
     width: 290px;
  }

  @media (max-width: 899px) and (min-width: 790px){

width: 250px;
}

@media (max-width: 790px) and (min-width: 680px){
    width: 100%;

}

@media (max-width: 679px) {
    width: 100%;
}
    


`;

export const Hasconverteddiv = styled.div`
 
 padding-left: 18px;
 padding-top: 10px;
 padding-bottom: 10px;
 padding-right: 12px;
display: flex;
justify-content: space-between;


`;

export const Senddiv = styled.div`

display: flex;
flex-direction: column;
justify-content: space-between;


`;

export const Textlabel = styled.label`

color:  #0D1B3E;
font-family: Jost;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;

@media (max-width: 1079px) and (min-width: 900px){
       
       font-size: 12px;
    }

    @media (max-width: 899px) and (min-width: 790px){

font-size: 10px;
}

@media (max-width: 790px) and (min-width: 680px){
    font-size: 12px;
}

`;

export const Moneylabel= styled.div`

color: #0D1B3E;
font-family: Jost;
font-size: 22px;
font-style: normal;
font-weight: 600;
line-height: normal;


@media (max-width: 1079px) and (min-width: 900px){
       
       font-size: 19px;
    }

    @media (max-width: 899px) and (min-width: 790px){

font-size: 16px;
}

@media (max-width: 790px) and (min-width: 680px){
    font-size: 19px;
}

`;

export const CountryBoxdiv = styled.div`

padding-left: 9px;
padding-top: 9px;
padding-bottom: 10px;
padding-right: 18px;
display: flex;
justify-content: space-between;
align-items: center;
width: 151px;
border-radius: 10px;
background: #FFF;

@media (max-width: 1079px) and (min-width: 790px){
       
    padding-left: 5px;
padding-top: 5px;
padding-bottom: 5px;
padding-right: 10px;
width: 120px;
    }

    @media (max-width: 790px) and (min-width: 680px){
   
        padding-left: 5px;
padding-top: 5px;
padding-bottom: 5px;
padding-right: 10px;
width: 150px;
}

@media (max-width: 679px) {

    padding-left: 15px;
padding-top: 5px;
padding-bottom: 5px;
padding-right: 10px;
width: 120px;

}



`;

export const Imagediv = styled.div`
width: 34px;
height: 34px;
display: flex;
justify-content: center;
align-items: center;

.flaglogo{
    width: 34px;
    height: 34px;
}

@media (max-width: 1079px) and (min-width: 790px){
    width: 24px;
    height: 24px;

    .flaglogo{
    width: 24px;
    height: 24px;
}
       
       }

       @media (max-width: 679px) {
       
    
        width: 24px;
    height: 24px;

    .flaglogo{
    width: 24px;
    height: 24px;
    }

}


`;

export const Namespan = styled.span`
color: #0D1B3E;
font-family: Jost;
font-size: 22px;
font-style: normal;
font-weight: 600;
line-height: normal;

@media (max-width: 1079px) and (min-width: 900px){
       
       font-size: 19px;
    }

    @media (max-width: 1079px) and (min-width: 790px){
        font-size: 16px;
    }


`;

export const Topddiv = styled.div`



.button{
    width: 16px;
height: 8px;
}

@media (max-width: 1079px) and (min-width: 790px){
       

    .button{
    width: 9px;
height: 4px;
}

    }



`;

export const Exchangediv = styled.div`

padding-top: 41px;
display: flex;
gap: 98px;
align-self: center;

@media (max-width: 1079px) and (min-width: 790px){
    gap: 58px;

}

@media (max-width: 790px) and (min-width: 680px){
    gap: 30px;
    padding-top: 21px;
}


@media (max-width: 679px) {

    display: flex;
    flex-direction: column;
    align-items: left;
    gap: 20px;
}


`;

export const Ratediv = styled.div`

display: flex;
flex-direction: column;
gap: 3.46px;


`;

export const Feediv = styled.div`

display: flex;
flex-direction: column;
gap: 3.46px;

`;

export const Arrivesdiv = styled.div`

display: flex;
flex-direction: column;
gap: 3.46px;

`;


export const Labellabel = styled.label`

color:  #4743C9;
font-family: Jost;
font-size: 17.079px;
font-style: normal;
font-weight: 400;
line-height: normal;

@media (max-width: 790px) and (min-width: 680px){
    font-size: 14.079px;
}

`;

export const Textolabel = styled.label`
color: #000;
font-family: Jost;
font-size: 18.502px;
font-style: normal;
font-weight: 400;
line-height: normal;

@media (max-width: 790px) and (min-width: 680px){
    font-size: 16px;
}


`;

export const Buttondiv = styled.div`
padding-top: 41.54px;
align-self: center;

@media (max-width: 1079px) and (min-width: 790px){
    padding-top: 21px;
}

@media (max-width: 679px) {
    padding-top: 25px;
}

`;

export const Getbutton = styled.button`

width: 248px;
height: 48px;
border-radius: 10px;
background: #4743C9;
border: none;
outline: none;
color: #FFF;
font-family: "Jost";
font-size: 18px;
font-style: normal;
font-weight: 500;
line-height: normal;


@media (max-width: 1079px) and (min-width: 790px){
width: 154px;
height: 40px;
border-radius: 7px;
font-size: 16px;

}

@media (max-width: 790px) and (min-width: 680px){
    width: 120px;
height: 35px;
border-radius: 7px;
font-size: 13px;

}

@media (max-width: 679px) {
    width: 220px;
height: 42px;
border-radius: 7px;
font-size: 17px;


}

`;




export const Mandiv = styled.div`
padding-top: 55px;

.mane{
    width: 164px;
height: 274px;
}

@media (max-width: 1079px) and (min-width: 790px){
       
       
    .mane{
    width: 131px;
height: 218px;
}

}
@media (max-width: 790px) and (min-width: 680px){

    .mane{
    width: 131px;
height: 218px;
}

}

@media (max-width: 679px){
    padding-top: 20px;

}





`;






