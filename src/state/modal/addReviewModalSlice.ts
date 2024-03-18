import {createSlice} from "@reduxjs/toolkit";

interface AddReviewModalSlice {
	isOpen: boolean;
}

const initialState: AddReviewModalSlice = {
  isOpen: false
}

const addReviewModalSlice = createSlice({
	name: "addReviewModal",
	initialState,
	reducers: {
		toggleOpening: (state) => {
			state.isOpen = !state.isOpen
		}
		// You can add more actions here below
	}
});

export default addReviewModalSlice.reducer;
export const {toggleOpening} = addReviewModalSlice.actions;