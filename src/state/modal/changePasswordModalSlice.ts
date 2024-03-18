import {createSlice} from "@reduxjs/toolkit";


interface ChangePasswordModalSlice {
	isOpen: boolean;
}

const initialState : ChangePasswordModalSlice = {
	isOpen: false,
}

const changePasswordModalSlice = createSlice({
	name: "changePasswordModal",
	initialState,
	reducers: {
		toggleChangePasswordModalOpening: (state) => {
			state.isOpen = !state.isOpen
		}
		// You can add more actions here below
	}
});


export default changePasswordModalSlice.reducer;

export const {toggleChangePasswordModalOpening} = changePasswordModalSlice.actions;