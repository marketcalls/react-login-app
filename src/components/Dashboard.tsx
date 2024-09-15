import React from 'react';
import { Button } from './ui/button';

interface DashboardProps {
  username: string;
  onLogout: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ username, onLogout }) => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Welcome, {username}!
        </h2>
        <p className="text-center text-gray-600">
          This is your dashboard. You are now logged in.
        </p>
        <div className="mt-6">
          <Button onClick={onLogout} className="w-full">
            Log out
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;