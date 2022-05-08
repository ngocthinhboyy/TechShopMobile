import React, { useRef, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Carousel, { Pagination, ParallaxImage } from 'react-native-snap-carousel';


const ProductImageCarousel = ({images}) => {
  
  const [index, setIndex] = useState(0);
  const isCarousel = useRef(null);

  const renderItem = ({item}, parallaxProps) => {
    return (
      <View style={{width: 400, height: 350}}>
        <ParallaxImage
          source={{uri: item}}
          containerStyle={{backgroundColor: 'white', borderRadius: 8, flex: 1}}
          style={{...StyleSheet.absoluteFillObject, resizeMode: 'contain'}}
          parallaxFactor={0.4}
          {...parallaxProps}
        />
      </View>
    );
  };

  return (
    <View
      style={{
        backgroundColor: '#fcebc6',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View
        style={{
          backgroundColor: '#fcebc6',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
        }}>
        <Carousel
          sliderWidth={460}
          sliderHeight={400}
          ref={isCarousel}
          itemWidth={400}
          data={images}
          onSnapToItem={index => setIndex(index)}
          renderItem={renderItem}
          hasParallaxImages={true}
        />
      </View>
      <View style={{backgroundColor: '#fcebc6', alignItems: 'center'}}>
        <Pagination
          dotsLength={images.length}
          carouselRef={isCarousel}
          activeDotIndex={index}
          dotStyle={{
            width: 5,
            height: 5,
            borderRadius: 5,
            marginHorizontal: -10,
            backgroundColor: 'rgba(0, 0, 0, 0.92)',
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
