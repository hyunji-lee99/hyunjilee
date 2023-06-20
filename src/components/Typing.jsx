import React from 'react';
import styled from 'styled-components';
import { TypeAnimation } from 'react-type-animation';


const Div=styled.div`
    padding-top:110px;
    padding-left:10%;
    color:#474838;
    font-weight:bold;
    font-size:2rem;
    line-height:50px;
    
    
`
function Typing() {
    return (
    <Div>
        <TypeAnimation
            sequence={[
                '안녕하세요!',1000,
                `성취하며 느낀 행복을\n 오랫동안 기억하는`,
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                `꾸준한 성장을\n지향하는`,
                1000,
                `FE / AI 개발자\n이현지입니다.`,
                1000,
            ]}
            wrapper="div"
            style={{whiteSpace:'pre-line', height:'100px'}}
            speed={50}
        ></TypeAnimation>
    </Div>
    );
}

export default Typing;