import { createSlice} from '@reduxjs/toolkit'
import { IRootState } from '../../store';



export interface ISideMenuState {
  value: {
    visible: boolean;
  }
}

const initialState = {
  value: {
    visible: false,
  }
} as ISideMenuState

const SideMenuSlice = createSlice({
  name: 'SideMenu',
  initialState,
  reducers: {
    SideMenuToggle(state){
      state.value.visible = !state.value.visible;
    },
  },
})


export const { SideMenuToggle } = SideMenuSlice.actions

export const SelectSideMenu = (state: IRootState) => state.SideMenu;

export default SideMenuSlice.reducer