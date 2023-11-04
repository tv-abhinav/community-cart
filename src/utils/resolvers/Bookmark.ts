import { BookmarkSchema } from '@/model/Bookmark';
import { createAction, createSlice } from '@reduxjs/toolkit'

interface Data {
    bookmark: BookmarkSchema | null;
}


const initialState: Data = {
    bookmark: null,
}

export const BookmarkSlice = createSlice({
    name: 'Bookmark',
    initialState,
    reducers: {
        setBookmark: (state, action) => {
            state.bookmark = action.payload
        },
    },
})

export const { setBookmark } = BookmarkSlice.actions

export const bookmarkReducer = BookmarkSlice.reducer;