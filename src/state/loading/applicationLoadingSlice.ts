import {createSlice} from "@reduxjs/toolkit";


interface ApplicationLoadingSlice {
	isLoading: boolean;
}

const initialState : ApplicationLoadingSlice = {
	isLoading: false,
}

const applicationLoadingSlice = createSlice({
	name: "applicationLoading",
	initialState,
	reducers: {
		startLoading: (state) => {
			state.isLoading = true;
		},

		stopLoading: (state) => {
			state.isLoading = false;
		}
	}
});

export default applicationLoadingSlice.reducer;
export const {startLoading, stopLoading} = applicationLoadingSlice.actions;

