import React, { Suspense, lazy } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


const Home = lazy(() => import('./component/Home'));



function App() {
  return (
     <div>
       <Router>
         <Suspense fallback={<div>Loading...</div>}>
           <Switch>
             <Route exact path="/" component={Home}/>

           </Switch>
         </Suspense>
       </Router>
     </div>
  );
}

export default App;
