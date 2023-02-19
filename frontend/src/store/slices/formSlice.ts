import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type initialStateType = {
    id: string | number;
    workFormToggle: boolean;
    projectFormToggle: boolean;
    updateFormToggle: boolean;
};

const initialState: initialStateType = {
    id: '',
    workFormToggle: false,
    projectFormToggle: false,
    updateFormToggle: false,
};

export const slice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        changeWorkFormToggle: (state, action: PayloadAction<boolean>) => {
            state.workFormToggle = action.payload;
        },
        changeProjectFormToggle: (state, action: PayloadAction<boolean>) => {
            state.projectFormToggle = action.payload;
        },
        changeUpdateFormToggle: (state, action: PayloadAction<boolean>) => {
            console.log(state, action);
            state.updateFormToggle = action.payload;
        },
    },
});

export const { changeWorkFormToggle, changeProjectFormToggle, changeUpdateFormToggle } =
    slice.actions;
export default slice;
