document.querySelectorAll('a[href]').forEach((link) => {
  const href = link.getAttribute('href');

  if (
    !href ||
    href.startsWith('#') ||
    href.startsWith('mailto:') ||
    href.startsWith('tel:') ||
    link.target === '_blank'
  ) {
    return;
  }

  link.addEventListener('click', (event) => {
    event.preventDefault();
    document.body.style.transition = 'opacity .18s ease, transform .18s ease';
    document.body.style.opacity = '0';
    document.body.style.transform = 'translateY(8px)';

    setTimeout(() => {
      window.location.href = href;
    }, 180);
  });
});
