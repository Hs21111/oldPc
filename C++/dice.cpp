#include <iostream>
#include <cstdlib>
#include <ctime>

int main(){
    int MinValue = 1;
    int MaxValue = 6;
    
    srand(time(nullptr));
    int no = (rand() % (MaxValue - MinValue + 1)) + MinValue;
    std::cout << no << std::endl;
}