import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  jobTitle: '',
  description: '',
  skills: '',
  jobType: '',
  education: '',
  experienceLevel: '',
};

const jobSlice = createSlice({
  name: 'job',
  initialState,
  reducers: {
    setJobTitle: (state, action) => { state.jobTitle = action.payload; },
    setDescription: (state, action) => { state.description = action.payload; },
    setSkills: (state, action) => { state.skills = action.payload; },
    setJobType: (state, action) => { state.jobType = action.payload; },
    setEducation: (state, action) => { state.education = action.payload; },
    setExperienceLevel: (state, action) => { state.experienceLevel = action.payload; },
  },
});

export const {
  setJobTitle,
  setDescription,
  setSkills,
  setJobType,
  setEducation,
  setExperienceLevel,
} = jobSlice.actions;

export default jobSlice.reducer;
