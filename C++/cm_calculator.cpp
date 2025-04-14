#include <iostream>
using namespace std;

int gcd(int a, int b) {
    while (b != 0) {
        int temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

int gcd_of_array(int arr[], int n) {
    int result = arr[0];
    for (int i = 1; i < n; i++) {
        result = gcd(result, arr[i]);
    }
    return result;
}

int lcm(int a, int b) {
    return (a * b) / gcd(a, b);
}

int lcm_of_array(int arr[], int n) {
    int result = arr[0];
    for (int i = 1; i < n; i++) {
        result = lcm(result, arr[i]);
    }
    return result;
}

int main() {
    int n;
    cout << "Enter the number of elements: ";
    cin >> n;

    int arr[n] = {};
    int x = 0;
    while (x < n) {
        cout << "Number " << x + 1 << ": ";
        cin >> arr[x];
        x++;
    }

    cout << "LCM of the given numbers is " << lcm_of_array(arr, n) << endl;
    cout << "HCF of the given numbers is " << gcd_of_array(arr, n) << endl;

    return 0;
}
