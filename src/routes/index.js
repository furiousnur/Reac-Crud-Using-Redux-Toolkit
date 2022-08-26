import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "../pages/Home";
import Error from "../pages/Error";
import Navbar from "../layouts/Navbar";
import AddBook from "../features/books/AddBook";
import BooksView from "../features/books/BooksView";
import Footer from "../layouts/Footer";

const Index = () => {
    return (
        <BrowserRouter>
            <Navbar/>
            <main>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/add-book" element={<AddBook />}/>
                    <Route path="/show-books" element={<BooksView />}/>
                    <Route path="*" element={<Error />}/>
                </Routes>
            </main>
            <Footer/>
        </BrowserRouter>
    );
};

export default Index;
