import {configureStore} from "@reduxjs/toolkit";
import categoriesModalReducer from "./modal/categoriesModalSlice.ts"
import addReviewModalReducer from "./modal/addReviewModalSlice.ts"
import loadingProgressReducer from "./loading/applicationLoadingSlice.ts"
import confirmationModalReducer from "./modal/confirmationModalSlice.ts"
import changePasswordModalReducer from "./modal/changePasswordModalSlice.ts";
import selectAvatarModalReducer from "./modal/selectAvatarModalSlice.ts"

export const store = configureStore({
	reducer: {
		addReviewModal: addReviewModalReducer,
		categoriesModal: categoriesModalReducer,
		confirmationModal: confirmationModalReducer,
		changePasswordModal: changePasswordModalReducer,
		selectAvatarModal: selectAvatarModalReducer,
		applicationLoading: loadingProgressReducer,
	}
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;