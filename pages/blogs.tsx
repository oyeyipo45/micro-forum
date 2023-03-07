import BlogCard from '@/components/BlogCard';
import { NextPage } from 'next';
import { useEffect, useState } from 'react';

interface Props {}

const Blogs: NextPage<Props> = () => {
  const [Posts, setPosts] = useState<{ title: string; meta: string; description: string }[]>([]);

  const fetchPosts = async () => {
    const { posts } = await fetch('/api/posts').then((data) => data.json());

    setPosts(posts);
  };
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className=' max-w-3xl mx-auto p-5 space-y-5'>
      {Posts &&
        Posts.map((post) => {
          return <BlogCard key={post.title} title={post.title} description={post.meta} />;
        })}
    </div>
  );
};

export default Blogs;
