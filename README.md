# SOSER Union Website

Official website for SOSER Saving & Credit Cooperative Union LTD - A leading cooperative financial institution in Ethiopia.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Service Information**: Comprehensive details about savings, loans, insurance, and digital banking
- **Branch Locator**: Information about all four branches across the Awi Zone
- **News & Updates**: Latest announcements and events
- **Contact Form**: Easy way for members and visitors to get in touch

## Tech Stack

### Backend
- Node.js
- Express.js
- RESTful API architecture

### Frontend
- React 18
- React Router for navigation
- Axios for API calls
- Lucide React for icons
- Tailwind CSS for styling

## Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Setup Instructions

1. **Clone the repository**
   \`\`\`bash
   git clone <repository-url>
   cd soser-union-website
   \`\`\`

2. **Install backend dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Install frontend dependencies**
   \`\`\`bash
   cd client
   npm install
   cd ..
   \`\`\`

4. **Environment Configuration**
   \`\`\`bash
   cp .env.example .env
   \`\`\`

5. **Run the application**

   **Development mode (runs both frontend and backend):**
   \`\`\`bash
   npm run dev
   \`\`\`

   **Backend only:**
   \`\`\`bash
   npm run server
   \`\`\`

   **Frontend only:**
   \`\`\`bash
   npm run client
   \`\`\`

6. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000

## Project Structure

\`\`\`
soser-union-website/
├── client/                 # React frontend
│   ├── public/
│   └── src/
│       ├── components/     # Reusable components
│       ├── pages/          # Page components
│       ├── App.js
│       └── index.js
├── routes/                 # Express API routes
│   ├── services.js
│   ├── branches.js
│   ├── contact.js
│   └── news.js
├── server.js              # Express server
└── package.json
\`\`\`

## API Endpoints

- `GET /api/services` - Get all services
- `GET /api/services/:category` - Get services by category
- `GET /api/branches` - Get all branches
- `GET /api/branches/:id` - Get branch by ID
- `GET /api/news` - Get all news articles
- `GET /api/news/:id` - Get news article by ID
- `POST /api/contact` - Submit contact form

## Building for Production

1. **Build the frontend**
   \`\`\`bash
   npm run build
   \`\`\`

2. **Start the production server**
   \`\`\`bash
   npm start
   \`\`\`

## Deployment

The application can be deployed to various platforms:

- **Vercel**: Ideal for the frontend
- **Heroku**: Good for full-stack deployment
- **DigitalOcean**: For VPS deployment
- **AWS**: For enterprise-level deployment

## Contributing

This project was developed as part of an internship program at SOSER Union. For contributions or modifications, please contact the IT department.

## License

© 2025 SOSER Saving & Credit Cooperative Union LTD. All rights reserved.

## Contact

- **Email**: info@soserunion.com
- **Phone**: +251582211539
- **Address**: Dangila, Awi Zone, Ethiopia

 (Vice Manager, SOSER Union)
- Institution: Mekdela Amba University, College of Computing and Informatics
