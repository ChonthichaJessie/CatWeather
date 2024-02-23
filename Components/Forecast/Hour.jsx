import icon01 from '../../asset/weatherIcons/01.png';
import styled from 'styled-components/native';
import {
    clearSky,
    fewClouds,
    scatteredClouds,
    brokenClouds,
    showerRain,
    rain,
    thunderstorm,
    snow,
    mist,
  } from '../colorTheme';

const Hour = ({hour, temperature}) => {
  return (
    <Wrapper>
      <Time>{hour}</Time>
      <Icon source={icon01} />
      <Temp>
        <Number>{temperature}</Number>
        <Degree>°C</Degree>
      </Temp>
    </Wrapper>
  );
};
export default Hour;

const Wrapper = styled.View`
  margin-left: 10px;
  margin-top: 24px;
  width: 74px;
  height: 150px;
  border-radius: 44px;
  background: ${mist};
  opacity: 0.5;
  align-items: center;
  justify-content: space-between;
`;
const Time = styled.Text`
  padding-top: 20px;
  font-size: 14px;
  color: #474747;
`;
const Icon = styled.Image`
  width: 32px;
  height: 28px;
`;
const Temp = styled.View`
  display: flex;
  flex-direction: row;
  padding-bottom: 20px;
`;
const Number = styled.Text`
  font-size: 16px;
  color: #474747;
`;
const Degree = styled.Text`
  font-size: 16px;
  color: #474747;
`;
// /* Ellipse 1 */

// position: absolute;
// width: 3px;
// height: 3px;
// left: 37px;
// top: 107px;

// border: 1px solid #474747;
