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

export function homeBrandWatcher(payload, resolve, reject) {
    return { type: POPULAR_BRAND_WATCHER, payload, resolve, reject };
}

export function homeBrandSuccess(payload) {
    return { type: POPULAR_BRAND_SUCCESS, payload: payload };
}

export function homeBrandError(error) {
    return { type: POPULAR_BRAND_FAILURE, payload: error };
}

export function homeCategoryWatcher(payload, resolve, reject) {
    return { type: POPULAR_CATEGORY_WATCHER, payload, resolve, reject };
}

export function homeCategorySuccess(payload) {
    return { type: POPULAR_CATEGORY_SUCCESS, payload: payload };
}

export function homeCategoryError(error) {
    return { type: POPULAR_CATEGORY_FAILURE, payload: error };
}

export function offersWatcher(payload, resolve, reject) {
    return { type: TOP_OFFERS_WATCHER, payload, resolve, reject };
}

export function offersSuccess(payload) {
    return { type: TOP_OFFERS_SUCCESS, payload: payload };
}

export function offersError(error) {
    return { type: TOP_OFFERS_FAILURE, payload: error };
}

export function merchantWatcher(payload, resolve, reject) {
    return { type: MERCHANT_WATCHER, payload, resolve, reject };
}

export function merchantSuccess(payload) {
    return { type: MERCHANT_SUCCESS, payload: payload };
}

export function merchantError(error) {
    return { type: MERCHANT_FAILURE, payload: error };
}