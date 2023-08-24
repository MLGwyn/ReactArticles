import React from 'react'

type NewsArticleProps = {
  title: string
  body: string
}

export function NewsArticle(props: NewsArticleProps) {
  return (
    <article className="intro-article">
      <h2 className="article-title">{props.title}</h2>
      <p>{props.body}</p>
      <a className="read-more" href="#here">
        read more about {props.title}
      </a>
    </article>
  )
}
