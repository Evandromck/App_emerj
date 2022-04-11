import React from 'react';
import { Image } from 'react-native';
// import { view } from '../../Themed';
import styled from 'styled-components';

const ImageContainer = styled.View`
    width: 20px;
    height: 60px;
    align-item: center;
    justify-content: #0C344C;
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