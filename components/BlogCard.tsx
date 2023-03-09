import Link from 'next/link';
import { FC } from 'react';

interface Props {
  title: string;
  description: string;
  slug: string;
}

const BlogCard: FC<Props> = ({ title, description, slug }): JSX.Element => {
    return (
      <div className='bg-indigo-300 p-2 rounded-md cursor-pointer'>
        <Link href={`/blogs/${slug}`}>
          <h1 className='text-3xl font-semibold pb-2'>{title} </h1>
          <p className='text-gray-700'>{description}</p>
        </Link>
      </div>
    );
};

export default BlogCard;
