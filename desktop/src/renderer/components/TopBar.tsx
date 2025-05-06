import ThemeToggle from './ThemeToggle';

interface TopBarProps {
  isSidebarOpen: boolean;
  onSidebarToggle: () => void;
}

const TopBar = ({ isSidebarOpen, onSidebarToggle }: TopBarProps) => {
  return (
    <div className="flex justify-between items-center p-3">
      <div className="flex items-center space-x-4">
        {/* Show reopen button only when sidebar is collapsed */}
        {!isSidebarOpen && (
          <button
            onClick={onSidebarToggle}
            className="p-2 text-primary hover:bg-light-bgmain dark:hover:bg-dark-bgmain rounded-lg transition-colors"
            aria-label="Open Sidebar"
          >
            →
          </button>
        )}

        {/* Search Input */}
        <input
          type="text"
          placeholder="Search..."
          className="px-3 rounded-lg text-sm font-medium bg-card focus:ring-1 focus:outline-none focus:border-none focus:ring-primary text-gray-400 bg-light-card dark:bg-dark-card border-gray-300 dark:border-gray-600 dark:placeholder-gray-400"
        />
      </div>

      {/* Right Section: Theme Toggle and New Email Button */}
      <div className="flex items-center space-x-4">
        <ThemeToggle />
        <button className="px-4 py-2 font-medium bg-primary text-white rounded-md hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-primary">
          New Email
        </button>
      </div>
    </div>
  );
};

export default TopBar;