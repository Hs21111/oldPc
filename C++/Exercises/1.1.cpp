#include <cstdio>
#include <iostream>

long int absolute_value(long int x) {
    long int result;
    if (x < 0) {
        result = x * -1;
    }
    else if (x > 0) {
        result = x;
    }
    else result = 0;
    return result;
}

int main() {
    int my_num;
    std::cout << "Number: ";
    std::cin >> my_num;
    printf("The absolute value of %d is %d.\n", my_num, absolute_value(my_num));
}
