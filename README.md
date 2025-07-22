This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


🚀 Next.js + Tailwind CSS Setup Commands
📋 Prerequisites

Node.js 18.0 or later
npm, yarn, or pnpm package manager
Git (optional but recommended)

⚡ Quick Setup (Automated)
Option 1: Create New Project
bash# Create new Next.js project with TypeScript
npx create-next-app@latest fedelis-website --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"

# Navigate to project directory
cd fedelis-website
Option 2: Manual Setup from Scratch
bash# Create project directory
mkdir nextjs-static-website
cd nextjs-static-website

# Initialize package.json
npm init -y

# Install Next.js dependencies
npm install next@latest react@latest react-dom@latest

# Install TypeScript dependencies
npm install -D typescript @types/react @types/node @types/react-dom

# Install Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Install additional dependencies
npm install next-themes framer-motion lucide-react

# Install dev dependencies
npm install -D eslint eslint-config-next @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-prettier eslint-plugin-prettier prettier @next/bundle-analyzer
🔧 Configuration Setup
1. Create Configuration Files
bash# Create TypeScript config
touch tsconfig.json

# Create ESLint config
touch .eslintrc.json

# Create Prettier config
touch .prettierrc

# Create environment files
touch .env.local
touch .env.example

# Create other config files
touch .gitignore
touch README.md
2. Create Folder Structure
bash# Create main source directories
mkdir -p src/{app,components,layouts,sections,hooks,utils,types,data,styles}

# Create component subdirectories
mkdir -p src/components/{ui,common,forms,animations}

# Create section subdirectories  
mkdir -p src/sections/{home,about}

# Create public directories
mkdir -p public/{images/{icons,logos,graphics},fonts}

# Create additional directories
mkdir -p docs .github/workflows
3. Create Initial Files
bash# Create app router files
touch src/app/layout.tsx
touch src/app/page.tsx
touch src/app/globals.css
touch src/app/loading.tsx
touch src/app/error.tsx
touch src/app/not-found.tsx

# Create component files
touch src/components/ui/{Button,Input,Card,Modal,Spinner}.tsx
touch src/components/ui/index.ts
touch src/components/common/{Header,Footer,Navigation,SEOHead}.tsx
touch src/components/common/index.ts

# Create utility files
touch src/utils/{cn,formatters,validators,constants,seo}.ts
touch src/utils/index.ts

# Create data files
touch src/data/{siteConfig,navigation,testimonials}.ts

# Create type files
touch src/types/{common,blog,user}.ts
touch src/types/index.ts
📦 Package Installation Commands
Using npm
bash# Install all dependencies
npm install

# Install production dependencies only
npm install --production

# Install specific packages
npm install <package-name>
npm install -D <dev-package-name>
Using yarn
bash# Install with yarn
yarn install

# Add packages
yarn add <package-name>
yarn add -D <dev-package-name>
Using pnpm (Recommended for performance)
bash# Install with pnpm
pnpm install

# Add packages
pnpm add <package-name>
pnpm add -D <dev-package-name>
🏃‍♂️ Development Commands
Start Development Server
bash# Start dev server (default: http://localhost:3000)
npm run dev
# or
yarn dev
# or
pnpm dev

# Start on specific port
npm run dev -- -p 3001
Build & Export for Production
bash# Build the application
npm run build

# Build and export as static site
npm run export

# Start production server
npm run start
Code Quality Commands
bash# Run ESLint
npm run lint

# Fix ESLint issues
npm run lint:fix

# Check TypeScript types
npm run type-check

# Format code with Prettier
npx prettier --write .
Bundle Analysis
bash# Analyze bundle size
npm run analyze
# or
ANALYZE=true npm run build
🔍 Useful Development Commands
Git Setup (if using version control)
bash# Initialize git repository
git init

# Add all files
git add .

# Initial commit
git commit -m "Initial Next.js setup with Tailwind CSS"

# Add remote repository
git remote add origin <your-repo-url>

# Push to remote
git push -u origin main
Environment Setup
bash# Create environment file
echo "NEXT_PUBLIC_SITE_URL=http://localhost:3000" > .env.local
echo "NEXT_PUBLIC_GA_ID=" >> .env.local
Font Setup (if using custom fonts)
bash# Download Google Fonts locally (optional)
npx @next/font google Inter Merriweather
🚀 Deployment Commands
Static Export for CDN/Static Hosting
bash# Build and export
npm run build
npm run export

# The 'out' directory contains your static site
# Upload the 'out' folder to your static hosting provider
Vercel Deployment
bash# Install Vercel CLI
npm i -g vercel

# Deploy to Vercel
vercel

# Deploy to production
vercel --prod
Netlify Deployment
bash# Install Netlify CLI
npm install -g netlify-cli

# Build the site
npm run build
npm run export

# Deploy to Netlify
netlify deploy --dir=out

# Deploy to production
netlify deploy --prod --dir=out
🔧 Troubleshooting Commands
Clear Cache & Reinstall
bash# Clear Next.js cache
rm -rf .next

# Clear node modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Clear npm cache
npm cache clean --force
Update Dependencies
bash# Check outdated packages
npm outdated

# Update all packages
npm update

# Update specific package
npm install <package-name@latest>
Performance Optimization
bash# Analyze bundle
npm run analyze

# Check bundle size
npx @next/bundle-analyzer

# Audit packages for vulnerabilities
npm audit
npm audit fix
📝 Quick Start Checklist

 Run npx create-next-app@latest or manual setup
 Install additional dependencies
 Copy configuration files (package.json, next.config.js, etc.)
 Create folder structure
 Set up Tailwind configuration
 Create initial components
 Start development server with npm run dev
 Test build with npm run build
 Export static site with npm run export

🎯 Performance Tips

Use static generation - Leverage Next.js static export
Optimize images - Use Next.js Image component or optimize manually
Bundle analysis - Regularly check bundle size
Code splitting - Implement dynamic imports for large components
Caching - Configure proper cache headers
Minification - Ensure production builds are minified

Your high-performance, scalable Next.js + Tailwind CSS website is ready! 🎉