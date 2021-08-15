import React from 'react';
import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';
import { EditIcon } from '@chakra-ui/icons';
import { Vehicle } from '../../model/Vehicle';

interface VehicleDetailsProps {
  data?: Vehicle;
  onClickEdit: () => void;
}

function VehicleDetails(props: VehicleDetailsProps) {
  return (
    <Box
      visibility={props.data ? 'visible' : 'hidden'}
      flex="1"
      pl={4}
      className="vehicle-details"
    >
      <Box mt={8} mb={4}>
        <Heading fontSize="md" color="gray.600">
          Detalhes
        </Heading>
      </Box>
      <Box p={4} bgColor="#f1f2f0">
        <Text color="teal" fontSize="2xl">
          {props.data?.model}
        </Text>
        <Flex mt={8}>
          <Box flex="1">
            <Heading fontSize="xl">Marca</Heading>
            <Text color="gray.400" fontSize="md">
              {props.data?.brand}
            </Text>
          </Box>
          <Box flex="1">
            <Heading fontSize="xl">Ano</Heading>
            <Text color="gray.400" fontSize="md">
              {props.data?.year}
            </Text>
          </Box>
        </Flex>
        <Box my={8}>
          <Text>{props.data?.description}</Text>
        </Box>
        <Box>
          <Button 
            onClick={props.onClickEdit}
            leftIcon={<EditIcon />} colorScheme="teal">
            Editar
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default VehicleDetails;
