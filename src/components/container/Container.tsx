import React from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';
import Button from '../buttonContainer/Button';
import { WrapperContainer, BoxWrapper, Wrapper } from './styles';
import { NumRamState } from '../../redux/reducers/randomNumberReducers';

const Container = (): JSX.Element => {
  const numRamdom = useSelector<NumRamState, NumRamState['numRamdom']>(
    (state: RootStateOrAny) => state.numRamdom,
  );

  //  console.log(numRamdom.numRamdom.rand1);

  return (
    <Wrapper>
      <WrapperContainer>
        <BoxWrapper>{numRamdom.numRamdom.rand1}</BoxWrapper>
        <BoxWrapper>{numRamdom.numRamdom.rand2}</BoxWrapper>
        <BoxWrapper>{numRamdom.numRamdom.rand3}</BoxWrapper>
      </WrapperContainer>
      <Button />

      {numRamdom.numRamdom.rand1 === numRamdom.numRamdom.rand2 &&
        numRamdom.numRamdom.rand1 === numRamdom.numRamdom.rand3 && <div>You win!</div>}
    </Wrapper>
  );
};

export default Container;
