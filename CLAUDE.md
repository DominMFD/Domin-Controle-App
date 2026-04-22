# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start              # Start Expo dev server
npm run android        # Run on Android emulator
npm run ios            # Run on iOS simulator
npm run web            # Run in browser

npm run lint           # ESLint (JS/TS/JSX/TSX)
npm run lint:fix       # ESLint with auto-fix
npm run format         # Prettier format
npm run format:check   # Check formatting without writing

npm run test           # Jest (jest-expo preset)
```

## Architecture

**Health tracking app** with three data domains: Exams (RNI/HEMA/MAREVAN), Medicines (with image upload), and Oxygenation readings. Connects to a .NET REST backend.

### Routing

Expo Router file-based routing. `app/(tabs)/` contains the three main tabs. Custom `TabBar` component replaces the default. Typed routes are enabled (`app.json` → `typedRoutes: true`).

### Data Flow

Each domain follows the same layered pattern:

```
Screen → Zustand store (UI state) + React Query hook (server state)
       → Service (facade) → Adapter (Firebase SDK calls)
       → Firestore (data) + Firebase Storage (medicine images)
```

- **Zustand** manages modal open/close, sorting, and filter state (e.g., `useMedicineModalStore`, `useExamsScreenStore`)
- **TanStack React Query** manages all server state; `queryClient` is in `utils/queryClient.ts`
- **Adapters** (`services/adapters/`) are the only place that call Firebase; they catch errors and return Portuguese messages
- **React Hook Form + Zod** handle all form state and validation
- Firebase is initialized in `services/firebase.ts`; requires `EXPO_PUBLIC_FIREBASE_*` env vars (see `.env.example`)

### Firestore Collections

| Collection | Fields |
|---|---|
| `exams` | `date`, `hematocrito?`, `rni?`, `marevan` |
| `medicines` | `name`, `dosage`, `description`, `image` (Storage URL) |
| `oxygenations` | `date`, `value?` |

Medicine images are stored under `medicines/{timestamp}_{filename}` in Firebase Storage. All Firestore document IDs are `string`.

### Styling

NativeWind (Tailwind for React Native). Custom brand colors are defined in `tailwind.config.js`: `primary_background`, `second_background`, `main_red`, `main_black`, `main_white`, `border_color`. Prettier auto-sorts Tailwind classes via `prettier-plugin-tailwindcss`.

### Provider Stack (app/_layout.tsx)

```
ThemeProvider → QueryClientProvider → Toast → Stack (Expo Router)
```

### Key Conventions

- Image uploads (medicines) use `FormData` with `multipart/form-data`
- Form input types use `Omit<Model, 'id'>` to exclude server-generated fields
- SVG icons live in `assets/` as React Native SVG components
- Path alias `@/*` maps to the repo root
