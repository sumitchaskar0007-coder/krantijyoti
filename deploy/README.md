# VPS deployment

The site runs as a Next.js service on port `5041`, behind Nginx. The systemd unit runs as `www-data` from `/var/www/krantijyotirun`.

Copy `krantijyotirun.service` to `/etc/systemd/system/`, enable and start it with systemd, then link `nginx-krantijotirun.conf` into `/etc/nginx/sites-enabled/` and reload Nginx after `nginx -t` succeeds. The Nginx configuration redirects HTTP to HTTPS and expects a Certbot certificate at `/etc/letsencrypt/live/krantijyotirun.org/`.

## Domain DNS

At the domain’s DNS provider, point the apex (`@`) A record and `www` A record to `187.127.137.105`, or make `www` a CNAME to the apex. Remove the current Hostinger CDN A/AAAA records for these names so requests do not continue to reach the old host. Once DNS resolves to this VPS, install the HTTPS certificate with Certbot for both hostnames.

The domain currently has active Hostinger CDN records. Switching these records routes the domain away from the current shared-hosting site.
