#include <iostream>

int main(){
    std::cout << "Temperature in Fahrenheit: ";
    long double fahrenheit;
    std::cin >> fahrenheit;
    
    long double celsius = (fahrenheit - 32) / (9 /5);
    std::cout << "Temperature in Celsius: " << celsius;
}