import { NavLink } from 'react-router-dom';
import { useProgress } from '../../context/ProgressContext';
import { sections } from '../../data/sections';

interface SidebarProps {
  onNavigate?: () => void;
}

export default function Sidebar({ onNavigate }: SidebarProps) {
  const { getSectionProgress } = useProgress();

  return (
    <aside className="w-64 bg-white dark:bg-dark-800/50 border-r border-gray-200 dark:border-dark-500 min-h-[calc(100vh-4rem)] p-4">
      <nav className="space-y-1">
        <h3 className="text-dark-300 dark:text-dark-300 text-[11px] font-semibold uppercase tracking-widest mb-4 px-3 font-mono">
          Curriculum
        </h3>
        {sections.map((section, index) => {
          const progress = getSectionProgress(section.id, section.problems.length);
          return (
            <NavLink
              key={section.id}
              to={`/section/${section.id}`}
              onClick={onNavigate}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all ${
                  isActive
                    ? 'bg-primary-50 dark:bg-primary-500/10 text-primary-700 dark:text-primary-300 border border-primary-200 dark:border-primary-500/20'
                    : 'text-gray-700 dark:text-dark-200 hover:bg-gray-100 dark:hover:bg-dark-600 hover:text-gray-900 dark:hover:text-dark-100 border border-transparent'
                }`
              }
            >
              <span className="w-6 h-6 flex items-center justify-center text-lg">
                {section.icon}
              </span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-dark-300 text-[10px] font-mono">{String(index + 1).padStart(2, '0')}</span>
                  <span className="text-sm font-medium truncate">{section.title}</span>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <div className="flex-1 h-0.5 bg-gray-200 dark:bg-dark-500 rounded-full overflow-hidden">
                    <div
                      className="h-full progress-gradient rounded-full transition-all duration-300"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                  <span className="text-[10px] text-dark-300 font-mono">{progress}%</span>
                </div>
              </div>
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
}
