import mongoose from 'mongoose';
import {
  homePage,
  dashboardPage,
  blogPage,
  commentPage
} from './controller' //partial states

import {
  HOME_PAGE_ROUTE,
  DASHBOARD_PAGE_ROUTE
} from '../shared/routes' //route endpoints

import renderApp from './render-app'

import BlogContent from './models/BlogContent'; 

export default (app) => {
  app.get(HOME_PAGE_ROUTE, (req, res) => {
    res.send(renderApp(req.url, homePage()))
  })
  
  app.get(DASHBOARD_PAGE_ROUTE, (req, res) => {
    res.send(renderApp(req.url, dashboardPage()))
  })


  //since /confirmation/:token was not handled from server side , /:username/:blogparam was handled instead which was giving here , hence handle this route 
  app.get("/confirmation/:token",(req,res)=>{
    res.send(renderApp(req.url, homePage()));
  });

  app.get("/category/:categoryname",(req,res)=>{
    res.send(renderApp(req.url, homePage()));
  });

  app.get("/:username/:blogparam",(req,res)=>{
    const splittedparam = req.params.blogparam.split('-');
    const id=splittedparam[splittedparam.length-1];
    BlogContent.findOne({_id:id})
      .then(blog=>{
        if(blog==null)
          res.status(404).send(renderApp('/not-found'));
        else
          res.send(renderApp(req.url,blogPage(blog)))
      })
      .catch(err=>{
          res.status(404).send('Oops something went wrong.');
      });

  });

  app.get("/blog/:blogid/comments/show",(req,res)=>{
    res.send(renderApp(req.url, commentPage()))
  })
  

  app.get('/500', () => {
    throw Error('Fake Internal Server Error')
  })

  app.get('*', (req, res) => {
    res.status(404).send(renderApp(req.url))
  })

  // eslint-disable-next-line no-unused-vars
  app.use((err, req, res, next) => {
    // eslint-disable-next-line no-console
    console.error(err.stack)
    res.status(500).send('Something went wrong!')
  })
}