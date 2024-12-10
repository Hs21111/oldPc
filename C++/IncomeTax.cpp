#include <iostream>
#include <cmath>

using namespace std;

int main(){
    cout << "H.S. INCOME TAX CALCULATOR\n"
         << "Calculate your Income Tax.\n"
         << "WARNING: This Program calculates APPROXIMATE income tax!";

    cout << "\n\nTaxable Income is divided into:-\n"
         << "Income from Salary	             -All income you receive from your job like salary, leave encashment, allowances, and so on.\n"
         << "Income from House Property	     -Income from house or land (rented or self-occupied)\n"
         << "Income from Business/Profession	     -Earnings from business or profession\n"
         << "Income from Capital Gains	     -Earnings from the sale of a capital asset\n"
         << "Income from other sources	     -Residual income like earnings from the fixed deposit, gifts, pension, etc.\n";

    cout << "\nPlease enter(if none enter 0) your..."
         << "\n\n...Income from Salary	           : Rs. ";
    long double IncomeFromSalary;
    cin >> IncomeFromSalary;

    cout << "...Income from House Property	   : Rs. ";
    long double IncomeFromHouseProperty;
    cin >> IncomeFromHouseProperty;

    cout << "...Income from Business/Profession : Rs. ";
    long double IncomeFromBorP;
    cin >> IncomeFromBorP;

    cout << "...Income from Capital Gains       : Rs. ";
    long double IncomeFromCapital;
    cin >> IncomeFromCapital;

    cout << "...Income from other sources	   : Rs. ";
    long double IncomeFromMiscellaneous;
    cin >> IncomeFromMiscellaneous;

    long double GrossTaxableIncome = IncomeFromSalary + IncomeFromMiscellaneous + IncomeFromHouseProperty + IncomeFromCapital + IncomeFromBorP;
    cout << "\nYour Gross Taxable Income is Rs. " << GrossTaxableIncome << ".";

    cout << "\n\nThe tax rates as per the new tax regime is, as follows:-"
         << "\n\nUpto Rs 3,00,000	   Nil"
         << "\nRs. 3,00,001-6,00,000	   5%"
         << "\nRs. 6,00,001-9,00,000	   10%"
         << "\nRs. 9,00,001-12,00,000	   15%"
         << "\nRs. 12,00,01-15,00,000	   20%"
         << "\nAbove Rs. 15,00,000	   30%";

    long double IncomeTax;
    long double DisposableIncome;

    if(GrossTaxableIncome <=300000){
        cout << "\n\nYour income falls under the Upto Rs. 3,00,000 category";
        IncomeTax = 0;
        DisposableIncome = GrossTaxableIncome;
    }
    else if(300001 <= GrossTaxableIncome <= 600000){
         cout << "\n\nYour income falls under the Rs. 3,00,001-6,00,000 category";
         IncomeTax = GrossTaxableIncome * 0.05;
         DisposableIncome = GrossTaxableIncome - IncomeTax;
    }
    else if (600001 <= GrossTaxableIncome <= 900000){
         cout << "\n\nYour income falls under the Rs. 6,00,001-9,00,000 category";
         IncomeTax = GrossTaxableIncome * 0.1;
         DisposableIncome = GrossTaxableIncome - IncomeTax;
    }
    else if (900001 <= GrossTaxableIncome <= 1200000){
         cout << "\n\nYour income falls under the Rs. 9,00,001-12,00,000 category";
         IncomeTax = GrossTaxableIncome * 0.15;
         DisposableIncome = GrossTaxableIncome - IncomeTax;
    }
    else if (1200001 <= GrossTaxableIncome <= 1500000){
         cout << "\n\nYour income falls under the Rs. 12,00,001-15,00,000 category";
         IncomeTax = GrossTaxableIncome * 0.2;
         DisposableIncome = GrossTaxableIncome - IncomeTax;
    }
    else if (GrossTaxableIncome > 1500000){
         cout << "\n\nYour income falls under the Above Rs. 15,00,000 category";
         IncomeTax = GrossTaxableIncome * 0.3;
         DisposableIncome = GrossTaxableIncome - IncomeTax;
    }
    else{
         cout << "Go touch grass";
    }

    cout << "\n\n\n--------------------------------------------------------------------------"
         << "\nYour Gross Taxable Income: Rs. " << GrossTaxableIncome
         << "\nIncome Tax: Rs. " << IncomeTax
         << "\nYour Disposable Income: Rs. " << DisposableIncome
         << "\n\n\nTHANK YOU FOR USING H.S. INCOME TAX CALCULATOR\n"
         << "Press 'Alt + F4' to quit." ;

    while(true){

    }
}