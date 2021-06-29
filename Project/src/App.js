import React from "react";
import Header from "./Components/Header";
import {Footer} from "./Components/Footer";
import DinningDelight from "./Components/Shops/DinningDelight";
import GoFoodie from "./Components/Shops/GoFoodie";
import GoldenGrills from "./Components/Shops/GoldenGrills";
import SweetRepeat from "./Components/Shops/SweetRepeat";
import SweetSurprise from "./Components/Shops/SweetSurprise";
import ThirstThrift from "./Components/Shops/ThirstThrift";
import { Background } from "./Components/HomePage/Background";
import { Category } from "./Components/HomePage/Category";
import Features from "./Components/HomePage/Features";
import { Deserts } from "./Components/FoodCategory/Deserts";
import { MainCourse } from "./Components/FoodCategory/MainCourse";
import {Work, Work2, Work3, Work4, Work5, Work6} from "./Components/CardComponent/Work";
import { SnacksBeverages } from "./Components/FoodCategory/SnacksBeverages";
import SignUp from "./Components/signup";
import Login from "./Components/login";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

export default function App() {

    return(
           <Router>
            <Header />
            <Switch>
                  <Route path="/signup">
                    <SignUp/>
                  </Route>
                  <Route path="/login">
                    <Login/>
                  </Route>
                    <Route exact path="/">

                        <Background />
                        <Features />
                        <Category />

                    </Route>
                    <Route path="/DinningDelight">
                    <DinningDelight />
                    <Work/>
                    </Route>
                    <Route path="/GoFoodie">
                        <GoFoodie />
                         <Work5/>
                    </Route>
                    <Route path="/GoldenGrills">
                    <GoldenGrills />
                        <Work6/>
                    </Route>
                    <Route path="/SweetRepeat">
                    <SweetRepeat />
                    <Work4/>
                    </Route>
                    <Route path="/SweetSurprise">
                        <SweetSurprise />
                    <Work2 />
                    </Route>
                
                    <Route path="/ThirstThrift">
                  <ThirstThrift />
                        <Work3/>
                    </Route>
                    <Route path="/Deserts">
                    <Deserts />
                    <Work2 />
                    <Work4/>
                    </Route>
                    <Route path="/MainCourse">
                        <MainCourse />
                                    <Work/>
                </Route>
                    
                    <Route path="/SnacksBeverages">
                        <SnacksBeverages />
                        <Work5/>
            <Work6/>
            <Work3/>
                    </Route>
                </Switch>
                <Footer/>
      </Router>
)}    
