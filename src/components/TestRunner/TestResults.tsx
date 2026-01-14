import { TestResult } from '../../types';

interface TestResultsProps {
  results: TestResult[];
  isRunning: boolean;
}

export default function TestResults({ results, isRunning }: TestResultsProps) {
  if (isRunning) {
    return (
      <div className="flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
        <div className="w-4 h-4 border-2 border-primary-500 border-t-transparent rounded-full animate-spin" />
        <span className="text-gray-600">Running tests...</span>
      </div>
    );
  }

  if (results.length === 0) {
    return null;
  }

  const passedCount = results.filter(r => r.passed).length;
  const visibleResults = results.filter(r => !r.hidden);

  return (
    <div className="bg-white rounded-lg overflow-hidden border border-gray-200 shadow-sm">
      <div className="px-4 py-3 border-b border-gray-200 flex items-center justify-between bg-gray-50">
        <span className="font-medium text-gray-900">Test Results</span>
        <span
          className={`text-sm font-medium ${
            passedCount === results.length ? 'text-green-600' : 'text-yellow-600'
          }`}
        >
          {passedCount}/{results.length} passed
        </span>
      </div>

      <div className="divide-y divide-gray-200">
        {visibleResults.map(result => (
          <div key={result.id} className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <span
                className={`w-5 h-5 rounded-full flex items-center justify-center text-xs ${
                  result.passed
                    ? 'bg-green-100 text-green-600'
                    : 'bg-red-100 text-red-600'
                }`}
              >
                {result.passed ? '✓' : '✗'}
              </span>
              <span className="text-gray-700 text-sm font-medium">
                Test {result.id}: {result.description}
              </span>
            </div>

            {!result.passed && (
              <div className="ml-7 space-y-1 text-sm">
                <div>
                  <span className="text-gray-500">Expected: </span>
                  <span className="text-green-600 font-mono">{result.expected}</span>
                </div>
                <div>
                  <span className="text-gray-500">Actual: </span>
                  <span className="text-red-600 font-mono">{result.actual}</span>
                </div>
              </div>
            )}
          </div>
        ))}

        {results.some(r => r.hidden) && (
          <div className="p-4 text-gray-500 text-sm italic">
            + {results.filter(r => r.hidden).length} hidden test(s)
            {results.filter(r => r.hidden && r.passed).length ===
            results.filter(r => r.hidden).length ? (
              <span className="text-green-600 ml-2">(all passed)</span>
            ) : (
              <span className="text-red-600 ml-2">
                ({results.filter(r => r.hidden && !r.passed).length} failed)
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
