<?php
include 'Car.php';
include 'Mitsubishi.php';
$mitsubishi = new Mitsubishi('Mitsubishi', 'black', 305, 10);
//$mitsubishi->brand = 'Mitsubishi';
//$mitsubishi->color = 'Black';
//$mitsubishi->maxSpeed = 300;
//$mitsubishi->currentSpeed = 200;

$mitsubishi->stop(1);
print_r($mitsubishi);
echo '<br>';
//print_r($mitsubishi);















//$carHonda = new Car('Honda', 'red', 222, 0);
//$carOpel = new Car('Opel', 'blue', 333, 0);
//$carPorshe = new Car('Porshe', 'green', 400, 0);
//
//print_r($carOpel);
//echo '<br>';
//$carHonda->move(140);
//print_r($carHonda);
//echo '<br>';
//$carHonda->stop(0);
//
//print_r($carHonda);
//echo '<br>';
//print_r($carPorshe);