import * as React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  VStack,
  Grid,
  theme,
  Flex,
  IconButton,
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import VehicleList from './components/vehicleList';
import VehicleDetails from './components/vehicleDetails';
import Header from './components/header';
import useCarList from './hooks/useCarList';
import { Vehicle } from './model/Vehicle';
import { useEffect } from 'react';
import { BaseApi } from './constants/endpoints';
import VehicleModal from './components/VehicleModal';
import { useState } from 'react';

const initialState = {
    model: '',
    brand: '',
    year: 0,
    sold: false,
    description: ''
  }

export const App = () => {
  const [state, dispatch] = useCarList();
  const [formValues, setFormValues] = useState<Vehicle>(initialState)

  const [modalVehicleState, setModalVehicleState] = useState({
    isOpen: false,
    title: 'Novo veículo',
    confirmLabel: 'Add', 
  });

  const handleOnSelected = (value: Vehicle) => {
    dispatch({ type: 'CAR_SELECTED', payload: value });
  };


  const handleOnClose = () =>{
    setFormValues(initialState)
    setModalVehicleState((previous) => ({
      ...previous,
      isOpen: !previous.isOpen,
    }));
  }

  const handleOnCreate = () =>
    setModalVehicleState((previous) => ({ ...previous, isOpen: true }));

  async function getVehicles() {
    const response = await fetch(`${BaseApi}/vehicles`)
    const data = await response.json()
    dispatch({ type: 'SET_VEHICLES', payload: data })
  }

  const handleSubmitSearch = (search: string) => {
    const payload = state.vehicles.filter(vehicle => vehicle.model.includes(search))
    dispatch({ type: 'SET_FILTERED_VEHICLES', payload })
  }

  useEffect(() => {
    getVehicles();
  }, []);

  async function handleOnClickEdit() {
    if (!state.selectedItem) return;
    setFormValues(state.selectedItem)
    setModalVehicleState({
      confirmLabel: "Editar",
      isOpen: true,
      title: 'Editar veículo'
    })
  }
    async function updateVehicle(vehicle: Vehicle) {
    try {
      await fetch(`${BaseApi}/vehicles/${vehicle.id}`, {
        body: JSON.stringify(vehicle),
        method: 'PUT',
        headers: {
          "Content-Type": "Application/json"
        }
      });
      setModalVehicleState(previous => ({ ...previous, isOpen: false}))
      setFormValues(initialState);
      dispatch({ type: 'CAR_SELECTED', payload: vehicle})
      getVehicles()
    }catch (err) {
      alert(err.message);
    }
  }


  async function addVehicle(vehicle: Vehicle) {
    try {
      await fetch(`${BaseApi}/vehicles`, {
        body: JSON.stringify(vehicle),
        method: 'POST',
        headers: {
          "Content-Type": "Application/json"
        }
      });
      setModalVehicleState(previous => ({ ...previous, isOpen: false}))
      setFormValues(initialState);
      getVehicles()
    }catch (err) {
      alert(err.message);
    }
  }

  return (
    <ChakraProvider theme={theme}>
      <Grid minH="100vh" w="100%" overflow="hidden" bgColor="#e2e4e1">
        <VStack>
          <Header 
            onSubmitSearch={handleSubmitSearch}
          />
          <Box w="100%" p={16}>
            <Flex justifyContent="space-between">
              <Text fontSize="3xl">Veículo</Text>
              <IconButton
                onClick={handleOnCreate}
                aria-label="new vehicle"
                colorScheme="teal"
                size="md"
                icon={<AddIcon />}
              />
            </Flex>
            <Flex>
              <VehicleList
                onSelected={handleOnSelected}
                selectedItem={state.selectedItem}
                data={state.filteredVehicles}
              />
              <VehicleDetails 
                onClickEdit={handleOnClickEdit}
                data={state.selectedItem} />
            </Flex>
          </Box>
        </VStack>
        <VehicleModal
          title={modalVehicleState.title}
          onClose={handleOnClose}
          formValues={formValues}
          setFormValues={setFormValues}
          addVehicle={addVehicle}
          updateVehicle={updateVehicle}
          confirmLabel={modalVehicleState.confirmLabel}
          isOpen={modalVehicleState.isOpen}
        />
      </Grid>
    </ChakraProvider>
  );
};
