// src/components/Header.jsx (simplificado)
import React from 'react';
import LoginModal from './LoginModal';

function Header() {
  return (
    <header className="bg-blue-700 text-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        <h1 className="text-xl font-bold">Dashboard #MobilizaMPU</h1>
      </div>
      
      <div className="flex items-center space-x-4">
        <LoginModal />
      </div>
    </header>
  );
}

export default Header;