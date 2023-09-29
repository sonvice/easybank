import React from 'react'
import { latestArticles } from '../constant'
const Article = () => {
  return (
    <div className="block-article">
    {latestArticles.map((article) => (
      <article className='block-article__article bg-white' key={article.title}>
        <img src={article.img} alt="" />
        <div className="p-space-m">
          <small className='text-gray-blue'>{article.by}</small>
          <a href="#" className='mt-space-s'><h3 className='size-1'>{article.title}</h3></a>
          <p className='text-gray-blue mt-space-s'>{article.description}</p>
        </div>
      </article>
    ))}
  </div>
  )
}

export default Article