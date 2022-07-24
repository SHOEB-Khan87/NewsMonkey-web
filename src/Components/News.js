import React,{useState,useEffect} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

const News = (props)=> {
  const [articles,setArticles] = useState([])
  const [loading,setLoading] = useState(false)
  const [page,setPage] = useState(1)
  const [totalResults,setTotalResults] = useState(0)
    
        
    
   const updateNews = async ()=> {
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?&country=${props.country}&category=${props.category}&apiKey=5b1734ed28f0462ab7d42f33c307602d&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true)
        let data = await fetch(url);
        props.setProgress(30);
        let parsedData = await data.json();
        props.setProgress(70);
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)
        
        props.setProgress(100);
   }
    useEffect(()=>{
        updateNews(); 
        document.title=`${props.category} - NewsMonkey`;
    },[])
    
    // handlePrevious = async () => {

    //     this.setState({
    //         page: this.state.page - 1,
    //     });
    //     this.updateNews();
    // }
    // handleNext = async () => { 

    //     this.setState({
    //         page: this.state.page + 1,
    //     });
    //     this.updateNews();
    // }
   const fetchMoreData = async () => {
      const url = `https://newsapi.org/v2/top-headlines?&country=${props.country}&category=${props.category}&apiKey=5b1734ed28f0462ab7d42f33c307602d&page=${page +1}&pageSize=${props.pageSize}`;
setPage(page+1)
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
        setLoading(false)
        
      };
    


        return (
            <>
                
                    <h1 className="text-center" style={{ margin: '35px 0px', marginTop: '90px' }}>NewsMonkey - Top Headlines</h1>
                     {loading && <Spinner />} 
                    <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}
        >                          
                       <div className="container">
                    <div className="row">
                        {articles.map((element) => {
                            return <div className="col-md-4" key={element.url} >
                                <NewsItem  title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                            </div>
                        })}
                    </div>
                    </div>
                    </InfiniteScroll>
                    {/* <div className="container d-flex justify-content-between">
                        <button disabled={this.state.page <= 1} type="button" onClick={this.handlePrevious} className="btn btn-dark">&larr;previous</button>
                        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNext}>next&rarr;</button>
                    </div> */}
            
            </>
        )
                
                }
News.defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general'
}
News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}
export default News;