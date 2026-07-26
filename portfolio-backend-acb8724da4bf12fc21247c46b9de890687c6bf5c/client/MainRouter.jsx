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

import AddProject from "./src/admin/projects/AddProjects";
import EditProject from "./src/admin/projects/EditProjects";
import ProjectsList from "./src/admin/projects/ProjectsList";

import UsersList from "./src/admin/users/UsersList";

import ServiceList from "./src/admin/services/ServiceList";
import ServiceForm from "./src/admin/services/ServiceForm";

import ReferenceList from "./references/ReferenceList";
import ReferenceForm from "./references/ReferenceForm";

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

            <Route path="/admin/users" element={<UsersList />} />

            <Route path="/admin/projects" element={<ProjectsList/>} />
            <Route path="/admin/projects/add" element={<AddProject/>} />
            <Route path="/admin/projects/edit/:id" element={<EditProject/>} />

                <Route path="/admin/services" element={<ServiceList />} />
                <Route path="/admin/services/add" element={<ServiceForm />} />
                <Route path="/admin/services/edit/:id" element={<ServiceForm />} />

                <Route path="/admin/references" element={<ReferenceList />} />
                <Route path="/admin/references/add" element={<ReferenceForm />} />
                <Route path="/admin/references/edit/:id" element={<ReferenceForm />} />
        </Routes>
    </div>)
}
export default MainRouter