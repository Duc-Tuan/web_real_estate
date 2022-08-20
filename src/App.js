import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { DefaultLayout } from '~/layouts';
import { publicRouters } from '~/routers';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {publicRouters.map((router, index) => {
            const Page = router.component;

            let Layout = DefaultLayout;

            if (router.layout) {
              Layout = router.layout;
            } else if (router.layout === null) {
              Layout = <></>;
            }

            return (
              <Route
                key={index}
                path={router.path}
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
    </BrowserRouter>
  );
}

export default App;
