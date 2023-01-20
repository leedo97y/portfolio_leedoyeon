import React, { useState } from "react";
import SideBar from "../../components/SideBar/SideBar";
import Weather from "./components/Weather";
import { Container, ProjectDiv, Contents } from "./ProjectPageStyle";
import FriedEgg from "./components/FriedEgg";
import Retfilx from "./components/Retfilx";
import TripMatch from "./components/TripMatch";
// LayerDiv

const ProjectPage: React.FC = () => {
  // const [click, setClick] = useState<boolean>(false);

  // const onClickBtn: React.MouseEventHandler<HTMLButtonElement> = (e) => {
  //   setClick(!click);
  // };

  return (
    <div>
      <Container>
        <SideBar />
        <ProjectDiv>
          <h1>project</h1>
          <button>오늘 뭐 입지?</button>
          <button>계란후라이</button>
          <button>Retfilx</button>
          <button>TripMatch</button>
          {}
          {/* <Contents>
            <Weather />
          </Contents> */}
          <Contents>
            <FriedEgg />
          </Contents>
          <Contents>
            <Retfilx />
          </Contents>
          {/* <Contents>
            <TripMatch />
          </Contents> */}
        </ProjectDiv>
      </Container>
    </div>
  );
};

export default ProjectPage;
