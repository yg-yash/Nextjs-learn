import Layout from '../components/Layout';
import { withRouter } from 'next/router';

const post = ({ router }) => {
  return (
    <Layout title={router.query.title}>
      <p style={{ width: '80vw' }}>
        Lorem10 adsadjoaodasdjasodjoasjdasodjasiocjas asdjasdsaikdu
      </p>
    </Layout>
  );
};

export default withRouter(post);
