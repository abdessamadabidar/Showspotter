import {createSlice} from "@reduxjs/toolkit";


interface ConfirmationModalSlice {
	isOpen: boolean;
}

const initialState : ConfirmationModalSlice = {
	isOpen: false,
}

const confirmationModalSlice = createSlice({
	name: "confirmationModal",
	initialState,
	reducers: {
		toggleOpening: (state) => {
			state.isOpen = !state.isOpen
		}
		// You can add more actions here below
	}
});


export default confirmationModalSlice.reducer;
export const {toggleOpening} =  confirmationModalSlice.actions;


