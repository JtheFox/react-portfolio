import './App.css';
import { ChakraProvider, Flex } from '@chakra-ui/react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// Pages
import Home from './pages/Home';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Flex
          flexDirection='column'
          width='100wh'
          height='100vh'
        >
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
          <Footer />
        </Flex>
      </Router>
    </ChakraProvider>
  );
}

export default App;
