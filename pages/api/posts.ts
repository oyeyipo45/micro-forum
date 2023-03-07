import fs from 'fs';
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

  return posts;
};

export default handler;
