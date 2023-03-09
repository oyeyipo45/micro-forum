import { readPosts } from '@/lib/helper';
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


export default handler;
