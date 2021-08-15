import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import { Vehicle } from '../../model/Vehicle';
import VehicleItem from '../vehicleItem';

interface VehicleListProps {
  data: Vehicle[];
  selectedItem?: Vehicle;
  onSelected: (data: Vehicle) => void;
}

function VehicleList(props: VehicleListProps) {
  return (
    <Box flex="1" className="vehicles-list">
      <Box my={8}>
        <Heading fontSize="md" color="gray.600">
          Lista de veículos
        </Heading>
        {props.data.map((vehicle) => (
          <VehicleItem
            onClick={() => props.onSelected(vehicle)}
            active={vehicle.id === props.selectedItem?.id}
            data={vehicle}
            key={vehicle.id}
          />
        ))}
      </Box>
    </Box>
  );
}

export default VehicleList;
