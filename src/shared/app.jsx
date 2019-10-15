import React from 'react'
import { Switch } from 'react-router'
import { Route } from 'react-router-dom'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import { APP_NAME } from './config'

import UserRouteHOC from './component/hocRoutes/UserRouteHOC'
import AdminRouteHOC from './component/hocRoutes/AdminRouteHOC'


import {
  HOME_PAGE_ROUTE,
  DASHBOARD_PAGE_ROUTE,
  CREATE_STORY_ROUTE,
  ADMIN_PAGE_ROUTE
} from './routes'

const AppContainer = styled.div`
  margin:0;
  padding:0;
  overflow:hidden;
`
import Loadable from 'react-loadable';



const Nav = Loadable({
  loader: () => import('./component/nav'),
  loading() {
    return <div>Loading...</div>
  }
});


const HomePage = Loadable({
  loader: () => import('./container/homePage'),
  loading() {
    return <div>Loading...</div>
  }
});


const DashboardPage = Loadable({
  loader: () => import('./component/pages/DashboardPage'),
  loading() {
    return <div>Loading...</div>
  }
});

const CreateStory = Loadable({
  loader: () => import('./container/createStory'),
  loading() {
    return <div>Loading...</div>
  }
});

const Register = Loadable({
  loader: () => import('./component/pages/Register'),
  loading() {
    return <div>Loading...</div>
  }
});

const ConfirmationPage = Loadable({
  loader: () => import('./component/pages/ConfirmationPage'),
  loading() {
    return <div>Loading...</div>
  }
});

const CategoryPage = Loadable({
  loader: () => import('./container/categoryPage'),
  loading() {
    return <div>Loading...</div>
  }
});

const BlogPage = Loadable({
  loader: () => import('./container/blogPage'),
  loading() {
    return <div>Loading...</div>
  }
});



const CommentPage = Loadable({
  loader: () => import('./container/commentPage'),
  loading() {
    return <div>Loading...</div>
  }
});

const AdminPage = Loadable({
  loader: () => import('./component/pages/AdminPage'),
  loading() {
    return <div>Loading...</div>
  }
});

const NotFoundPage = Loadable({
  loader: () => import('./component/page/not-found'),
  loading() {
    return <div>Loading...</div>
  }
});




const App = () =>
  <AppContainer>
    <Helmet titleTemplate={`%s | ${APP_NAME}`} defaultTitle={APP_NAME} />
    <Nav />
    <Switch>
      <Route exact path={HOME_PAGE_ROUTE} render={() => <HomePage />} />
      <UserRouteHOC exact path={DASHBOARD_PAGE_ROUTE} component={DashboardPage} />
      <UserRouteHOC exact path={CREATE_STORY_ROUTE} component={CreateStory} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/confirmation/:token" component={ConfirmationPage} />
      <Route exact path="/category/:categoryname" render={() =><CategoryPage />}/>
      <Route exact path="/:username/:blogparam" render={() => <BlogPage />}/>      
      <Route exact path="/blog/:blogid/comments/show" render={() => <CommentPage />}/>
      <AdminRouteHOC exact path={ADMIN_PAGE_ROUTE} component={AdminPage} />
      <Route component={NotFoundPage} />
    </Switch>         
  </AppContainer>
export default App