import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRouter } from '@/Routes';
import { DefaultLayout } from '@/components/Layouts';
import { Fragment } from 'react';
function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRouter.map((route, index) => {
                        let Layout = DefaultLayout;
                        const Page = route.component;
                        
                        if(route.layout){
                            Layout = route.layout;
                        }
                        else if(route.layout === null){
                            Layout = Fragment
                        }
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
