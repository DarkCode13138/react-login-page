import React from 'react';
import  Header from './components/header/header';
import MainBaner from './components/mainBaner/mainBaner';
import  TodoList from './components/todoList/todoList';
import Forishack from './components/forishack/forishack';
import Reward from './components/reward/reward';
import UseGuide from './components/UseGuide/UseGuide';
import Faq from './components/Faq/Faq';
import MainForm from './components/MainForm/Main_form';
import Footer from './components/Footer/Footer';


import './App.css';

const App = () =>  {
  return (
    <div className="App">
    <Header/>
    <MainBaner/>
    <TodoList/>
    <Forishack/>
    <Reward/>
    <UseGuide/>
    <Faq/>
    <MainForm/>
    <Footer/>

    </div>
  );
}

export default App;
