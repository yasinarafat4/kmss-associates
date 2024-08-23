import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";
import Spinner from "../shared/Spinner";
import TopNav from "../shared/TopNav";

const Main = () => {
  // Set loading spinner
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  if (loading) {
    return <Spinner />;
  }
  return (
    <>
      <TopNav />
      <Navbar />
      <div className="min-h-[calc(100vh-324px)]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Main;
