"use client"

import { useState, useEffect } from "react"
import axios from "axios"
import { Calendar, Tag } from "lucide-react"

const News = () => {
  const [news, setNews] = useState([])

  useEffect(() => {
    axios
      .get("/api/news")
      .then((response) => setNews(response.data))
      .catch((error) => console.error("Error fetching news:", error))
  }, [])

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">News & Updates</h1>
          <p className="text-xl text-muted-foreground max-w-3xl text-pretty">
            Stay informed about the latest developments, events, and announcements from SOSER Union.
          </p>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((article) => (
              <article
                key={article.id}
                className="bg-card rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <img
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      {new Date(article.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </div>
                    <div className="flex items-center gap-1">
                      <Tag size={16} />
                      {article.category}
                    </div>
                  </div>
                  <h2 className="text-xl font-bold mb-3 text-balance">{article.title}</h2>
                  <p className="text-muted-foreground leading-relaxed">{article.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default News
