let leftCount = 0;
let rightCount = 0;

function generateCards() {
  const container = document.getElementById('cardContainer');
  container.innerHTML = '';
  leftCount = 0;
  rightCount = 0;
  document.getElementById('leftCount').textContent = leftCount;
  document.getElementById('rightCount').textContent = rightCount;
  container.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.15)';

  const count = parseInt(document.getElementById('cardCount').value);
  for (let i = count; i >= 1; i--) {
    const card = document.createElement('div');
    card.className = 'card';
    card.textContent = `Card ${i}`;
    container.appendChild(card);
  }
}

function swipe(direction) {
  const container = document.getElementById('cardContainer');
  const cards = container.getElementsByClassName('card');
  if (cards.length === 0) return;

  const topCard = cards[cards.length - 1];
  topCard.style.transform = direction === 'left'
    ? 'translateX(-400px) rotate(-20deg)'
    : 'translateX(400px) rotate(20deg)';
  topCard.style.opacity = 0;

  setTimeout(() => {
    container.removeChild(topCard);
    if (container.children.length === 0) {
      container.style.boxShadow = 'none';
    }
  }, 300);

  if (direction === 'left') {
    leftCount++;
    document.getElementById('leftCount').textContent = leftCount;
  } else {
    rightCount++;
    document.getElementById('rightCount').textContent = rightCount;
  }
}
