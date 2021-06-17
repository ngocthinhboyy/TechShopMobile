import React, {useState, useRef} from 'react';
import { View, StyleSheet } from 'react-native';
import Carousel, {ParallaxImage, Pagination }   from 'react-native-snap-carousel';


const ImageCarousel = () => {
    const [index, setIndex] = useState(0);
    const isCarousel = useRef(null);

    const [imageList, setImageList] = useState([
        {
            imgSrc: require("../../assets/img/footer.jpeg"),
        },
        {
            imgSrc: require("../../assets/img/footer1.jpeg"),
        },
        {
            imgSrc: require("../../assets/img/pic1.jpg"),
        },
        {
            imgSrc: require("../../assets/img/pic3.jpg"),
        },
        {
            imgSrc: require("../../assets/img/pic6.jpeg"),
        },
      ]);

      const renderItem = ({item, index}, parallaxProps) => {
        return (
            <View style={{width: 350, height: 150}}>
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
                    sliderWidth={410}
                    sliderHeight={400}
                    ref={isCarousel}
                    itemWidth={350}
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

export default ImageCarousel;

// import React, {useState, useRef} from 'react';
// import { View, Image, Dimensions, Text} from "react-native"
// import Carousel, { Pagination } from 'react-native-snap-carousel'

// // const data = [
// //     {
// //         imgUrl: require("../../assets/img/footer.jpeg")
// //     },
// //     {
// //         imgUrl: require("../../assets/img/footer.jpeg")
// //     },
// //     {
// //         imgUrl: require("../../assets/img/footer.jpeg")
// //     },
// //     {
// //         imgUrl: require("../../assets/img/footer.jpeg")
// //     },
// //     {
// //         imgUrl: require("../../assets/img/footer.jpeg")
// //     },
// // ]


// const SLIDER_WIDTH = Dimensions.get('window').width + 80
// const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)

// const ImageCarousel = () => {

//     const [index, setIndex] = useState(0);
//     const [data, setData] = useState([
//         {
//             imgUrl: require("../../assets/img/footer.jpeg")
//         },
//         {
//             imgUrl: require("../../assets/img/footer1.jpeg")
//         },
//         {
//             imgUrl: require("../../assets/img/pic1.jpg")
//         },
//         {
//             imgUrl: require("../../assets/img/pic3.jpg")
//         },
//         {
//             imgUrl: require("../../assets/img/pic6.jpeg")
//         },
//     ])
//     const isCarousel = useRef(null);

//     const renderItem = ({item,index}) => {
//         return(
//             <View key={index} style={{backgroundColor: 'white', borderRadius: 80, width: ITEM_WIDTH}}>
//                 <Image
//                     source={item.imgUrl}
//                     style={{width: ITEM_WIDTH, height: 100, borderRadius: 10}}
//                 />
//             </View>
//         )
//     }

//     return (
//         <View style={{flex: 0.4, backgroundColor: 'red', justifyContent:'center', alignItems: 'center'}}>
//             <View style={{justifyContent:'center', alignItems: 'center'}}>
//                 <Carousel
//                     layout="default"
//                     layoutCardOffset={9}
//                     ref={isCarousel}
//                     data={data}
//                     renderItem={renderItem}
//                     sliderWidth={SLIDER_WIDTH}
//                     itemWidth={ITEM_WIDTH}
//                     onSnapToItem={(index) => setIndex(index)}
//                     useScrollView={true}
//                 />
//                 <Pagination
//                     dotsLength={data.length}
//                     carouselRef={isCarousel}
//                     activeDotIndex={index}
//                     dotStyle={{
//                         width: 10,
//                         height: 10,
//                         borderRadius: 5,
//                         marginHorizontal: 0,
//                         backgroundColor: 'rgba(0, 0, 0, 0.92)'
//                     }}
//                     inactiveDotOpacity={0.4}
//                     inactiveDotScale={0.6}
//                     tappableDots={true}
//                 />
//             </View>
//         </View>
//     );
// };

// export default ImageCarousel;