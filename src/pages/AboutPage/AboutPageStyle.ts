import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 400px 1fr;
`;

export const AboutDiv = styled.div`
  height: 400px;
  background-color: white;
  padding: 50px;
  font-size: 20px;
  letter-spacing: 1.3px;
  line-height: 30px;

  h1 {
    font-weight: 400;
  }

  h3 {
    font-weight: 400;
  }

  p {
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
    font-weight: 400;
    font-size: 15px;
  }
`;
