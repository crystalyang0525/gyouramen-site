# GYOU RAMEN Website

## Files in this package

| File | Page |
|---|---|
| `index.html` | Homepage |
| `about.html` | About Us |
| `menu.html` | Menu |
| `location.html` | Locations |
| `franchising.html` | Franchising ← main focus |
| `contact.html` | Contact |
| `style.css` | Shared styles (all pages) |
| `nav-footer.js` | Shared navigation & footer (all pages) |

---

## How to Deploy on GitHub Pages (Free)

### Step 1 — Create a GitHub account
Go to https://github.com and sign up for free.

### Step 2 — Create a new repository
- Click the green **New** button
- Name it exactly: `gyouramen-site` (or any name)
- Set it to **Public**
- Click **Create repository**

### Step 3 — Upload all files
- On the repository page, click **Add file → Upload files**
- Drag and drop ALL files from this folder (index.html, about.html, menu.html, location.html, franchising.html, contact.html, style.css, nav-footer.js)
- Click **Commit changes**

### Step 4 — Enable GitHub Pages
- Go to your repository **Settings**
- Scroll down to **Pages** in the left sidebar
- Under **Source**, select **Deploy from a branch**
- Select branch: `main`, folder: `/ (root)`
- Click **Save**

Your site will be live at: `https://YOUR-USERNAME.github.io/gyouramen-site/`

### Step 5 — Connect your domain (gyouramen.com)
1. In GitHub Pages settings, enter `gyouramen.com` in the **Custom domain** box
2. Log in to **Namecheap**
3. Go to **Domain List → gyouramen.com → Manage → Advanced DNS**
4. Delete any existing A records, then add these 4 new A records:

| Type | Host | Value |
|---|---|---|
| A Record | @ | 185.199.108.153 |
| A Record | @ | 185.199.109.153 |
| A Record | @ | 185.199.110.153 |
| A Record | @ | 185.199.111.153 |

5. Add a CNAME record:

| Type | Host | Value |
|---|---|---|
| CNAME | www | YOUR-USERNAME.github.io |

6. Wait 10–30 minutes for DNS to propagate.
7. Check **Enforce HTTPS** in GitHub Pages settings.

---

## Updating the Website Later

To change any page:
1. Edit the HTML file on your computer
2. Go to your GitHub repository
3. Click on the file you want to update → click the pencil ✏️ icon → paste your new code → Commit

---

## Form Submissions (Franchise & Contact Forms)

The forms currently show a success message but don't actually send emails.
To receive form submissions by email for free:

1. Go to https://formspree.io and create a free account
2. Create a new form and get your form ID (looks like `xyzabc12`)
3. In `franchising.html`, find the `<button class="form-submit"` line and replace the `onclick` with a real form action
4. Free plan: 50 submissions/month (plenty for franchise inquiries)

---

## Contact Information in the Site

- Phone: +1 (365) 314-9955
- Email: support@gyouramen.com
- Instagram: @gyouramen
- Address: 630 Yonge St, Toronto, ON
