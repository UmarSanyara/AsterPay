import styled from "styled-components";

export const Maindiv = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding-top: 130px;
  .watermark {
    position: absolute;
    top: 10%;
    left: 0%;
  }
`;
export const Headerdiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .tag {
    color: var(--purple, #4743c9);
    text-align: center;
    font-family: "Jost";
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    padding-bottom: 12px;
  }
  .heading {
    color: var(--13-27-62-Aster-pay, #0d1b3e);
    text-align: center;
    font-family: "Jost";
    font-size: 50px;
    font-style: normal;
    font-weight: 600;
    line-height: 65px; /* 130% */
    padding-bottom: 27px;
  }
  .para {
    width: 768px;
    color: var(--13-27-62-Aster-pay, #0d1b3e);
    text-align: center;
    font-family: "Jost";
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
export const Sectionsdiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-right: 79px;
  padding-left: 79px;
`;
export const Section = styled.div`
  width: 626px;
  height: 264px;
  flex-shrink: 0;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0px 0px 10px 0px rgba(13, 27, 62, 0.1);
  display: flex;
  gap: 20px;
  padding-right: 22px;
`;
export const Imagediv = styled.div`
  width: 80px;
  height: 80px;
  background-color: rgba(255, 229, 233, 0.5);
  margin-top: 25px;
  margin-left: 22px;

  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Sectiondetail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  .detailheading {
    padding-top: 25px;
    color: var(--Blue, #0d1b3e);
    font-family: "Jost";
    font-size: 30px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  .detailpara {
    color: var(--Blue, #0d1b3e);
    font-family: "Jost";
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 23px; /* 127.778% */
  }
`;
