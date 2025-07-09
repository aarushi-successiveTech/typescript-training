"use client";
import { useContext, useEffect } from "react";
import { AuthContext } from "../question1/AuthContext";
import { useRouter } from "next/navigation";

const About: React.FC = () => {
  const router = useRouter();
  const authContext = useContext(AuthContext);
  if (!authContext) {
    return <div>Loading...</div>;
  }
  const { logIn, username } = authContext;

  useEffect(() => {
    if (!logIn) {
      router.push("/login");
    }
  }, [logIn]);

  return (
    <div>
      <h1>About Page</h1>
      <button onClick={() => router.push("/question1")}>Home</button>
    </div>
  );
};

export default About;
