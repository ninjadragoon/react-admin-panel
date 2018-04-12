import React, { Component } from 'react';
class Page2 extends Component {

  render() {
    return (     
      <div>
        <h1 className="animated fadeIn">Page 2</h1>
        <p>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
        </p>
        <div>
        <div className="card bg-danger">
              <div className="card-body">
                  <blockquote className="blockquote mb-0">
                      <p className="text-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                      <footer className="blockquote-footer text-light">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                  </blockquote>
              </div>
          </div>

          <div className="card">
              <div className="card-header">
                  <strong className="card-title">Card with Label <small><span className="badge badge-danger float-right mt-1">49</span></small></strong>
              </div>
              <div className="card-body">
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
          </div>

          <div className="card">
              <div className="card-body">
                  <div className="stat-widget-one">
                      <div className="stat-icon dib"><i className="ti-layout-grid2 text-warning border-warning"></i></div>
                      <div className="stat-content dib">
                          <div className="stat-text">Active Projects</div>
                          <div className="stat-digit">770</div>
                      </div>
                  </div>
              </div>
          </div>

        </div>
      </div>
    );
  }
}

export default Page2;
