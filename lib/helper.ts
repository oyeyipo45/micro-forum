import { postsResponse } from '@/utils/types';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

export const readPosts = (): postsResponse => {
  const findFolder = path.join(process.cwd(), 'posts');
  const posts = fs.readdirSync(findFolder);
  const data = posts.map((filename) => {
    const filePathToRead = path.join(process.cwd(), 'posts/' + filename);
    const content = fs.readFileSync(filePathToRead, { encoding: 'utf-8' });

    return matter(content).data;
  });

  return data as postsResponse;
};
