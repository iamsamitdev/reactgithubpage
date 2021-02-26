import {HashRouter, Route, Switch } from 'react-router-dom'
import AuthLayout from './components/layouts/auth/AuthLayout'
import BackendLayout from './components/layouts/backend/BackendLayout'
import Dashboard from './pages/backend/dashboard/Dashboard'
import Product from './pages/backend/product/Product'
import Forgotpassword from './pages/forgotpassword/Forgotpassword'
import Login from './pages/login/Login'
import PageNotFound from './pages/pagenotfound/PageNotFound'
import Register from './pages/register/Register'

const AppRoute = ({component: Component, layout: Layout, ...rest}) => (
    <Route {...rest} render={props=>(
        <Layout><Component {...props}></Component></Layout>
    )}></Route>
)

const Routes = () => {

    return (

        <HashRouter basename={'/reactgithubpage'}>

            <Switch>

                {/* Frontend */}
                <AppRoute path="/" exact={true} layout={AuthLayout} component={Login} />
                <AppRoute path="/login" layout={AuthLayout} component={Login} />
                <AppRoute path="/register" layout={AuthLayout} component={Register} />
                <AppRoute path="/forgotpassword" layout={AuthLayout} component={Forgotpassword} />
                

                {/* Backend */}
                <AppRoute path="/backend/dashboard" layout={BackendLayout} component={Dashboard} />
                <AppRoute path="/backend/product" layout={BackendLayout}component={Product} />
    
                {/* 404 Page Not found */}
                <AppRoute layout={AuthLayout} component={PageNotFound} />

            </Switch>

        </HashRouter>

    )
}

/*
const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>

                <Route path='/backend/:path?' exact render={(props)=>(

                    <BackendLayout {...props}>
                        <Switch>
                            
                            <Route path="/backend/dashboard" component={Dashboard} />
                            <Route path="/backend/product" component={Product} />
                        </Switch>

                    </BackendLayout>
            
                )}/>

                <Route render={(props)=>(
                    <AuthLayout {...props}>
                    
                    <Switch>
                        <Route path="/" exact={true} component={Login} />
                        <Route path="/login" component={Login} />
                        <Route path="/register" component={"Register"} />
                        <Route path="/forgotpassword" component={"Forgotpassword"} />
                        <Route component={PageNotFound} />
                    </Switch>

                    </AuthLayout>
                )} />   

            </Switch>
        </BrowserRouter>
    )
}

*/

export default Routes