/* Esthesia static-site helpers. Configure CONTACT_EMAIL before publishing. */
(() => {
  const CONTACT_EMAIL = 'REPLACE_WITH_ESTHESIA_CONTACT_EMAIL';
  document.querySelectorAll('form[data-static-form="true"]').forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      if (CONTACT_EMAIL.startsWith('REPLACE_')) {
        alert('The website is static. Please configure the contact email in js/static-site.js before enabling form submissions.');
        return;
      }
      const values = [...form.querySelectorAll('input, textarea, select')]
        .filter((el) => el.type !== 'submit' && el.type !== 'hidden' && el.value.trim())
        .map((el) => `${el.getAttribute('aria-label') || el.name || 'Information'}: ${el.value.trim()}`);
      const isNewsletter = values.length === 1 && /email/i.test(values[0]);
      const subject = encodeURIComponent(isNewsletter ? 'Esthesia newsletter subscription' : 'Website enquiry - Esthesia');
      const body = encodeURIComponent(values.join('\n'));
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    });
  });
})();
