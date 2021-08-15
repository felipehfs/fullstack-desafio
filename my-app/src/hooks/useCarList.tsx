import { useReducer } from 'react';
import { Vehicle } from '../model/Vehicle';

const initialState: CarListState = {
  vehicles: [],
  filteredVehicles: []
};

interface CarListState {
  vehicles: Vehicle[];
  filteredVehicles: Vehicle[];
  selectedItem?: Vehicle;
}

type CarListActions =
  | { type: 'CAR_SELECTED'; payload: Vehicle }
  | { type: 'SET_FILTERED_VEHICLES'; payload: Vehicle[]}
  | { type: 'SET_VEHICLES'; payload: Vehicle[] };

function carListReducer(
  state: CarListState,
  action: CarListActions
): CarListState {
  switch (action.type) {
    case 'CAR_SELECTED':
      return {
        ...state,
        selectedItem: action.payload,
      };
    case 'SET_FILTERED_VEHICLES':
      return {
        ...state,
        filteredVehicles: action.payload
      }
    case 'SET_VEHICLES':
      return {
        ...state,
        vehicles: action.payload,
        filteredVehicles: action.payload
      };
    default:
      return state;
  }
}

export default function useCarList() {
  return useReducer(carListReducer, initialState);
}
