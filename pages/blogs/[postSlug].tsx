import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import path from 'path';
import { FC } from 'react';
import fs from 'fs';
import matter from 'gray-matter';
import { ParsedUrlQuery } from 'querystring';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import Link from 'next/link';


type Props = InferGetStaticPropsType<typeof getStaticProps>

const SinglePage: FC<Props> = ({ post }): JSX.Element => {
    const {title, content} = post
  return (
    <div className='max-w-3xl mx-auto'>
      <button className='bg-indigo-600 py-2 px-3 mt-3 rounded text-white hover:bg-indigo-500'>
        <Link href="/blogs">Home</Link>
      </button>
      <h1 className='font-semibold text-2xl py-5'>{title}</h1>
      <div className='prose pb-20'>
        <MDXRemote {...content} />
      </div>
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
  
type Post = {
  post: {
    title: string;
    content: MDXRemoteSerializeResult;
  };
};

interface IStatisProps extends ParsedUrlQuery {
    postSlug : string
}

export const getStaticProps: GetStaticProps<Post> = async (context) => {
  const { params } = context;
  const { postSlug } = params as IStatisProps;

  const filePathToRead = path.join(process.cwd(), `posts/${postSlug}.md`);
  const fileContent = fs.readFileSync(filePathToRead, { encoding: 'utf-8' });

    //const { content, data } = matter(fileContent);
    
    const  compiledSource : any = await serialize(fileContent, { parseFrontmatter: true });

  return {
    props: {
      post: {
        content: compiledSource,
        title: compiledSource.frontmatter.title,
      },
    },
  };
};

export default SinglePage;
