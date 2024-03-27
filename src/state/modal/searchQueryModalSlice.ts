import {createSlice} from "@reduxjs/toolkit";


interface SearchQueryModalSlice {
	isOpen: boolean;
}

const initialState : SearchQueryModalSlice = {
	isOpen: false,
}

const searchQueryModalSlice = createSlice({
	name: "searchQueryModal",
	initialState,
	reducers: {
		toggleOpeningSearchQueryModal: (state) => {
			state.isOpen = !state.isOpen
		}
		// You can add more actions here below
	}
});


export default searchQueryModalSlice.reducer;
export const {toggleOpeningSearchQueryModal} =  searchQueryModalSlice.actions;


