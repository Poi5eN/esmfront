import React, { useEffect, useState } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { Navbar, Footer, Sidebar, ThemeSettings } from "../components";
// import { DashboardHome, Employees } from "./pages";
import "../App.css";
import { useStateContext } from "../contexts/ContextProvider";

const  AdminDashboard = () => {
  const {
    setCurrentColor,
    setCurrentMode,
    currentMode,
    activeMenu,
    currentColor,
    themeSettings,
    setThemeSettings,
    isLoggedIn,
    setisLoggedIn
  } = useStateContext();

  const [singleLog,setSingleLog] = useState(sessionStorage.getItem('userRole'));

  if( singleLog ){
    setisLoggedIn(isLoggedIn)
  }
  // console.log(isLoggedIn)

  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      {/* (isLoggedIn  ) && */}
      
      { (( isLoggedIn == 'admin' || (singleLog=='admin'))  ) && (
        <>
          <div className="flex relative dark:bg-main-dark-bg">
            <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
              <TooltipComponent content="Settings" position="Top">
                <button
                  type="button"
                  onClick={() => setThemeSettings(true)}
                  style={{ background: currentColor, borderRadius: "50%" }}
                  className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
                >
                  <FiSettings />
                </button>
              </TooltipComponent>
            </div>
            {activeMenu ? (
              <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
                <Sidebar />
              </div>
            ) : (
              <div className="w-0 dark:bg-secondary-dark-bg">
                <Sidebar />
              </div>
            )}
            <div
            // style={{background:currentColor}}
              className={
                activeMenu
                  ? (`dark:bg-main-dark-bg  min-h-screen md:ml-72 w-full overflow-x-hidden bg-[#fafbfb] `)
                  : (`dark:bg-main-dark-bg  w-full min-h-screen flex-2 overflow-x-hidden  bg-[#fafbfb] `)
              }
            >
              <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
                <Navbar />
              </div>
              <div>
                {themeSettings && <ThemeSettings />}
              </div>
              <Outlet/>
              <Footer />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AdminDashboard;
