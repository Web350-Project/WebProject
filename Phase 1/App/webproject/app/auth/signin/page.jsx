'use client';

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleCredentialsSubmit = async (e) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      setError("Invalid email or password");
    } else {
      router.push("/");
    }
  };

  const handleGitHubSignIn = async () => {
    await signIn("github", { callbackUrl: "/" });
  };

  return (
    <div className="page-container">
      <header className="page-header">
        <h1>Sign In</h1>
      </header>
      <div style={{ maxWidth: "400px", margin: "0 auto", padding: "2rem" }}>
        <form onSubmit={handleCredentialsSubmit}>
          <div style={{ marginBottom: "1rem" }}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="search-input"
              required
            />
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="search-input"
              required
            />
          </div>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "12px",
              backgroundColor: "#8A1739",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Sign In with Email
          </button>
        </form>
        <div style={{ marginTop: "1rem", textAlign: "center" }}>
          <p>Or</p>
          <button
            onClick={handleGitHubSignIn}
            style={{
              width: "100%",
              padding: "12px",
              backgroundColor: "#333",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Sign In with GitHub
          </button>
        </div>
      </div>
    </div>
  );
}