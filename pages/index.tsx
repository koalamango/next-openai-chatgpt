import { ChatBox } from "../components/chat-box";

function Home() {
  return (
    <div className="wrapper">
      <section>
        <h1>OpenAI ChatGPT + NextJs </h1>
        <p>
          This example shows how to implement a simple chat bot using Next.js
          and OpenAI API.
        </p>
      </section>
      <section>
        <ChatBox />
      </section>
    </div>
  );
}

export default Home;
