using System;

namespace GuessingGameCSharp
{
    class Program
    {
        static void Main(string[] args)
        {   //parameters
            string secretWord = "Dimitris";
            string guess = "";
            int guessCount = 0;
            int guessLimit = 3;
            bool outOfGuesses = false;

            while (guess != secretWord && !outOfGuesses)
            {
                if (guessCount < guessLimit)
                {
                    Console.Write("Enter a guess:");
                    guess = Console.ReadLine();
                    guessCount++;
                }
                else
                {
                    outOfGuesses = true;
                }
            }

            if (outOfGuesses) {
                Console.Write("You lose!!!"); }

            else {
                Console.Write("You win!!!");
            }

            //Displays screen for a long time 
            Console.ReadLine();
        }
    }
}
