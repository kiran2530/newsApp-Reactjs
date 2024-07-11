import React, { Component } from 'react'

export default class NewsItem extends Component {


    render() {
        let {title, description, imageUrl, readMoreUrl} = this.props;
        return (
        <div className='my-3'>
            <div className="card" style={{width: "18rem"}}>
            <img src={imageUrl ? imageUrl : "https://www.livemint.com/lm-img/img/2024/07/10/1600x900/Samsung_1720623289022_1720623294099.png"} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href={readMoreUrl} className="btn btn-primary">Read More</a>
            </div>
            </div>
        </div>
        )
  }
}
