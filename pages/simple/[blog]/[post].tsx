import Link from 'next/link';
import Head from 'next/head';

function Page2(props) {
  return (
    <>
      <Head>
        <title> Post </title>
      </Head>
      <div>Blog and Post in Simple</div>
      <br />
      <div>blog: {props.blog}</div>
      <div>post: {props.post} </div>
    </>
  );
}

export function getServerSideProps({ params }) {
  return {
    props: {
      blog: params.blog,
      post: params.post,
    },
  };
}

export default Page2;
