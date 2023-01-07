import Head from 'next/head';

interface Props {
  title?: string;
}

const Header: React.FC<Props> = ({ title }) => {
  return (
    <Head>
      <title>{title ? title + ' | Next Store App' : 'Next Store App'}</title>
    </Head>
  );
};

export default Header;
