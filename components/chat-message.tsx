export type Message = {
  who: "bot" | "user" | undefined;
  message?: string;
};

export const initialMessages: Message[] = [
  {
    who: "bot",
    message: "Hi! I'm A friendly AI assistant. Ask me anything!",
  },
];

export function ChatMessage({ who = "bot", message }: Message) {
  if (!message) {
    return null;
  }

  return (
    <div className={`prompt ${who != "bot" ? "right" : "left"}`}>
      <div>
        <p className="name">{who != "bot" ? "You" : "AI"}</p>
        <p className="msg">{message}</p>
      </div>
    </div>
  );
}
