import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export default class News extends Component {

    constructor() {
        super();
        this.state = {
            articles : [],
            loading : false,
            page : 1,
            totalResults : 0
        }
    }
    
    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=cfabeabea85c4c488e0e92fac54ef503&page=1&pageSize=${this.props.pageSize}`;

        this.setState({
            loading : true
        })

        let data = await fetch(url);
        let parseData = await data.json();
        console.log(parseData);

        this.setState({
            articles : parseData.articles,
            totalResults : parseData.totalResults,
            loading : false
        })
    }

    handlePreviousClick = async()=> {
        console.log("previous click");
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=cfabeabea85c4c488e0e92fac54ef503&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;

        this.setState({
            loading : true
        })

        let data = await fetch(url);
        let parseData = await data.json();
        console.log(parseData);

        this.setState({
            articles : parseData.articles,
            page : this.state.page - 1,
            loading : false
        })
    }

    handleNextClick = async()=> {
        console.log("next click");
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=cfabeabea85c4c488e0e92fac54ef503&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;

        this.setState({
            loading : true
        })

        let data = await fetch(url);
        let parseData = await data.json();
        console.log(parseData);

        this.setState({
            articles : parseData.articles,
            page : this.state.page + 1,
            loading : false
        })
    }

    render() {
        return (
        <div className='container my-3'>
            <h2 className='text-center'>{this.props.title}</h2>

            {/* spinner component  */}
            {this.state.loading && <Spinner/>}

                <div className="row">
                    {!this.state.loading && this.state.articles.map((element)=> {
                        return (<div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} readMoreUrl={element.url} />
                        </div>)
                    })}
                
            </div>
            <div className="container d-flex justify-content-between">
                <button disabled= {this.state.page<=1} className="btn btn-dark" onClick={this.handlePreviousClick}> &larr; Previous </button>
                <button disabled={this.state.page > (this.state.totalResults/this.props.pageSize)} className="btn btn-dark" onClick={this.handleNextClick}> Next &rarr; </button>
            </div>
        </div>
        )
    }
}
