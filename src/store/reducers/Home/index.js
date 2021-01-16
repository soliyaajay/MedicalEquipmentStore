import {
  POPULAR_BRAND_SUCCESS,
  POPULAR_BRAND_FAILURE,
  POPULAR_BRAND_WATCHER,
  POPULAR_CATEGORY_SUCCESS,
  POPULAR_CATEGORY_FAILURE,
  POPULAR_CATEGORY_WATCHER,
  TOP_OFFERS_SUCCESS,
  TOP_OFFERS_FAILURE,
  TOP_OFFERS_WATCHER,
  MERCHANT_SUCCESS,
  MERCHANT_FAILURE,
  MERCHANT_WATCHER,
} from '../../constant';


const initialState = {
  error: null,
  userLoginLoader: false,
  homeBrandData: [],
  homeCategoryData: [],
  offersData: [],
  merchantData: []
};

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case POPULAR_BRAND_WATCHER:
      return {
        ...state,
        userLoginLoader: true
      };
    case POPULAR_BRAND_SUCCESS:
      return {
        ...state,
        error: null,
        homeBrandData: action.payload,
      };
    case POPULAR_BRAND_FAILURE:
      return {
        ...state,
        error: action,
        userLoginLoader: false
      };
    case POPULAR_CATEGORY_WATCHER:
      return {
        ...state,
        userLoginLoader: true
      };
    case POPULAR_CATEGORY_SUCCESS:
      return {
        ...state,
        error: null,
        homeCategoryData: action.payload,
      };
    case POPULAR_CATEGORY_FAILURE:
      return {
        ...state,
        error: action,
        userLoginLoader: false
      };
    case TOP_OFFERS_WATCHER:
      return {
        ...state,
        userLoginLoader: true
      };
    case TOP_OFFERS_SUCCESS:
      return {
        ...state,
        error: null,
        offersData: action.payload,
      };
    case TOP_OFFERS_FAILURE:
      return {
        ...state,
        error: action,
        userLoginLoader: false
      };
    case MERCHANT_WATCHER:
      return {
        ...state,
        userLoginLoader: true
      };
    case MERCHANT_SUCCESS:
      return {
        ...state,
        error: null,
        merchantData: action.payload,
      };
    case MERCHANT_FAILURE:
      return {
        ...state,
        error: action,
        userLoginLoader: false
      };
    default:
      return state;
  }
};