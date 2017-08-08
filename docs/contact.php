<!DOCTYPE html>

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">

  <!--<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css">-->
  <link rel="stylesheet" href="css/bootstrap.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

  <link rel="stylesheet" href="css/style.css">
  <link rel="stylesheet" type="text/css" href="css/semantic.min.css">
  <script src="scripts/jquery-3.2.1.min.js"></script>
  <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>

  <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
  <script>
  (adsbygoogle = window.adsbygoogle || []).push({
  google_ad_client: "ca-pub-9508949976644917",
  enable_page_level_ads: true
  });
  </script>

</head>

<body>
  <nav class="navbar navbar-light navbar-fixed-top" style="background-color: #173;">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src="./images/logo3.png" alt="LOGO">
        </a>
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"
          aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar" style="color:black!important"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      </div>

      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">
          <li><a href="index.html">Ingredient Calculator <span class="sr-only">(current)</span></a></li>
          <li><a href="meal.html">Meal Calculator</a></li>
          <li><a href="#about">About</a></li>
          <li class="active"><a href="contact.html">Contact</a></li>
          <li><a href="#sources">Sources</a></li>
        </ul>
      </div>
      <!-- /.navbar-collapse -->
    </div>
    <!-- /.container-fluid -->
  </nav>

  <div id="main-container">
    <div class="main-form" style="position: relative;">
      <div class="box-1">
        <form class="ui form" method="POST" action="<?php
        $name = $_POST['name'];
        $email = $_POST['email'];
        $request = $_POST['request'];
        $to = "rsshohat@gmail.com";
        $subject = "New Question About Calculator";
        $body = "Name: $name \n\nEmail: $email\n\nMessage: $request";
        mail ($to,$subject,$body);?>">
            <div class="field">
            <label style="font-weight: bold; font-size: 25px; padding: 10px;">If you have any questions, please type in a field below</label>
          </div>
          <div class="field">
            <label>Name</label>
            <input type="text" name="name" style="width: 50%;" />
          </div>
          <div class="field">
            <label>Email</label>
            <input type="email" name="email" style="width: 50%;" />
          </div>
          <div class="field">
            <label>Message</label>
            <textarea name="request" style="width: 80%;"></textarea><br>
          </div>
          <div class="field">
            <button class="ui inverted yellow basic button" style="margin-top: 15px; padding:11px 17px;">Send</button>
          </div>
        </form>
      </div>
    </div>
    <div class="calculator-instruction" style="background-color: #fff;">
      <div class="container">
        <h1>Heading</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

        <div class="img-collection">
          <div class="row m-b-20">
            <div class="col-md-4">
              <figure class="img-frame m-a-0">
                <img src="images/farm.jpg" alt="img-alt" class="img-responsive">
              </figure>
            </div>
            <div class="col-md-4">
              <figure class="img-frame m-a-0">
                <img src="images/farm.jpg" alt="img-alt" class="img-responsive">
              </figure>
            </div>
            <div class="col-md-4">
              <figure class="img-frame m-a-0">
                <img src="images/farm.jpg" alt="img-alt" class="img-responsive">
              </figure>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4">
              <figure class="img-frame m-a-0">
                <img src="images/farm.jpg" alt="img-alt" class="img-responsive">
              </figure>
            </div>
            <div class="col-md-4">
              <figure class="img-frame m-a-0">
                <img src="images/farm.jpg" alt="img-alt" class="img-responsive">
              </figure>
            </div>
            <div class="col-md-4">
              <figure class="img-frame m-a-0">
                <img src="images/farm.jpg" alt="img-alt" class="img-responsive">
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="environmental-impact" class="container result">
      <div class="row row1">
        <div class="col-lg-8 col-md-8 col-xs-12">
          <!-- start result -->
          <div class="col-lg-12">
            <div class="ui segment">
              <table class="celled striped table table-hover">
                <thead>
                  <tr>
                    <th colspan="2">
                      <i class="fa fa-car" style="color:#A9A9A9"></i> Environmental Impact:
                    </th>
                  </tr>
                </thead>
                <tbody id="env_result">
                </tbody>
              </table>
            </div>
          </div>

          <div class="col-lg-12">
            <div class="ui segment">
              <table class="celled striped table table-hover">
                <thead>
                  <tr>
                    <th colspan="2">
                      <i class="fa fa-heartbeat" style="color:#FF69B4"></i> Health Impact:
                    </th>
                  </tr>
                </thead>
                <tbody id="health_result">
                </tbody>
              </table>
            </div>
          </div>

          <div class="col-lg-12">
            <div class="ui segment ads">
              <!--put ads here-->
               <!--Main ads-->
              <ins class="adsbygoogle"
              style="display:block"
              data-ad-client="ca-pub-9508949976644917"
              data-ad-slot="2272868381"
              data-ad-format="auto"></ins>
            </div>
          </div>

          <div class="col-lg-12">
            <div class="ui segment">
              <table class="celled striped table table-hover">
                <thead>
                  <tr>
                    <th colspan="2">
                      <img class="fa cow" src="./images/cow-frontal-head.svg" style="height: 100%;" /> Social Impact:
                    </th>
                  </tr>
                </thead>
                <tbody id="soc_result">
                </tbody>
              </table>
            </div>
          </div>

          <div class="col-lg-12">
            <div class="ui segment">
              <table class="celled striped table table-hover">
                <thead>
                  <tr>
                    <th colspan="2">
                      Impact of making this switch everyday for a year
                    </th>
                  </tr>
                </thead>
                <tbody id="year_result">
                </tbody>
              </table>
            </div>
          </div>

          <div class="col-lg-12">
            <div class="ui segment ads">
              <!--put ads here-->
              <!-- Main ads -->
              <ins class="adsbygoogle"
              style="display:block"
              data-ad-client="ca-pub-9508949976644917"
              data-ad-slot="2272868381"
              data-ad-format="auto"></ins>
            </div>
          </div>

          <div class="col-lg-12">
            <div class="ui segment">
              <table class="celled striped table table-hover">
                <thead>
                  <tr>
                    <th colspan="2">
                      Impact of everyone in the US making this switch just <b>once</b>
                    </th>
                  </tr>
                </thead>
                <tbody id="US_result">
                </tbody>
              </table>
            </div>
          </div>

          <div class="col-lg-12" data-spy="affix" data-offset-top="197">
            <div class="ui segment ads">
              <!--put ads here-->
              <!-- Main ads -->
              <ins class="adsbygoogle"
              style="display:block"
              data-ad-client="ca-pub-9508949976644917"
              data-ad-slot="2272868381"
              data-ad-format="auto"></ins>

            </div>
          </div>
          <!-- end result -->
        </div>

        <div id="side-ads" class="col-lg-4 col-md-4 hidden-xs side-ads">
          <!--visible-lg-->
          <div class="ui segment ads">
            <!--put ads here-->

          </div>
        </div>

      </div>
      <!--end of row1-->
    </div>
    <div class="footer-bottom">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <div class="copyright">
              © 2017, ____, All rights reserved
            </div>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <div class="design">
              <a href="#">Link1 </a> | <a target="_blank" href="">link2</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="a2a_kit a2a_kit_size_32 a2a_floating_style a2a_vertical_style" style="left:0px; top:150px;">
    <a class="a2a_button_facebook"></a>
    <a class="a2a_button_twitter"></a>
    <a class="a2a_button_google_plus"></a>
    <a class="a2a_button_pinterest"></a>
  </div>

  <!--<script
src="https://code.jquery.com/jquery-3.1.1.min.js"
integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="
crossorigin="anonymous"></script>-->

  <!--<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa"
    crossorigin="anonymous"></script>-->
  <script src="scripts/bootstrap.min.js"></script>
  <!--<script src="semantic/dist/semantic.min.js"></script>-->
  <script src="scripts/semantic.min.js"></script>
  <!--<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.6.0/Chart.min.js"></script>-->
  <script src="scripts/Chart.min.js"></script>
  <script src="./api/stocks.js"></script>
  <script src="./api/stocks-us.js"></script>
  <script src="scripts/script.js"></script>


  <script async src="https://static.addtoany.com/menu/page.js"></script>

</body>
