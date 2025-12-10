import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const response = await fetch('https://api.github.com/users/jaykimsly/repos?sort=updated&per_page=50');
    const repos = await response.json();
    
    const projects = repos
      .filter((repo: any) => !repo.fork && repo.name !== 'jaykimsly')
      .map((repo: any) => ({
        id: repo.id,
        name: repo.name,
        description: repo.description,
        html_url: repo.html_url,
        homepage: repo.homepage,
        language: repo.language,
        topics: repo.topics,
        updated_at: repo.updated_at,
        stargazers_count: repo.stargazers_count,
        forks_count: repo.forks_count
      }));

    res.status(200).json({ projects });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch GitHub projects' });
  }
}