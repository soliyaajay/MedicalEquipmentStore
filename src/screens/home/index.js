import React from 'react';
import { SafeAreaView, View, Text, Image, Linking, TouchableOpacity,Platform, StyleSheet, ImageBackground, Button, ScrollView, FlatList } from 'react-native';
import style from './style'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import images from '../../common/helper/Images'
import { Permission, PERMISSIONS_TYPE } from '../../navigation/AppPermissions'
import Geolocation from '@react-native-community/geolocation'
import Geocoder from 'react-native-geocoding';
import ImagePicker from 'react-native-image-crop-picker';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { homeBrandWatcher, homeCategoryWatcher, offersWatcher, merchantWatcher } from "../../store/actions";
import { call } from 'redux-saga/effects';
import { FlatGrid } from 'react-native-super-grid';

class home extends React.Component {

    constructor() {
        super()
        this.state = {
            latitude: 0,
            longitude: 0,
            error: null,
            Address: null,
            FullAddress: null,
            Pincode: null,
            img: '',
            brands: [],
            category: [],
            offer: [],
            merchant: []
        }
    }

    componentDidMount() {
        Permission.checkPermissoin(PERMISSIONS_TYPE.photo)

        this.call()
    }

    call = async () => {

        Geocoder.init('AIzaSyBvJ2uJB3RyDXePGC8h5h-EoPgYiijKjTw');
        Geolocation.getCurrentPosition(
            (position) => {
                this.setState({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                });
                Geocoder.from(position.coords.latitude, position.coords.longitude)

                    .then(json => {
                        console.log(json);
                        var addressComponent = json.results[0].address_components;
                        addressComponent.map((map) => map.types.map((data) => { if (data == 'postal_code') { this.setState({ Pincode: map.long_name }) } }))
                        this.setState({
                            Address: addressComponent, FullAddress: json.results[0].formatted_address
                        })
                    })
                    .catch(error => console.warn(error));
            },
            (error) => {
                // See error code charts below.
                this.setState({
                    error: error.message
                }),
                    console.log(error.code, error.message);
            },
            {
                enableHighAccuracy: false,
                timeout: 10000,
                maximumAge: 100000
            }
        );


        const param = {}
        this.props.homeBrandWatcher(
            param,
            (value) => {
                if (value.length != 0) {
                    this.setState({ brands: value })
                }
            },
            (error) => {
                console.log(error)
            }
        );
        this.props.homeCategoryWatcher(
            param,
            (value) => {
                if (value.length != 0) {
                    this.setState({ category: value })
                    console.log(value);
                }
            },
            (error) => {
                console.log(error)
            }
        );
        this.props.offersWatcher(
            param,
            (value) => {
                if (value.length != 0) {
                    // var arrays = [], size = 2;
                    // while (value.length > 0) {
                    //     arrays.push(value.splice(0, size));
                    // }
                    this.setState({ offer: value })
                }
            },
            (error) => {
                console.log(error)
            }
        );
        this.props.merchantWatcher(
            param,
            (value) => {
                if (value.length != 0) {
                    this.setState({ merchant: value })
                }
            },
            (error) => {
                console.log(error)
            }
        );
    }

