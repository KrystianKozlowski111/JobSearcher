import React, { useState } from 'react';
import { GET_JOBS } from '../../queries/jobQuery.query';
import { useQuery } from '@apollo/client';
import {
  Wrapper,
  Title,
  TopWrapper,
  FilterButton,
  Container,
} from './ReccomendedJobs.style';
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
const ReccomendedJobs: React.FC = ({ ...props }) => {
  const [commitments, setCommitments] = useState([]);
  const [sort, setSort] = useState(false);

  const { data, loading, error, refetch } = useQuery(GET_JOBS, {
    onCompleted: ({ commitments }) => {
      if (commitments) {
        setCommitments(commitments[0].jobs);
      }
    },
  });
  const handleSort = () => {
    let arrayForSort = [...commitments];
    arrayForSort.sort((a: any, b: any) =>
      a.company.name.localeCompare(b.company.name)
    );
    setCommitments(arrayForSort);
  };

  return (
    <Wrapper>
      <TopWrapper>
        <Title>Promoted Job Offers</Title>
        <FilterButton
          onClick={(e) => {
            handleSort();
          }}
        >
          SORT BY COMPANY NAME
        </FilterButton>
      </TopWrapper>

      <Container>
        <Box job={commitments} />
      </Container>
    </Wrapper>
  );
};

export default ReccomendedJobs;
