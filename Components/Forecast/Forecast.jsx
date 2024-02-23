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
import CloudBG from '../../asset/Images/CloudBG.png';
import {useEffect, useMemo, useState} from 'react';
import Days from './Days';
import Hour from './Hour';
import CatHome from '../../asset/Images/catHome.png';

const hourly = [
  '00 AM',
  '02 AM',
  '04 AM',
  '06 AM',
  '08 AM',
  '10 AM',
  '12 PM',
  '2 PM',
  '4 PM',
  '6 PM',
  '8 PM',
  '10 PM',
];

const Forecast = ({goHome}) => {
  const [date, setDate] = useState(new Date());
  const [data, setData] = useState(undefined);

  useEffect(() => {
    // 1. go get data from API
    // 2. save it using setData()
  }, [date]);

  return (
    <Wrapper>
      <TopContainer>
        <LocationDetails>
          <Today>
            <DateDisplay>
              {date.toLocaleString('default', {month: 'short'})}{' '}
              {date.getDate()}, {date.getFullYear()}
            </DateDisplay>
            <CityDisplay>{data?.city ?? 'Unknown'}</CityDisplay>
          </Today>
          <Temperature>
            <TempNumber>{data?.temperature ?? '--'}</TempNumber>
            <DegreeC>°C</DegreeC>
          </Temperature>
        </LocationDetails>
        <KittenWrapper>
          <Kitten source={MistCat} />
        </KittenWrapper>
        <MidContainer>
          <DayDisplay>
            {date.toLocaleString('default', {weekday: 'long'}).toUpperCase()}
          </DayDisplay>
          <WeatherDisplay>
            {data?.conditions ?? '(weather desc)'}
          </WeatherDisplay>
        </MidContainer>
        <Cloud source={CloudBG} />
      </TopContainer>
      <BottomContainer>
        <Days onChoose={setDate} />
        <HoursRow>
          {data?.hourly
            ? data?.hourly.map(item => {
                return <Hour key={item} {...item} />;
              })
            : hourly.map(hour => {
                return <Hour key={hour} hour={hour} temperature="--" />;
              })}
        </HoursRow>
        <Footer>
          <Left onPress={goHome}>
            <CatHomeIcon source={CatHome} />
          </Left>
        </Footer>
      </BottomContainer>
    </Wrapper>
  );
};

export default Forecast;

const HoursRow = styled.View`
  display: flex;
  flex-direction: row;
  padding-bottom: 24px;
`;
const Footer = styled.View`
  flex-direction: row;
  justify-content: center;
  padding-top: 50px;
  padding-bottom: 24px;
`;
const Left = styled.TouchableOpacity`
  padding-left: 28px;
  position: absolute;
  left: 0;
  bottom: 24px;
`;
const CatHomeIcon = styled.Image`
  width: 40px;
  height: 47px;
`;

const Wrapper = styled.View`
  background-color: ${mist};
  flex: 1;
`;
const TopContainer = styled.View`
  flex: 1;
`;
const LocationDetails = styled.View`
  padding-top: 82px;
  flex-direction: row;
  padding-left: 18px;
  padding-right: 18px;
  justify-content: space-between;
`;
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
const KittenWrapper = styled.View`
  align-items: center;
`;
const Kitten = styled.Image`
  width: 300px;
  height: 300px;
`;
const Cloud = styled.Image`
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  opacity: 0.5;
`;
const MidContainer = styled.View`
  align-items: center;
  z-index: 1;
`;
const DayDisplay = styled.Text`
  font-family: 'Josefin Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  color: #474747;
`;
const WeatherDisplay = styled.Text`
  font-family: 'Josefin Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  color: #474747;
`;
const BottomContainer = styled.View`
  background: #f5f9f9;
  padding-top: 40px;
`;
