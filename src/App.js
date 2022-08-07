import './App.css';
import { ChakraProvider, Flex, Box } from '@chakra-ui/react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// Pages
import About from './routes/About';
import Portfolio from './routes/Portfolio';

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
          <Box
            flex='1'
            as='main'
            py={{ base: 6, lg: 10 }}
            px={0}>
            <Routes>
              <Route path='/' element={<About />} />
              <Route path='/portfolio' element={<Portfolio />} />
            </Routes>
          </Box>
          <Footer />
        </Flex>
      </Router>
    </ChakraProvider>
  );
}

export default App;
