import React from 'react';
import styled,{keyframes} from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import "../fonts/font.css"


const slidein=keyframes`
    from{
        right:-100%;
    }
    to{
        right:0%;
    }
`

const slideout=keyframes`
    from{
        left:0%;
    }
    to{
        left:-100%;
    }
`

const MenuSlideDiv=styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    width:300px;
    height:100%;
    background-color:white;
    box-shadow:5px 0px 15px #474838;
    position:fixed;
    right:0;
    z-index:3;
    animation: ${slidein} 1s;
    font-family:"Cafe24BeHappy";
    color:#ACAC9A;
`
const ExitIcon=styled.div`
    font-size:2rem;
    position:absolute;
    right:20px;
    bottom:20px;
    &:hover{
        color:#474838;
    }
    display:flex;
    flex-direction:column;
    font-weight:bold;
`
const Menu=styled.div`
    width:90%;
    height:10%;
    font-size:2.5rem;
    letter-spacing:2px;
    display:flex;
    justify-content:center;
    align-items:center;
    &:hover{
        color:#474838;
    }
`

function MenuSlide({setSlide}) {
    return (
        <MenuSlideDiv>
            <Menu onClick={()=>{window.scrollTo({left:0,top:0,behavior:"smooth"})}}>Home</Menu>
            <Menu onClick={()=>{window.scrollTo({left:0,top:window.innerHeight,behavior:"smooth"})}}>Project</Menu>
            <Menu onClick={()=>{window.scrollTo({left:0, top:2*window.innerHeight, behavior:"smooth"})}}>Skills</Menu>
            <Menu onClick={()=>{window.scrollTo({left:0, top:3*window.innerHeight, behavior:"smooth"})}}>Contact</Menu>
        <ExitIcon onClick={()=>{setSlide(false)}}>       
            <FontAwesomeIcon icon={faArrowRightFromBracket}></FontAwesomeIcon>
            <span style={{fontSize:'1rem', marginTop:'5px'}}>접기</span>
        </ExitIcon>  
        </MenuSlideDiv>
    );
}

export default MenuSlide;