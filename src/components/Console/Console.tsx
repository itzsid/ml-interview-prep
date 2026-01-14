import { useRef, useEffect } from 'react';

interface ConsoleProps {
  output: string[];
  isLoading?: boolean;
}

export default function Console({ output, isLoading = false }: ConsoleProps) {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [output]);

  return (
    <div className="bg-white border border-gray-200 rounded-lg h-full flex flex-col shadow-sm">
      <div className="flex items-center justify-between px-4 py-2 border-b border-gray-200 bg-gray-50">
        <span className="text-sm font-medium text-gray-700">Console Output</span>
        {isLoading && (
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
            <span className="text-xs text-gray-500">Running...</span>
          </div>
        )}
      </div>
      <div className="flex-1 overflow-auto p-4 font-mono text-sm bg-gray-900 rounded-b-lg">
        {output.length === 0 ? (
          <div className="text-gray-500 italic">
            Output will appear here when you run your code...
          </div>
        ) : (
          output.map((line, index) => (
            <div
              key={index}
              className={`py-0.5 ${
                line.startsWith('[Error]')
                  ? 'text-red-400'
                  : line.includes('PASSED')
                  ? 'text-green-400'
                  : line.includes('FAILED')
                  ? 'text-red-400'
                  : 'text-gray-300'
              }`}
            >
              {line.startsWith('Test') ? (
                <span>
                  {line.includes('PASSED') ? '✓ ' : line.includes('FAILED') ? '✗ ' : ''}
                  {line}
                </span>
              ) : (
                <span>&gt; {line}</span>
              )}
            </div>
          ))
        )}
        <div ref={bottomRef} />
      </div>
    </div>
  );
}
