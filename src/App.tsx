import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomePage from './views/HomePage';
import Footer from './components/Footer';

function App() {
  const client = new ApolloClient({
    uri: 'https://api.graphql.jobs/',
    cache: new InMemoryCache(),
  });
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <header className="App-header">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage />} />
            </Routes>
          </BrowserRouter>
        </header>
        <Footer />
      </div>
    </ApolloProvider>
  );
}

export default App;
