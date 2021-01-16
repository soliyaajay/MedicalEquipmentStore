import { takeLatest, put, call } from "redux-saga/effects";

import { POPULAR_BRAND_WATCHER , POPULAR_CATEGORY_WATCHER, TOP_OFFERS_WATCHER ,MERCHANT_WATCHER} from "../../constant";

import { homeBrandError, homeBrandSuccess, homeCategoryError,homeCategorySuccess ,offersError ,offersSuccess ,merchantError,merchantSuccess} from "../../actions";

import { BASE_URL } from '../../../axios/config'

function* onUserGEtLogin(userLoginResendCodeAction) {
    let { payload, resolve, reject } = userLoginResendCodeAction;    
    try {
        const response = yield fetch(`${BASE_URL}demo-popularproducts/226022`, {
            method: "GET",
        }).then((res) => res.json());

        yield put(homeBrandSuccess(response));
        resolve(response);
    } catch (e) {
        yield put(homeBrandError(e));
        reject(e);
    }
}

function* onUserGEtHome(userLoginResendCodeAction) {
    let { payload, resolve, reject } = userLoginResendCodeAction;    
    try {
        const response = yield fetch(`${BASE_URL}demo-cpcategory/`, {
            method: "GET",
        }).then((res) => res.json());

        yield put(homeCategorySuccess(response));
        resolve(response);
    } catch (e) {
        yield put(homeCategoryError(e));
        reject(e);
    }
}

function* onUserGEtHomeOffers(userLoginResendCodeAction) {
    let { payload, resolve, reject } = userLoginResendCodeAction;    
    try {
        const response = yield fetch(`${BASE_URL}demo-merchantoffer/226022/all`, {
            method: "GET",
        }).then((res) => res.json());

        yield put(offersSuccess(response));
        resolve(response);
    } catch (e) {
        yield put(offersError(e));
        reject(e);
    }
}

function* onUserGEtHomeMerchant(userLoginResendCodeAction) {
    let { payload, resolve, reject } = userLoginResendCodeAction;    
    try {
        const response = yield fetch(`${BASE_URL}demo-merchantnearest/226022/26.889715/80.96792/5`, {
            method: "GET",
        }).then((res) => res.json());

        yield put(merchantSuccess(response));
        resolve(response);
    } catch (e) {
        yield put(merchantError(e));
        reject(e);
    }
}

export function* userLoginActionWatcher() {
    yield takeLatest(POPULAR_BRAND_WATCHER, onUserGEtLogin);
    yield takeLatest(POPULAR_CATEGORY_WATCHER, onUserGEtHome);
    yield takeLatest(TOP_OFFERS_WATCHER, onUserGEtHomeOffers);
    yield takeLatest(MERCHANT_WATCHER, onUserGEtHomeMerchant);
}

