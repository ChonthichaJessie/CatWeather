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
import MistCat from '../../asset/Images/mistCat.png';

const Forecast = () => {
  return (
    <Wrapper>
      <LocationDetails>
        <Today>
          <DateDisplay>Feb 21, 2024</DateDisplay>
          <CityDisplay>Calgary, CA</CityDisplay>
        </Today>
        <Temperature>
          <TempNumber>10</TempNumber>
          <DegreeC>°C</DegreeC>
        </Temperature>
      </LocationDetails>
      <KittenWrapper>
        <Kitten source={MistCat} />
      </KittenWrapper>
      <BottomContainer></BottomContainer>
    </Wrapper>
    
  );
};

export default Forecast;

const Wrapper = styled.View`
  background-color: ${mist};
  /* flex: 1; */
`;

/*****************************************/
/*****************************************/
const LocationDetails = styled.View`
  padding-top: 82px;
  display: flex;
  flex-direction: row;
  padding-left: 18px;
  padding-right: 18px;
  justify-content: space-between;
`;
/*****************************************/
const Today = styled.View``;
const DateDisplay = styled.Text`
  font-family: 'Josefin Sans';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  color: #474747;
  padding-bottom: 6px;
`;
const CityDisplay = styled.Text`
  font-family: 'Josefin Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  color: #474747;
`;
/*****************************************/
const Temperature = styled.View`
  display: flex;
  flex-direction: row;
`;
const TempNumber = styled.Text`
  font-family: 'Josefin Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 40px;
  color: #474747;
`;
const DegreeC = styled.Text`
  font-family: 'Josefin Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 40px;
  color: #474747;
`;
/*****************************************/
/*****************************************/
const KittenWrapper = styled.View`
  padding-top: 50px;
  align-items: center;
`;
const Kitten = styled.Image`
  width: 300px;
  height: 300px;
`;
/*****************************************/
/*****************************************/
const BottomContainer = styled.View`
position: fixed;
  bottom: 0px;
  width: 100%;
  height: 352px;
  background: #f5f9f9;
`;
