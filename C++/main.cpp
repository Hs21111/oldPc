#include <iostream>

int step_function(int x){
    
    int result = 0;
    
    if (x < 0) result = -1;
    else if (x > 0) result = 1;
    else result = 0;

    return result;
}

int main(){
    int num1;
    std::cout << "Number 1: ";
    std::cin >> num1;    
    int result1 = step_function(num1);
    std::cout << "Step: " << result1 << std::endl;
    
    int num2;
    std::cout << std::endl << "Number 2: ";
    std::cin >> num2; 
    int result2 = step_function(num2);
    std::cout << "Step: " << result2 << std::endl;
    
    int num3;
    std::cout << std::endl << "Number 3: ";
    std::cin >> num3; 
    int result3 = step_function(num3);
    std::cout << "Step: " << result3 << std::endl;
}