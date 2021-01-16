import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
export default (styles = {
  info: {
    flex: 1,
    backgroundColor: 'White'
  },
  info2: {
    flex: 1,
    backgroundColor: 'gery'
  },
  hesderview: {
    width: wp('100%'),
    height: hp('8%'), 
    backgroundColor: 'white', 
    justifyContent: 'center', 
    paddingHorizontal: wp('4%'),
  },
  hederviewpincode : { flexDirection: 'row' },
  locationimg: { width: wp('5%'), height: hp('2.5%') },
  pincodeTExt: { fontSize: hp('2.2%'), marginLeft: wp('2%'), fontWeight: 'bold' },

  brandflatlistimg : { width: wp('20%'), height: wp('20%'), borderRadius: wp('10%') },

  locationText: { fontSize: wp('4%'), 
  color: 'grey' },
  uploadphotoview: { width: wp('65%'), justifyContent: 'center' },
  locationText1: { fontSize: wp('4%'), 
  color: 'grey' ,marginTop: wp('1%') },


  savetext: { fontSize: wp('4%'), 
  color: 'grey',marginLeft: wp('2%'), marginTop: hp('0.5%'), color: '#58D68D' },
  ordertext: { marginLeft: wp('2%'), marginTop: hp('0.5%'),fontSize: wp('4%'), 
  color: 'grey', },
  viiewclickimg: { width: wp('35%'), justifyContent: 'center', alignItems: 'center' },

  pincodetextview: { fontSize: hp('2.2%'), marginLeft: wp('2%'), fontWeight: 'bold',fontSize: hp('2%'), marginLeft: 0, marginTop: hp('1%') },
  categoriestext : {fontSize: hp('2.2%'), marginLeft: wp('2%'), fontWeight: 'bold', fontSize: hp('2%'), marginLeft: 0, marginBottom: hp('0.5%') },
  pharmaext :{fontSize: hp('2.2%'), marginLeft: wp('2%'), fontWeight: 'bold', fontSize: hp('2%'), marginLeft: 0, marginTop: hp('1%'), marginBottom: hp('0.5%') },
  sponsertext : { fontSize: hp('2.2%'), marginLeft: wp('2%'), fontWeight: 'bold',fontSize: hp('2%'), marginLeft: 0, marginTop: hp('1%'), marginBottom: hp('0.5%') },
  offertext :{ fontSize: hp('2.2%'), marginLeft: wp('2%'), fontWeight: 'bold',fontSize: hp('2%'), marginLeft: 0, marginTop: hp('1%'), marginBottom: hp('0.5%') },
  couponstext : { fontSize: hp('2.2%'), marginLeft: wp('2%'), fontWeight: 'bold',fontSize: hp('2%'), marginLeft: 0, marginTop: hp('1%') },

  uploadview: { width: wp('100%'), 
  flexDirection: 'row', 
  backgroundColor: 'red', 
  height: hp('10%'), 
  marginTop: wp('2%'), 
  backgroundColor: 'white', 
  justifyContent: 'center', 
  paddingHorizontal: wp('4%') },
  uploadimg: {height: hp('8%') },

  brandview: { width: wp('100%'), 
  height: hp('15%'), 
  marginTop: wp('2%'), 
  backgroundColor: 'white', 
  paddingHorizontal: wp('4%') },

  brandflatview: {
    backgroundColor: 'white',
    shadowColor: 'silver',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    borderRadius: 10,
    shadowRadius: 5,
    shadowOpacity: 1.0,
    elevation: 5,
    marginVertical: hp('1%'),
    marginHorizontal: wp('3%'), marginTop: hp('1%'), width: wp('20%'), height: wp('20%'), justifyContent: 'center', alignItems: 'center', borderRadius: wp('10%')
  },
  flatcategory: { marginHorizontal: wp('2.5%'), marginTop: hp('2%'), marginBottom: hp('2%'), width: wp('20%'), height: hp('20%') },

  offerview: {
    backgroundColor: 'white',
    shadowColor: 'silver',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    borderRadius: 10,
    shadowRadius: 5,
    shadowOpacity: 1.0,
    elevation: 5,
    marginVertical: hp('1%'),
    marginHorizontal: wp('3%'), marginTop: hp('1%'), width: wp('20%'), height: wp('20%'), borderRadius: wp('10%')
  },

  couponsview : {
    backgroundColor: 'white',
    shadowColor: 'silver',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    borderRadius: 10,
    shadowRadius: 5,
    shadowOpacity: 1.0,
    elevation: 5,
    marginVertical: hp('1%'),
    marginHorizontal: wp('3%'), marginTop: hp('1%'),
    flexDirection: 'row', alignItems: 'center', width: wp('40%'), height: hp('6.5%'), borderRadius: wp('2%'), justifyContent: 'center', marginTop: hp('2%'),
  },
  couponsimg: { width: wp('10%'), height: hp('4.5%') },
  couponstextview: { width: wp('25%'), height: hp('4.5%'), marginLeft: wp('2.5%') },
  couponsoffer: { fontSize: wp('3.2%s') },
  couponsBDaytext :{ ontSize: wp('4%'), 
  color: 'grey',fontSize: wp('3%'), marginTop: wp('1%') },

  offerview: { width: wp('90%'), flexDirection: 'row', marginVertical: hp('0.2%'), marginHorizontal: wp('1%'), height: wp('27%'), alignItems: 'center', padding: wp('2%') },
  offerimg: { width: wp('28%'), height: wp('22%'), borderRadius: wp('2%') },
  offertextview: { width: wp('55%'), height: wp('20%'), marginLeft: wp('3%'), marginBottom: wp('3%') },

  sponsorflatview :{ width: wp('90%'), flexDirection: 'row', marginVertical: hp('0.2%'), marginHorizontal: wp('1%'), height: wp('27%'), alignItems: 'center', padding: wp('2%') },

  pharmaview: { width: wp('90%'), flexDirection: 'row', marginVertical: hp('0.2%'), marginHorizontal: wp('1%'), height: wp('27%'), alignItems: 'center', padding: wp('2%') },

  topofferview: { width: wp('80%'), flexDirection: 'row', marginVertical: hp('0.2%'), height: wp('27%'), alignItems: 'center', padding: wp('2%'),paddingHorizontal:0 },
  topofferimg: { width: wp('28%'), height: wp('22%'), borderRadius: wp('2%') },

});
module.exports = styles;