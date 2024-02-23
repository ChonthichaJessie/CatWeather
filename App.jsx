import styled from 'styled-components/native';
import {useState} from 'react';
import Home from './Components/Homepage/Home';
import Forecast from './Components/Forecast/Forecast';

const App = () => {
  const [city, setCity] = useState(undefined);

  return (
    <Wrapper>
      {city ? (
        <Forecast city={city} goHome={() => setCity(undefined)} />
      ) : (
        <Home setCity={setCity} />
      )}
    </Wrapper>
  );
};

export default App;

const Wrapper = styled.View`
  flex: 1;
  justify-content: center;
`;
