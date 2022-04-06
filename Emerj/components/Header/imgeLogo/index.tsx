import React from 'react';
import { Image } from 'react-native';
import { view } from '../../Themed';

export default function ImageLogo(props:any){

    return (
        <View>
            {props&&props}
            <Image source={{uri:"/assets/images/logo_emerj_principal.png"}}/>
        </View>
    )
}