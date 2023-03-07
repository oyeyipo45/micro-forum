import BlogCard from '@/components/BlogCard';
import { InferGetStaticPropsType, NextPage } from 'next';

interface postsResponse {
  posts: {
    title: string;
    slug: string;
    meta: string;
  }[];
}

export const getStaticProps = async () => {
  const { posts }: postsResponse = await fetch('http://localhost:3000//api/posts').then((data) => data.json());

  return { props: { posts } };
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Blogs: NextPage<Props> = ({ posts }) => {
  return (
    <div className='max-w-3xl mx-auto p-5 space-y-5'>
      {posts.map((post) => (
        <BlogCard key={post.slug} title={post.title} description={post.meta} slug={post.slug} />
      ))}
    </div>
  );
};


export default Blogs;
