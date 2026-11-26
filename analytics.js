// Click tracking for GA4 (tag G-P697HZBQ4J is loaded in each page's <head>).
// affiliate_click: any link marked rel="sponsored" (e.g. LawPath)
// waitlist_click:  the "Join the waitlist" button
document.addEventListener('click', function (e) {
  var a = e.target.closest ? e.target.closest('a') : null;
  if (!a || typeof gtag !== 'function') return;

  if ((a.getAttribute('rel') || '').indexOf('sponsored') !== -1) {
    var h = a.hostname;
    var partner = h.indexOf('lawpath') !== -1 ? 'LawPath'
                : h.indexOf('udemy') !== -1 ? 'Udemy'
                : h.indexOf('coursera') !== -1 ? 'Coursera'
                : h.indexOf('bizcover') !== -1 ? 'BizCover'
                : h;
    gtag('event', 'affiliate_click', { partner: partner, link_page: location.pathname });
  } else if (a.classList.contains('waitlist-btn')) {
    gtag('event', 'waitlist_click', { link_page: location.pathname });
  }
});
