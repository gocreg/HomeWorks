<?php
class Car
{
    public $brand;
    public $color;
    public $maxSpeed;
    public $currentSpeed;







    public function __construct($brand, $color, $maxSpeed, $currentSpeed)
    {
        $this->brand = $brand;
        $this->color = $color;
        $this->maxSpeed = $maxSpeed;
        $this->currentSpeed = $currentSpeed;
    }

    public function move($speed){
        $this->currentSpeed = $speed;
    }

    public function stop($speed){
        $this->currentSpeed = $speed;
    }
}
