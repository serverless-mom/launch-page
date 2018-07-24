module.exports = `
<style>
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700');

  body {
    background: #fff;
    width: 100%;
    height: 100%;
    color: #212529 !important;
    font-family: "Open Sans", sans-serif !important;
    font-size: 1rem !important;
    font-weight: normal !important;
    line-height: 1.5 !important;
  }

  h1 {
    margin-top: 70px !important;
    text-align: center;
    font-size: 3.8rem !important;
  }

  h2 {
    margin-top: 50px !important;
    font-size: 2.4rem !important;
  }

  h4 {
    margin-top: 20px !important;
  }

  a {
    color: #79CCB5 !important;
    text-decoration: none !important;
  }

  a:focus,
  a:hover {
    color: #72bfa9 !important;
    text-decoration: none !important;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  .h1,
  .h2,
  .h3,
  .h4,
  .h5,
  .h6 {
    margin-bottom: 0.5rem;
    font-family: inherit;
    font-weight: 700;
    line-height: 1.1;
    color: #3a3a3a;
  }

  .cont {
    min-width: 100%;
    max-height: 35vh;
    text-align: center;
  }

  .cont-within-cont {
    width: 50%;
    display: block;
    margin: 0 auto;
  }

  .logo-cont {
    position: relative;
    height: 100%;
    width: 50%;
    padding: 0 0 50% 0;
    display: block;
    margin: 0 auto;
  }

  #logo-top {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    -webkit-animation: falling-down 5s;
    animation: falling-down 5s;
  }

  #logo-bottom {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    -webkit-animation: falling-down 2.3s;
    animation: falling-down 2.3s;
  }

  @media (max-width:1299px) {
    #logo-top,
    #logo-bottom {
      width: 90vw !important;
    }
    .cont {
      max-height: 30vh;
    }
  }
  @media (max-width:991px) {
    .mobile-hidden {
      display: none !important;
    }
  }

  @-webkit-keyframes falling-down {
    0% {
      opacity: 0;
      -webkit-transform: translateY(-500px);
      transform: translateY(-500px);
    }
    75% {
      opacity: 1;
      -webkit-transform: translateY(20px);
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
  }

  @keyframes falling-down {
    0% {
      opacity: 0;
      -webkit-transform: translateY(-500px);
      transform: translateY(-500px);
    }
    75% {
      opacity: 1;
      -webkit-transform: translateY(20px);
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
  }

  .headline i {
    font-size: 3rem;
    font-weight: bold;
    color: #79CCB5 !important;
    margin-top: 10px !important;
  }

  .card,
  .card:hover,
  .card:focus,
  .card:active {
    background-color: transparent;
  }

  .card {
    color: #212529 !important;
    border-radius: 4px;
    box-sizing: border-box;
    display: flex;
    flex: 1 0 340px;
    flex-direction: column;
    justify-content: center;
    margin: 50px 0 30px;
    max-width: 100%;
    text-align: center;
  }

  .card-article {
    transition: all .3s;
    padding-bottom: 0 !important;
    border: none !important;
    min-height: 30vh;
    -webkit-box-shadow: 5.665px 9.429px 40px 0px rgba(0, 0, 0, 0.17);
    box-shadow: 5.665px 9.429px 40px 0px rgba(0, 0, 0, 0.17);
  }

  .card-article:hover {
    -webkit-transform: translateY(-5px) !important;
    transform: translateY(-5px) !important;
    -webkit-box-shadow: 5.665px 9.429px 40px 0px rgba(0, 0, 0, 0.27);
    box-shadow: 5.665px 9.429px 40px 0px rgba(0, 0, 0, 0.27);
  }

  .card-article-body {
    z-index: 200;
    padding: 35px;
  }

  .card-article .card-article-linker {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    text-decoration: none;
    /* No underlines on the link */
    z-index: 100;
    /* Places the link above everything else in the div */
    background-color: transparent;
    /* Fix to make div clickable in IE */
    opacity: 0;
    /* Fix to make div clickable in IE */
    filter: alpha(opacity=1);
    /* Fix to make div clickable in IE */
  }
</style>


<?xml version="1.0" encoding="UTF-8"?>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
  crossorigin="anonymous">
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.0/css/all.css" integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt"
  crossorigin="anonymous">

<h1>Hello, Stackery!</h1>
<div class="cont mobile-hidden">
  <div class="cont-within-cont">
  <div class="logo-cont">
    <svg id="logo-top" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
      <style type="text/css">
        .st0 {
          fill: #80CBB4;
        }
      </style>

      <g class="layer">
        <path class="st0" d="m0,94.404099c0,0 0,0.491688 0,0.491688c0,0.491688 0,0.491688 0.491688,0.983376c0,0 0,0.491688 0,0.491688c0,0.491688 0.491688,0.491688 0.491688,0.983376c0,0 0,0 0,0.491688c0.491688,0.491688 0.491688,0.491688 0.983376,0.983376c0,0 0,0 0.491688,0c0,0 0.491688,0.491688 0.983376,0.491688c0,0 0.491688,0 0.491688,0.491688c0,0 0.491688,0 0.491688,0.491688l135.705893,66.86957c0.983376,0.491688 1.966752,0.983376 3.441816,0.983376c1.475064,0 2.950128,-0.491688 3.933504,-0.983376c1.966752,-1.475064 3.441816,-3.933504 3.441816,-6.391944l0,-59.49425l12.2922,0l155.373414,76.703331c0.983376,0.491688 1.966752,0.983376 3.441816,0.983376c1.475064,0 2.950128,-0.491688 3.933504,-0.983376c1.966752,-1.475064 3.441816,-3.933504 3.441816,-6.391944l0,-113.088244c0,-3.441816 -1.966752,-5.900256 -4.91688,-6.883632l-157.340166,-51.627242c0,0 -0.491688,0 -0.491688,0c-0.491688,0 -0.491688,0 -0.983376,0c-0.491688,0 -0.491688,0 -0.983376,0c-0.491688,0 -0.491688,0 -0.983376,0c-0.491688,0 -0.491688,0 -0.983376,0c0,0 -0.491688,0 -0.491688,0l-157.340166,51.627242c-2.950128,0.983376 -4.91688,3.933504 -4.91688,6.883632l0,35.401537c0,0 0,0 0,0.491688c0,-0.491688 0,-0.491688 0,0zm135.705893,53.593994l-96.370851,-47.693738l96.370851,0l0,47.693738zm178.48275,10.817136l-142.097837,-70.311387l0,-72.278139l142.097837,46.710362l0,95.879163zm-299.438003,-95.879163l142.097837,-46.710362l0,69.32801l-13.767264,0l-128.330573,0l0,-22.617649z"
          fill="black" id="svg_11" />
      </g>
    </svg>
    <svg id="logo-bottom" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
      <style type="text/css">
        .st0 {
          fill: #80CBB4;
        }
      </style>
      <g class="layer">
        <path class="st0" d="m167.173926,340.248108c0,0 0,0 0,0l157.340166,-51.627242c2.950128,-0.983376 4.91688,-3.933504 4.91688,-6.883632l0,-35.401537c0,0 0,0 0,-0.491688c0,-0.491688 0,-0.491688 0,-0.983376c0,0 0,-0.491688 0,-0.491688c0,-0.491688 0,-0.491688 -0.491688,-0.983376c0,0 0,-0.491688 0,-0.491688c0,-0.491688 -0.491688,-0.491688 -0.491688,-0.983376c0,0 0,0 0,-0.491688c-0.491688,-0.491688 -0.491688,-0.491688 -0.983376,-0.983376c0,0 0,0 0,0c-0.491688,0 -0.491688,-0.491688 -0.983376,-0.491688c0,0 -0.491688,0 -0.491688,-0.491688c0,0 -0.491688,0 -0.491688,-0.491688l-136.197581,-66.377882c-2.45844,-0.983376 -4.91688,-0.983376 -7.37532,0.491688c-1.966752,1.475064 -3.441816,3.933504 -3.441816,6.391944l0,59.49425l-12.2922,0l-155.373414,-76.703331c-2.45844,-0.983376 -4.91688,-0.983376 -7.37532,0.491688c-1.966752,1.475064 -3.441816,3.933504 -3.441816,6.391944l0,113.088244c0,3.441816 1.966752,5.900256 4.91688,6.883632l157.340166,51.627242c0,0 0,0 0,0c0.983376,0 1.475064,0.491688 2.45844,0.491688c0.983376,-0.491688 1.475064,-0.491688 2.45844,-0.983376zm147.014717,-63.919442l-142.097837,46.710362l0,-69.32801l13.767264,0l128.330573,0l0,22.617649zm-120.463564,-85.062027l96.370851,47.693738l-96.370851,0l0,-47.693738zm-178.974438,-10.817136l142.097837,70.311387l0,72.278139l-142.097837,-46.710362l0,-95.879163z"
          fill="black" id="svg_10" />
      </g>
    </svg>
  </div>
  </div>
</div>
<div class="help-text container">
  <h2>Congratulations!</h2>
  <p>
    Your Stackery stack is up and running! You can now edit your stack from the Stackery Dashboard or the CLI.
  </p>
  <div class="row">
    <div class="col-md-4 col-sm-12">
      <div class="card card-article box-shadow">
        <div class="card-article-body">
          <a href='https://docs.stackery.io/' class="card-article-linker"></a>
          <span class="headline">
            <i class="fas fa-book-open"></i>
          </span>
          <br />
          <a href='https://docs.stackery.io/'>
            <h4 class="card-title">Read the Docs</h4>
          </a>
          <p class="card-description">Our complete reference docs for the nitty-gritty details of using Stackery.</p>
        </div>
      </div>
    </div>
    <div class="col-md-4 col-sm-12">
      <div class="card card-article box-shadow">
        <div class="card-article-body">
          <a href='https://support.stackery.io/hc/en-us/sections/360000705392-Tutorials' class="card-article-linker"></a>
          <span class="headline">
            <i class="fas fa-cog"></i>
          </span>
          <br />
          <a href='https://support.stackery.io/hc/en-us/sections/360000705392-Tutorials'>
            <h4 class="card-title">Stackery Tutorials</h4>
          </a>
          <p class="card-description">Find out what you can do with Stackery with out step-by-step turorials.</p>
        </div>
      </div>
    </div>
    <div class="col-md-4 col-sm-12">
      <div class="card card-article box-shadow">
        <div class="card-article-body">
          <a href='https://support.stackery.io/hc/en-us' class="card-article-linker"></a>
          <span class="headline">
            <i class="fas fa-terminal"></i>
          </span>
          <br />
          <a href='https://support.stackery.io/hc/en-us'>
            <h4 class="card-title">Get Help</h4>
          </a>
          <p class="card-description">Visit our Support site for high-level documentation and support for Stackery.</p>
        </div>
      </div>
    </div>
  </div>
</div>
`;
