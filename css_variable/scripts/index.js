const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
  const suffix = this.dataset.sizing || '';
  const result = `${this.value}${suffix}`;
  document.documentElement.style
    .setProperty(`--${this.name}`, result);
}

inputs.forEach(input => {
  input.addEventListener('change', handleUpdate);
  input.addEventListener('mousemove', handleUpdate)
});
