document.querySelectorAll('a[href]').forEach(link => {
    const href = link.getAttribute('href');

    if (
        href.startsWith('#') ||
        href.startsWith('mailto:') ||
        href.startsWith('tel:') ||
        link.target === '_blank'
    ) return;

    link.addEventListener('click', function (e) {
        e.preventDefault();

        document.body.style.opacity = "0";
        document.body.style.transform = "translateY(8px)";
        document.body.style.transition = "opacity .18s ease, transform .18s ease";

        setTimeout(() => {
            window.location.href = href;
        }, 180);
    });
});