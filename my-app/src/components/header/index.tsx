import React from 'react';
import { Flex, Heading } from '@chakra-ui/react';
import classes from './header.module.css';
import { useState } from 'react';
import useDebouncedValue from '../../hooks/useDebouncedValue';
import { useEffect } from 'react';

interface HeaderProps {
  onSubmitSearch: (query: string) => void;
}

function Header(props: HeaderProps) {
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebouncedValue(search, 600);

  useEffect(() => {
    props.onSubmitSearch(debouncedSearch)
  }, [debouncedSearch])

  return (
    <Flex w="100%" bgColor="#364147">
      <Flex flex="1" alignItems="center" pl={16}>
        <Heading fontSize="3xl" color="white">
          Fullstack
        </Heading>
      </Flex>
      <Flex flex="1" p={3} bgColor="blackAlpha.400">
        <input
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="DIGITE seu veículo"
          className={classes.input}
        />
      </Flex>
    </Flex>
  );
}

export default Header;
