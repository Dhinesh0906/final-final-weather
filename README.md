# WeatherNow - Real-Time Weather Application
https://final-final-weather.onrender.com
A comprehensive weather application providing real-time weather data, forecasts, and meteorological information.

**Developer:** Dhinesh Kumar B  
**Email:** dhineshkumar0906@gmail.com  
**Platform:** Deployed on Replit

## Features

- **Real-time Weather Data**: Current weather conditions with detailed metrics
- **7-Day Forecasts**: Extended weather predictions with daily summaries
- **Hourly Predictions**: Detailed hourly weather forecasts for the next 24 hours
- **Location Search**: Search and add any city worldwide
- **Favorites Management**: Save and quickly access your favorite locations
- **Interactive Weather Maps**: Visual precipitation and weather pattern maps
- **Responsive Design**: Optimized for desktop and mobile devices
- **Location Services**: Automatic location detection and manual location selection

## Tech Stack

### Frontend
- **React 18** with TypeScript
- **Wouter** for client-side routing
- **TailwindCSS** with custom animations
- **Lucide React** for icons
- **Recharts** for weather data visualization
- **React Hook Form** for form management
- **Sonner** for toast notifications

### Backend
- **Node.js** with Express
- **TypeScript** for type safety
- **WeatherAPI.com** integration
- **RESTful API** design

### Development Tools
- **Vite** for build tooling
- **ESBuild** for fast compilation
- **Hot Module Replacement** for development
- *AI and api* used in the project building

## API Endpoints

The application includes a comprehensive REST API:

- `GET /api/weather` - Current weather data by coordinates or city
- `GET /api/forecast/hourly` - Hourly forecast data
- `GET /api/forecast/daily` - Daily forecast data
- `GET /api/search/cities` - City search functionality
- `GET /api/astronomy` - Sunrise, sunset, and moon phase data

## Weather Data Provided

- Current temperature and "feels like" temperature
- Humidity and atmospheric pressure
- Wind speed and direction
- UV index and visibility
- Air quality index (AQI)
- Precipitation probability
- Sunrise and sunset times
- Moon phase information

## Architecture

The application follows a modern full-stack architecture:

1. **Client-Server Separation**: Frontend and backend run as separate concerns
2. **Security**: API keys are stored securely as environment variables
3. **Performance**: Caching mechanisms for API responses
4. **Responsive**: Mobile-first design approach
5. **Accessibility**: WCAG compliant components

## Deployment

The application is configured for Replit deployment:

- Frontend and backend run on the same port (5000)
- Environment variables are properly configured
- Production build optimization enabled
- Static file serving for production builds

## Environment Variables

Required environment variables:

```
WEATHER_API_KEY=your_weatherapi_key_here
```

## Development

To run locally:

1. Install dependencies: `npm install`
2. Set up environment variables
3. Start development server: `npm run dev`
4. Access at `http://localhost:5000`

## License

This project is created by Dhinesh Kumar B (dhineshkumar0906@gmail.com).

## Weather Data Source

Weather data is provided by [WeatherAPI.com](https://www.weatherapi.com/), which offers:
- Real-time weather data
- 14-day weather forecasts
- Historical weather data
- Location search
- Air quality data
- Astronomy data

---

Built with ❤️ by Dhinesh Kumar B
