import confetti from "canvas-confetti";

export function triggerSideCannons() {
  const end = Date.now() + 3 * 1000; // 3 seconds
  const colors = ["#5EC6CA", "#E3C530", "#D81F57", "#B7D33A"];

  const frame = () => {
    if (Date.now() > end) return;

    confetti({
      particleCount: 2,
      angle: 60,
      spread: 55,
      startVelocity: 60,
      origin: { x: 0, y: 0.5 },
      colors: colors,
    });
    confetti({
      particleCount: 2,
      angle: 120,
      spread: 55,
      startVelocity: 60,
      origin: { x: 1, y: 0.5 },
      colors: colors,
    });

    requestAnimationFrame(frame);
  };

  frame();
}
