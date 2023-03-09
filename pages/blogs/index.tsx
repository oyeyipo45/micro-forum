import BlogCard from '@/components/BlogCard';
import { readPosts } from '@/lib/helper';
import { postsResponse } from '@/utils/types';
import { InferGetStaticPropsType, NextPage } from 'next';




export const getStaticProps = async () => {
    // const { posts }: postsResponse = await fetch('http://localhost:3000//api/posts').then((data) => data.json());
    
    const posts: postsResponse = readPosts();

  return { props: { posts } };
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Blogs: NextPage<Props> = ({ posts }) => {
  return (
    <div className='max-w-3xl mx-auto p-5 space-y-5'>
      {posts.map((post) => (
          <BlogCard
              key={post.slug} title={post.title} description={post.meta} slug={post.slug} />
      ))}
    </div>
  );
};

export default Blogs;
