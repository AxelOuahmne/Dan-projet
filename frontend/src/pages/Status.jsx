import useAuthContext from "../context/AuthContext";

const Status = () => {
  const { user } = useAuthContext();

  return <div className="max-w-7xl mx-auto mt-12">Mon status est  : <strong> {user?.status}</strong></div>;
};

export default Status;
