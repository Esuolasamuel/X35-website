// components/projects/selectors.ts

import { PROJECTS } from './Registry';

export function selectRelatedProjects({
  exclude = [],
  category,
  limit = 2,
}) {
  let pool = PROJECTS.filter(
    (project) => !exclude.includes(project.id)
  );

  if (category) {
    pool = pool.filter((p) => p.category === category);
  }

  return pool
    .sort(() => 0.5 - Math.random())
    .slice(0, limit);
}
