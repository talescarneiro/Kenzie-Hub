import Routes from "./routes";
import GlobalStyles from "./styles/global";
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <Toaster />
      <GlobalStyles />
      <Routes />
    </>
  );
}

export default App;
