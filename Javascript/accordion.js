//Script rendered by ChatGPT 4o.

document.querySelectorAll('.question').forEach(button => {
  button.addEventListener('click', () => {
      const content = button.nextElementSibling;

      button.classList.toggle('active');

      if (button.classList.contains('active')) {
          content.style.maxHeight = content.scrollHeight + 'px';
      } else {
          content.style.maxHeight = 0;
      }
  });
});
