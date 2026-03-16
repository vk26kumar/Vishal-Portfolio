# Vishal Kumar — Portfolio

A cyberpunk-themed, animated developer portfolio built with React + Vite + Framer Motion.

---

## 🚀 Quick Start (VS Code)

### Step 1 — Prerequisites
Make sure you have installed:
- **Node.js** v18+ → https://nodejs.org
- **VS Code** → https://code.visualstudio.com

### Step 2 — Open in VS Code
1. Extract / place this folder somewhere on your computer
2. Open **VS Code**
3. Go to `File → Open Folder` and select `vishal-portfolio`

### Step 3 — Open Terminal in VS Code
Press `` Ctrl + ` `` (backtick) to open the integrated terminal

### Step 4 — Install Dependencies
```bash
npm install
```
Wait for it to finish (~1-2 minutes on first run).

### Step 5 — Run the Dev Server
```bash
npm run dev
```

You'll see:
```
  VITE v5.x.x  ready in xxx ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: ...
```

### Step 6 — Open in Browser
Visit: **http://localhost:5173**

---

## 🔐 Admin Panel

Access your portfolio CMS to add/edit/remove content **without touching code**.

### How to open Admin Panel:
**Method 1 (Hidden button):**  
Go to your portfolio → scroll to the very bottom → click the tiny dot in the **bottom-left corner 3 times**

**Method 2 (Direct URL):**  
Visit: `http://localhost:5173/admin`

### Default Password:
```
vishal@admin2024
```

> To change the password, open `src/pages/Admin.jsx` and find line:
> `const ADMIN_PASSWORD = 'vishal@admin2024'`
> Replace with your own password.

### What you can manage from Admin:
- ✅ Personal info (name, email, phone, bio, location)
- ✅ Resume link
- ✅ Animated taglines in hero
- ✅ All social links
- ✅ Projects (add, edit, remove, toggle featured)
- ✅ Experience entries
- ✅ Achievements

**Note:** Admin saves data to your browser's localStorage. This means changes persist on the same browser but are local. For production deployment, connect to a backend or use the data file approach.

---

## 📁 Project Structure

```
vishal-portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          ← Navigation bar
│   │   ├── Hero.jsx            ← Landing section with particles
│   │   ├── About.jsx           ← About + Education
│   │   ├── Experience.jsx      ← Work experience timeline
│   │   ├── Projects.jsx        ← Projects grid with filter
│   │   ├── Skills.jsx          ← Skills with animated bars
│   │   ├── Achievements.jsx    ← Awards + Certifications
│   │   ├── Contact.jsx         ← Contact form + social links
│   │   ├── Footer.jsx          ← Footer with hidden admin trigger
│   │   └── CustomCursor.jsx    ← Custom animated cursor
│   ├── data/
│   │   └── portfolioData.js    ← ALL portfolio content (edit this!)
│   ├── pages/
│   │   ├── Portfolio.jsx       ← Main portfolio page
│   │   └── Admin.jsx           ← CMS admin panel
│   ├── App.jsx                 ← App with routing
│   ├── main.jsx                ← Entry point
│   └── index.css               ← Global styles + animations
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

---

## ✏️ Updating Content (Two Ways)

### Way 1: Edit the data file directly
Open `src/data/portfolioData.js` — everything is organized and commented.

### Way 2: Use the Admin Panel
Visit `/admin`, log in, and manage everything visually.

---

## 🌐 Deploy to Vercel (Free)

1. Push your code to GitHub
2. Go to https://vercel.com → Sign in with GitHub
3. Click "New Project" → Import your repo
4. Leave all settings default → Click **Deploy**

Your portfolio will be live at `yourname.vercel.app` in ~1 minute!

---

## 🎨 Customization Tips

- **Colors:** Edit CSS variables in `src/index.css` (`:root` block)
- **Fonts:** Change `font-family` in `tailwind.config.js` and `index.html`
- **Sections:** Add/remove sections in `src/pages/Portfolio.jsx`
- **Animations:** Framer Motion variants are in each component

---

## 🆘 Common Issues

**Port already in use:**
```bash
npm run dev -- --port 3000
```

**Module not found errors:**
```bash
rm -rf node_modules
npm install
```

**Styles not applying:**
Make sure `src/main.jsx` imports `./index.css`
