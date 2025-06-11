
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

function shiftCarousel(direction) {
  const container = document.querySelector('.carousel .cards');
  container.scrollBy({ left: direction * 220, behavior: 'smooth' });
}

document.getElementById('volunteerForm').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Thank you for joining the movement! 🐾');
  this.reset();
});

function sendMessage() {
  const input = document.getElementById('userInput');
  const messages = document.getElementById('messages');
  const userMsg = input.value;

  if (!userMsg.trim()) return;

  const userDiv = document.createElement('div');
  userDiv.textContent = 'You: ' + userMsg;
  messages.appendChild(userDiv);

  // Simulate PawBuddy response
  const reply = document.createElement('div');
  reply.textContent = 'PawBuddy: Thanks for your message! Stay tuned for more info. 🐶';
  setTimeout(() => messages.appendChild(reply), 1000);

  input.value = '';
}
