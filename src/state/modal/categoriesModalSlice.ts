import {createSlice} from "@reduxjs/toolkit";

interface CategoriesModalSlice {
	isOpen: boolean;
}

const initialState: CategoriesModalSlice = {
  isOpen: false
}

const categoriesModalSlice = createSlice({
	name: "categoriesModal",
	initialState,
	reducers: {
		toggleOpening: (state) => {
			state.isOpen = !state.isOpen
		}
		// You can add more actions here below
	}
});

export default categoriesModalSlice.reducer;
export const {toggleOpening} = categoriesModalSlice.actions;