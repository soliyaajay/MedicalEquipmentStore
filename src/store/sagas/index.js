import { all } from "redux-saga/effects";

import { userLoginActionWatcher } from "./Home";

export default function* root() {
	yield all([userLoginActionWatcher(), ]);
}