import { BookmarkSchema } from '@/model/Bookmark';
import { createSlice } from '@reduxjs/toolkit'

interface Data {
    bookmark: BookmarkSchema[];
}


const initialState: Data = {
    bookmark: [],
}


export const BookmarkSlice = createSlice({
    name: 'Bookmark',
    initialState,
    reducers: {
        setBookmark: (state, action) => {
            state.bookmark =  action.payload
        },
    },
})

export const {setBookmark } = BookmarkSlice.actions

export const bookmarkReducer = BookmarkSlice.reducer;