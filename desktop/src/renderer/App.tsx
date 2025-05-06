import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import Inboxes from './pages/Inboxes';
import SmartCompose from './pages/SmartCompose';
import Summaries from './pages/Summaries';
import ScheduledEmails from './pages/ScheduledEmails';
import Drafts from './pages/Drafts';
import Insights from './pages/Insights';
import Settings from './pages/Settings';
import Support from './pages/Support';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="inboxes" element={<Inboxes />} />
        <Route path="smart-compose" element={<SmartCompose />} />
        <Route path="summaries" element={<Summaries />} />
        <Route path="scheduled" element={<ScheduledEmails />} />
        <Route path="drafts" element={<Drafts />} />
        <Route path="insights" element={<Insights />} />
        <Route path="settings" element={<Settings />} />
        <Route path="support" element={<Support />} />
      </Route>
    </Routes>
  );
}

export default App;
