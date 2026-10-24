import React from 'react'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import { Home, User, Mail, Compass, Sparkles, ArrowRight, CheckCircle2, Globe, Shield, Zap } from 'lucide-react'

function Navbar() {
  const location = useLocation()
  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/about', label: 'About', icon: User },
    { path: '/contact', label: 'Contact', icon: Mail },
  ]

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-900/80 border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
            <Compass className="w-6 h-6 text-white" />
          </div>
          <div>
            <span className="font-bold text-lg text-white tracking-tight">ReactRouter<span className="text-cyan-400">Nav</span></span>
            <span className="block text-[11px] text-slate-400">Practical 11 • Single Page Navigation</span>
          </div>
        </div>

        <nav className="flex items-center gap-1 bg-slate-800/60 p-1.5 rounded-xl border border-slate-700/60">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = location.pathname === item.path
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-cyan-500 text-white shadow-md shadow-cyan-500/25'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{item.label}</span>
              </Link>
            )
          })}
        </nav>
      </div>
    </header>
  )
}

function HomePage() {
  return (
    <div className="space-y-10 animate-fadeIn">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800/80 to-slate-900 border border-slate-700/60 p-8 md:p-12 shadow-2xl">
        <div className="absolute top-0 right-0 -mt-12 -mr-12 w-80 h-80 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none"></div>
        <div className="max-w-2xl space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> Client-Side Routing Demonstration
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Seamless SPA Navigation with <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">React Router</span>
          </h1>
          <p className="text-slate-300 text-base md:text-lg leading-relaxed">
            Navigate between pages instantaneously without full page reload. BrowserRouter intercepts URL changes, keeping React state intact while rendering Route components dynamically.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-cyan-500/25"
            >
              Explore About Page <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 font-semibold text-sm transition-all duration-200"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all">
          <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-4">
            <Zap className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-white mb-2">Zero Page Refresh</h3>
          <p className="text-sm text-slate-400 leading-relaxed">
            Standard anchor tags (&lt;a&gt;) trigger a browser refresh. React Router's &lt;Link&gt; intercepts clicks using the HTML5 History API.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all">
          <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-4">
            <Globe className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-white mb-2">BrowserRouter</h3>
          <p className="text-sm text-slate-400 leading-relaxed">
            Uses clean, standard URL paths (/about, /contact) synchronized with the browser history stack.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all">
          <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4">
            <Shield className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-white mb-2">State Preservation</h3>
          <p className="text-sm text-slate-400 leading-relaxed">
            Component state and global store values persist during route transitions, enabling smooth Single Page App experiences.
          </p>
        </div>
      </div>
    </div>
  )
}

function AboutPage() {
  return (
    <div className="space-y-8 animate-fadeIn">
      <div className="rounded-3xl bg-slate-900/80 border border-slate-800 p-8 md:p-10 space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-semibold">
          About React Router v6
        </div>
        <h2 className="text-3xl font-extrabold text-white">Declarative Navigation for Modern Web</h2>
        <p className="text-slate-300 leading-relaxed">
          React Router is the standard routing library for React. It keeps your UI in sync with the URL through declarative component hierarchy.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
          <div className="p-5 rounded-xl bg-slate-800/40 border border-slate-700/60 space-y-2">
            <div className="flex items-center gap-2 text-cyan-400 font-semibold">
              <CheckCircle2 className="w-5 h-5" /> &lt;BrowserRouter&gt;
            </div>
            <p className="text-sm text-slate-400">
              The parent context provider that listens to browser history changes and provides routing context to the app tree.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-slate-800/40 border border-slate-700/60 space-y-2">
            <div className="flex items-center gap-2 text-cyan-400 font-semibold">
              <CheckCircle2 className="w-5 h-5" /> &lt;Routes&gt; & &lt;Route&gt;
            </div>
            <p className="text-sm text-slate-400">
              Matches the current window location to defined route paths and renders the corresponding element dynamically.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-slate-800/40 border border-slate-700/60 space-y-2">
            <div className="flex items-center gap-2 text-cyan-400 font-semibold">
              <CheckCircle2 className="w-5 h-5" /> &lt;Link&gt; Component
            </div>
            <p className="text-sm text-slate-400">
              Renders an accessible &lt;a&gt; tag with a default click handler prevented to push location into history without reloading.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-slate-800/40 border border-slate-700/60 space-y-2">
            <div className="flex items-center gap-2 text-cyan-400 font-semibold">
              <CheckCircle2 className="w-5 h-5" /> Custom Hooks
            </div>
            <p className="text-sm text-slate-400">
              Empowers components with useNavigate(), useLocation(), useParams(), and useSearchParams() for full programmatic control.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

function ContactPage() {
  const [submitted, setSubmitted] = React.useState(false)
  const [formData, setFormData] = React.useState({ name: '', email: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.name || !formData.email) return
    setSubmitted(true)
  }

  return (
    <div className="max-w-2xl mx-auto space-y-8 animate-fadeIn">
      <div className="rounded-3xl bg-slate-900/80 border border-slate-800 p-8 md:p-10 space-y-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold mb-3">
            Interactive Contact Form
          </div>
          <h2 className="text-3xl font-extrabold text-white">Get in Touch</h2>
          <p className="text-slate-400 text-sm mt-1">
            Notice how submitting this form or navigating back to Home retains the React state without browser refreshes.
          </p>
        </div>

        {submitted ? (
          <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
            <div className="w-12 h-12 mx-auto rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">Message Sent Successfully!</h3>
            <p className="text-sm text-slate-300">
              Thank you, <span className="font-semibold text-emerald-400">{formData.name}</span>. We received your query and will reply to <span className="font-semibold text-emerald-400">{formData.email}</span> shortly.
            </p>
            <button
              onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', message: '' }) }}
              className="mt-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs text-slate-200 font-semibold"
            >
              Send Another Message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Your Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Alex Morgan"
                className="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Email Address</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="alex@example.com"
                className="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Message</label>
              <textarea
                rows={4}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Write your thoughts or inquiry here..."
                className="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-cyan-500/25"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </div>
  )
}

export default function App() {
  const location = useLocation()
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100">
      <Navbar />

      <div className="bg-slate-900/40 border-b border-slate-800/60 py-2">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Current Route: <code className="text-cyan-400 font-mono bg-slate-800 px-2 py-0.5 rounded">{location.pathname}</code></span>
          </div>
          <span className="hidden sm:inline text-slate-500">React Router v6 • SPA Navigation</span>
        </div>
      </div>

      <main className="flex-1 max-w-6xl w-full mx-auto px-4 py-8 md:py-12">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>

      <footer className="border-t border-slate-800/80 bg-slate-900/60 py-6 text-center text-xs text-slate-400">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span>React Practical 11 • React Router Navigation</span>
          <span>Built with React, BrowserRouter, Route & Link</span>
        </div>
      </footer>
    </div>
  )
}
