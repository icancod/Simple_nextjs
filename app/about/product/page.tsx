"use client";
import { useState, useEffect } from 'react';


interface Article {
  title: string;
  description: string;
  publishedAt: string;
  source: {
    name: string;
  };

}

export default function NewsFeed() {
 
  const [news, setNews] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
      
        
        const response = await fetch(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=b21289122ab249118ff6d3ef1f7f0514"  
        );
        
        if (!response.ok) {
          throw new Error('Failed to fetch news');
        }
        
        const data = await response.json();
        setNews(data.articles || []);
      } catch (error) {
        console.error('Error fetching news:', error);
        setError(error instanceof Error ? error.message : 'An error occurred');
        
        // Fallback data
        setNews([
          {
            title: 'Stock Markets Reach All-Time High',
            description: 'Global markets surged as economic data exceeded expectations.',
            publishedAt: new Date().toISOString(),
            source: { name: 'Financial News' }
          },
          {
            title: 'Tech Giants Announce New AI Partnership',
            description: 'Leading companies collaborate on ethical AI development framework.',
            publishedAt: new Date().toISOString(),
            source: { name: 'Tech Daily' }
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return (
      <div className="p-4 flex justify-center items-center h-40">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
        <span className="ml-2">Loading news...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 bg-red-50 border border-red-200 rounded-md">
        <h3 className="text-red-800 font-semibold">Error</h3>
        <p className="text-red-600">{error}</p>
        <p className="text-sm text-gray-600 mt-2">Showing sample data instead.</p>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Business News</h2>
      <div className="space-y-4">
        {news.map((article, index) => (
          <div key={index} className="border-b pb-4 last:border-b-0">
            <h3 className="font-semibold text-lg">{article.title}</h3>
            <p className="text-gray-600 text-sm mt-1">{article.description}</p>
            <div className="flex justify-between mt-2 text-xs text-gray-500">
              <span>{article.source.name}</span>
              <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}