# Preethi × Akash — Our Private Universe

A mobile-first React + Vite site. No login, no backend, no database.
Note: anyone who has the link can open it. It is **not** password-protected.

## 1. Edit your content
Open `src/content.js`. Every message, memory, quiz question, riddle answer and letter lives there.
Replace every `[bracketed placeholder]`. Quiz `answer` numbers start at 0 (0 = first option).

## 2. Run locally
Install Node.js 18+ from nodejs.org, then in this folder:
```
npm install
npm run dev
```
Open the address shown (usually http://localhost:5173). To test the production build: `npm run build && npm run preview`.

## 3. Upload to GitHub
1. Create a free account at github.com, click **New repository**, name it (e.g. `our-universe`), leave it empty.
2. In this folder:
```
git init
git add .
git commit -m "Our private universe"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/our-universe.git
git push -u origin main
```
(Use a Private repository if you want the source hidden. The deployed site is still public.)

## 4. Deploy on Vercel (free Hobby plan)
1. Go to vercel.com and sign up with GitHub.
2. Click **Add New → Project**, pick your repository, click **Import**.
3. Vercel detects Vite automatically (Build: `npm run build`, Output: `dist`). Click **Deploy**.
4. When it finishes, your public URL appears on the success screen and under the project's **Domains** (looks like `our-universe.vercel.app`).

## 5. Fix the WhatsApp preview image
In `index.html`, replace `YOUR-SITE.vercel.app` in the `og:image` line with your real Vercel domain, commit and push (`git add . && git commit -m "og" && git push`). Vercel redeploys automatically.
The preview image is `public/og.png` (1200×630). Swap in your own if you like.
WhatsApp caches previews. If the preview looks old or missing, wait some time or share the link with a harmless suffix such as `?v=2`. Previews are not guaranteed.

## 6. Test and share
1. Open the URL on your phone, in a private tab, and tap through everything.
2. Copy the URL and paste it into a WhatsApp chat (try sending it to yourself first).
