#include <Stepper.h>

// creamos el objeto motor
Stepper motor(2048, 8, 10, 9, 11);
 
void setup() {
  motor.setSpeed(4);
  Serial.begin(9600);
}
 
void loop() {

  delay(600);
  
  Serial.println("Analog pin: "); // display analog values to serial
  Serial.println(analogRead(A4));
  

  if (analogRead(A4) < 115) {
    motor.step(500); // cantidad de pasos
    delay(1000);      // 2 seg.
    motor.step(-500); // cantidad de pasos
    
    } 

  
}
