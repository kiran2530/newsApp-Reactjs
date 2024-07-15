import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';

export default class News extends Component {

    capatilize(title) {
        return title.charAt(0).toUpperCase() + title.slice(1);
    }
    constructor(props) {
        super(props);
        this.state = {
            articles : [],
            loading : true,
            page : 1,
            totalResults : 0
        }

        document.title = `${this.capatilize(this.props.category)} - news`;
    }

    async updateNews() {
        this.props.setProgress(1);
        try{
            const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=cfabeabea85c4c488e0e92fac54ef503&page=${this.state.page}&pageSize=${this.props.pageSize}`;

            this.setState({
                loading : true
            })

            this.props.setProgress(10);

            let data = await fetch(url);
            this.props.setProgress(30);
            let parseData = await data.json();
            this.props.setProgress(70);
            console.log(parseData);

            this.setState({
                articles : parseData.articles,
                totalResults : parseData.totalResults,
                loading : false
            })
            this.props.setProgress(100);
        }
        catch(err) {
            console.log(err);
        }
        
    }

    fetchMoreData = async ()=> {
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=cfabeabea85c4c488e0e92fac54ef503&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;

        this.setState({page : this.state.page + 1})

            this.setState({
                loading : true
            })

            this.props.setProgress(10);

            let data = await fetch(url);
            this.props.setProgress(30);
            let parseData = await data.json();
            this.props.setProgress(70);
            console.log(parseData);

            this.setState({
                articles : this.state.articles.concat(parseData.articles),
                totalResults : parseData.totalResults,
                loading : false
            })
            this.props.setProgress(100);
    }
    
    async componentDidMount() {
        this.updateNews();
    }

    handlePreviousClick = async()=> {
        console.log("previous click");
        
        this.setState({page : this.state.page - 1})
        this.updateNews()
    }

    handleNextClick = async()=> {
        console.log("next click");
        
        this.setState({page : this.state.page + 1})
        this.updateNews()
    }

    render() {
        return (
        <div className='container my-3'>
            <h2 className='text-center ' style={{marginTop: '70px'}}>{this.props.title}</h2>

            {/* spinner component  */}
            {this.state.loading && <Spinner/>}
            <InfiniteScroll
                dataLength={this.state.articles.length}
                next={this.fetchMoreData}
                hasMore={this.state.articles.length !== this.state.totalResults}
                loader={<Spinner/>}
            >
            
            <div className="container">
                <div className="row">
                    {this.state.articles.map((element)=> {
                        return (<div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} readMoreUrl={element.url} date={element.publishedAt} />
                        </div>)
                    })}
                </div>
            </div>
                
            </InfiniteScroll>
        </div>
        )
    }
}
