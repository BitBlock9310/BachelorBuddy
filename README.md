# BachelorBuddy 🎓

A full-stack student utility app helping students find accommodation, roommates, and essential services.

## 🌟 Features

- **PG & Hostel Finder**: Map-based search with advanced filters
- **Roommate Finder**: Smart matching algorithm with realtime chat
- **Local Essentials Directory**: Find everything you need nearby
- **Mess & Laundry Services**: Verified vendor listings
- **Transport Help**: Trusted auto services and route planning
- **Community Forum**: College-specific discussion groups
- **Post-Counseling Guide**: Interactive onboarding checklist

## 🛠️ Tech Stack

- **Mobile**: React Native (Expo) + NativeWind
- **Web**: React.js (Vite) + TailwindCSS
- **Backend**: Supabase (PostgreSQL + REST + Realtime)
- **Auth**: Supabase Auth (Email/Password + Google)
- **Maps**: Google Maps API
- **Hosting**: Firebase Hosting (Web), GitHub Actions CI/CD

## 📦 Project Structure

```
BachelorBuddy/
├── backend/               # Supabase functions & SQL migrations
├── mobile-app/           # React Native Expo app
├── web-client/           # React Vite web app
├── shared/               # Shared types and utilities
└── .env.example          # Environment variables template
```

## 🚀 Getting Started

1. Clone the repository
2. Copy `.env.example` to `.env` in each project
3. Install dependencies:
   ```bash
   # Install root dependencies
   npm install

   # Install web client dependencies
   cd web-client
   npm install

   # Install mobile app dependencies
   cd ../mobile-app
   npm install
   ```

4. Start development servers:
   ```bash
   # Web Client
   cd web-client
   npm run dev

   # Mobile App
   cd mobile-app
   npm start
   ```

## 🔐 Environment Variables

Required environment variables:

```bash
# Supabase
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_supabase_anon_key

# Google Maps
GOOGLE_MAPS_API_KEY=your_google_maps_key
```

## 📱 Mobile App

The mobile app is built with Expo and React Native. Key features:
- NativeWind for styling
- Expo Location for maps
- Supabase React Native client

## 💻 Web Client

The web client is built with Vite and React. Key features:
- TailwindCSS for styling
- Google Maps React wrapper
- Supabase React client

## 🗄️ Backend

Supabase provides our backend infrastructure:
- PostgreSQL database
- Row Level Security (RLS)
- Realtime subscriptions
- Storage for images
- Edge Functions

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License. 