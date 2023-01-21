import React, { useState } from "react";
import SideBar from "../../components/SideBar/SideBar";
import Weather from "./components/Weather";
import { Container, ProjectDiv, Contents } from "./ProjectPageStyle";
import FriedEgg from "./components/FriedEgg";
import Retfilx from "./components/Retfilx";
import TripMatch from "./components/TripMatch";
// LayerDiv

const ProjectPage: React.FC = () => {
  const [weather, setWeather] = useState<boolean>(false);
  const [egg, setEgg] = useState<boolean>(false);
  const [retfilx, setRetfilx] = useState<boolean>(false);
  const [trip, setTrip] = useState<boolean>(false);

  const onClickWeather: React.MouseEventHandler<HTMLButtonElement> = () => {
    setWeather(!weather);
  };
  const onClickEgg: React.MouseEventHandler<HTMLButtonElement> = () => {
    setEgg(!egg);
  };
  const onClickRetfilx: React.MouseEventHandler<HTMLButtonElement> = () => {
    setRetfilx(!retfilx);
  };
  const onClickTrip: React.MouseEventHandler<HTMLButtonElement> = () => {
    setTrip(!trip);
  };

  return (
    <div>
      <Container>
        <SideBar />
        <ProjectDiv>
          <h1>project</h1>
          <h3>team project</h3>

          <div id="teamButtons">
            {weather ? (
              <button onClick={onClickWeather} id="button">
                ✕
              </button>
            ) : (
              <button onClick={onClickWeather}>오늘 뭐 입지?</button>
            )}

            {egg ? (
              <button onClick={onClickEgg} id="button">
                ✕
              </button>
            ) : (
              <button onClick={onClickEgg}>계란후라이</button>
            )}

            {retfilx ? (
              <button onClick={onClickRetfilx} id="button">
                ✕
              </button>
            ) : (
              <button onClick={onClickRetfilx}>Retfilx</button>
            )}

            {trip ? (
              <button onClick={onClickTrip} id="button">
                ✕
              </button>
            ) : (
              <button onClick={onClickTrip}>TripMatch</button>
            )}
          </div>

          <h3>personal project</h3>

          <Contents>
            {weather ? <Weather /> : null}
            {egg ? <FriedEgg /> : null}
            {retfilx ? <Retfilx /> : null}
            {trip ? <TripMatch /> : null}
          </Contents>
        </ProjectDiv>
      </Container>
    </div>
  );
};

export default ProjectPage;
