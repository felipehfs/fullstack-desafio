import {
  FormControl,
  Grid,
  GridItem,
  Input,
  FormLabel,
  Switch,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  Box,
  Textarea,
  ModalFooter,
  Button,
} from '@chakra-ui/react';
import React from 'react';
import { Vehicle } from '../../model/Vehicle';

interface VehicleModalProps {
  isOpen: boolean;
  title: string;
  formValues: Vehicle;
  setFormValues:  React.Dispatch<React.SetStateAction<Vehicle>>;
  onClose: () => void;
  addVehicle: (vehicle: Vehicle) => void;
  updateVehicle: (vehicle: Vehicle) => void;
  confirmLabel: string;
}


function VehicleModal(props: VehicleModalProps) {

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    props.setFormValues({...props.formValues, [event.target.id]:  event.target.value })
  }

  const handleOnCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.setFormValues({...props.formValues, [event.target.id]:  event.target.checked })
  }

  function handleOnConfirm() {
    const values = {
      ...props.formValues,
      year: Number.parseInt(props.formValues.year as unknown as string)
    }
    
    if (props.formValues.id) {
      props.updateVehicle(values)
      return;
    }

    props.addVehicle(values);
  }

  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{props.title}</ModalHeader>
        <ModalBody>
          <Grid gap="16px" templateColumns="repeat(2, 1fr)">
            <GridItem>
              <Text fontSize="sm">Veiculo</Text>
              <Input 
                id="model"
                onChange={handleOnChange}
                value={props.formValues.model}
                variant="filled" />
            </GridItem>
            <GridItem>
              <Text fontSize="sm">Marca</Text>
              <Input 
                id="brand"
                onChange={handleOnChange}
                value={props.formValues.brand}
                variant="filled" />
            </GridItem>
            <GridItem>
              <Text fontSize="sm">Ano</Text>
              <Input 
                id="year"
                type="number"
                onChange={handleOnChange}
                value={props.formValues.year}
                variant="filled" />
            </GridItem>
            <GridItem>
              <FormControl display="flex" h="100%" alignItems="center">
                <Switch id="sold" isChecked={props.formValues.sold ?? false} onChange={handleOnCheckboxChange} />
                <FormLabel htmlFor="sold" ml="16px">
                  Vendido
                </FormLabel>
              </FormControl>
            </GridItem>
          </Grid>
          <Box>
            <Text my="8px" fontSize="sm">
              Descrição
            </Text>
            <Textarea 
              id="description"
              onChange={handleOnChange}
              value={props.formValues.description}
              variant="filled" />
          </Box>
        </ModalBody>
        <ModalFooter>
          <Button 
            onClick={handleOnConfirm}
            size="sm" mr={5} colorScheme="teal">
            {props.confirmLabel}
          </Button>
          <Button 
            onClick={props.onClose}
            size="sm" colorScheme="red">
            Fechar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default VehicleModal;
