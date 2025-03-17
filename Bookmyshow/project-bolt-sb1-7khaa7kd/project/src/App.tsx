import React, { useState } from 'react';
import { Film, Calendar, MapPin, Search, Clock, Star } from 'lucide-react';

interface Movie {
  id: number;
  title: string;
  image: string;
  rating: number;
  language: string;
  genre: string;
}

const movies: Movie[] = [
  {
    id: 1,
    title: "Dune: Part Two",
    image: "https://images.unsplash.com/photo-1533613220915-609f661a6fe1",
    rating: 4.5,
    language: "English",
    genre: "Sci-Fi"
  },
  {
    id: 2,
    title: "Kung Fu Panda 4",
    image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1",
    rating: 4.3,
    language: "English",
    genre: "Animation"
  },
  {
    id: 3,
    title: "Poor Things",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1",
    rating: 4.7,
    language: "English",
    genre: "Drama"
  }
];

function App() {
  const [selectedCity, setSelectedCity] = useState('Mumbai');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Film className="h-8 w-8 text-red-500" />
              <span className="ml-2 text-xl font-bold text-gray-900">BookMyShow</span>
            </div>
            
            <div className="flex-1 max-w-xl mx-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for Movies, Events, Plays, Sports and Activities"
                  className="w-full px-4 py-2 pl-10 pr-8 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>

            <div className="flex items-center">
              <MapPin className="h-5 w-5 text-gray-600" />
              <select 
                className="ml-1 bg-transparent border-none focus:outline-none text-gray-600"
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
              >
                <option>Mumbai</option>
                <option>Delhi</option>
                <option>Bangalore</option>
                <option>Chennai</option>
              </select>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Recommended Movies */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Recommended Movies</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {movies.map((movie) => (
              <div key={movie.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src={movie.image} 
                  alt={movie.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">{movie.title}</h3>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="ml-1 text-sm text-gray-600">{movie.rating}</span>
                    </div>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <span>{movie.language}</span>
                    <span className="mx-2">•</span>
                    <span>{movie.genre}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {['10:00 AM', '1:15 PM', '4:30 PM', '7:45 PM', '10:30 PM'].map((time, index) => (
                      <button
                        key={index}
                        className="px-3 py-1 text-sm border border-gray-300 rounded-md hover:bg-red-500 hover:text-white hover:border-red-500 transition-colors"
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                  <button className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition-colors">
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Coming Soon */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Coming Soon</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[1, 2, 3, 4, 5, 6].map((_, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-3">
                <Calendar className="h-6 w-6 text-red-500 mb-2" />
                <p className="text-sm font-medium text-gray-900">Mar {index + 15}</p>
                <p className="text-xs text-gray-500">Coming Soon</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Movies Now Showing</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>All Movies</li>
                <li>Coming Soon</li>
                <li>Exclusive Movies</li>
                <li>Movie Trailers</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Popular Cinemas</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>INOX</li>
                <li>PVR Cinemas</li>
                <li>Cinepolis</li>
                <li>Carnival Cinemas</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Help & Support</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Contact Us</li>
                <li>About Us</li>
                <li>Terms and Conditions</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Facebook</span>
                  <Film className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Instagram</span>
                  <Clock className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Twitter</span>
                  <Calendar className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;