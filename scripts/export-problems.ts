// Script to export all problems to JSON for testing
import { allProblems } from '../src/data/problems/index.ts';
import * as fs from 'fs';
import * as path from 'path';

const outputPath = path.join(import.meta.dirname, 'problems.json');

// Extract only the fields needed for testing
const problemsForTesting = allProblems.map(p => ({
  id: p.id,
  title: p.title,
  section: p.section,
  solution: p.solution,
  testCases: p.testCases,
}));

fs.writeFileSync(outputPath, JSON.stringify(problemsForTesting, null, 2));
console.log(`Exported ${problemsForTesting.length} problems to ${outputPath}`);
