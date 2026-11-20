# Sindh Stream Festival — website starter

This is a responsive static front-end concept for the official Sindh Stream Festival website.

## Files
- `index.html` — page structure and sample content
- `styles.css` — responsive visual design
- `script.js` — mobile navigation and client-side demo form validation

## Run locally
Open `index.html` in a browser, or use a local static server such as VS Code Live Server.

## Before publishing
1. Replace sample content with festival-approved details: organiser, date, venue, programme, contact details, social links and official branding.
2. Use a domain and enable HTTPS/TLS at the hosting provider.
3. Do not use the demo contact form to collect real data. Connect it to a server-side endpoint with validation, rate limiting, spam controls, consent handling and safe storage.
4. For any admin panel, use server-side authentication, MFA where possible, least-privilege roles, secure session cookies, CSRF protection and audit logs.
5. Configure security headers (including Content-Security-Policy, HSTS after HTTPS is verified, X-Content-Type-Options, Referrer-Policy and a suitable Permissions-Policy) at the web server/hosting layer.
6. Keep dependencies and server software updated; use backups, monitoring and an incident response contact.
7. Never store passwords, API keys or secrets in front-end JavaScript.

## Important security limitation
The site is a front-end prototype. It does not include a backend, real registration, a database, live security monitoring, authentication, or server-side protections. Client-side checks are for usability only and can be bypassed. Real security monitoring must be configured at the hosting, CDN/WAF, application and/or server-log level.
