import React from 'react';
import { useDispatch } from 'react-redux';
import { randomNumberAction } from '../../redux/actions/randomNumberActions';
import { WrapperButton, ButtonStyles } from './styles';

const Button = () => {
    const dispath = useDispatch();

    const getRandomNumber = () => {
        const min = 0;
        const max = 3;
        const rand1 = min + Math.ceil(Math.random() * (max - min));
        const rand2 = min + Math.ceil(Math.random() * (max - min));
        const rand3 = min + Math.ceil(Math.random() * (max - min));
        const rands = {
            rand1: rand1,
            rand2: rand2,
            rand3: rand3,
        };
        dispath(randomNumberAction(rands));
    };

    return (
        <WrapperButton>
            <ButtonStyles onClick={() => getRandomNumber()}>Pull lever</ButtonStyles>
        </WrapperButton>
    );
};

export default Button;
