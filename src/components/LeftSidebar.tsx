import React, { useState, useEffect } from 'react';
import { Home, Folder, MessageSquare, BarChart2, Bookmark, Lightbulb, Settings, Bell, ChevronLeft, ChevronRight } from 'lucide-react';

interface LeftSidebarProps {
  isCollapsed: boolean;
  toggleCollapse: () => void;
}

const LeftSidebar: React.FC<LeftSidebarProps> = ({ isCollapsed, toggleCollapse }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const sidebarWidth = isCollapsed ? 'w-15' : 'w-sidebar';
  const logoClass = isCollapsed ? 'text-xl' : 'text-3xl';
  const iconSize = 'w-5 h-5';

  const menuItems = [
    { icon: Home, label: 'Home' },
    { icon: Folder, label: 'Documents' },
    { icon: MessageSquare, label: 'Meeting Notes' },
    { icon: BarChart2, label: 'Analytics' },
    { icon: Bookmark, label: 'Bookmarks' },
    { icon: Lightbulb, label: 'AI Insights' },
  ];

  const recentSearches = ['Project Alpha', 'Q4 Goals', 'Marketing Strategy'];

  return (
    <aside className={`${sidebarWidth} bg-[#F3EEEA] overflow-y-auto flex flex-col justify-between shadow-sidebar transition-all duration-300 ease-in-out ${isMobile ? 'hidden' : ''}`}>
      <div>
        <div className="flex justify-between items-center py-6 px-4 border-b border-[#E8E8E8]">
          <h1 className={`${logoClass} font-bold text-[#232323] font-roboto w-full text-center`}>
            {isCollapsed ? 'D' : 'DUSAP'}
          </h1>
          {!isMobile && (
            <button onClick={toggleCollapse} className="text-[#232323] hover:bg-[#E8E8E8] p-1 rounded-full transition-colors duration-200 absolute right-4">
              {isCollapsed ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
            </button>
          )}
        </div>
        <nav className="mt-6">
          <ul className="space-y-5 px-4">
            {menuItems.map(({ icon: Icon, label }) => (
              <li key={label}>
                <a
                  href="#"
                  className={`flex items-center h-12 px-2 text-[#232323] hover:bg-[#E8E8E8] rounded-lg transition-colors duration-200 ${isCollapsed ? 'justify-center' : ''}`}
                >
                  <Icon className={`${iconSize} ${isCollapsed ? '' : 'mr-3'}`} />
                  {!isCollapsed && <span className="text-sm">{label}</span>}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        {!isCollapsed && (
          <div className="mt-8 px-4">
            <h3 className="text-sm font-semibold text-[#232323] uppercase tracking-wider mb-2">Recent Searches</h3>
            <ul className="space-y-2">
              {recentSearches.map((search) => (
                <li key={search}>
                  <a href="#" className="block px-2 py-2 text-sm text-[#232323] hover:bg-[#E8E8E8] rounded-lg transition-colors duration-200">
                    {search}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className={`flex items-center mt-4 p-4 border-t border-[#E8E8E8] ${isCollapsed ? 'flex-col' : ''}`}>
        <div className="w-10 h-10 rounded-full bg-gray-300 flex-shrink-0"></div>
        {!isCollapsed && (
          <>
            <span className="ml-3 text-sm font-roboto text-[#232323]">John Doe</span>
            <div className="flex items-center ml-auto space-x-3">
              <Settings className="text-[#232323] w-5 h-5 cursor-pointer" title="Settings" />
              <Bell className="text-[#232323] w-5 h-5 cursor-pointer" title="Notifications" />
            </div>
          </>
        )}
      </div>
    </aside>
  );
};

export default LeftSidebar;