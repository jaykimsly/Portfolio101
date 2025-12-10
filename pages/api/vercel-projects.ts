import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // Note: You'll need to add VERCEL_TOKEN to your environment variables
    const token = process.env.VERCEL_TOKEN;
    
    if (!token) {
      return res.status(400).json({ error: 'Vercel token not configured' });
    }

    const response = await fetch('https://api.vercel.com/v9/projects', {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    
    const data = await response.json();
    
    const projects = data.projects?.map((project: any) => ({
      id: project.id,
      name: project.name,
      framework: project.framework,
      createdAt: project.createdAt,
      updatedAt: project.updatedAt,
      link: project.link,
      targets: project.targets
    })) || [];

    res.status(200).json({ projects });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch Vercel projects' });
  }
}