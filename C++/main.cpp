#include <iostream>
#include <vector>
#include <cmath>

// Function to check if a number is prime
bool is_prime(unsigned long long int n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 == 0 || n % 3 == 0) return false;
    for (unsigned long long int i = 5; i * i <= n; i += 6) {
        if (n % i == 0 || n % (i + 2) == 0) return false;
    }
    return true;
}

// Function to generate prime numbers up to a specified limit
std::vector<unsigned long long int> generate_primes(unsigned long long int limit) {
    std::vector<unsigned long long int> primes;
    for (unsigned long long int num = 2; num <= limit; ++num) {
        if (is_prime(num)) {
            primes.push_back(num);
        }
    }
    return primes;
}

int main() {
    unsigned long long int limit = 999999999;  // Adjust the limit as required
    std::vector<unsigned long long int> prime_numbers = generate_primes(limit);

    std::cout << "Prime numbers up to " << limit << ":\n";
    for (unsigned long long int prime : prime_numbers) {
        std::cout << prime << " ";
    }
    std::cout << std::endl;

    return 0;
}
