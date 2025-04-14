#include <iostream>
#include <cmath>

int no_of_digits(int number) {
    if (number == 0) {
        return 1;
    }
    if (number < 0) {
        number = -number; // Make the number positive
    }
    return static_cast<int>(std::log10(number)) + 1;
}

int main() {
    while (true) {
        std::cout << "Number: ";
        int mine;
        std::cin >> mine;
        std::cout << no_of_digits(mine) << " digit number" << std::endl;
    }
    return 0;
}
