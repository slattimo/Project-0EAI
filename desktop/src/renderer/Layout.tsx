import { Outlet } from "react-router-dom";
import SideBar from "./components/SideBar";
import TopBar from "./components/TopBar";
import { useState } from "react";

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-background text-light-text dark:bg-dark-bg dark:text-dark-text font-sans">
      {/* Sidebar with transition */}
      <div 
        className={`transition-all duration-300 ease-in-out ${
          isSidebarOpen ? 'w-64 translate-x-0' : 'w-0 -translate-x-full'
        }`}
      >
        <SideBar onCollapse={() => setIsSidebarOpen(false)} />
      </div>

      {/* Main Area - dynamically adjusts margins */}
      <main 
        className={`flex-1 overflow-y-auto transition-all duration-300 ease-in-out rounded-2xl bg-light-bgmain dark:bg-dark-bgmain ${
          isSidebarOpen ? 'm-3' : 'mx-4 my-3'
        }`}
      >
        <TopBar 
          isSidebarOpen={isSidebarOpen} 
          onSidebarToggle={() => setIsSidebarOpen(true)} 
        />
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
