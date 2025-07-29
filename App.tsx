
import React from 'react';

const App: React.FC = () => {
  const tableSize = 10;
  const headers = Array.from({ length: tableSize }, (_, i) => i + 1);
  const rows = Array.from({ length: tableSize }, (_, i) => i + 1);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900">
      <div className="w-full max-w-4xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-white">
            Multiplication Table
          </h1>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
            A classic 1 to 10 multiplication grid.
          </p>
        </header>
        
        <div className="bg-white dark:bg-gray-800 shadow-2xl rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700">
          <div className="overflow-x-auto">
            <table className="w-full text-center">
              <thead className="border-b border-gray-200 dark:border-gray-700">
                <tr>
                  <th className="p-4 w-12 text-sm font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-gray-700/50 sticky left-0 z-10">×</th>
                  {headers.map((header) => (
                    <th key={header} className="p-4 text-sm font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-gray-700/50">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((rowNum, rowIndex) => (
                  <tr key={rowNum} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-200 ease-in-out">
                    <td className="p-4 w-12 text-sm font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-gray-700/50 sticky left-0 z-10 border-t border-gray-200 dark:border-gray-700">
                      {rowNum}
                    </td>
                    {headers.map((colNum, colIndex) => (
                      <td 
                        key={`${rowNum}-${colNum}`} 
                        className={`p-4 text-gray-800 dark:text-gray-200 border-t border-gray-200 dark:border-gray-700 ${
                          rowNum === colNum ? 'bg-indigo-100 dark:bg-indigo-900/50 font-bold text-indigo-800 dark:text-indigo-200' : ''
                        }`}
                      >
                        {rowNum * colNum}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <footer className="text-center mt-8">
            <p className="text-sm text-gray-500 dark:text-gray-400">
                Generated with React & Tailwind CSS.
            </p>
        </footer>
      </div>
    </div>
  );
};

export default App;
