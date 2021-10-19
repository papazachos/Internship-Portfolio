using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NumberGuesser
{
    class Program
    {
        static void Main(string[] args)
        {
            // Run Function to get Info 
            GetAppInfo();

            //Ask for name 
            GreetUser();

            while (true)
            {
                //Create a new random object
                Random random = new Random();

                int correctNumber = random.Next(1, 10);

                //Init Guess Var
                int guess = 0;

                //Ask user for number
                Console.WriteLine("Guess a number between 1 and 10");

                //While guess is not correct
                while (guess != correctNumber)
                {
                    //Get user's input
                    string inputName = Console.ReadLine();
                   
                    //Make sure it's a number
                    if (!int.TryParse(inputName, out guess))
                    {
                        //Change text color 
                        Console.ForegroundColor = ConsoleColor.Red;

                        //Tell user it's not a number
                        Console.WriteLine("I'am Sorry. Please enter a number");

                        // Reset Text Color
                        Console.ResetColor();
                        //Keep going
                        continue;
                    }

                    //Cast to int and put in guess
                    guess = Int32.Parse(inputName);

                    //Match guess to correct Number
                    if (guess != correctNumber)
                    {
                        //Change text color 
                        Console.ForegroundColor = ConsoleColor.Red;

                        //Wrong number message
                        Console.WriteLine("Wrong number. Please try again !");

                        //Reset Text Color
                        Console.ResetColor();
                    }

                }
                //Output Succeess message

                Console.ForegroundColor = ConsoleColor.DarkBlue;

                //Wrong number message
                Console.WriteLine("Congratulations. You are Correct!!!");

                //Reset Text Color
                Console.ResetColor();

                //Ask to play again
                Console.WriteLine("Do you want to play again? [Y or N]");

                //Get answer 
                string answer = Console.ReadLine().ToUpper();
                if (answer == "Y") {
                    continue;
                }
                else if (answer == "N")
                {
                    return;
                }
                else 
                {
                    return;
                }
            }
        }

       //Show App details 
        static void GetAppInfo()
        {
            string appName = "Number Guesser";
            string appVersion = "1.0.0";
            string appAuthor = "Dimitris Papazacharias";

            Console.ForegroundColor = ConsoleColor.Green;

            Console.WriteLine("{0}:Version {1} by {2}", appName, appVersion, appAuthor);

            Console.ResetColor();
        }
        //Ask user's name and greet
        static void GreetUser()
        {
            
            Console.WriteLine("What is your name?");

            string input = Console.ReadLine();

            Console.WriteLine("Hello {0}, Let's begin...", input);
        }

    }
}