import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import { Vehicle } from '../../model/Vehicle';

interface VehicleItemProps {
  data: Vehicle;
  active?: boolean;
  onClick: () => void;
}

function VehicleItem(props: VehicleItemProps) {
  return (
    <Box
      onClick={props.onClick}
      bgColor={props.active ? '#f1f2f0' : 'white'}
      my={4}
      cursor="pointer"
    >
      <Box p={4}>
        <Heading fontSize="xl">{props.data.brand}</Heading>
        <Text fontSize="xl" color="teal">
          {props.data.model}
        </Text>
        <Text fontSize="md" color="gray.400">
          {props.data.year}
        </Text>
      </Box>
    </Box>
  );
}

export default VehicleItem;
