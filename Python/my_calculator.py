print('''my_calculator by Hamdan
Interactive calculator written in Python
~~~~~~~~~~~~~~~~~~~~~~~~~~
#1 Input "help" if you need instructions
#2 Max limit of ten terms
#3 Enter "Q" to quit''')




class MyCalculator:
    """the calculator"""

    def addition(terms):
        if terms == 2:
            one = float(input("First number: "))
            two = float(input("Second number: "))
            sum = one + two
        if terms == 3:
            one = float(input("First number: "))
            two = float(input("Second number: "))
            three = float(input("Third number: "))
            sum = one + two + three
        if terms == 4:
            one = float(input("First number: "))
            two = float(input("Second number: "))
            three = float(input("Third number: "))
            four = float(input("Fourth number: "))
            sum = one + two + three + four
        if terms == 5:
            one = float(input("First number: "))
            two = float(input("Second number: "))
            three = float(input("Third number: "))
            four = float(input("Fourth number: "))
            five = float(input("Fifth number: "))
            sum = one + two + three + four + five
        if terms == 6:
            one = float(input("First number: "))
            two = float(input("Second number: "))
            three = float(input("Third number: "))
            four = float(input("Fourth number: "))
            five = float(input("Fifth number: "))
            six = float(input("Sixth number: "))
            sum = one + two + three + four + five + six
        if terms == 7:
            one = float(input("First number: "))
            two = float(input("Second number: "))
            three = float(input("Third number: "))
            four = float(input("Fourth number: "))
            five = float(input("Fifth number: "))
            six = float(input("Sixth number: "))
            seven = float(input("Seventh number: "))
            sum = one + two + three + four + five + six + seven
        if terms == 8:
            one = float(input("First number: "))
            two = float(input("Second number: "))
            three = float(input("Third number: "))
            four = float(input("Fourth number: "))
            five = float(input("Fifth number: "))
            six = float(input("Sixth number: "))
            seven = float(input("Seventh number: "))
            eight = float(input("Eighth number: "))
            sum = one + two + three + four + five + six + seven + eight
        if terms == 9:
            one = float(input("First number: "))
            two = float(input("Second number: "))
            three = float(input("Third number: "))
            four = float(input("Fourth number: "))
            five = float(input("Fifth number: "))
            six = float(input("Sixth number: "))
            seven = float(input("Seventh number: "))
            eight = float(input("Eighth number: "))
            nine = float(input("Ninth number: "))
            sum = one + two + three + four + five + six + seven + eight + nine
        if terms == 10:
            one = float(input("First number: "))
            two = float(input("Second number: "))
            three = float(input("Third number: "))
            four = float(input("Fourth number: "))
            five = float(input("Fifth number: "))
            six = float(input("Sixth number: "))
            seven = float(input("Seventh number: "))
            eight = float(input("Eighth number: "))
            nine = float(input("Ninth number: "))
            ten = float(input("Tenth number: "))
            sum = one + two + three + four + five + six + seven + eight + nine + ten
        else:
            print("\nPlease enter a valid number of terms")

        return sum

    def subtraction(terms):
        if terms == 2:
            one = float(input("First number: "))
            two = float(input("Second number: "))
            difference = one - two
        if terms == 3:
            one = float(input("First number: "))
            two = float(input("Second number: "))
            three = float(input("Third number: "))
            difference = one - two - three
        if terms == 4:
            one = float(input("First number: "))
            two = float(input("Second number: "))
            three = float(input("Third number: "))
            four = float(input("Fourth number: "))
            difference = one - two - three - four
        if terms == 5:
            one = float(input("First number: "))
            two = float(input("Second number: "))
            three = float(input("Third number: "))
            four = float(input("Fourth number: "))
            five = float(input("Fifth number: "))
            difference = one - two - three - four - five
        if terms == 6:
            one = float(input("First number: "))
            two = float(input("Second number: "))
            three = float(input("Third number: "))
            four = float(input("Fourth number: "))
            five = float(input("Fifth number: "))
            six = float(input("Sixth number: "))
            difference = one - two - three - four - five - six
        if terms == 7:
            one = float(input("First number: "))
            two = float(input("Second number: "))
            three = float(input("Third number: "))
            four = float(input("Fourth number: "))
            five = float(input("Fifth number: "))
            six = float(input("Sixth number: "))
            seven = float(input("Seventh number: "))
            difference = one - two - three - four - five - six - seven
        if terms == 8:
            one = float(input("First number: "))
            two = float(input("Second number: "))
            three = float(input("Third number: "))
            four = float(input("Fourth number: "))
            five = float(input("Fifth number: "))
            six = float(input("Sixth number: "))
            seven = float(input("Seventh number: "))
            eight = float(input("Eighth number: "))
            difference = one - two - three - four - five - six - seven - eight
        if terms == 9:
            one = float(input("First number: "))
            two = float(input("Second number: "))
            three = float(input("Third number: "))
            four = float(input("Fourth number: "))
            five = float(input("Fifth number: "))
            six = float(input("Sixth number: "))
            seven = float(input("Seventh number: "))
            eight = float(input("Eighth number: "))
            nine = float(input("Ninth number: "))
            difference = one - two - three - four - five - six - seven - eight - nine
        if terms == 10:
            one = float(input("First number: "))
            two = float(input("Second number: "))
            three = float(input("Third number: "))
            four = float(input("Fourth number: "))
            five = float(input("Fifth number: "))
            six = float(input("Sixth number: "))
            seven = float(input("Seventh number: "))
            eight = float(input("Eighth number: "))
            nine = float(input("Ninth number: "))
            ten = float(input("Tenth number: "))
            difference = one - two - three - four - five - six - seven - eight - nine - ten
        else:
            print("\nPlease enter a valid number of terms")

        return difference

    def multiplication(terms):
        if terms == 2:
            one = float(input("First number: "))
            two = float(input("Second number: "))
            product = one - two
        if terms == 3:
            one = float(input("First number: "))
            two = float(input("Second number: "))
            three = float(input("Third number: "))
            product = one - two - three
        if terms == 4:
            one = float(input("First number: "))
            two = float(input("Second number: "))
            three = float(input("Third number: "))
            four = float(input("Fourth number: "))
            product = one - two - three - four
        if terms == 5:
            one = float(input("First number: "))
            two = float(input("Second number: "))
            three = float(input("Third number: "))
            four = float(input("Fourth number: "))
            five = float(input("Fifth number: "))
            product = one - two - three - four - five
        if terms == 6:
            one = float(input("First number: "))
            two = float(input("Second number: "))
            three = float(input("Third number: "))
            four = float(input("Fourth number: "))
            five = float(input("Fifth number: "))
            six = float(input("Sixth number: "))
            product = one - two - three - four - five - six
        if terms == 7:
            one = float(input("First number: "))
            two = float(input("Second number: "))
            three = float(input("Third number: "))
            four = float(input("Fourth number: "))
            five = float(input("Fifth number: "))
            six = float(input("Sixth number: "))
            seven = float(input("Seventh number: "))
            product = one - two - three - four - five - six - seven
        if terms == 8:
            one = float(input("First number: "))
            two = float(input("Second number: "))
            three = float(input("Third number: "))
            four = float(input("Fourth number: "))
            five = float(input("Fifth number: "))
            six = float(input("Sixth number: "))
            seven = float(input("Seventh number: "))
            eight = float(input("Eighth number: "))
            product = one - two - three - four - five - six - seven - eight
        if terms == 9:
            one = float(input("First number: "))
            two = float(input("Second number: "))
            three = float(input("Third number: "))
            four = float(input("Fourth number: "))
            five = float(input("Fifth number: "))
            six = float(input("Sixth number: "))
            seven = float(input("Seventh number: "))
            eight = float(input("Eighth number: "))
            nine = float(input("Ninth number: "))
            product = one - two - three - four - five - six - seven - eight - nine
        if terms == 10:
            one = float(input("First number: "))
            two = float(input("Second number: "))
            three = float(input("Third number: "))
            four = float(input("Fourth number: "))
            five = float(input("Fifth number: "))
            six = float(input("Sixth number: "))
            seven = float(input("Seventh number: "))
            eight = float(input("Eighth number: "))
            nine = float(input("Ninth number: "))
            ten = float(input("Tenth number: "))
            product = one - two - three - four - five - six - seven - eight - nine - ten
        else:
            print("\nPlease enter a valid number of terms")

        return product

    def \
            division():
        try:
            one = float(input("First number: "))
            two = float(input("Second number: "))
            mode = input("Which mode would you like to choose"
                         "[    y for (with remainder) / n for (decimal answer)    ] :")

            if mode.lower() == "y":
                quotient = one // two
                remainder = one % two

                print(f"\n\nQuotient: {quotient}"
                      f"Remainder: {remainder}")
            if mode.lower() == "n":
                quotient = one / two

                print(f"Quotient: {quotient}")
            else:
                print(f"Please enter a valid mode.")
        except ZeroDivisionError:
            print(f"\n\nYou cannot divide a number by zero.")


while True:
    print('''\n\n\n\nGuide:
    add - add numbers
    subtract - subtract numbers
    multiply - multiply numbers
    divide - divide numbers''')
    while True:
        option = input("\n>>> ")

        term = int(input("\nEnter the number of terms(enter 2 if division): "))

        if option.lower() == "add" or "addition":
            answer = MyCalculator.addition(term)
            print(f"The sum is {answer}!")

        elif option.lower() == "subtract" or "subtraction":
            answer = MyCalculator.subtraction(term)
            print(f"The difference is {answer}!")

        elif option.lower() == "multiply" or "multiplication":
            answer = MyCalculator.multiplication(term)
            print(f"The product is {answer}")

        elif option.lower() == "divide" or "division":
            answer = MyCalculator.division()

        else:
            print("Enter a valid mode.")

