import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Footer from './components/Footer';
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
        <header className="App-header">
          <ReccomendedJobs />
          <SearchJobs />
        </header>
        <Footer />
      </div>
    </ApolloProvider>
  );
}

export default App;
