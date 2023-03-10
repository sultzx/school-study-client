import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios.js";

export const fetchCreateClassroom = createAsyncThunk(
  "auth/fetchCreateClassroom",
  async (params, { rejectWithValue }) => {
    try {
      const response = await axios.post("/api/study/classroom", params);
      return response.data;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchRemoveClassroom = createAsyncThunk(
  "auth/fetchRemoveClassroom",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`/api/study/classroom/${id}`);
      return response.data;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchAllClassroom = createAsyncThunk(
  "auth/fetchAllClassroom",
  async () => {
    const { data } = await axios.get(`/api/study/classroom/all`);
    return data;
  }
);

/////////////////////////////////////////////////////

export const fetchSendMessage = createAsyncThunk(
  "auth/fetchSendMessage",
  async (params, { rejectWithValue }) => {
    try {
      const response = await axios.post("/api/study/send-message", params);
      return response.data;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchAllQuestions = createAsyncThunk(
  "auth/fetchAllQuestions",
  async () => {
    const { data } = await axios.get(`/api/study/all-questions`);
    return data;
  }
);

export const fetchAnswerQuestion = createAsyncThunk(
  "auth/fetchAnswerQuestion",
  async (params, { rejectWithValue }) => {
    try {
      const response = await axios.patch(
        `/api/study/answer-for-question`,
        params
      );
      return response.data;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

///////////////////////////////////////////////////////////

export const fetchCreateChapter = createAsyncThunk(
  "auth/fetchCreateChapter",
  async (params, { rejectWithValue }) => {
    try {
      const response = await axios.post("/api/study/create-chapter", params);
      return response.data;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchGetChapters = createAsyncThunk(
  "auth/fetchGetChapters",
  async () => {
    const { data } = await axios.get("/api/study/all-chapters");
    return data;
  }
);

export const fetchCreateLesson = createAsyncThunk(
  "auth/fetchCreateLesson",
  async (params, { rejectWithValue }) => {
    try {
      const response = await axios.post("/api/study/create-lesson", params);
      return response.data;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchGetLessons = createAsyncThunk(
    "auth/fetchGetLessons",
    async ({ rejectWithValue }) => {
      const { data } = await axios.post("/api/study/all-lessons");
      return data;
    }
  );

////////////////////////////////////////////////

const initialState = {
  classrooms: {
    items: [],
    status: "loading",
    error: "",
  },
  questions: {
    items: [],
    status: "loading",
    error: "",
  },
  chapters: {
    items: [],
    status: "loading",
    error: "",
  },

  lessons: {
    items: [],
    status: "loading",
    error: "",
  },
};

const studySlice = createSlice({
  name: "study",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAllClassroom.pending]: (state) => {
      state.classrooms.status = "loading";
      state.classrooms.items = [];
    },
    [fetchAllClassroom.fulfilled]: (state, action) => {
      state.classrooms.status = "loaded";
      state.classrooms.items = action.payload;
    },
    [fetchAllClassroom.rejected]: (state) => {
      state.classrooms.status = "error";
      state.classrooms.items = [];
    },

    [fetchCreateClassroom.pending]: (state) => {
      state.classrooms.status = "loading";
      state.classrooms.items = [];
    },
    [fetchCreateClassroom.fulfilled]: (state, action) => {
      state.classrooms.status = "loaded";
      state.classrooms.items = action.payload;
    },
    [fetchCreateClassroom.rejected]: (state) => {
      state.classrooms.status = "error";
      state.classrooms.items = [];
    },

    [fetchRemoveClassroom.pending]: (state, action) => {
      state.classrooms.status = "loading";
      state.classrooms.items = state.classrooms.items.filter(
        (obj) => obj._id != action.meta.arg
      );
    },

    [fetchRemoveClassroom.rejected]: (state, action) => {
      state.classrooms.status = "error";
      state.classrooms.items = action.payload;
    },

    //////////////////////////////////////////////

    [fetchAllQuestions.pending]: (state) => {
      state.questions.status = "loading";
      state.questions.items = [];
    },
    [fetchAllQuestions.fulfilled]: (state, action) => {
      state.questions.status = "loaded";
      state.questions.items = action.payload;
    },
    [fetchAllQuestions.rejected]: (state) => {
      state.questions.status = "error";
      state.questions.items = [];
    },

    [fetchSendMessage.pending]: (state) => {
      state.questions.status = "loading";
      state.questions.items = [];
    },
    [fetchSendMessage.fulfilled]: (state, action) => {
      state.questions.status = "loaded";
      state.questions.items = action.payload;
    },
    [fetchSendMessage.rejected]: (state) => {
      state.questions.status = "error";
      state.questions.items = [];
    },

    [fetchAnswerQuestion.pending]: (state) => {
      state.questions.status = "loading";
      state.questions.items = [];
    },
    [fetchAnswerQuestion.fulfilled]: (state, action) => {
      state.questions.status = "loaded";
      state.questions.items = action.payload;
    },
    [fetchAnswerQuestion.rejected]: (state) => {
      state.questions.status = "error";
      state.questions.items = [];
    },
    /////////////////////////////////////////////
    [fetchCreateChapter.pending]: (state) => {
        state.chapters.status = "loading";
        state.chapters.items = [];
      },
      [fetchCreateChapter.fulfilled]: (state, action) => {
        state.chapters.status = "loaded";
        state.chapters.items = action.payload;
      },
      [fetchCreateChapter.rejected]: (state) => {
        state.chapters.status = "error";
        state.chapters.items = [];
      },

      [fetchGetChapters.pending]: (state) => {
        state.chapters.status = "loading";
        state.chapters.items = [];
      },
      [fetchGetChapters.fulfilled]: (state, action) => {
        state.chapters.status = "loaded";
        state.chapters.items = action.payload;
      },
      [fetchGetChapters.rejected]: (state) => {
        state.chapters.status = "error";
        state.chapters.items = [];
      },
//////////////////////////////////////////////////

[fetchCreateLesson.pending]: (state) => {
    state.lessons.status = "loading";
    state.lessons.items = [];
  },
  [fetchCreateLesson.fulfilled]: (state, action) => {
    state.lessons.status = "loaded";
    state.lessons.items = action.payload;
  },
  [fetchCreateLesson.rejected]: (state) => {
    state.lessons.status = "error";
    state.lessons.items = [];
  },

  [fetchGetLessons.pending]: (state) => {
    state.lessons.status = "loading";
    state.lessons.items = [];
  },
  [fetchGetLessons.fulfilled]: (state, action) => {
    state.lessons.status = "loaded";
    state.lessons.items = action.payload;
  },
  [fetchGetLessons.rejected]: (state) => {
    state.lessons.status = "error";
    state.lessons.items = [];
  },
  },
});

export const studyReducer = studySlice.reducer;
