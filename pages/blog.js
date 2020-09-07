//using withrouter new hoc in nextjs
import Layout from '../components/Layout';
import Link from 'next/link';

const PostLink = ({ title, slug }) => (
  <li>
    <Link as={slug} href={`/post?title=${title}`}>
      <p>{title} Post</p>
    </Link>
  </li>
);

const blog = () => {
  return (
    <Layout title="My Blog">
      <ul>
        <PostLink slug="react-post" title="React" />
        <PostLink slug="angular-post" title="Angular" />
        <PostLink slug="vue-post" title="Vue" />
      </ul>
    </Layout>
  );
};

export default blog;
