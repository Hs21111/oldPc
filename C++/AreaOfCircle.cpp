#include <iostream>
#include <cmath>

int main(){
    const long double pi = 3.14159265359L;
    
    std::cout << "Radius of circle: ";
    long double radius;
    std::cin >> radius;
    
    long double area = pi * std::pow(radius, 2);
    std::cout << "Area of circle: " << area << std::endl;
    std::cout << "" << std::endl;
}