import styled from "styled-components/native";
import Home from "./Components/Homepage/Home";
import Forecast from "./Components/Forecast/Forecast";

const App = () => {

  return(
    <Wrapper>
      <Forecast />
    </Wrapper>

  );

}

export default App;

const Wrapper = styled.View`
  flex: 1;
  justify-content: center;
`;


