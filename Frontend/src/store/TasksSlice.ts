import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Priority } from "../types/commonTypes";

export interface TasksState {
  priority: Priority;
  refresh: boolean;
}

const initialState: TasksState = {
  priority: "Low",
  refresh: false
};

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    changePriority: (state, action: PayloadAction<Priority>) => {
      state.priority = action.payload;
    },
    refreshData: (state, action: PayloadAction<boolean>) => {
      state.refresh = action.payload;
    }
  }
});

// Action creators are generated for each case reducer function
export const { changePriority, refreshData } = taskSlice.actions;

export default taskSlice.reducer;
