import React, { Component } from "react";
import TransitionAnim from "./transitionAnim";

class Columns extends Component {
  state = {};
  render() {
    return (
      <TransitionAnim>
        <div className="container columns">
          <div className="row m-0">
            <div className="col-lg-4 d-flex">
              <div className="col-12 wrapper">
                <h2>Multiple Columns</h2>
                <p className="m-0">
                  Set true or false in HTML page line number 40 to turn on off
                  page color. Mauris elit elit, imperdiet nec lorem sed, finibus
                  maximus mauris. Nam laoreet eros nec convallis placerat.
                </p>
              </div>
            </div>

            <div className="col-lg-4 d-flex">
              <div className="col-12 wrapper">
                <h2>Class aptent taciti</h2>
                <p className="m-0">
                  Aenean congue nulla et ligula consectetur consequat. Nullam
                  fringilla blandit risus vitae auctor. Donec sed sapien varius,
                  tincidunt nulla ut, ultrices nisl.
                </p>
              </div>
            </div>

            <div className="col-lg-4 d-flex">
              <div className="col-12 wrapper">
                <h2>Aenean auctor</h2>
                <p className="m-0">
                  Integer enim tortor, tempor quis augue luctus, condimentum
                  porttitor urna. Maecenas condimentum suscipit tortor vitae
                  convallis.
                </p>
              </div>
            </div>

            <div className="col-lg-6 d-flex">
              <div className="col-12 wrapper">
                <h2>Nulla vitae magna</h2>
                <p className="m-0">
                  Donec at felis at risus mattis efficitur. Pellentesque dui
                  urna, blandit a congue ut, blandit sed eros. Sed sagittis
                  consequat pellentesque. Vivamus eros turpis, lobortis sed
                  fermentum euismod, vehicula id eros.
                </p>
              </div>
            </div>

            <div className="col-lg-6 d-flex">
              <div className="col-12 wrapper">
                <h2>Pellentesque dui urna</h2>
                <p className="m-0">
                  Maecenas porta placerat lacus a lacinia. In imperdiet cursus
                  erat, luctus molestie lorem congue at. Donec fringilla tortor
                  non ipsum semper, sit amet aliquet magna rutrum.
                </p>
              </div>
            </div>

            <div className="col-lg-12 d-flex">
              <div className="col-12 wrapper">
                <h2>One Single Column</h2>
                <p>
                  You can simply set var tm_gray_site = true; or var
                  tm_gray_site = false; in the HTML top script tag to enable /
                  disable gray scale or color of the page. Vivamus sit amet
                  scelerisque diam. Donec congue feugiat consectetur. Donec
                  facilisis, elit non suscipit pretium, lacus quam feugiat
                  nulla, id tempus libero tellus ut nisi. Mauris non mi
                  molestie, tristique nibh eu, auctor nibh. Fusce accumsan
                  pretium ex in ullamcorper.
                </p>
                <p className="m-0">
                  Ut blandit nisi purus, eget imperdiet sapien sodales et. Duis
                  euismod, elit in laoreet cursus, ante diam facilisis lacus,
                  sit amet aliquam odio quam ut libero. Proin bibendum ex nec
                  lorem semper euismod. Nulla sed urna at ligula maximus
                  blandit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </TransitionAnim>
    );
  }
}

export default Columns;
