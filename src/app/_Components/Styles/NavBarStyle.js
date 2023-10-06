import styled, { keyframes } from "styled-components";

export const FixNav = styled.div`
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 1000;
`;
export const Nav = styled.div`
  max-width: 1440px;
  min-height: 107px;
  border-radius: 0px 0px 30px 30px;
  background: var(--background, #071b40);
  box-shadow: 0px 4px 10px 0px rgba(13, 27, 62, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 161px 0px 82px;
  gap: 217px;
  position: relative;

  .Ham {
    display: none;
  }
  .Logo {
    width: 261px;
    height: 62px;
  }
  @media (max-width: 1267px) and (min-width: 1130px) {
    padding: 0px 83px 0px 82px;
    .Logo {
      max-width: 231px !important;
      height: 57px !important;
    }
  }

  @media (max-width: 1130px) and (min-width: 1024px) {
    gap: 180px !important;
    padding: 0px 80px 0px 82px;
    .Logo {
      width: 200px !important;
      height: 50px !important;
    }
  }

  @media (max-width: 1024px) and (min-width: 900px) {
    gap: 150px !important;
    padding: 0px 80px 0px 82px;
    .Logo {
      width: 180px !important;
      height: 40px !important;
    }
  }

  @media (max-width: 900px) and (min-width: 768px) {
    gap: 120px !important;
    padding: 0px 80px 0px 80px;
    .Logo {
      width: 150px !important;
      height: 35px !important;
    }
  }

  @media (max-width: 786px) and (min-width: 625px) {
    gap: 100px !important;
    padding: 0px 80px 0px 80px;
    .Logo {
      width: 120px !important;
      height: 30px !important;
    }
  }

  @media (max-width: 625px) {
    justify-content: space-between;
    padding: 0px 50px 0px 50px;
    gap: 0px !important;
    min-height: 80px !important;
    .Ham {
      display: block;
      width: 40px !important;
      height: 40px !important;
      cursor: pointer;
    }
    .Logo {
      width: 120px !important;
      height: 30px !important;
    }
  }

}

`;

export const NavItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 60px;
  @media (max-width: 1130px) and (min-width: 1024px) {
    gap: 50px !important;
  }

  @media (max-width: 1024px) and (min-width: 900px) {
    gap: 40px !important;
  }

  @media (max-width: 900px) and (min-width: 768px) {
    gap: 30px !important;
  }

  @media (max-width: 786px) and (min-width: 625px) {
    gap: 30px !important;
  }

  @media (max-width: 625px) {
    display: none;
  }
`;
export const Items = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  &:hover {
    span {
      background: #fff;
    }
  }
  h3 {
    color: #fff;
    font-family: "Jost";
    font-size: 18px;
    white-space: nowrap;
    padding-top: 40px;
    padding-bottom: 33px;
    font-weight: ${(props) => (props.isActive ? "500" : "400")};
    cursor: pointer;
    user-select: none;
  }

  span {
    width: 69px;
    height: 8px;
    border-radius: 50px 50px 0px 0px;
    background: ${(props) => (props.isActive ? "" : "")};
    display: ${(props) => (props.isActive ? "block" : "none")};
    transition: display 0.3s;
  }

  @media (max-width: 1024px) and (min-width: 900px) {
    span {
      width: 50px !important;
    }
  }

  @media (max-width: 900px) and (min-width: 768px) {
    h3 {
      font-size: 15px !important;

      padding-bottom: 37px;
    }
  }

  @media (max-width: 786px) and (min-width: 625px) {
    h3 {
      font-size: 12px !important;
      padding-bottom: 40px;
    }
    span {
      width: 40px;
    }
  }

  @media (max-width: 625px) {
    display: none;
  }
`;
export const NavRes = styled.div`
  padding: 60px 20px 60px 20px;
  width: 90%;
  background: var(--background, #071b40);
  position: absolute;
  top: 105%;
  left: 3.5%;
  z-index: 999;
  border-radius: 20px;
  overflow: hidden;
  display: ${({ Open }) => (Open ? "block" : "none")};
  animation: ${({ Open }) => (Open ? slideIn : slideOut)} 1s !important;
`;
export const ResItems = styled.div`
  border-bottom: 1px solid #fff;
  cursor: pointer;
  h3 {
    font-family: Jost;
    color: #fff;
    margin-top: 30px;
    font-size: 20px;
    font-weight: 400;
    margin-right: 100px;
    white-space: nowrap;
    padding-bottom: 10px;
  }

  h3:hover {
    color: yellowgreen;
  }
`;

const slideIn = keyframes`
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const slideOut = keyframes`
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-100%);
    opacity: 0;
  }
`;
