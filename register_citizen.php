<?php
require 'includes/check_account.php';
session_start();
$account=Check($_SESSION['sun'],$_SESSION['sps']);

if(empty($_SESSION['sun']) || $account=="login-failed"){
  header("Location: signin.php");
  exit();
}

?>
<!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="">
  <meta name="author" content="">
  <link rel="icon" href="/docs/4.1/assets/img/favicons/favicon.ico">

  <title>AyudaSys Registration of Citizen</title>

  <link rel="canonical" href="https://getbootstrap.com/docs/4.1/examples/checkout/">

  <!-- Bootstrap core CSS -->
  <link href="../../dist/css/bootstrap.min.css" rel="stylesheet">
  <!-- Bootstrap -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">
  <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.min.js" integrity="sha384-VHvPCCyXqtD5DqJeNxl2dtTyhF78xXNXdkwX1CZeRusQfRKp+tA7hAShOK/B/fQ2" crossorigin="anonymous"></script>
  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,700;0,900;1,300;1,400&family=Ubuntu:wght@700&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,700;0,900;1,300;1,400&family=Ubuntu:wght@300;400;500;700&display=swap" rel="stylesheet">

  <section id="title">
    <!-- Nav Bar -->
    <nav class="navbar navbar-expand-lg navbar-dark">
      <a class="navbar-brand brand-title" href="index.html">AyudaSys </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link links" href="includes/home_check.php">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link links" href="includes/logout.php">Log out</a>
          </li>
        </ul>
      </div>
    </nav>
  </section>



  <!-- Custom styles for this template -->
  <link href="styles/registration.css" rel="stylesheet">
</head>

<body class="bg-light">

  <div class="container">
    <div class="py-5 text-center">

      <h2>Registration Page</h2>
      <p class="lead">Properly Input the correct Data for citizens for the Ayuda System.</p>
    </div>

  </div>
  <!-- Custom styles for this template -->
  <form class="form1" action="includes/register_citizen.inc.php" method="POST">
    <div class="row">
      <div class="col-sm-12 col-lg-4 was-validated">
        <label> First Name: </label>
        <input type="text" class="form-control" name="rfn" id="rfn" placeholder="Enter the First Name"  required>
        <div class="valid-feedback">Valid.</div>
        <div class="invalid-feedback">Please fill out this field.</div>
      </div>
      <div class="col-sm-12 col-lg-4 was-validated">
        <label> Middle Name: </label>
        <input type="text" class="form-control" name="rmn" id="rmn" placeholder="Enter the Middle Name"  required>
        <div class="valid-feedback">Valid.</div>
        <div class="invalid-feedback">Please fill out this field.</div>
      </div>
      <div class="col-sm-12 col-lg-4 was-validated">
        <label> Last Name: </label>
        <input type="text" class="form-control" name="rln" id="rln" placeholder="Enter the Last Name"  required>
        <div class="valid-feedback">Valid.</div>
        <div class="invalid-feedback">Please fill out this field.</div>
      </div>
    </div>
    <br>
    <div class="row">
      <div class="col-lg-4 col-sm-12 was-validated">
        <label> Number of People in Household: </label>
        <input type="number" class="form-control no-spinner" name="rnom" id="rnom" pattern="/^-?\d+\.?\d*$/" onKeyPress="if(this.value.length==2) return false;" placeholder="Enter the number of people in your Household"  required>
        <div class="valid-feedback">Valid.</div>
        <div class="invalid-feedback">Please fill out this field.</div>
      </div>
      <div class="col-lg-4 col-sm-12 was-validated">
          <label> Barangay ID: </label>
          <input type="text" class="form-control" name="rbid" id="rbid" placeholder="Enter the Barangay ID"  required>
          <div class="valid-feedback">Valid.</div>
          <div class="invalid-feedback">Please fill out this field.</div>
        </div>
      <div class="col-lg-4 col-sm-12 was-validated">
        <label> Family Code: </label>
        <input type="text" class="form-control" name="rfc" id="rfc" placeholder="Enter the Family Code"  required>
        <div class="valid-feedback">Valid.</div>
        <div class="invalid-feedback">Please fill out this field.</div>
      </div>
    </div>
    <br>
    <div class="row">
      <div class="col-lg-4 col-sm-12 was-validated">
        <label> Barangay: </label>
        <input type="text" class="form-control" name="rb" id="rb" placeholder="Enter the Barangay"  required>
        <div class="valid-feedback">Valid.</div>
        <div class="invalid-feedback">Please fill out this field.</div>
      </div>
      <div class="col-lg-4 col-sm-12 was-validated">
        <label> House No: </label>
        <input type="number" class="form-control no-spinner" name="rhn" id="rhn" pattern="/^-?\d+\.?\d*$/" onKeyPress="if(this.value.length==4) return false;" placeholder="Enter the House Number"  required>
        <div class="valid-feedback">Valid.</div>
        <div class="invalid-feedback">Please fill out this field.</div>
      </div>
      <div class="col-lg-4 col-sm-12 was-validated">
        <label> Street: </label>
        <input type="text" class="form-control" name="rs" id="rs" placeholder="Enter the Street Name"  required>
        <div class="valid-feedback">Valid.</div>
        <div class="invalid-feedback">Please fill out this field.</div>
      </div>
    </div>

    <br>
    <?php
    $fulUrl = "http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
                  if (strpos($fulUrl,"register_citizen.php?register=success") == true){
                    echo "<p style='color: green'>Citizen Registration Success</p>";
                  };
      ?>
    <br>
    <button class="w-100 btn btn-primary " type="submit">Submit Information</button>

  </form>

</body>

</html>
