# Deployment Instructions for GitHub Pages

## Setup Steps
1. **Clone the Repository**  
   Run the following command to clone the repository:  
   ```bash  
   git clone https://github.com/hemantanaxa-ui/hemant-aacharya-portfolio.git  
   cd hemant-aacharya-portfolio  
   ```

2. **Install Dependencies**  
   Make sure you have Node.js installed. If not, download it from [nodejs.org](https://nodejs.org/).
   Run the following command to install the required dependencies:  
   ```bash  
   npm install  
   ```

3. **Build the Project**  
   After installing the dependencies, build the project by running:  
   ```bash  
   npm run build  
   ```

## Customizing the Portfolio
1. **Edit the Content**  
   You can customize your portfolio by editing the following files:  
   - **index.html**: Update text and links as necessary.  
   - **styles.css**: Change styles such as colors, fonts, and layout.  
   - **images/**: Replace the images with your own images.

2. **Rebuild the Project**  
   After making changes, rebuild the project using:  
   ```bash  
   npm run build  
   ```

## Deploying to GitHub Pages
1. **Push Changes to GitHub**  
   Once you are satisfied with your changes, commit and push your updates to GitHub:  
   ```bash  
   git add .  
   git commit -m "Updated portfolio"  
   git push origin main  
   ```

2. **Deploy using GitHub Pages**  
   Go to your GitHub repository settings:  
   - Click on **Settings** > **Pages** > **Source**  
   - Select the branch `main` and `/ (root)` folder  
   - Click **Save**  
   
   Your site will be published at `https://<your-github-username>.github.io/hemant-aacharya-portfolio/`.

3. **Verify Deployment**  
   Wait a few minutes and navigate to the URL mentioned above to see your portfolio live!  
   
## Troubleshooting
- If the site doesn't appear as expected, check console for errors.  
- Ensure all paths to resources are correct in your `index.html` file.