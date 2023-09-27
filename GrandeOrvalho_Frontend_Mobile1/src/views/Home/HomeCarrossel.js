import React from 'react';
import { Dimensions,View  } from 'react-native';
import Carousel from 'react-native-snap-carousel';


const SLIDER_WIDTH = Dimensions.get('window').width
const ITEM_WIDTH = SLIDER_WIDTH * 0.88

const carouselItens = [
    {imgUrl: "../../assets/1.jpg" },
    {imgUrl: "../../assets/2.jpg"},
    {imgUrl: "../../assets/3.jpg"}
]

type Props = {
    item:{
        imgUrl: string
    }
    index: number
}

function carouselCardItem({item,index}: Props){
    return(
        <View key={index} >
            <image source={require(item.imgUrl)} />
        </View>
    )
}

export function CarouselScreen(){
    return (
        <View>
            <Carousel   
                data={carouselItens}
                itemWidth={ITEM_WIDTH}
                useScrollView={true}
                sliderWidth={SLIDER_WIDTH}
                renderItem={carouselCardItem}
            />
        </View>
    )
}