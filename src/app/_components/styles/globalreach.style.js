import styled from "styled-components";

export const Maindiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 91px;
  padding-right: 78px;
  padding-left: 79px;
`;
export const Headerdiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;
`;
export const Heading = styled.span`
  color: #0d1b3e;
  text-align: center;
  font-family: "Jost";
  font-size: 50px;
  font-style: normal;
  font-weight: 600;
  line-height: 65px; /* 130% */
`;
export const Paragraph = styled.span`
  width: 625px;
  color: #0d1b3e;
  text-align: center;
  font-family: "Jost";
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
export const Countriesdiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 47px;
`;

export const Country = styled.div`
  display: inline-flex;
  align-items: center;

  gap: 21px;
  height: 76px;
  width: 219px;
  border-radius: 12.137px;
  border: 0.607px solid rgba(13, 27, 62, 0.3);
  padding-left: 15px;
  background: #fff;
`;
export const CountryName = styled.span`
  color: #0d1b3e;
  font-family: "Jost";
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export const CountryFlag = styled.div``;
