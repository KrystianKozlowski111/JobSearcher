import React from 'react';
import {
  Title,
  CityContainer,
  Text,
  Button,
  BoxContainer,
  Img,
} from './Box.style';
import IconJob from '../../assets/icons/icon-job.svg';
interface BoxProps {
  job: jobsType[];
}
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
const Box: React.FC<BoxProps> = ({ job }) => {
  return (
    <>
      {job.map((jobs: jobsType, key: number) => (
        <BoxContainer key={key}>
          <Title>
            <Img src={IconJob} />
            {jobs.title}
          </Title>
          <Text>{jobs.company.name}</Text>
          {jobs.cities.length > 0 ? (
            <CityContainer>
              {jobs.cities.map((city: cities, key: number) => (
                <Text key={key}>{city.name}</Text>
              ))}
            </CityContainer>
          ) : (
            <Text> &nbsp;</Text>
          )}
          <Button href={jobs.applyUrl}>JOIN</Button>
        </BoxContainer>
      ))}
    </>
  );
};

export default Box;
