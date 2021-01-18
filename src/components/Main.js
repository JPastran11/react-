import React from 'react'
import {Route} from 'react-router-dom'
import Home from './Home'
import ShopNow from './ShopNow'
import Contact from './Contact'

const Main = () => {
    return (
        <main>
           <blockquote>
               <h2>SUBSCRIBE TO MY NEWSLETTER</h2>
           Don´t miss the chance to know more about my products and you will also receive the best recipes workouts and nutritional tips.
    </blockquote>
            <Route path="/Home">
                <Home/>
            </Route>
            <Route path="/ShopNow">    
                <ShopNow/>
            </Route>
            <Route path="/Contact">
                <Contact/>
            </Route>
        </main>
    )
}

export default Main