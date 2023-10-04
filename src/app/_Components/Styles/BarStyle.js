import styled from "styled-components";

export const BarMain = styled.div`
  max-width: 1440px;
  height: 165px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 111px;
  position: relative;
  .Man {
    position: absolute;
    right: 0;
    top: -57%;
  }
  background: linear-gradient(
    to bottom,
    rgba(242, 243, 249, 0.5) 0%,
    rgba(242, 243, 249, 0.5) 50%,
    #fff 50%,
    #fff 100%
  );
  @media (max-width: 712px) {
    padding: 0 30px !important;
    .Man {
      display: none;
    }
  }
`;
export const BarInner = styled.div`
  height: 165px;
  background-color: #fff;
  width: 1218px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0px 4px 10px 0px rgba(13, 27, 62, 0.1);
  gap: 150px;
  padding: 0 20px;
  .Rocket {
    position: absolute;
    left: 0;
    top: 71px;
  }
  .IconShow {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 61px;
  }
  .Text {
    text-align: left;
    h1 {
      color: var(--purple, #4743c9);
      font-family: Jost;
      font-size: 55.275px;
      font-weight: 600;
      line-height: 71.857px;
    }
    span {
      color: var(--Blue, #0d1b3e);
      font-family: Jost;
      font-size: 19.899px;
      font-weight: 400;
    }
  }
  @media (max-width: 1200px) {
    gap: 80px !important;

    .IconShow {
      gap: 40px;
    }
  }

  @media (max-width: 1093px) {
    .Rocket {
      display: none;
    }
  }
  @media (max-width: 1093px) {
    .Text {
      text-align: left;
      h1 {
        font-size: 45px;
      }
      span {
        font-size: 15px;
      }
    }
  }

  @media (max-width: 590px)
  {
    width: 400px;
    overflow: hidden;
    gap: 30px !important;
    .IconShow {
    gap: 20px;
    .Image
    {
      width: 60px;
      height: 50px;
    }
  }

  .Text {
    text-align: left;
    h1 {
      font-size: 30px;
      line-height: 30px;
    }
    span {

      font-size: 10px;
      font-weight: 400;
    }
  }
  }
`;
