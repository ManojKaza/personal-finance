import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';

// Placeholder component for your dashboard content
const Dashboard = () => <div>Your Dashboard Content Goes Here</div>;

// Placeholder for the "Add Transaction" page
const AddTransaction = () => <div>Add Transaction Form Goes Here</div>;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* This is the parent route that renders your layout */}
        <Route path="/" element={<Layout />}>
          {/* Child routes will be rendered inside the Layout's <Outlet /> */}
          <Route index element={<Dashboard />} />
          <Route path="add" element={<AddTransaction />} />
          {/* You can add more routes here later */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;