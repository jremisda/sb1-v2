import React from 'react';
import { Slack, FileText, MessageSquare } from 'lucide-react';

interface RightSidebarProps {
  searchQuery: string;
}

const RightSidebar: React.FC<RightSidebarProps> = ({ searchQuery }) => {
  if (!searchQuery) {
    return (
      <aside className="w-right-sidebar bg-secondary p-4 overflow-y-auto">
        <div className="h-full flex items-center justify-center">
          <p className="text-text-light text-center">Sources will appear here after a search is performed.</p>
        </div>
      </aside>
    );
  }

  return (
    <aside className="w-right-sidebar bg-secondary p-4 overflow-y-auto">
      <h2 className="text-h3 font-semibold mb-4 text-text-dark">Sources</h2>
      <ul className="space-y-4">
        {[
          { name: 'John Doe', time: '2h ago', icon: Slack, platform: 'Slack' },
          { name: 'Project Report', time: '1d ago', icon: FileText, platform: 'Google Drive' },
          { name: 'Team Discussion', time: '3d ago', icon: MessageSquare, platform: 'Microsoft Teams' },
        ].map(({ name, time, icon: Icon, platform }) => (
          <li key={name} className="bg-white p-4 rounded-lg shadow-light border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <span className="font-medium text-text-dark">{name}</span>
              <span className="text-sm text-text-light">{time}</span>
            </div>
            <div className="flex items-center text-sm text-text-light">
              <Icon className="w-4 h-4 mr-2" />
              <span>{platform}</span>
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default RightSidebar;