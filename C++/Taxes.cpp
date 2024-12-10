#include <iostream>
#include <ostream>

using namespace std;

int main(){

    std::cout << "Sales: ";
    long double Sales;
    std::cin >> Sales;
        
    std::cout << "State Tax Rate: ";
    long double StateTaxRate;
    std::cin >> StateTaxRate;
        
    std::cout << "County Tax Rate: ";
    long double CountyTaxRate;
    std::cin >> CountyTaxRate;
    std::cout << std::endl;
    
    long double StateTax = (Sales / 100) * StateTaxRate;
    long double CountyTax = (Sales / 100) * CountyTaxRate;
    long double TotalTax = StateTax + CountyTax;
    
    
    std::cout << "Sales: $" << Sales << endl
         << "State Tax: $" << StateTax << endl
         << "County Tax: $" << CountyTax << endl
         << "Total Tax: $" << TotalTax;
}