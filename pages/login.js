import { getProviders, signIn } from "next-auth/react";

const login = ({ providers }) => {
  return (
    <div>
      <h1>login</h1>
    </div>
  );
};

export default login;

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}
