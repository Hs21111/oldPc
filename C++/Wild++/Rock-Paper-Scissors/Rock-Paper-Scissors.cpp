#include <iostream>
#include <cstdio>
#include <string>
#include <sstream>
#include <thread>

using namespace std;

int main(){

    string options[3] = {"ROCK", "PAPER", "SCISSORS"};
    int index[3] = {1, 2, 3};
    string buffer;
    int points = 0;
    int cpu_points = 0;
    int player_points = 0;
    int difficulty;
    int player_action;
    int cpu_action;
    int cpu_last_round_status = -1;

    cout << "Lets play ROCK-PAPER-SCISSORS!\n";

    cout << "How many points to play for?\n>>> ";
    cin >> buffer;

    try {
        points = stoi(buffer);
    }
    catch (const invalid_argument&& e) {
    cout << "Enter a valid number of points.";
    }


    cout << "Set the difficulty level:-\n";
    cout << "you can enter, e-easy, h-hard, i-impossible\n";
    cout << "Easy will let you win all the time. Impossible is impossible. Hard is playable.\n";

    while(difficulty != 1 && difficulty != 2 && difficulty != 3){
        cout << ">>> ";
        cin >> buffer;

        if(buffer == "e" || buffer == "easy" || buffer == "E" || buffer == "EASY"){
            difficulty = 1;
        } else if(buffer == "h" || buffer == "hard" || buffer == "H" || buffer == "HARD"){
            difficulty = 2;
        } else if(buffer == "i" || buffer == "impossible" || buffer == "I" || buffer == "IMPOSSIBLE"){
            difficulty = 3;
        } else {
            cout << "Enter a valid difficulty level.\n";
        }
    }

    if(difficulty == 1){
        while(cpu_points < points && player_points < points){
            buffer = "nothing";
            while(buffer == "nothing"){
                cout << "You can enter, r-ROCK, p-PAPER, s-SCISSORS\n>>> ";
                cin >> buffer;

                if(buffer == "r" || buffer == "rock" || buffer == "R" || buffer == "ROCK"){
                    player_action = 1;
                    cpu_action = 3;
                } else if (buffer == "p" || buffer == "paper" || buffer == "P" || buffer == "PAPER"){
                    player_action = 2;
                    cpu_action = 1;
                } else if (buffer == "s" || buffer == "scissors" || buffer == "S"|| buffer == "SCISSORS"){
                    player_action = 3;
                    cpu_action = 2;
                } else {
                    cout << "Enter a valid action\n";
                    buffer = "nothing";
                }
            }

            cout << "CPU chooses " << options[cpu_action-1] << endl;
            this_thread::sleep_for(chrono::milliseconds(500));

            if(player_action == 1 && cpu_action == 1){
                cout << "DRAW\n";
            } else if (player_action == 1 && cpu_action == 2){
                     cout << "CPU +1\n";
                     cpu_points++;
            } else if (player_action == 1 && cpu_action == 3){
                     cout << "YOU +1\n";
                     player_points++;
            } else if (player_action == 2 && cpu_action == 1){
                     cout << "YOU +1\n";
                     player_points++;
            } else if (player_action == 2 && cpu_action == 2){
                     cout << "DRAW\n";
            } else if (player_action == 2 && cpu_action == 3){
                     cout << "CPU +1\n";
                     cpu_points++;
            } else if (player_action == 3 && cpu_action == 1){
                     cout << "CPU +1\n";
                     cpu_points++;
            } else if (player_action == 3 && cpu_action == 2){
                     cout << "YOU +1\n";
                     player_points++;
            } else if (player_action == 3 && cpu_action == 3){
                     cout << "DRAW\n";
            }

            cout << "\tPOINTS\n   CPU: " << cpu_points << "\tYOU: " << player_points << endl;
        }
    }

    else if(difficulty == 3){
        while(cpu_points < points && player_points < points){
            buffer = "nothing";
            while(buffer == "nothing"){
                cout << "You can enter, r-ROCK, p-PAPER, s-SCISSORS\n>>> ";
                cin >> buffer;

                if(buffer == "r" || buffer == "rock" || buffer == "R" || buffer == "ROCK"){
                    player_action = 1;
                    cpu_action = 2;
                } else if (buffer == "p" || buffer == "paper" || buffer == "P" || buffer == "PAPER"){
                    player_action = 2;
                    cpu_action = 3;
                } else if (buffer == "s" || buffer == "scissors" || buffer == "S"|| buffer == "SCISSORS"){
                    player_action = 3;
                    cpu_action = 1;
                } else {
                    cout << "Enter a valid action\n";
                    buffer = "nothing";
                }
            }

            cout << "CPU chooses " << options[cpu_action-1] << endl;
            this_thread::sleep_for(chrono::milliseconds(500));

            if(player_action == 1 && cpu_action == 1){
                cout << "DRAW\n";
            } else if (player_action == 1 && cpu_action == 2){
                cout << "CPU +1\n";
                cpu_points++;
            } else if (player_action == 1 && cpu_action == 3){
                cout << "YOU +1\n";
                player_points++;
            } else if (player_action == 2 && cpu_action == 1){
                cout << "YOU +1\n";
                player_points++;
            } else if (player_action == 2 && cpu_action == 2){
                cout << "DRAW\n";
            } else if (player_action == 2 && cpu_action == 3){
                cout << "CPU +1\n";
                cpu_points++;
            } else if (player_action == 3 && cpu_action == 1){
                cout << "CPU +1\n";
                cpu_points++;
            } else if (player_action == 3 && cpu_action == 2){
                cout << "YOU +1\n";
                player_points++;
            } else if (player_action == 3 && cpu_action == 3){
                cout << "DRAW\n";
            }

            cout << "\tPOINTS\n   CPU: " << cpu_points << "\tYOU: " << player_points << endl;
        }
    } else if (difficulty == 2){
        while(cpu_points < points && player_points < points){
            buffer = "nothing";
            while(buffer == "nothing"){
                cout << "You can enter, r-ROCK, p-PAPER, s-SCISSORS\n>>> ";
                cin >> buffer;

                if(buffer == "r" || buffer == "rock" || buffer == "R" || buffer == "ROCK"){
                    player_action = 1;
                } else if (buffer == "p" || buffer == "paper" || buffer == "P" || buffer == "PAPER"){
                    player_action = 2;
                } else if (buffer == "s" || buffer == "scissors" || buffer == "S"|| buffer == "SCISSORS"){
                    player_action = 3;
                } else {
                    cout << "Enter a valid action\n";
                    buffer = "nothing";
                }
            }


            if(cpu_last_round_status == 0){
                if(cpu_action == 1){
                    cpu_action = 3;
                } else {
                    cpu_action--;
                }
            } else if (cpu_last_round_status == 1){
                if (cpu_action == 3){
                    cpu_action = 1;
                } else {
                    cpu_action++;
                }
            } else if (cpu_last_round_status == -1){
                cpu_action = 1;
            }

            cout << "CPU chooses " << options[cpu_action-1] << endl;
            this_thread::sleep_for(chrono::milliseconds(500));

            if(player_action == 1 && cpu_action == 1){
                cout << "DRAW\n";
                cpu_last_round_status = 2;
            } else if (player_action == 1 && cpu_action == 2){
                cout << "CPU +1\n";
                cpu_points++;
                cpu_last_round_status = 1;
            } else if (player_action == 1 && cpu_action == 3){
                cout << "YOU +1\n";
                player_points++;
                cpu_last_round_status = 0;
            } else if (player_action == 2 && cpu_action == 1){
                cout << "YOU +1\n";
                player_points++;
                cpu_last_round_status = 0;
            } else if (player_action == 2 && cpu_action == 2){
                cout << "DRAW\n";
                cpu_last_round_status = 2;
            } else if (player_action == 2 && cpu_action == 3){
                cout << "CPU +1\n";
                cpu_points++;
                cpu_last_round_status = 1;
            } else if (player_action == 3 && cpu_action == 1){
                cout << "CPU +1\n";
                cpu_points++;
                cpu_last_round_status = 1;
            } else if (player_action == 3 && cpu_action == 2){
                cout << "YOU +1\n";
                player_points++;
                cpu_last_round_status = 0;
            } else if (player_action == 3 && cpu_action == 3){
                cout << "DRAW\n";
                cpu_last_round_status = 2;
            }

            cout << "\tPOINTS\n   CPU: " << cpu_points << "\tYOU: " << player_points << endl;
        }
    }

    if(player_points == points){
        cout << "YOU win!\n";
    } else {
        cout << "CPU wins!\n";
    }
    cout << "THANK YOU!\n";
}
