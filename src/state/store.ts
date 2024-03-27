import {configureStore} from "@reduxjs/toolkit";
import addReviewModalReducer from "./modal/addReviewModalSlice.ts"
import loadingProgressReducer from "./loading/applicationLoadingSlice.ts"
import confirmationModalReducer from "./modal/confirmationModalSlice.ts"
import changePasswordModalReducer from "./modal/changePasswordModalSlice.ts";
import selectAvatarModalReducer from "./modal/selectAvatarModalSlice.ts"
import searchQueryModalReducer from "./modal/searchQueryModalSlice.ts";

export const store = configureStore({
	reducer: {
		addReviewModal: addReviewModalReducer,
		confirmationModal: confirmationModalReducer,
		changePasswordModal: changePasswordModalReducer,
		selectAvatarModal: selectAvatarModalReducer,
		applicationLoading: loadingProgressReducer,
		searchQueryModal: searchQueryModalReducer,
	}
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;