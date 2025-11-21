// Contact form submission (progressive enhancement)
// Requires replacing the placeholder Formspree endpoint in contact.html form action.
(function() {
  const form = document.getElementById('contactForm');
  if (!form) return; // Only run on contact page

  const statusEl = document.getElementById('formStatus');

  function setStatus(msg, type) {
    if (!statusEl) return;
    statusEl.textContent = msg;
    statusEl.className = 'mt-3 small form-status-' + type;
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    setStatus('Sending…', 'pending');

    // Basic client-side validation
    const requiredFields = ['subject','name','email','message'];
    for (const id of requiredFields) {
      const field = document.getElementById(id);
      if (!field || !field.value.trim()) {
        field.focus();
        setStatus('Please fill in all required fields.', 'error');
        return;
      }
    }

    try {
      const data = new FormData(form);
      const endpoint = form.getAttribute('action');
      if (!endpoint || endpoint.includes('yourFormID')) {
        setStatus('Form endpoint not configured. Replace yourFormID with real Formspree ID.', 'error');
        return;
      }

      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: data
      });

      if (res.ok) {
        form.reset();
        setStatus('Thank you! Your message has been sent.', 'success');
      } else {
        const json = await res.json().catch(() => ({}));
        const err = json.errors && json.errors.length ? json.errors.map(e => e.message).join(', ') : 'Unexpected error.';
        setStatus('Submission failed: ' + err, 'error');
      }
    } catch (err) {
      setStatus('Network error. Please try again later.', 'error');
    }
  });
})();