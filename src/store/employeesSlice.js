import { createSlice } from "@reduxjs/toolkit";

const employeesSlice = createSlice({
  name: "employees",
  initialState: {
    employees: [],
  },
  reducers: {
    addToEmployeesList: (state, action) => {
      state.employees.push({ ...action.payload });
    },
  },
});


export const employeesReducer = employeesSlice.reducer;

export const { addToEmployeesList } = employeesSlice.actions