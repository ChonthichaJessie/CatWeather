import {useCallback} from 'react';
import styled from 'styled-components/native';
import ShowerRainCat from '../../asset/Images/showerRainCat.png';
import ClearSkyCat from '../../asset/Images/clearSkyCat.png';
import TrashImage from '../../asset/Images/trash.png';

const hitSlop16 = {top: 16, left: 16, right: 16, bottom: 16};

const kittens = {
  showerRain: ShowerRainCat,
  clearSky: ClearSkyCat,
};

const descriptions = {
  showerRain: 'Shower rain',
  clearSky: 'Clear sky',
};

const CityCard = ({city, onTrash}) => {
  const {id, temperature, cityName, weatherCategory} = city;
  return (
    <Wrapper>
      <Left>
        <Temperature>
          <TempNumber>{temperature}</TempNumber>
          <DegreeC>°C</DegreeC>
        </Temperature>
        <CityName>{cityName}</CityName>
      </Left>
      <Right>
        <WeatherDesc>{descriptions[weatherCategory] ?? 'Unknown'}</WeatherDesc>
        <Kitten source={kittens[weatherCategory ?? 'clearSky']} />
      </Right>
      <TrashWrapper onPress={() => onTrash(id)} hitSlop={hitSlop16}>
        <Trash source={TrashImage} />
      </TrashWrapper>
    </Wrapper>
  );
};

export default CityCard;

const TrashWrapper = styled.TouchableOpacity`
  position: absolute;
  top: 0;
  right: 0;
`;

const Wrapper = styled.View`
  padding-top: 28px;
  padding-horizontal: 16px;
  padding-bottom: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.View`
  margin-top: 11px;
  margin-bottom: 11px;
  margin-left: 16px;
`;
const Temperature = styled.View`
  flex-direction: row;
  align-items: flex-start;
`;
const TempNumber = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 64px;
  font-style: normal;
  font-weight: 600;
  color: #ffffff;
`;
const DegreeC = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  color: #ffffff;
`;

const CityName = styled.Text`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 28px;
  color: #ffffff;
`;

const Right = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const WeatherDesc = styled.Text`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 35px;
  color: #ffffff;
  padding-bottom: 10px;
`;
const Kitten = styled.Image`
  width: 136px;
  height: 104px;
`;

const Trash = styled.Image`
  width: 24px;
  height: 24px;
`;
