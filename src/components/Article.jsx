import React from 'react'
import { latestArticles } from '../constant'
const Article = () => {
  return (
    <div className="block-article">
    {latestArticles.map((article) => (
      <article className='block-article__article bg-white' key={article.title}>
        <img src={article.img} alt="" />
        <div className="p-space-xs">
          <small className='text-gray-blue size--1'>{article.by}</small>
          <a href="#" className='mt-space-xs'><h3 className='base'>{article.title}</h3></a>
          <p className='size--1 text-gray-blue mt-space-s'>{article.description}</p>
        </div>
      </article>
    ))}
  </div>
  )
}

export default Article