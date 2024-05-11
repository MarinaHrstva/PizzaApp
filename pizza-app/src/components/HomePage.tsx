import React from "react";
import Header from "./Header";
import LoginForm from "./LoginForm";
import Footer from "./Footer";

function HomePage() {
  return (
    <>
      <Header />
      <h2>
        Welcome to <h1> Pizza App</h1>
      </h2>
      <LoginForm />
      <Footer />
    </>
  );
}

export default HomePage;
