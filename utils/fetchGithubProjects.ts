export const fetchGithubProjects = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/github-projects`);
  const data = await res.json();
  return data.projects;
};