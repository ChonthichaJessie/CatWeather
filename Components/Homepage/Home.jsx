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
import SearchBar from './SearchBar';
import {ScrollView, Text} from 'react-native';
import CityCard from './CityCard';
import {useCallback, useEffect, useMemo, useState} from 'react';

const Home = ({setCity}) => {
  const [cities, setCities] = useState([
    {
      id: 1,
      cityName: 'Vancouver, CA',
      temperature: 24,
      weatherCategory: 'showerRain',
    },
    {
      id: 2,
      cityName: 'Calgary, CA',
      temperature: 10,
      weatherCategory: 'clearSky',
    },
  ]);

  const onTrash = useCallback(cityId => {
    setCities(prev => prev.filter(c => c.id !== cityId));
  }, []);

  return (
    <Wrapper>
      <TopWrapper>
        <SideIndent>
          <Header>Location</Header>
          <SearchBar />
        </SideIndent>
      </TopWrapper>
      <ScrollView contentContainerStyle={{flex: 1}}>
        {cities.map(city => (
          <CityCardWrapper key={city.id}>
            <SideIndent>
              <CityCard city={city} onChoose={setCity} onTrash={onTrash} />
            </SideIndent>
          </CityCardWrapper>
        ))}
      </ScrollView>
    </Wrapper>
  );
};
export default Home;

const Wrapper = styled.View`
  background-color: ${clearSky};
  flex: 1;
`;

const TopWrapper = styled.View`
  padding-top: 48px;
  background-color: ${clearSky};
`;

const SideIndent = styled.View`
  padding-left: 17px;
  padding-right: 17px;
`;

const CityCardWrapper = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: white;
  padding-top: 5px;
  background-color: ${clearSky};
`;

const Header = styled.Text`
  padding-top: 10px;
  padding-bottom: 7px;
  font-family: 'JosefinSans-Bold';
  font-size: 28px;
  color: #474747;
`;
