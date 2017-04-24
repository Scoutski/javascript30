const hands = {
  seconds: document.querySelector('.second-hand'),
  minutes: document.querySelector('.min-hand'),
  hours: document.querySelector('.hour-hand'),
}

function setHand(hand, degrees) {
  hands[hand].style.transform = `rotate(${degrees}deg)`;
}

function setDate() {
  const now = new Date();
  const seconds = ((now.getSeconds() / 60) * 360) + 90;
  setHand('seconds', seconds);

  const minutes = ((now.getMinutes() / 60) * 360) + 90;
  setHand('minutes', minutes)

  const hours = ((now.getHours() / 12) * 360) + 90;
  setHand('hours', hours);
}

setInterval(setDate, 1000);