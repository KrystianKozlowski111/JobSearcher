import React, { useEffect, useState } from 'react';
import { GET_LOCATION } from '../../queries/jobQuery.query';
import { useQuery } from '@apollo/client';
import {
  Wrapper,
  Button,
  Container,
  TopWrapper,
  Input,
  SearchWrapper,
  Loader,
} from './SearchJobs.style';
import Box from '../Box';

interface jobsType {
  title: string;
  company: company;
  cities: cities[];
  applyUrl: string;
}
interface company {
  name: string;
}
interface cities {
  name: string;
}
const SearchJobs: React.FC = ({ ...props }) => {
  const [location, setLocation] = useState([]);
  const [city, setCity] = useState(' ');

  const [cityInput, setCityInput] = useState('');

  const { data, loading, error, refetch } = useQuery(GET_LOCATION, {
    variables: {
      input: {
        type: 'country',
        slug: city,
      },
    },
    fetchPolicy: 'network-only',
    onCompleted: ({ jobs }) => {
      if (jobs) {
        setLocation(jobs);
      }
    },
    onError: (err) => {
      setLocation([]);
    },
  });
  const changeValue = (value?: string | null) => {
    if (value) {
      setCity(value.toLowerCase());
    }
  };
  return (
    <Wrapper>
      <TopWrapper>
        <SearchWrapper>
          <Input
            onBlur={(e) => setCityInput(e.currentTarget.value)}
            type="text"
            placeholder="Country"
          />
          <Button
            onClick={(e) => {
              changeValue(cityInput);
            }}
          >
            SEARCH
          </Button>
        </SearchWrapper>
        <Container>
          <Box job={location} />
        </Container>

        {loading && <Loader />}
        {location.length === 0 && city !== ' ' && !loading ? 'No results' : ''}
      </TopWrapper>
    </Wrapper>
  );
};

export default SearchJobs;
