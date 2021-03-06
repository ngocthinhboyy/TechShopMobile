import React, { useRef, useState, useEffect} from 'react';
import { View } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import TrendingProductCard from '../../Product/ProductCard/TrendingProductCard';
import ProductApi from '../../../api/productApi';

const TrendingProductCarousel = ({navigation}) => {
  const [trendingProductList, setTrendingProductList] = useState([])
  const [index, setIndex] = useState(0);
  const isCarousel = useRef(null);

  useEffect(() => {
    async function fetchTrendingProducts() {
      await ProductApi.getTrendingProducts()
      .then(res => setTrendingProductList(res))
    }
    if (!trendingProductList || trendingProductList.length == 0) {
      fetchTrendingProducts();
    }
  }, [trendingProductList]);

  const renderItem = ({item}) => {
    return <TrendingProductCard product={item} navigation={navigation} />;
  };
  return (
    <View
      style={{
        flexDirection: 'column',
        backgroundColor: '#fcebc6',
        alignItems: 'center',
      }}>
      <Carousel
        ref={isCarousel}
        layout={'default'}
        data={trendingProductList}
        onSnapToItem={index => setIndex(index)}
        sliderWidth={350}
        itemWidth={130}
        renderItem={renderItem}
      />
      <Pagination
        containerStyle={{backgroundColor: '#fcebc6', padding: 0, margin: 0}}
        dotsLength={trendingProductList.length}
        carouselRef={isCarousel}
        activeDotIndex={index}
        dotStyle={{
          width: 8,
          height: 1,
          borderRadius: 5,
          marginHorizontal: -10,
          backgroundColor: 'rgba(0, 0, 0, 1)',
        }}
        inactiveDotOpacity={0.3}
        inactiveDotScale={0.5}
        tappableDots={true}
      />
    </View>
  );
};

export default TrendingProductCarousel;
