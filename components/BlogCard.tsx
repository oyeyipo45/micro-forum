import { FC } from 'react';

interface Props {
  title: string;
  description: string;
}

const BlogCard: FC<Props> = ({ title, description }): JSX.Element => {
  return (
    <div className='bg-green-400 p-2 rounded-md'>
      <h1 className='text-3xl font-semibold pb-2'>{title} </h1>
      <p className='text-gray-500'>{description}</p>
    </div>
  );
};

export default BlogCard;
