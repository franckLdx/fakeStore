import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { ErrorBoundary } from './pages/ErrorBoundary'
import { LoadingPage } from './pages/loaderPage/LoadingPage'
import { router } from './routing'
import { queryClient } from './services/reactQuery'
import { Provider as JotaiProvier } from 'jotai'
import { DevTools as JotaiDevTools } from 'jotai-devtools'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClientProvider } from '@tanstack/react-query'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ErrorBoundary>
      <JotaiProvier>
        <JotaiDevTools />
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <Suspense fallback={<LoadingPage />}>
            <RouterProvider router={router} />
          </Suspense>
        </QueryClientProvider>
      </JotaiProvier>
    </ErrorBoundary>
  </React.StrictMode>,
)
