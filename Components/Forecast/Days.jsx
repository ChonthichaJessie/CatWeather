import styled from 'styled-components/native';
import {useEffect, useState} from 'react';
import Indicator from '../../asset/Images/Indicator.png';


const DAY_SECONDS = 24 * 60 * 60;

const Days = ({onChoose}) => {
  const [choice, setChoice] = useState('today');
  const selectYesterday = () => setChoice('yesterday');
  const selectToday = () => setChoice('today');
  const selectTomorrow = () => setChoice('tomorrow');

  useEffect(() => {
    const now = new Date();
    if (choice === 'yesterday') {
      now.setDate(now.getDate() - 1);
    } else if (choice === 'tomorrow') {
      now.setDate(now.getDate() + 1);
    }
    onChoose(now);
  }, [choice]);

  return (
    <Wrapper>
      <Touch onPress={selectYesterday}>
        <Yesterday>{'Yesterday'}</Yesterday>
        {choice === 'yesterday' && <IndicatorDisplay source={Indicator} />}
      </Touch>
      <Touch onPress={selectToday}>
        <Currentday>Today</Currentday>
        {choice === 'today' && <IndicatorDisplay source={Indicator} />}
      </Touch>
      <Touch onPress={selectTomorrow}>
        <Tomorrow>{'Tomorrow'}</Tomorrow>
        {choice === 'tomorrow' && <IndicatorDisplay source={Indicator} />}
      </Touch>
    </Wrapper>
  );
};

export default Days;
const Wrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const Touch = styled.TouchableOpacity`
  align-items: center;
`;
const Yesterday = styled.Text`
  padding-left: 10px;
  padding-bottom: 10px;
  font-size: 22px;
  color: #474747;
`;
const Currentday = styled.Text`
  padding-bottom: 10px;
  font-size: 22px;
  color: #474747;
`;
const Tomorrow = styled.Text`
  padding-right: 10px;
  padding-bottom: 10px;
  font-size: 22px;
  color: #474747;
`;
const IndicatorDisplay = styled.Image`
  width: 8px;
  height: 8px;
`;
