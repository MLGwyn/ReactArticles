import React from 'react'
import { NewsArticle } from './components/NewsArticle'
import articles from './articles.json'
import image from './images/westley.jpeg'

export function App() {
  const newsArticlesFromData = articles.map((article) => (
    <NewsArticle key={article.id} title={article.title} body={article.body} />
  ))

  return (
    <div className="all-main-content">
      <img width={450} src={image} alt="Awesomeness Defined" />
      <main>{newsArticlesFromData}</main>
    </div>
  )
}
