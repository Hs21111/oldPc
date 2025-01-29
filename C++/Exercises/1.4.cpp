#include <iostream>
#include <cstdio>

int sum(int addend, int augend){
    int result = addend + augend;
    return result;
}

int main(){
    std::cout << sum(512545, 5055674) << std::endl;
}