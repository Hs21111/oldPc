from random import randint

questionList = {
    1: "What is the capital of Japan?",
    2: "Who wrote '1984'?",
    3: "What is the chemical symbol for water?",
    4: "Which planet is known as the Red Planet?",
    5: "What is the largest ocean on Earth?"
}

answerList = {
    1: ("A) Beijing", "B) Seoul", "C) Tokyo", "D) Bangkok"),
    2: ("A) George Orwell", "B) Aldous Huxley", "C) J.K. Rowling", "D) Bangkok"),
    3: ("A) H2O", "B) CO2", "C) O2", "D) H2"),
    4: ("A) Venus", "B) Mars", "C) Jupiter", "D) Saturn"),
    5: ("A) Atlantic Ocean", "B) Indian Ocean", "C) Arctic Ocean", "D) Pacific Ocean")
}

correctAnswer = {
    1: "C) Tokyo",
    2: "A) George Orwell",
    3: "A) H2O",
    4: "B) Mars",
    5: "D) Pacific Ocean"
}

noOfStudents = 60
attempts = 5

countStudent = range(1, noOfStudents + 1)
attemptcount = range(1, attempts + 1)

averagePercentage = 0
studentsPassed = 0

for student in countStudent:
    print(f"^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^"
    f"\nStudent number: {student}")

    # Counts the answers
    noOfCorrectAnswers = 0
    noOfWrongAnswers = 0
    for attempt in attemptcount:
        question = randint(1, 5)
        while question in questionsAnswered:
            question = randint(1, 5)
        questionsAnswered.append(question)
        answer = randint(1, 4)
        print(f"\nChosen Question: {question}")
        print(f"Chosen Answer: {answerList[question][answer - 1]}")
        print(f"Correct Answer {correctAnswer[question]}")
        if correctAnswer[question] == answerList[question][answer - 1]:
            noOfCorrectAnswers += 1
        else:
            noOfWrongAnswers += 1
    print(f"Correct Answers: {noOfCorrectAnswers}   "
          f"Wrong Answers: {noOfWrongAnswers}   "
          f"Percentage scored: {noOfCorrectAnswers * 20}%")
    averagePercentage += noOfCorrectAnswers * 20
    if noOfCorrectAnswers * 20 >= 60:
        print("\nPASSED")
        studentsPassed += 1
    else:
        print("\nFAILED")
    print(f"____________________________________________________________________________________________________")

averagePercentage = averagePercentage / 60
passingpercent = (studentsPassed / 60) * 100
print(f"\n\n\nAverage percentage of all students = {int(averagePercentage)}%")
print(f"Percentage of passing students = {int(passingpercent)}%")
