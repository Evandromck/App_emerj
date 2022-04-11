import React from 'react';
import { Image } from 'react-native';
// import { view } from '../../Themed';
import styled from 'styled-components';
import ImageLogo from './ImageLogo';

const HeaderContainer = styled.View`
    width: 100px;
    justify-content: space-between;
    align-item: center;
    flex-direction: row;
    height: 100px;
    backgroud: #0C344C;
    border-top-width: 1px;
    border-bottom-color: #fff;
    border-bottoom-width: 10px;
    border-bottom-color: #b8977e;
    margin-top: 50px;
`
const ImageSource = styled.image`
    width: 67px;
    height: 65px;
    border-widht: 1px;
    border-color: red;
`


export default function Header(props:any){

    return (
        <ImageContainer>            
            <ImageSource source={require("../../../assets/images/logo_emerj_pricipal.png")} />           
        </ImageContainer>
    )
}