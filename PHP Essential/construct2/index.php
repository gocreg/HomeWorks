<?php
include 'Car.php';

$carHonda = new Car('Honda', 'red', 222, 0);
$carOpel = new Car('Opel', 'blue', 333, 0);
$carPorshe = new Car('Porshe', 'green', 400, 0);

print_r($carOpel);
echo '<br>';
$carHonda->move(140);
print_r($carHonda);
echo '<br>';
$carHonda->stop(0);

print_r($carHonda);
echo '<br>';
print_r($carPorshe);