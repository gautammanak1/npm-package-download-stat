# Deployment Guide

This guide will help you deploy NPM-PACKAGE-DOWNLOAD-STAT to Vercel with CI/CD pipeline.

## Prerequisites

- GitHub account
- Vercel account (sign up at [vercel.com](https://vercel.com))
- Repository pushed to GitHub

## Step 1: Connect Repository to Vercel

### Via Vercel Dashboard

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click **"Add New Project"**
3. Import your GitHub repository: `gautammanak1/npm-package-download-stat`
4. Vercel will auto-detect Next.js settings
5. Click **"Deploy"**

### Get Vercel Credentials

After deployment, you'll need these for CI/CD:

1. **Vercel Token**:
   - Go to [Vercel Settings > Tokens](https://vercel.com/account/tokens)
   - Create a new token
   - Copy the token

2. **Organization ID**:
   - Go to [Vercel Settings > General](https://vercel.com/account/general)
   - Copy your **Team ID** (Organization ID)

3. **Project ID**:
   - Go to your project settings in Vercel
   - Go to **Settings > General**
   - Copy the **Project ID**

## Step 2: Configure GitHub Secrets

1. Go to your GitHub repository
2. Navigate to **Settings > Secrets and variables > Actions**
3. Add the following secrets:

   - `VERCEL_TOKEN`: Your Vercel token
   - `VERCEL_ORG_ID`: Your Organization/Team ID
   - `VERCEL_PROJECT_ID`: Your Project ID

## Step 3: Enable GitHub Actions

1. Go to repository **Settings > Actions > General**
2. Under **"Workflow permissions"**, select:
   - ✅ **Read and write permissions**
   - ✅ **Allow GitHub Actions to create and approve pull requests**

## Step 4: Test CI/CD Pipeline

### Test Production Deployment

1. Make a change to your code
2. Commit and push to `main` branch:
   ```bash
   git add .
   git commit -m "Test deployment"
   git push origin main
   ```
3. Go to **Actions** tab in GitHub
4. Watch the workflow run
5. Check Vercel dashboard for deployment status

### Test Preview Deployment

1. Create a new branch:
   ```bash
   git checkout -b test-preview
   ```
2. Make a change and push:
   ```bash
   git push origin test-preview
   ```
3. Create a Pull Request to `main`
4. GitHub Actions will create a preview deployment
5. Check PR comments for preview URL

## Manual Deployment

If you prefer manual deployment:

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel --prod
```

## Troubleshooting

### Build Fails

- Check Node.js version (should be 18+)
- Verify all dependencies are installed
- Check build logs in GitHub Actions

### Deployment Fails

- Verify Vercel secrets are correct
- Check Vercel project settings
- Ensure repository is connected to Vercel

### Preview Not Working

- Ensure PR is targeting `main` branch
- Check GitHub Actions workflow permissions
- Verify Vercel token has correct permissions

## Environment Variables

This project doesn't require any environment variables. If you need to add them:

1. Go to Vercel Dashboard > Project Settings > Environment Variables
2. Add variables for Production, Preview, and Development
3. Redeploy to apply changes

## Monitoring

- **Vercel Dashboard**: Monitor deployments and analytics
- **GitHub Actions**: View workflow runs and logs
- **Vercel Analytics**: Track performance (if enabled)

## Support

For issues or questions:
- Open an issue on GitHub
- Check [Vercel Documentation](https://vercel.com/docs)
- Check [GitHub Actions Documentation](https://docs.github.com/en/actions)

