import React, { useState, useEffect } from 'react';
import { Search, Mic, Cpu } from 'lucide-react';

interface MainContentProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  sidebarCollapsed: boolean;
}

const MainContent: React.FC<MainContentProps> = ({ searchQuery, setSearchQuery, sidebarCollapsed }) => {
  const [isSearching, setIsSearching] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [recentSearches] = useState<string[]>(['AI in healthcare', 'Data privacy', 'Cloud computing', 'Machine learning', 'Cybersecurity']);

  const mainContentClass = sidebarCollapsed ? 'ml-15' : 'ml-0';

  useEffect(() => {
    if (searchQuery.length > 0) {
      setSuggestions([
        `${searchQuery} in business`,
        `${searchQuery} trends 2023`,
        `How does ${searchQuery} work`,
        `${searchQuery} best practices`,
      ]);
    } else {
      setSuggestions([]);
    }
  }, [searchQuery]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setIsSearching(true);
    }
  };

  return (
    <main className={`flex-grow p-8 overflow-y-auto flex flex-col items-center transition-all duration-300 ease-in-out ${mainContentClass} bg-[#F3EEEA]`}>
      <div className={`w-full max-w-4xl ${isSearching ? 'mb-8' : 'flex-grow flex flex-col justify-center'}`}>
        {!isSearching && (
          <h1 className="text-4xl font-bold text-center text-[#3F292B] mb-4">Welcome to DUSAP</h1>
        )}
        <form onSubmit={handleSearch} className={`relative ${isSearching ? '' : 'mb-4'}`}>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Ask anything..."
            className="w-full h-14 px-12 rounded-full border border-[#C04000] bg-[#F3EEEA] text-[#3F292B] placeholder-[#8896A6] focus:outline-none focus:ring-2 focus:ring-[#C04000] shadow-md"
          />
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#C04000] w-5 h-5" />
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
            <Mic className="text-[#C04000] w-5 h-5 cursor-pointer" />
            <Cpu className="text-[#C04000] w-5 h-5" />
          </div>
        </form>
        {!isSearching && (
          <p className="text-center text-[#3F292B] mb-8">Where knowledge begins</p>
        )}
        {suggestions.length > 0 && (
          <ul className="mt-2 space-y-1">
            {suggestions.map((suggestion, index) => (
              <li
                key={index}
                className="text-[#3F292B] bg-[#E8E3DF] p-2 rounded cursor-pointer hover:bg-[#D8D3CF]"
                onClick={() => setSearchQuery(suggestion)}
              >
                {suggestion}
              </li>
            ))}
          </ul>
        )}
        {!isSearching && (
          <div className="flex flex-wrap justify-center mt-4 gap-2">
            {recentSearches.map((search, index) => (
              <button
                key={index}
                className="bg-[#E8E3DF] text-[#3F292B] px-4 py-2 rounded-full border border-[#C04000] hover:bg-[#D8D3CF] transition-colors duration-200"
                onClick={() => setSearchQuery(search)}
              >
                {search}
              </button>
            ))}
          </div>
        )}
      </div>
      {isSearching && (
        <div className="w-full max-w-4xl">
          <div className="bg-[#E8E3DF] p-4 rounded-lg mb-6">
            <h2 className="text-xl font-semibold text-[#3F292B] mb-2">AI-Generated Answer</h2>
            <p className="text-[#3F292B] mb-2">
              Here's a brief AI-generated answer to your query. This would typically contain a concise summary or key points related to the search.
            </p>
            <a href="#" className="text-[#C04000] hover:underline">Read more</a>
          </div>
          <div className="space-y-6">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="bg-[#E8E3DF] p-4 rounded-lg shadow">
                <h3 className="text-lg font-semibold text-[#C04000] hover:underline cursor-pointer mb-2">Search Result Title</h3>
                <p className="text-[#3F292B] mb-2">A brief snippet or summary of the search result would appear here, giving the user a quick overview of the content.</p>
                <div className="flex items-center text-sm text-[#6B7280] mb-2">
                  <span className="mr-2">Source: DUSAP Knowledge Base</span>
                  <span>Date: May 15, 2023</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-[#F3EEEA] text-[#C04000] px-2 py-1 rounded-full">Tag 1</span>
                  <span className="text-xs bg-[#F3EEEA] text-[#C04000] px-2 py-1 rounded-full">Tag 2</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <label htmlFor="sort" className="text-[#3F292B]">Sort by:</label>
              <select id="sort" className="bg-[#E8E3DF] border border-[#C04000] text-[#3F292B] rounded px-2 py-1">
                <option value="relevance">Relevance</option>
                <option value="date">Date</option>
              </select>
            </div>
            <button className="text-[#C04000] hover:underline">Load more results</button>
          </div>
        </div>
      )}
    </main>
  );
};

export default MainContent;