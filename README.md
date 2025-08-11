# RBAC Dashboard (React + Vite + Tailwind + Firebase) – JavaScript

A production-ready starter with:
- Email/password auth, **email verification** enforced
- **Role-based** panels using Firestore (`users/{uid}.role`)
- Protected routes (user/admin)
- Responsive sidebar, theme toggle (light/dark)
- Zustand for global state

## 1) Setup
```bash
npm install
cp .env.example .env
# fill .env with your Firebase web config (Project settings → General → SDK setup & config)
```

Enable in Firebase Console:
- **Authentication** → Sign-in method → Email/Password
- **Authentication** → Templates → customize verification & reset emails (optional)
- **Firestore** → Create database → (recommended) start in production, then set rules from `firebase.rules`

## 2) Develop
```bash
npm run dev
```

## 3) Build
```bash
npm run build && npm run preview
```

## 4) Roles
Upon sign-up a Firestore document is created:
```
/users/{uid} => { role: "user", email, createdAt }
```
Promote an account to admin by editing `users/{uid}.role` = `"admin"` in Firestore.

## 5) Flow
- Sign Up → verification email is sent → user is signed out.
- After clicking verification link, log in.
- If verified, you can access `/dashboard`. Admins additionally see `/admin`.

## Notes
- This project uses plain **JavaScript** (no TypeScript).
- UI is Tailwind with shadcn-style primitives (no runtime shadcn generator needed).
