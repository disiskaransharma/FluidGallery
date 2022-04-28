import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Navbar extends Component {
  state = {};

  navlinks = [
    {
      id: 1,
      name: "1st Fluid",
      path: "/gallery/1",
      bgColor: "#76c4e2",
      ftrColor: "#5f9db6",
    },
    {
      id: 2,
      name: "2nd Fluid",
      path: "/gallery/2",
      bgColor: "#e68984",
      ftrColor: "#b86d68",
    },
    {
      id: 3,
      name: "3rd Fluid",
      path: "/gallery/3",
      bgColor: "#e5b863",
      ftrColor: "#b79450",
    },
    {
      id: 4,
      name: "Columns",
      path: "/columns",
      bgColor: "#60c4b8",
      ftrColor: "#4d9d94",
    },
    {
      id: 5,
      name: "Message",
      path: "/contact",
      bgColor: "#7ea2d2",
      ftrColor: "#6583a7",
    },
  ];

  render() {
    return (
      <div className="container-fluid p-0">
        <div>
          <ul className="nav-items m-0 d-flex">
            <li>
              <i className="fa fa-picture-o" aria-hidden="true"></i> FLUID
              GALLERY
            </li>

            {this.navlinks.map((item) => {
              return (
                <li key={item.id} onClick={() => this.routeChange(item)}>
                  <NavLink to={item.path}>{item.name}</NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }

  routeChange = (item) => {
    document.body.style = `background: ${item.bgColor};`;
  };
}

export default Navbar;
