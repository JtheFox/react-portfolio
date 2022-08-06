import './App.css';
import { ChakraProvider, Flex, Box } from '@chakra-ui/react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// Pages
import Home from './routes/Home';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Flex
          direction='column'
          width='100wh'
          height='100vh'
        >
          <Navbar />
          <Box flex='1' as='main' p={10}>
            <Routes>
              <Route path='/' element={<Home />} />
            </Routes>
          </Box>
          <Footer />
        </Flex>
      </Router>
    </ChakraProvider>
  );
}

export default App;
