#include <cstdio>
#include <iostream>

using namespace std;

int main(){
    //Definition
    short a = 3142857142857143;
    unsigned short b = 3142857142857143;
    int c = 3142857142857143;
    unsigned int d = 3142857142857143;
    long e = 3142857142857143;
    unsigned long f = 3142857142857143;
    long long g = 3142857142857143;
    unsigned long long h = 3142857142857143;

    //Data loss
    printf("\n\nThis shows the maximum number that can be stored\n\n"
    "Actual number      :3142857142857143\n"
    "short              :%hd\n"
    "unsigned short     :%hu\n"
    "int                :%d\n"
    "unsigned int       :%u\n"
    "long               :%ld\n"
    "unsigned long      :%lu\n"
    "long long          :%lld\n"
    "unsigned long long :%llu",
    a,b,c,d,e,f,g,h);

    //Literal Format specifier
    cout << "\n\n Format specifier\n\n"
         << "short - 'hd'";
}
