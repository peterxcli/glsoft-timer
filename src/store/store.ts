import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { TimeSlice, createTimeSlice } from './slices/createTimeSlice'
import { createSettingSlice, SettingSlice } from './slices/createSettingSlice'

type StoreState = TimeSlice & SettingSlice

export const useAppStore = create<StoreState>()(devtools((...a) => ({
    ...createTimeSlice(...a),
    ...createSettingSlice(...a),
})))