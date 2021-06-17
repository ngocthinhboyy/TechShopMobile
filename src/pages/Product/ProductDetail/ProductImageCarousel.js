import React, {useState, useRef} from 'react';
import { View, StyleSheet } from 'react-native';
import Carousel, {ParallaxImage, Pagination }   from 'react-native-snap-carousel';

const ProductImageCarousel = () => {
    const [index, setIndex] = useState(0);
    const isCarousel = useRef(null);

    const [imageList, setImageList] = useState([
        {
            imgSrc: require("../../../assets/img/footer.jpeg"),
        },
        {
            imgSrc: require("../../../assets/img/footer1.jpeg"),
        },
        {
            imgSrc: require("../../../assets/img/pic1.jpg"),
        },
        {
            imgSrc: require("../../../assets/img/pic3.jpg"),
        },
        {
            imgSrc: require("../../../assets/img/pic6.jpeg"),
        },
      ]);

      const renderItem = ({item, index}, parallaxProps) => {
        return (
            <View style={{width: 400, height: 350}}>
            <ParallaxImage
              source={item.imgSrc}
              containerStyle={{backgroundColor: 'white', borderRadius: 8, flex: 1}}
              style={{...StyleSheet.absoluteFillObject,
                resizeMode: 'cover'}}
              parallaxFactor={0.4}
              {...parallaxProps}
            />
            </View>
        );
      };

    return (
        <View style={{backgroundColor: '#fcebc6', flexDirection: 'column', justifyContent:'center', alignItems: 'center'}}>
            <View style={{backgroundColor: '#fcebc6', justifyContent:'center', alignItems: 'center', width: '100%'}}>
                <Carousel
                    sliderWidth={460}
                    sliderHeight={400}
                    ref={isCarousel}
                    itemWidth={400}
                    data={imageList}
                    onSnapToItem={(index) => setIndex(index)}
                    renderItem={renderItem}
                    hasParallaxImages={true}
                />
            </View>
            <View style={{backgroundColor: '#fcebc6', alignItems: 'center'}}>
                <Pagination
                        dotsLength={imageList.length}
                        carouselRef={isCarousel}
                        activeDotIndex={index}
                        dotStyle={{
                            width: 5,
                            height: 5,
                            borderRadius: 5,
                            marginHorizontal: -10,
                            backgroundColor: 'rgba(0, 0, 0, 0.92)'
                        }}
                        inactiveDotOpacity={0.3}
                        inactiveDotScale={0.5}
                        tappableDots={true}
                    />
            </View>
    </View>
    );
};

export default ProductImageCarousel;