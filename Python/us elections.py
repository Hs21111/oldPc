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

countStudent = range(1, 2 + 1)
attempts = 5
attemptcount = range(1, attempts + 1)

for student in countStudent:
    print(f"\nStudent number: {student}\n")

    noOfCorrectAnswers = 0
    noOfWrongAnswers = 0
    noOfUnattemptedAnswers = 0
    questionsAnswered = []
    for attempt in attemptcount:
        question = randint(1, 5)
        while question in questionsAnswered:
            question = randint(1, 5)
        questionsAnswered.append(question)
        answer = randint(1, 4)
        print(f"Chosen Question: {question}")
        print(f"Chosen Answer: {answerList[question][answer - 1]}")
        if correctAnswer[question] == answerList[question][answer - 1]:
            noOfCorrectAnswers += 1
        else:
            noOfWrongAnswers += 1
    print(f"Correct Answers: {noOfCorrectAnswers}")
    print(f"Wrong Answers: {noOfWrongAnswers}")
