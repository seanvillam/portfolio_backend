import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './src/about'
import Contact from './src/contact'
import Project from './src/project'
import Layout from './components/Layout'
import References from './src/references'
import Services from './src/services'
import Counter from './src/counter'
import AdminDashboard from "./src/admin";

const MainRouter = () => {
            // The Layout component is included here so that it is displayed on all pages
            // The Routes component defines the different routes for the application and which component to render for each route
    return (<div>
        <Layout />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/project" element={<Project />} />
            <Route path="/references" element={<References />} />
            <Route path="/services" element={<Services />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/users" element={<h2>Manage Users</h2>} />
            <Route path="/admin/users/add" element={<h2>Add Users</h2>} />
            <Route path="/admin/users/edit:id" element={<h2>Edit Users</h2>} />
            <Route path="/admin/projects" element={<h2>Manage Projects</h2>} />
            <Route path="/admin/projects/add" element={<h2>Add Projects</h2>} />
            <Route path="/admin/projects/edit:id" element={<h2>Edit Projects</h2>} />
            <Route path="/admin/services" element={<h2>Manage Services</h2>} />
            <Route path="/admin/services/add" element={<h2>Add Services</h2>} />
            <Route path="/admin/services/edit:id" element={<h2>Edit Services</h2>} />
            <Route path="/admin/references" element={<h2>Manage References</h2>} />
            <Route path="/admin/references/add" element={<h2>Add References</h2>} />
            <Route path="/admin/references/edit:id" element={<h2>Edit References</h2>} />
        </Routes>
    </div>)
}
export default MainRouter