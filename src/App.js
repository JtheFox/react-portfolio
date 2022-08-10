import './App.css';
import { ChakraProvider, Flex, Box } from '@chakra-ui/react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Styles
import '@fontsource/roboto-slab';
import '@fontsource/raleway';
import theme from './theme';
// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// Pages
import About from './routes/About';
import Portfolio from './routes/Portfolio';

function App() {
  return (
    <ChakraProvider theme={theme}>
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
            px={0}
            pt={{ base: 6, lg: 10 }}
            pb={{ base: 16, md: 20, lg: 28 }}>
            <Routes>
              <Route path='/' element={<About />} />
              <Route path='/portfolio' element={<Portfolio />} />
            </Routes>
          </Box>
          <Footer
            position='fixed'
            left={0}
            bottom={0}
            w='100vw' />
        </Flex>
      </Router>
    </ChakraProvider>
  );
}

export default App;
