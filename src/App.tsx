import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Footer from './components/Footer';
import Header from './components/Header';

import ReccomendedJobs from './components/ReccomendedJobs';
import SearchJobs from './components/SearchJobs';
function App() {
  const client = new ApolloClient({
    uri: 'https://api.graphql.jobs/',
    cache: new InMemoryCache(),
  });
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Header />
        <ReccomendedJobs />

        <SearchJobs />
        <Footer />
      </div>
    </ApolloProvider>
  );
}

export default App;
