import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface SideBarProps {
  onCollapse: () => void;
}

const SideBar = ({ onCollapse }: SideBarProps) => {
  const location = useLocation();
  const currentPath = location.pathname;

  // Navigation items configuration
  const features = [
    { name: 'Home', path: '/' },
    { name: 'Inboxes', path: '/inboxes' },
    { name: 'Smart Compose', path: '/smart-compose' },
    { name: 'Summaries', path: '/summaries' },
    { name: 'Scheduled Emails', path: '/scheduled' },
    { name: 'Saved Drafts', path: '/drafts' },
    { name: 'Insights', path: '/insights' },
  ];

  const settings = [
    { name: 'Settings', path: '/settings' },
    { name: 'Support', path: '/support' },
  ];

  // Function to determine if a link is active
  const isActive = (path: string) => {
    if (path === '/' && currentPath === '/') return true;
    return currentPath === path;
  };

  // Common link styles
  const linkStyles = (path: string) => `
    block px-3 py-3 rounded-lg text-sm font-medium 
    ${isActive(path) 
      ? 'bg-light-bgmain dark:bg-dark-bgmain text-primary' 
      : 'hover:bg-light-bgmain hover:dark:bg-dark-bgmain hover:text-primary'}
  `;

  return (
    <aside className="w-64 p-3 flex-shrink-0 bg-light-bgsidebar dark:bg-dark-bgsidebar shadow-md h-screen flex flex-col relative">

      {/* BRANDING */}
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
          <span className="text-2xl">✉️</span>
        </div>
        <div className="text-md font-semibold">Email AI</div>
        
        {/* COLLAPSE BUTTON */}
        <button
          onClick={onCollapse}
          className="absolute right-3 bg-primary text-white rounded-lg p-1 shadow-md hover:bg-secondary transition-colors"
          aria-label="Close Sidebar"
        >
          ←
        </button>
      </div>

      {/* NAVIGATION MENU */}
      <div className="flex-1 border-t pt-6 border-gray-200 dark:border-gray-600">
        {/* FEATURES NAVIGATION */}
        <nav className="space-y-2 mb-6">
          <p className="text-xs text-gray-400">FEATURES</p>
          {features.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={linkStyles(item.path)}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* SETTINGS & SUPPORT NAVIGATION */}
        <nav className="space-y-2">
          <p className="text-xs text-gray-400">SETTINGS & SUPPORT</p>
          {settings.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={linkStyles(item.path)}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* USER DROP-UP MENU */}
      <div className="mt-auto pt-3">
        <p className="mb-2 text-xs text-gray-400">USER</p>
        <button className="w-full flex items-center space-x-3 px-3 py-3 rounded-lg hover:bg-light-bgmain hover:dark:bg-dark-bgmain">
          <div className="w-8 h-8 bg-gray-200 dark:bg-gray-600 rounded-full"></div>
          <div className="flex-grow text-left">
            <p className="text-sm font-medium">User Name</p>
            <p className="text-xs text-gray-500">user@email.com</p>
          </div>
        </button>
      </div>
    </aside>
  );
};

export default SideBar;