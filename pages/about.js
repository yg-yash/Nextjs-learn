import Link from 'next/link';
import Layout from '../components/Layout';
import Error from './_error';
import { Component } from 'react';
import axios from 'axios';

export default class About extends Component {
  static async getInitialProps() {
    try {
      const res = await axios.get('https://api.github.com/users/reedbarger');
      const statusCode = res.status > 200 ? res.status : false;
      return { user: res.data, statusCode };
    } catch (error) {
      return { error: 'something went wrong' };
    }
  }
  render() {
    const { user, statusCode, error } = this.props;

    if (error) {
      return <Error error={error} />;
    }
    return (
      <Layout title="About Us">
        <p>{user.name}</p>
        <Link href="/">
          <a>Go to home</a>
        </Link>
        <p>This is about page</p>
        <img src={user.avatar_url} alt="Me" height="200px" />
      </Layout>
    );
  }
}
