import React from 'react';
import { createRoot, Root } from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import App from './App';
import About from './routes/About';
import Contact from './routes/Contact';
import Blog from './routes/Blog';

const rootElement: HTMLElement = document.getElementById('root')!;
const root: Root = createRoot(rootElement);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="blog" element={<Blog />} />
      </Route>
    </Routes>
  </BrowserRouter>,
);
