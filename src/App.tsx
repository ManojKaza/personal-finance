import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';

// Placeholder components for new pages
const Dashboard = () => <div>Your Dashboard Content Goes Here</div>;
const AddTransaction = () => <div>Add Transaction Form Goes Here</div>;
const Transactions = () => <div>All Transactions Content Goes Here</div>;
const Reports = () => <div>Financial Reports Content Goes Here</div>;
const Budgets = () => <div>Budgeting Tools Content Goes Here</div>;
const Goals = () => <div>Savings Goals Content Goes Here</div>;
const Profile = () => <div>User Profile Content Goes Here</div>;
const Settings = () => <div>Application Settings Content Goes Here</div>;
const Logout = () => <div>Logging Out...</div>;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="add" element={<AddTransaction />} />
          <Route path="transactions" element={<Transactions />} />
          <Route path="reports" element={<Reports />} />
          <Route path="budgets" element={<Budgets />} />
          <Route path="goals" element={<Goals />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
          <Route path="logout" element={<Logout />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;