import { GetStaticPaths, GetStaticProps } from 'next';
import path from 'path';
import { FC } from 'react';
import fs from 'fs';
import matter from 'gray-matter';

interface Props {
  post: {
    title: string;
    content: string;
  };
}

const SinglePage: FC<Props> = (props): JSX.Element => {
  return (
    <div>
      <h1>{props.post.title}</h1>
      <p>{props.post.content}</p>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = () => {
  const findFolder = path.join(process.cwd(), 'posts');
  const posts = fs.readdirSync(findFolder);
  const paths = posts.map((filename) => {
    const filePathToRead = path.join(process.cwd(), 'posts/' + filename);
    const content = fs.readFileSync(filePathToRead, { encoding: 'utf-8' });

    return {
      params: {
        postSlug: matter(content).data.slug,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = (context) => {
  console.log(context);
  const { params } = context;
  const { postSlug } = params as any;

  const filePathToRead = path.join(process.cwd(), `posts/${postSlug}.md`);
  const fileContent = fs.readFileSync(filePathToRead, { encoding: 'utf-8' });

  const { content, data } = matter(fileContent);

  return {
    props: {
      post: {
        content,
        title: data.title,
      },
    },
  };
};

export default SinglePage;
