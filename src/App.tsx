import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './routes/router';

function App() {
  return (
    <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
  );
}

export default App;
