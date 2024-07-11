import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {

    constructor() {
        super();
        this.state = {
            articles : [],
            loading : false,
            page : 1,
            pageSize : 9,
            totalResults : 0
        }
    }
    
    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=cfabeabea85c4c488e0e92fac54ef503&page=1&pageSize=9`;

        let data = await fetch(url);
        let parseData = await data.json();
        console.log(parseData);

        this.setState({
            articles : parseData.articles,
            totalResults : parseData.totalResults
        })
    }

    handlePreviousClick = async()=> {
        console.log("previous click");
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=cfabeabea85c4c488e0e92fac54ef503&page=${this.state.page - 1}&pageSize=9`;

        let data = await fetch(url);
        let parseData = await data.json();
        console.log(parseData);

        this.setState({
            articles : parseData.articles,
            page : this.state.page - 1
        })
    }

    handleNextClick = async()=> {
        console.log("next click");
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=cfabeabea85c4c488e0e92fac54ef503&page=${this.state.page + 1}&pageSize=9`;

        let data = await fetch(url);
        let parseData = await data.json();
        console.log(parseData);

        this.setState({
            articles : parseData.articles,
            page : this.state.page + 1
        })
    }

    render() {
        return (
        <div className='container my-3'>
            <h2>News Top Headlines...</h2>
                <div className="row">
                    {this.state.articles.map((element)=> {
                        return (<div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} readMoreUrl={element.url} />
                        </div>)
                    })}
                
            </div>
            <div className="container d-flex justify-content-between">
                <button disabled= {this.state.page<=1} className="btn btn-dark" onClick={this.handlePreviousClick}> &larr; Previous </button>
                <button disabled={this.state.page > (this.state.totalResults/this.state.pageSize)} className="btn btn-dark" onClick={this.handleNextClick}> Next &rarr; </button>
            </div>
        </div>
        )
    }
}
