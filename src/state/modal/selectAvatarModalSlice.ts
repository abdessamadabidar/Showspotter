import {createSlice} from "@reduxjs/toolkit";

interface SelectAvatarModalSlice {
	isOpen: boolean;
}


const initialState : SelectAvatarModalSlice = {
	isOpen: false,
}


const selectAvatarModalSlice = createSlice({
	name: "selectAvatarModal",
	initialState,
	reducers: {
		toggleSelectAvatarModalOpening: (state) => {
			state.isOpen = !state.isOpen;
		}
	}
});


export default selectAvatarModalSlice.reducer;
export const {toggleSelectAvatarModalOpening} = selectAvatarModalSlice.actions;