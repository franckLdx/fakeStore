import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClientProvider } from 'react-query'
import { RouterProvider } from 'react-router-dom'
import { ErrorBoundary } from './pages/ErrorBoundary'
import { LoadingPage } from './pages/loaderPage/LoadingPage'
import { router } from './routing'
import { queryClient } from './services/reactQuery'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={<LoadingPage />}>
          <RouterProvider router={router} />
        </Suspense>
      </QueryClientProvider>
    </ErrorBoundary>
  </React.StrictMode>,
)
