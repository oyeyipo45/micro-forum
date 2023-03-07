import BlogCard from '@/components/BlogCard';
import { NextPage } from 'next';

interface Props {}

const Blogs: NextPage<Props> = () => {
  return (
    <div className=' max-w-3xl mx-auto p-5 space-y-5'>
      <BlogCard
        title='This is the blog'
        description='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nostrum ex iusto! Deserunt in sequi corrupti tempora, aliquam quam? Natus, incidunt dolore esse dicta quasi, sed quo est molestias numquam, enim sunt ex fugit.'
      />
      <BlogCard
        title='This is the blog'
        description='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nostrum ex iusto! Deserunt in sequi corrupti tempora, aliquam quam? Natus, incidunt dolore esse dicta quasi, sed quo est molestias numquam, enim sunt ex fugit.'
      />
      <BlogCard
        title='This is the blog'
        description='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nostrum ex iusto! Deserunt in sequi corrupti tempora, aliquam quam? Natus, incidunt dolore esse dicta quasi, sed quo est molestias numquam, enim sunt ex fugit.'
      />
    </div>
  );
};

export default Blogs;