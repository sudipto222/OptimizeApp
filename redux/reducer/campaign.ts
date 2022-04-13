import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
        id: number
}

const initialState: CounterState = {
        id: 0,
}

export const counterSlice = createSlice({
        name: 'campaign',
        initialState,
        reducers: {
                setId: (state, action: PayloadAction<{ id: number }>) => {
                        state.id = action.payload.id
                },
        },
})

export const { setId } = counterSlice.actions

export default counterSlice.reducer