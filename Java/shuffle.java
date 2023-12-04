import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        Integer[] array = {1, 2, 3, 4, 5, 6, 7};

        // Converting array to a List
        List<Integer> list = Arrays.asList(array);

        // Shuffle the list using Collections.shuffle() method
        Collections.shuffle(list);

        // Converting the shuffled list back to an array
        list.toArray(array);

        // Displaying the shuffled array
        System.out.println("Shuffled Array: " + Arrays.toString(array));
    }
}