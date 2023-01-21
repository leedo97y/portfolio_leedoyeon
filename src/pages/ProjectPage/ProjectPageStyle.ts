import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
`;

export const ProjectDiv = styled.div`
  height: 750px;
  background-color: white;
  padding: 30px;
  margin: 20px 20px;

  h1 {
    font-size: 35px;
    font-weight: 500;
    font-family: "Alegreya Sans SC", sans-serif;
    margin-bottom: 10px;
    margin-top: 10px;
  }

  h3 {
    font-weight: 400;
    font-family: "Alegreya Sans SC", sans-serif;
    margin-bottom: 10px;
    margin-top: 15px;
  }

  #teamButtons {
    width: 900px;
    height: 75px;
    display: grid;
    grid-template-columns: repeat(5, 180px);
    overflow-y: scroll;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  button {
    width: 165px;
    height: 60px;
    margin-right: 20px;
    margin-bottom: 5px;
    padding: 10px 20px;
    font-size: 16px;
    border-radius: 30px;
    border: none;
    background-color: #ceebff;
  }

  #button {
    background-color: #c0d4e1;
  }
`;

export const Contents = styled.div`
  width: 750px;
  height: 650px;
  margin: 30px auto;
  font-weight: 400;
  font-size: 15px;
  font-family: "Quicksand", sans-serif;

  display: grid;

  overflow-y: scroll;

  h1 {
    font-size: 25px;
    font-weight: 500;
    font-family: "Quicksand", sans-serif;
    margin: 7px 0;
    padding-bottom: 5px;
    border-bottom: 1px solid #d9dbda;
  }

  span {
    width: 200px;
    height: 15px;
    font-size: 13px;
  }

  #image {
    width: 600px;
    height: 300px;
    margin: 20px 0 20px 0;
  }

  p {
    margin-top: 5px;

    span {
      font-size: 15px;
    }
  }

  h3 {
    font-family: "Alegreya Sans SC", sans-serif;
    font-size: 28px;
    font-weight: 500;
    margin: 10px 0 0 0;
  }

  a {
    text-decoration: none;
  }
  &::-webkit-scrollbar {
    display: none;
  }

  h4 {
    font-family: "Alegreya Sans SC", sans-serif;
    font-size: 23px;
    font-weight: 500;
    margin-bottom: 10px;
    margin-top: 10px;
  }

  #prize {
    margin-top: 20px;
  }

  #add {
    font-weight: 500;
    margin-bottom: 20px;
  }
`;

export const Bold = styled.span`
  font-weight: 600;
`;

export const Green = styled.span`
  color: #51c46f;
  font-weight: 600;
`;
export const Red = styled.span`
  color: lightcoral;
  font-weight: 600;
`;
