import React,{useState} from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import MenuSlide from './MenuSlide';

const Div=styled.div`
    width:100%;
    height:10%;
    background-color:transparent;
    position:fixed;
    box-shadow: 0px -5px 15px #474838;
    color:#474838;
`

const MenuIcon=styled.div`
    font-size:2rem;
    position:absolute;
    top:25%;
    right:3%;
`

function Header() {
    const [slide, setSlide]=useState(false);
    return (
        <Div>
            {slide? <MenuSlide setSlide={setSlide}></MenuSlide>:<></>}
            <MenuIcon onClick={()=>{setSlide(true)}}>
                <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
            </MenuIcon>
        </Div>
    );
}

export default Header;