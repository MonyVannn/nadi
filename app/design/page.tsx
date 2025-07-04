import React from "react";
import DesignHero from "../components/Design/DesignHero";
import DesignServices from "../components/Design/DesignServices";
import DesignManagement from "../components/Design/DesignManagement";
import DesignProjects from "../components/Design/DesignProjects";
import Footer from "../components/Footer";

function DesignPage() {
  return (
    <>
      <DesignHero />
      <DesignServices />
      <DesignManagement />
      <DesignProjects />
      <Footer />
    </>
  );
}

export default DesignPage;
