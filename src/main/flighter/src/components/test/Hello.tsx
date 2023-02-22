import { useEffect, useState } from "react";
import GithubLoginButton from "../login/GithubLoginButton";
import GoogleLoginButton from "../login/GoogleLoginButton";

const Login = () => {
  const [hello, setHello] = useState("");

  useEffect(() => {
    /*     // Query 요청의 경우
    fetch("/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query: "{ userBlogList { blogId, userId } }" }),
    }).then((response) => response.json());

    // Mutation 요청의 경우
    fetch("/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query: "mutation { createBlog { blogId, userId } }" }),
    }).then((response) => response.json()); */

    fetch("/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query: "{ getMember }" }),
    })
      .then((response) => response.json())
      .then((text) => {
        console.log(text);
      });
  }, []);

  return (
    <>
      <GithubLoginButton />
      <GoogleLoginButton />
    </>
  );
};
export default Login;
