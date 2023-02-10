import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 250px 1fr;
  overflow: hidden;
`;

export const ProjectDiv = styled.div`
  height: 100vh;
  background-color: white;
  padding: 40px 50px 0 50px;

  h1 {
    font-size: 35px;
    font-weight: 500;
    font-family: "Alegreya Sans SC", sans-serif;
    margin-bottom: 10px;
    margin-top: 0;
    color: #164aba;
  }

  h3 {
    font-size: 24px;
    font-weight: 400;
    font-family: "Alegreya Sans SC", sans-serif;
    margin-bottom: 10px;
    margin-top: 15px;
    color: #2e3340;
  }

  #teamButtons {
    width: 900px;
    height: 50px;
    display: grid;
    grid-template-columns: repeat(5, 180px);
    overflow-y: scroll;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  button {
    width: 140px;
    height: 40px;
    margin-bottom: 5px;
    padding: 10px 20px;
    font-size: 14px;
    border-radius: 30px;
    border: none;
    background-color: #506fb3;
    color: #fff;
    font-family: "NanumSquareNeoBold";
    cursor: pointer;
  }

  button:hover {
    background-color: #617ab0;
  }

  #button {
    background-color: #f7dba6;
    color: #f57e00;
    font-family: "NanumSquareNeoBold";
    cursor: pointer;
  }

  @media screen and (max-width: 1000px) {
    h1 {
      font-size: 30px;
    }

    h3 {
      font-size: 22px;
    }

    #teamButtons {
      width: 800px;
      grid-template-columns: repeat(5, 150px);
    }

    button {
      width: 120px;
      padding: 10px 10px;
      font-size: 12px;
    }
  }

  @media screen and (max-height: 780px) {
    h1 {
      font-size: 30px;
    }

    h3 {
      font-size: 22px;
    }

    #teamButtons {
      width: 800px;
      grid-template-columns: repeat(5, 150px);
    }

    button {
      width: 120px;
      padding: 10px 10px;
      font-size: 12px;
    }
  }
`;

export const Contents = styled.div`
  width: 800px;
  height: 350px;
  margin: 30px auto;
  padding-right: 10px;
  font-weight: 400;
  font-size: 15px;
  font-family: "NanumSquareNeo";
  line-height: 28px;

  display: grid;

  visibility: visible;

  h1 {
    font-size: 25px;
    font-weight: 500;
    font-family: "NanumSquareNeoExtraBold";
    margin: 7px 0 0 0;
    padding-bottom: 5px;
    border-bottom: 1px solid #d9dbda;
  }

  span {
    width: 200px;
    height: 20px;
    font-size: 12px;
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
    margin: 10px 0 10px 0;
  }

  a {
    text-decoration: none;
  }

  h4 {
    font-family: "Alegreya Sans SC", sans-serif;
    font-size: 23px;
    font-weight: 500;
    margin-bottom: 10px;
    margin-top: 10px;
  }

  #prize {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 380px;
    height: 30px;
    margin-top: 20px;
    background-color: #fff0cf;
    border-radius: 5px;

    p {
      margin: 0;
    }
  }

  #add {
    font-weight: 500;
    margin-bottom: 20px;
  }

  @media screen and (max-height: 780px) {
    height: 280px;
    font-size: 12px;
    line-height: 20px;

    h1 {
      font-size: 20px;
    }

    #image {
      width: 500px;
      height: 250px;
    }

    h3 {
      font-size: 25px;
    }

    h4 {
      font-size: 20px;
    }

    p > span {
      font-size: 12px;
    }
  }
`;

export const Layer = styled.div`
  margin: 30px auto;
  overflow-y: scroll;
  visibility: hidden;

  &:hover {
    visibility: visible;
  }

  &::-webkit-scrollbar {
    width: 7px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 10px;
  }
`;

export const Bold = styled.span`
  font-weight: 600;

  /* @media screen and (max-height: 780px) {
    font-size: 12px;
  } */
`;

export const Green = styled.span`
  color: #51c46f;
  font-weight: 600;
`;
export const Red = styled.span`
  color: lightcoral;
  font-weight: 600;
`;

export const RealRed = styled.span`
  color: red;
  font-weight: 600;
`;

export const Blue = styled.span`
  color: #3757fa;
  font-weight: 600;
`;
