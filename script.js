function sendMessage() {
  const input = document.getElementById("message-input");
  const message = input.value.trim();

  if (message === "") return;

  const chatBox = document.getElementById("chat-box");

  // Create user message bubble
  const userMsg = document.createElement("div");
  userMsg.className = "message user";
  userMsg.textContent = message;
  chatBox.appendChild(userMsg);

  input.value = "";

  // Scroll to bottom
  chatBox.scrollTop = chatBox.scrollHeight;

  // Simulate bot reply
  setTimeout(() => {
    const botMsg = document.createElement("div");
    botMsg.className = "message bot";
    botMsg.textContent = "Bot: " + message;
    chatBox.appendChild(botMsg);
    chatBox.scrollTop = chatBox.scrollHeight;
  }, 500);
}
