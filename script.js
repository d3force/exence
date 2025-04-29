document.getElementById('themeToggle').addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
});

document.getElementById('startPauseBtn').addEventListener('click', () => {
  alert('Анимация запускается или приостанавливается.');
});

document.getElementById('autoCycleBtn').addEventListener('click', () => {
  alert('Автоцикл включен.');
});
