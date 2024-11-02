import React, { useEffect, useState } from 'react';
import { Navbar } from '../components/Navbar';
import { MovieGrid } from '../components/MovieGrid';
import { Movie } from '../types/movie';
import { ArrowLeft } from 'lucide-react';

const API_KEY = '2c3ddf0f481ed8f96e903752808ab205';

export function Home() {
  const [trendingMovies, setTrendingMovies] = useState<Movie[]>([]);
  const [topRatedMovies, setTopRatedMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const [trendingRes, topRatedRes] = await Promise.all([
          fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}&page=1`),
          fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&page=1`)
        ]);

        const [trendingData, topRatedData] = await Promise.all([
          trendingRes.json(),
          topRatedRes.json()
        ]);

        setTrendingMovies(trendingData.results);
        setTopRatedMovies(topRatedData.results);
      } catch (err) {
        setError('Failed to fetch movies. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 text-lg">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <button
          onClick={() => window.history.back()}
          className="flex items-center gap-2 text-gray-900 hover:text-blue-600 mb-6"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back</span>
        </button>

        {loading ? (
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-600 border-t-transparent"></div>
          </div>
        ) : (
          <>
            <MovieGrid title="Trending This Week" movies={trendingMovies} />
            <MovieGrid title="Top Rated Movies" movies={topRatedMovies} />
          </>
        )}
      </main>

      <footer className="bg-white border-t mt-12">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Legal</h3>
              <div className="space-y-2">
                <a href="/privacy" target="_blank" rel="noopener noreferrer" className="block text-gray-600 hover:text-blue-600">Privacy Policy</a>
                <a href="/terms" target="_blank" rel="noopener noreferrer" className="block text-gray-600 hover:text-blue-600">Terms of Service</a>
                <a href="/dmca" target="_blank" rel="noopener noreferrer" className="block text-gray-600 hover:text-blue-600">DMCA</a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">About</h3>
              <div className="space-y-2">
                <a href="/about" target="_blank" rel="noopener noreferrer" className="block text-gray-600 hover:text-blue-600">About Us</a>
                <a href="/contact" target="_blank" rel="noopener noreferrer" className="block text-gray-600 hover:text-blue-600">Contact</a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Follow Us</h3>
              <div className="space-y-2">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="block text-gray-600 hover:text-blue-600">Twitter</a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="block text-gray-600 hover:text-blue-600">Facebook</a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="block text-gray-600 hover:text-blue-600">Instagram</a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-gray-600">
            <p>© 2024 Tamilyogi Movie. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}