//Enter a Roman Number as input and convert it to an integer

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter a Roman numeral: ");
        String romanNumeral = scanner.nextLine().toUpperCase(); // Convert input to uppercase

        int result = romanToInt(romanNumeral);
        System.out.println("Integer value: " + result);

        scanner.close();
    }

    public static int romanToInt(String s) {
        int result = 0;
        int prevValue = 0;

        // Traversing the Roman numeral string from right to left
        for (int i = s.length() - 1; i >= 0; i--) {
            int currentValue = getRomanValue(s.charAt(i));

            // If the value of the current numeral is greater or equal to the previous numeral, then add it
            if (currentValue >= prevValue) {
                result += currentValue;
            } else { // If the value is less than the previous numeral, then subtract it
                result -= currentValue;
            }

            // Updating the previous value for the next iteration
            prevValue = currentValue;
        }

        return result;
    }

    public static int getRomanValue(char c) {
        // Using Switch-case to return the integer value for each Roman numeral character
        switch (c) {
            case 'I':
                return 1;
            case 'V':
                return 5;
            case 'X':
                return 10;
            case 'L':
                return 50;
            case 'C':
                return 100;
            case 'D':
                return 500;
            case 'M':
                return 1000;
            default:
                return 0;
        }
    }
}
