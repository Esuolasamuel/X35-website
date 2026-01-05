// components/projects/utils.ts

export function getRandomProjects({
  excludeIds = [],
  limit = 2,
}) {
  return [...PROJECTS]
    .filter((p) => !excludeIds.includes(p.id))
    .sort(() => 0.5 - Math.random())
    .slice(0, limit);
}
