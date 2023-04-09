import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClientProvider } from 'react-query'
import { RouterProvider } from 'react-router-dom'
import { ErrorBoundary } from './pages/ErrorBoundary'
import { LoadingPage } from './pages/loaderPage/LoadingPage'
import { router } from './routing'
import { queryClient } from './services/reactQuery'
import { Provider } from 'jotai'
import { DevTools } from 'jotai-devtools'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ErrorBoundary>
      <Provider>
        <DevTools />
        <QueryClientProvider client={queryClient}>
          <Suspense fallback={<LoadingPage />}>
            <RouterProvider router={router} />
          </Suspense>
        </QueryClientProvider>
      </Provider>
    </ErrorBoundary>
  </React.StrictMode>,
)
