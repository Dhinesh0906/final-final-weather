import React from 'react';
import { Mail, Github, Calendar } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Project Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">WeatherNow</h3>
            <p className="text-gray-300 text-sm mb-4">
              A real-time weather application providing accurate forecasts, 
              location-based weather data, and comprehensive meteorological information.
            </p>
            <div className="flex items-center text-gray-400 text-sm">
              <Calendar className="w-4 h-4 mr-2" />
              <span>© 2024 WeatherNow</span>
            </div>
          </div>

          {/* Developer Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Developer</h3>
            <div className="space-y-2">
              <p className="text-gray-300">
                <strong></strong>
              </p>
              <div className="flex items-center text-gray-400 text-sm">
                <Mail className="w-4 h-4 mr-2" />
                <a 
                  href="mailto:dhineshkumar0906@gmail.com" 
                  className="hover:text-white transition-colors"
                >
                </a>
              </div>
            </div>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Features</h3>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>• Real-time weather data</li>
              <li>• 7-day forecasts</li>
              <li>• Hourly predictions</li>
              <li>• Location search</li>
              <li>• Favorites management</li>
              <li>• Interactive weather maps</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            Built with React, TypeScript, and WeatherAPI.com | Deployed on Replit
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
