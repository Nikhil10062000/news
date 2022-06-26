import React , {useEffect, useState}from 'react'
import {Row ,Col} from 'react-bootstrap'
import NewsItem from './NewsItem'
const News = () => {
const [article , setArticle] = useState([]);

useEffect(()=>{

   loadNews();
},[])
const loadNews =()=>{
  const url = ' https://newsapi.org/v2/everything?q=Apple&from=2022-06-26&sortBy=popularity&apiKey=75a2eb776f6241718b558bf64e2b60a6'
  fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data.articles)
    setArticle(data.articles)
  })
}
  return (
    <><Row>
      {article.map((elem , idx)=>{
        return (
          
         <Col sm={4} key={idx}> <NewsItem elem={elem} />
         </Col>
        )
      })}</Row>
      </>
  )
}

export default News
