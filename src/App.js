import { Routes, Route } from "react-router-dom";

import Layout from "./ui/Layout";
import Posts from "./components/Posts";

import "./App.scss";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/">
          <Posts />
        </Route>
        <Route path="/posts">
          <Posts />
        </Route>
      </Routes>
    </Layout>
  );
}
