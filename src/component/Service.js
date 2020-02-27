import React, { Component } from 'react'
import Title from './Title'
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa'
export default class Service extends Component {
    state={
       services:[
           {
               icon:<FaCocktail/>,
               title:"free cocktails",
               info:`lorem ipsom dolor sit lorem ipsom dolor sit lorem ipsom dolor sit
                lorem ipsom dolor sit lorem ipsom`
           },
           {
                icon:<FaHiking/>,
                title:"Endless hiking",
                info:`lorem ipsom dolor sit lorem ipsom dolor sit lorem ipsom dolor sit
                 lorem ipsom dolor sit lorem ipsom`
            },
            {
                icon:<FaShuttleVan/>,
                title:"free shuttle",
                info:`lorem ipsom dolor sit lorem ipsom dolor sit lorem ipsom dolor sit
                 lorem ipsom dolor sit lorem ipsom`
            },
            {
                icon:<FaBeer/>,
                title:"strongest beer",
                info:`lorem ipsom dolor sit lorem ipsom dolor sit lorem ipsom dolor sit
                 lorem ipsom dolor sit lorem ipsom`
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="services"/>
                <div className="services-center">
                    {
                        this.state.services.map((item, index)=>{
                            return (
                                <article key={index} className="service">
                                    <span>{item.icon}</span>
                                    <h6>{item.title}</h6>
                                    <p>{item.info}</p>                               
                                </article>
                            )
                        })
                    }
                </div>
            </section>
        )
    }
}
