import React, {useState, useEffect} from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

const News = (props) => {




   const capitalizeFirstLetter=(string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
   const [articles, setArticles] = useState([])
   const [page, setPage] =useState(1);
   const [loading , setLoading] = useState(false)
   const [totalResults, setTotalResults] = useState([])

  
  useEffect(() => { 
     
       console.log("useEffect i am call");
       fetchingData();
  document.title = capitalizeFirstLetter(`${props.category} -iNews `)

     
   }, [])
   
    const fetchingData = async()=>{
      console.log("FETCHING CALL")
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=cf1a0755d79c4196b5d23968abc6e3de&page=1&pageSize=${props.pageSize}`;
        setLoading(true);
        let data = await fetch(url);
        let parseData =await data.json();
        console.log(parseData)
        setArticles(parseData.articles)
        setTotalResults(parseData.totalResults)
        setLoading(false)
        
    }
   const handleNext = async() =>{
        console.log("click was invoked next")
        if(!(page + 1 > Math.ceil(totalResults/props.pageSize))){
            let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=cf1a0755d79c4196b5d23968abc6e3de&page=${page + 1}&pageSize=${props.pageSize}`;
           setLoading(true)
        
            let data = await fetch(url);
            let  parseData =await data.json()
           setPage(page + 1);
           setArticles(parseData.articles);
           setLoading(false);
        }
       
    }
   const handlePrevious = async () =>{
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=cf1a0755d79c4196b5d23968abc6e3de&page=${page - 1}&pageSize=${props.pageSize}`;
        setLoading(true)
        
        let data = await fetch(url);
        let  parseData =await data.json()
        setPage(page - 1);
        setArticles(parseData.articles);
           setLoading(false);
       
        
    }
 
    return (
       
      <div className='container my-3'>
          <h2 className='text-center'>iNews Top Headlines From {capitalizeFirstLetter(`${props.category}`)}</h2>
          <hr />
          <div className='text-center'>

          {loading && <Spinner />}
          </div>
          <div className='row'>
                    {
                        !loading && articles.map((elements)=>{
                            return   <div className='col-md-4' key={elements.url}>
                                            <NewsItems title={elements.title? elements.title.slice(0,45):""} 
                                            description = {elements.description? elements.description.slice(0,60) :""} 
                                            newsUrl={elements.url}imgUrl={elements.urlToImage}
                                             date={elements.publishedAt} author={elements.author} source={elements.source} />
                                    </div>

                        })
                    }
          </div>
          <div className='contianer d-flex justify-content-between'>
                <button disabled={page<=1} type="button" className='btn btn btn-dark' onClick={handlePrevious}>&larr; Preious</button>
                <button disabled={page + 1 > Math.ceil(totalResults/props.pageSize)} className='btn btn btn-dark' onClick={handleNext}>Next &rarr;</button>

          </div>
          

      </div>
    )
  }


News.defaultProps ={
  country: "us",
  pageSize: 6,
  category: "general"
}
News.propTypes = {
country: PropTypes.string,
pageSize: PropTypes.number,
category: PropTypes.string,

}
export default News