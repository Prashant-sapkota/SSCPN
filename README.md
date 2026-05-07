# SSCPN — Official Website

A full-stack web portal for the Socialist Students' Community of Progressive Nepal (SSCPN), built with React + TypeScript on the frontend and Directus CMS on the backend.

---

## Tech Stack

**Frontend**
- React 19 + TypeScript
- Vite 6
- React Router DOM v7
- Framer Motion (animations)
- Lucide React (icons)
- Tailwind CSS

**Backend**
- Directus 11 (headless CMS)
- SQLite

---

## Project Structure

```
sscpn/
├── frontend/          # React + Vite application
│   ├── components/    # All page and UI components
│   ├── assets/        # Static images and media
│   ├── App.tsx        # Route definitions
│   └── index.tsx      # Entry point
└── backend/           # Directus CMS instance
```

---

## Pages & Routes

| Route | Page |
|-------|------|
| `/` | Home |
| `/about` | About SSCPN |
| `/history` | History (Itihas) |
| `/darsan` | Philosophy (Darsan) |
| `/bichar` | Ideology (Bichar) |
| `/scientific-socialism` | Scientific Socialism |
| `/samajwadi-karyakram` | Socialist Programme |
| `/sangathanatmak` | Organisational Structure |
| `/org-method` | Organisational Method |
| `/sangharsha` | Struggle (Sangharsha) |
| `/dastabeez` | Documents (Dastabeez) |
| `/bigyan-prabidhi` | Science & Technology |
| `/news` | News |
| `/press/:id` | Press Detail |
| `/gallery` | Gallery |
| `/calendar` | Events Calendar |
| `/membership` | Membership |
| `/nara` | Slogans (Nara) |

---

## Getting Started

### Prerequisites
- Node.js 18+
- npm

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Runs on `http://localhost:5173`

### Backend (Directus CMS)

```bash
cd backend
npm install
npm start
```

Runs on `http://localhost:8055`

### Build for Production

```bash
cd frontend
npm run build
```

---

## License

All rights reserved © SSCPN
