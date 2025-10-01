# Database Setup Instructions

## Quick Setup with Supabase (Recommended)

### Step 1: Create Supabase Project
1. Go to [supabase.com](https://supabase.com)
2. Sign up/Login with GitHub
3. Click "New Project"
4. Choose organization and fill:
   - **Project Name**: `arturo-portfolio`
   - **Database Password**: (generate a strong password - save it!)
   - **Region**: Choose closest to your location
5. Click "Create new project" (takes ~2 minutes)

### Step 2: Get Database URL
1. In your Supabase dashboard, go to **Settings** → **Database**
2. Scroll down to **Connection String** → **URI**
3. Copy the connection string (looks like):
   ```
   postgresql://postgres:[YOUR-PASSWORD]@db.[PROJECT-REF].supabase.co:5432/postgres
   ```
4. Replace `[YOUR-PASSWORD]` with the password you created

### Step 3: Configure Environment Variables
1. In your project root, copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```
2. Open `.env.local` and add your database URL:
   ```env
   DATABASE_URL="postgresql://postgres:your-password@db.your-project-ref.supabase.co:5432/postgres"
   ```

### Step 4: Generate Prisma Client & Run Migration
```bash
npx prisma generate
npx prisma db push
```

### Step 5: Verify Setup
1. Start your development server: `npm run dev`
2. Go to `http://localhost:3000` and scroll to the contact form
3. Fill out and submit the form
4. Check your Supabase dashboard → **Table Editor** → **contact_submissions** to see the data

## Alternative: Local PostgreSQL Setup

If you prefer local development:

### Step 1: Install PostgreSQL
- **macOS**: `brew install postgresql`
- **Windows**: Download from [postgresql.org](https://www.postgresql.org/download/)
- **Linux**: `sudo apt install postgresql postgresql-contrib`

### Step 2: Create Database
```bash
psql -U postgres
CREATE DATABASE arturo_portfolio;
\q
```

### Step 3: Configure Environment
```env
DATABASE_URL="postgresql://postgres:your-password@localhost:5432/arturo_portfolio"
```

### Step 4: Run Migration
```bash
npx prisma generate
npx prisma db push
```

## Troubleshooting

### Common Issues:
1. **Connection refused**: Check if database is running
2. **Authentication failed**: Verify password in DATABASE_URL
3. **Table doesn't exist**: Run `npx prisma db push`
4. **Prisma client errors**: Run `npx prisma generate`

### Verify Database Connection:
```bash
npx prisma studio
```
This opens a database browser at `http://localhost:5555`

## Production Deployment

For production (Vercel, Netlify, etc.):
1. Add `DATABASE_URL` to your deployment environment variables
2. Ensure your database allows connections from your hosting provider
3. Run `npm run build` to verify everything works

## Viewing Submissions

Your contact form submissions will be stored in the `contact_submissions` table with:
- Full name, email, company, phone, subject, message
- Timestamps for when created/updated
- Unique ID for each submission

Access them via:
- **Supabase**: Dashboard → Table Editor
- **Local**: `npx prisma studio`
- **Code**: Use the Prisma client in your API routes