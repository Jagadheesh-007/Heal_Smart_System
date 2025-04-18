import React, { useState } from "react";
import styled from "styled-components";
import bg from "./img/bg.png";
import { MainLayout } from "./styles/Layouts";
import Navigation from "./Components/Navigation/Navigation";
import Home from "./Components/Home/Home";
import MentalWellness from "./Components/MentalWellness/MentalWellness";
import SymptomAnalysis from "./Components/SymptomAnalysis/SymptomAnalysis";
import ConsultDoctor from "./Components/ConsultDoctor/ConsultDoctor";
import "./index.css";


const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${(props) => props.$bg});
  position: relative;
  main {
    flex: 1;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #ffffff;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      width: 0;
    }
  }
`;

function App() {
  const [active, setActive] = useState(1);

  const updateActive = (activeState) => {
    setActive(activeState);
  };


  const displayData = () => {
    switch (active) {
      case 1:
        return <Home updateActive={updateActive} />;
      case 2:
        return <SymptomAnalysis updateActive={updateActive} />;
      case 3:
        return <MentalWellness updateActive={updateActive} />;
      case 4:
        return <ConsultDoctor updateActive={updateActive} />;
      default:
        return <Home />;
    }
  };

  return (
    <AppStyled $bg={bg} className="App"> {/* Notice the use of $bg */}
      <MainLayout>
        <Navigation active={active} setActive={setActive} />
        <main>{displayData()}</main>
      </MainLayout>
    </AppStyled>
  );
}
export default App;