import React from "react";
import Hero from "../components/Board/Hero";
import Message from "../components/Board/Message";
import Board from "../components/Board/Board";
import Footer from "../components/Footer";

function BoardPage() {
  return (
    <div>
      <Hero />
      <Message />
      <Board />
      <Footer />
    </div>
  );
}

export default BoardPage;
