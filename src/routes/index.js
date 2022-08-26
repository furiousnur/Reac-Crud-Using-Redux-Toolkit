import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "../pages/Home";
import Error from "../pages/Error";
import Navbar from "../layouts/Navbar";
import AddBook from "../features/books/AddBook";
import BooksView from "../features/books/BooksView";

const Index = () => {
    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home />}/> 
                <Route path="/add-book" element={<AddBook />}/> 
                <Route path="/show-books" element={<BooksView />}/> 
                <Route path="*" element={<Error />}/> 
            </Routes>
        </BrowserRouter>
    );
};

export default Index;
