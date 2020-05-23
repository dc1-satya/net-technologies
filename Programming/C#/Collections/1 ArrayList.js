ArrayList stores objects of any type like an array.
https://www.tutorialsteacher.com/csharp/csharp-arraylist

ArrayList myArryList = new ArrayList();// Recommended

// or - with some limitations
IList myArryList = new ArrayList();

// or - with some limitations
ICollection myArryList = new ArrayList();

// or - with some limitations
IEnumerable myArryList = new ArrayList();

Example
      using System;
      using System.Collections;

      public class Program
      {
        public static void Main()
        {
          ArrayList myArryList = new ArrayList();
          myArryList.Add(1);
          myArryList.Add("Two");
          myArryList.Add(3);
          myArryList.Add(4.5f);
          
          //Access individual item using indexer
          int firstElement = (int) myArryList[0]; 
          
          Console.WriteLine(firstElement);
          
          string secondElement = (string) myArryList[1]; 
          Console.WriteLine(secondElement);
          
          int thirdElement = (int) myArryList[2]; 
          Console.WriteLine(thirdElement);
          
          float fourthElement = (float) myArryList[3]; 
          Console.WriteLine(fourthElement);
          
          //use var keyword
          var firstElement2 = myArryList[0]; 
          Console.WriteLine(firstElement2);
        }
      }

      Result
      1
      Two
      3
      4.5
      1
      https://www.tutorialsteacher.com/codeeditor?cid=cs-tsazNb

