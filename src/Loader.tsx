// components/Loader.jsx
import React from 'react';

const Loader = () => {
      return (
            <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
                  <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent border-solid rounded-full animate-spin"></div>
            </div>
      );
};

export default Loader;
