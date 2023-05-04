import { create } from 'zustand'
// import { CartSlice, createCartSlice } from './slices/createCartSlice'
import { TimeSlice, createTimeSlice } from './slices/createTimeSlice'
// import { createProductSlice, ProductSlice } from './slices/createProductSlice'

type StoreState = TimeSlice

export const useAppStore = create<StoreState>()((...a) => ({
    ...createTimeSlice(...a),
}))