    PhotoSelect = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            console.log('img', image);
            this.setState({ img: image.path })
        });
    }

    Brands = ({ item, index }) => {
        return (
            <View style={style.brandflatview}>
                <Image source={item.image_path != '' ? { uri: item.image_path } : null} style={style.brandflatlistimg} resizeMode={'cover'} />
            </View>
        )
    }

    Category = ({ item, index }) => {
        return (<View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <View style={style.brandflatview}>
                <Image source={item.image_path != '' ? { uri: item.image_path } : null} style={style.brandflatlistimg} resizeMode={'cover'} />
            </View>
            <View style={{ width: wp('20%') }}>
                <Text numberOfLines={1} style={[style.locationText, { alignSelf: 'center', justifyContent: 'center' }]}>{item.category_name}</Text>
            </View>
        </View>)
    }

    Coupons = ({ item, index }) => {
        return (
            <View style={style.couponsview}>
                <Image source={images.offer} style={[style.couponsimg,{ width:Platform.OS =='ios' ? wp('10%') : wp('9%'), height: Platform.OS =='ios' ? hp('4.5%') : hp('4.8%') }]} resizeMode={'cover'} />
                <View style={style.couponstextview}>
                    <Text numberOfLines={1} style={style.couponsoffer}>Upto 50% Offer</Text>
                    <Text numberOfLines={1} style={style.couponsBDaytext}>BRITHDAY</Text>
                </View>
            </View>
        )
    }

    Offers = ({ item, index }) => {
        return (
            <View style={style.offerview}>
                <Image source={item.offer_image != '' ? { uri: item.offer_image } : null} style={style.offerimg} resizeMode={'cover'} />
                <View style={style.offertextview}>
                    <Text numberOfLines={1} style={style.locationText}>{item.merchant_name}</Text>
                    <Text numberOfLines={1} style={style.locationText1}>{item.customer_type}</Text>
                    <Text numberOfLines={1} style={style.locationText1}>{item.discount_type}</Text>
                    <Text numberOfLines={1} style={style.locationText1}>{item.zipcode}</Text>
                </View>
            </View>
        )
    }

    Sponsors = ({ item, index }) => {
        return (
            <View style={style.sponsorflatview}>
                <Image source={item.offer_image != '' ? { uri: item.offer_image } : null} style={style.offerimg} resizeMode={'cover'} />
                <View style={style.offertextview}>
                    <Text numberOfLines={1} style={style.locationText}>{item.merchant_name}</Text>
                    <Text numberOfLines={1} style={style.locationText1}>{item.customer_type}</Text>
                    <Text numberOfLines={1} style={style.locationText1}>{item.discount_type}</Text>
                    <Text numberOfLines={1} style={style.locationText1}>{item.zipcode}</Text>
                </View>
            </View>
        )
    }

    Merchant = ({ item, index }) => {
        return (
            <View style={style.pharmaview}>
                <Image source={item.shop_image != '' ? { uri: item.shop_image } : null} style={style.offerimg} resizeMode={'cover'} />
                <View style={style.offertextview}>
                    <Text numberOfLines={1} style={style.locationText}>{item.merchant_name}</Text>
                    <Text numberOfLines={1} style={style.locationText1}>{item.address}</Text>
                    <Text numberOfLines={1} style={style.locationText1}>{item.discount_type}</Text>
                    <Text numberOfLines={1} style={style.locationText1}>{item.zipcode}</Text>
                </View>
            </View>
        )
    }

    newStory = (offer) => {
        var newArray = [...offer];
        var half_length = Math.ceil(newArray.length / 2);
        var leftSide = newArray.splice(0, half_length);
        return leftSide.map((data, key) => {
            return (
                <View>
                    <View style={style.topofferview}>
                        <Image source={data.offer_image != '' ? { uri: data.offer_image } : null} style={style.topofferimg} resizeMode={'cover'} />
                        <View style={style.offertextview}>
                            <Text numberOfLines={1} style={style.locationText}>{data.merchant_name}</Text>
                            <Text numberOfLines={1} style={style.locationText1}>{data.customer_type}</Text>
                            <Text numberOfLines={1} style={style.locationText1}>{data.discount_type}</Text>
                            <Text numberOfLines={1} style={style.locationText1}>{data.zipcode}</Text>
                        </View>
                    </View>
                    {newArray[key] &&
                        <View style={style.topofferview}>
                            <Image source={data.offer_image != '' ? { uri: data.offer_image } : null} style={style.topofferimg} resizeMode={'cover'} />
                            <View style={style.offertextview}>
                            <Text numberOfLines={1} style={style.locationText}>{data.merchant_name}</Text>
                            <Text numberOfLines={1} style={style.locationText1}>{data.customer_type}</Text>
                            <Text numberOfLines={1} style={style.locationText1}>{data.discount_type}</Text>
                            <Text numberOfLines={1} style={style.locationText1}>{data.zipcode}</Text>
                            </View>
                        </View>
                    }

                </View>
            )
        })
    }

    render() {

        const { category, img, Address, brands, offer, Pincode, merchant, FullAddress } = this.state;

        return (
            <ScrollView style={style.info} showsVerticalScrollIndicator={false}>
                <SafeAreaView style={style.info}>
                    <View style={style.info2}>
                        <View style={style.hesderview}>
                            <View style={style.hederviewpincode}>
                                <Image source={images.location} style={style.locationimg} resizeMode={'cover'} />
                                <Text style={style.pincodeTExt}>{Pincode}</Text>
                            </View>
                            <Text numberOfLines={1} style={style.locationText}>{FullAddress}</Text>
                        </View>
                        <View style={[style.uploadview, { paddingLeft: wp('7%') }]}>
                            <View style={style.uploadphotoview}>
                                <Text style={[style.pincodeTExt, { fontSize: hp('2%') }]}>Upload Your Preciption </Text>
                                <Text numberOfLines={1} style={style.ordertext}>Order priciption item issue free</Text>
                                <Text numberOfLines={1} style={style.savetext}>Save 5%</Text>
                            </View>
                            <View style={style.viiewclickimg}>
                                <TouchableOpacity onPress={() => this.PhotoSelect()}>
                                    <Image source={this.state.img != '' ? { uri: img } : images.clickimg} style={[style.uploadimg,{width:Platform.OS == 'ios' ? wp('17.5%'): wp('15%'),}]} resizeMode={'cover'} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={[style.brandview,{ height:Platform.OS == 'ios' ? hp('15%'): hp('17%')}]}>
                            <Text style={style.pincodetextview}>Popular Brands</Text>
                            <FlatList
                                showsHorizontalScrollIndicator={false}
                                data={brands}
                                horizontal
                                renderItem={(item, index) => this.Brands(item, index)}
                                keyExtractor={(item, index) => index.toString()}
                            />
                        </View>
                        <View style={[style.brandview,{height: hp('20%')} ]}>
                            <Text style={style.categoriestext}>Popular Categories</Text>
                            <FlatList
                                showsHorizontalScrollIndicator={false}
                                data={category}
                                horizontal
                                renderItem={(item, index) => this.Category(item, index)}
                                keyExtractor={(item, index) => index.toString()}
                            />
                        </View>
                        <View style={[style.brandview, { height: hp('14%') }]}>
                            <Text style={style.couponstext}>Coupons for You </Text>
                            <FlatList
                                showsHorizontalScrollIndicator={false}
                                data={this.state.brands}
                                horizontal
                                renderItem={(item, index) => this.Coupons(item, index)}
                                keyExtractor={(item, index) => index.toString()}
                            />
                        </View>
                        <View style={[style.brandview, {height:Platform.OS == 'ios' ? hp('31%'): hp('36%')}]}>
                            <Text style={style.offertext}>Top Offers</Text>
                            <ScrollView
                                ref={(ref) => (this.scrollView = ref)}
                                horizontal={true}
                                style={style.brandview}
                                showsHorizontalScrollIndicator={false}>
                                {this.newStory(offer)}

                            </ScrollView>
                        </View>
                        <View style={[style.brandview, {height:Platform.OS == 'ios' ? hp('56.5%'): hp('64%')}]}>
                            <Text style={style.sponsertext}>Sponsors</Text>
                            <FlatList
                                showsHorizontalScrollIndicator={false}
                                data={offer}
                                renderItem={(item, index) => this.Sponsors(item, index)}
                                keyExtractor={(item, index) => index.toString()}
                            />
                        </View>
                        <View style={[style.brandview, { height:Platform.OS == 'ios' ? hp('56.5%'): hp('64%'), marginBottom: hp('1%') }]}>
                            <Text style={style.pharmaext}>Nearest Pharmacy</Text>
                            <FlatList
                                showsHorizontalScrollIndicator={false}
                                data={merchant}
                                renderItem={(item, index) => this.Merchant(item, index)}
                                keyExtractor={(item, index) => index.toString()}
                            />
                        </View>
                    </View>
                </SafeAreaView>
            </ScrollView >
        )
    }
}

function mapStateToProps({ home }) {
    return home;
}

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        {
            homeBrandWatcher, homeCategoryWatcher, offersWatcher, merchantWatcher
        },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(home);