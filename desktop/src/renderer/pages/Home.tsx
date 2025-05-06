import React from 'react'

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-8rem)] px-4">
      {/* App Icon */}
      <div className="flex justify-center mb-8">
        <div className="w-16 h-14 bg-primary rounded-lg flex items-center justify-center">
          <span className="text-4xl">✉️</span>
        </div>
      </div>

      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-2xl font-semibold mb-2">Your Smart Email Assistant Awaits.</h1>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Compose polished replies, summarize threads, or generate fresh emails in seconds<br />
          powered by AI designed for your workflow.
        </p>
      </div>

      {/* Main Card */}
      <div className="w-full max-w-xl max-h-4xl bg-light-card dark:bg-dark-card shadow-soft rounded-xl p-3">
        {/* Input Field */}
        <div className="relative">
          <input
            type="text"
            placeholder="Ask AI to draft, rewrite, or summarize your email instantly..."
            className="w-full px-3 pb-36 rounded-lg text-sm text-base font-medium border-0 text-gray-400 light:bg-light-card dark:bg-dark-card dark:text-dark-text placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-primary"
          />
          <button
            className="absolute right-1.5 bottom-1.5 text-3xl focus:ring-1 rounded-lg text-primary focus:ring-primary px-1 py-0"
            aria-label="Submit"
          >
            →
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home