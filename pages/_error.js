import Layout from '../components/Layout';

const _error = ({ error }) => {
  return (
    <Layout title="Error!!">
      {error
        ? `Couldnt load your data :Status code ${error}`
        : `Couldn't get that page sorry`}
    </Layout>
  );
};

export default _error;
