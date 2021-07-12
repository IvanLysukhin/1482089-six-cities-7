import {NameSpace} from '../root-reducer';

export const getCurrentCity = (state) => state[NameSpace.CHANGE].city;
export const getCurrentSortType = (state) => state[NameSpace.CHANGE].sortType;
export const getHoveredCardId = (state) => state[NameSpace.CHANGE].hoveredCardId;
