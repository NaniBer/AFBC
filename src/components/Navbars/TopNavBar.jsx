import React, { useState, useEffect } from "react";
import classnames from "classnames";
import {
  Button,
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
} from "reactstrap";

const TopNavbar = () => {
  const [navbarColor, setNavbarColor] = useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    // Toggle the navbar color based on the navbarCollapse state
    setNavbarColor(navbarCollapse ? "navbar-transparent" : "");
    document.documentElement.classList.toggle("nav-open");
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const sectionPosition =
        section.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: sectionPosition,
        behavior: "smooth",
      });
      // Close navbar after clicking on a link
      if (window.innerWidth <= 768) {
        toggleNavbarCollapse();
      }
    }
  };

  useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        // Set the navbar color to a non-transparent color when scrolled
        setNavbarColor("#1b2d7b");
      } else {
        // Set the navbar color to transparent when not scrolled
        setNavbarColor("navbar-transparent");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return () => {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  }, []);

  return (
    <Navbar
      className={classnames("fixed-top", navbarColor)}
      expand="lg"
      style={{
        backgroundColor:
          navbarColor === "navbar-transparent" ? "transparent" : "#1b2d7b",
      }}
    >
      <Container>
        <div className="navbar-translate">
          <button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler navbar-toggler", {
              toggled: navbarCollapse,
            })}
            onClick={toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}
          onEntering={() => setNavbarColor("")}
          onExited={() => setNavbarColor("navbar-transparent")}
        >
          <Nav navbar>
            <NavItem>
              <NavLink
                data-placement="bottom"
                onClick={() => scrollToSection("About")}
                style={{ cursor: "pointer", color: "white" }}
              >
                <p>About</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                onClick={() => scrollToSection("News")}
                style={{ cursor: "pointer", color: "white" }}
              >
                <p>News</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                onClick={() => scrollToSection("Events")}
                style={{ cursor: "pointer", color: "white" }}
              >
                <p>Events</p>
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                data-placement="bottom"
                onClick={() => scrollToSection("Results")}
                style={{ cursor: "pointer", color: "white" }}
              >
                <p>Results</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                onClick={() => scrollToSection("Documentation")}
                style={{ cursor: "pointer", color: "white" }}
              >
                <p>Documentation</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                onClick={() => scrollToSection("Boxers")}
                style={{ cursor: "pointer", color: "white" }}
              >
                <p>Notable boxers</p>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
};

export default TopNavbar;
