import { gql } from "@apollo/client";

export const GET_JOBS = gql`
    query Commitments {
        commitments {
            id
            title
            jobs(first: 12 where:{isPublished:true}) {
              title
              applyUrl
              
              cities {
                name
              }
              company {
                name
              }
            }
            slug
           
          }
    }
    
`;
export const GET_LOCATION = gql`
query Jobs($input: JobsInput) {
    jobs(input: $input) {
      title
      applyUrl
      
      cities {
        name
      }
      company {
        name
      }
    }
  }
    
`;



