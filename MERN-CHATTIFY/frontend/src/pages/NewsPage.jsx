import { useState, useEffect } from "react";
import { Newspaper, Bell, Star, AlertCircle } from "lucide-react";

const NewsPage = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const mockNews = [
      {
        id: 1,
        title: "New Chat Features Released!",
        content: "We're excited to announce new features including emoji reactions, file sharing, and improved message formatting. Try them out in your conversations!",
        timestamp: new Date().toISOString(),
        type: "update",
        icon: <Star className="w-5 h-5 text-yellow-500" />
      },
      {
        id: 2,
        title: "System Maintenance Notice",
        content: "Scheduled maintenance will occur on Sunday at 2 AM UTC. The service will be unavailable for approximately 30 minutes. We apologize for any inconvenience.",
        timestamp: new Date(Date.now() - 86400000).toISOString(), // 1 day ago
        type: "maintenance",
        icon: <AlertCircle className="w-5 h-5 text-orange-500" />
      },
      {
        id: 3,
        title: "New Mobile App Available",
        content: "Our new mobile app is now available on iOS and Android! Download it from the App Store or Google Play Store for a better chat experience on the go.",
        timestamp: new Date(Date.now() - 172800000).toISOString(), // 2 days ago
        type: "announcement",
        icon: <Bell className="w-5 h-5 text-blue-500" />
      }
    ];
    setNews(mockNews);
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 pt-20 pb-8">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center gap-2 mb-6">
          <Newspaper className="w-6 h-6 text-primary" />
          <h1 className="text-2xl font-bold">News & Updates</h1>
        </div>
        
        <div className="space-y-4">
          {news.map((item) => (
            <div
              key={item.id}
              className="bg-base-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2">
                  {item.icon}
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                </div>
                <span className="text-sm text-base-content/60">
                  {new Date(item.timestamp).toLocaleDateString()}
                </span>
              </div>
              <p className="mt-2 text-base-content/80 pl-7">{item.content}</p>
              <div className="mt-2 pl-7">
                <span className={`text-xs px-2 py-1 rounded-full ${
                  item.type === 'update' 
                    ? 'bg-primary/20 text-primary' 
                    : item.type === 'maintenance'
                    ? 'bg-warning/20 text-warning'
                    : 'bg-info/20 text-info'
                }`}>
                  {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsPage; 