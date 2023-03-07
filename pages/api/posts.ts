import fs from 'fs';
import matter from 'gray-matter';
import type { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;
  switch (method) {
    case 'GET': {
      const data = readPosts();
      return res.json({ posts: data });
    }

    default:
      return res.status(404).send('NOT FOUND');
  }
};

const readPosts = () => {
  const findFolder = path.join(process.cwd(), 'posts');
  const posts = fs.readdirSync(findFolder);
  return posts.map((filename) => {
    const filePathToRead = path.join(process.cwd(), 'posts/' + filename);
    const content = fs.readFileSync(filePathToRead, { encoding: 'utf-8' });

    return matter(content).data;
  });
};

export default handler;
