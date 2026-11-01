import java.util.ArrayList;
import java.util.List;

// The stack of clean mugs behind the counter: last in, first out. The
// mugs are kept in a growing array, with the top at the end.
public class CupStack {
    private List<String> mugs = new ArrayList<>();

    // How many clean mugs are on the stack.
    public int count() {
        return mugs.size();
    }

    /*
     * Put a clean mug on top of the stack.
     *
     * push("red mug"), push("blue mug") -> blue mug is on top
     *
     * Big-O: (write it here)
     */
    public void push(String mug) {
        // Your code here.
    }

    /*
     * Take the mug on top off the stack and return it, or return null if
     * the stack is empty.
     *
     * With red mug, then blue mug pushed: pop() -> "blue mug"
     *
     * Big-O: (write it here)
     */
    public String pop() {
        return null;
    }

    /*
     * Return the mug on top without taking it off, or null if the stack is
     * empty.
     *
     * Big-O: (write it here)
     */
    public String peek() {
        return null;
    }
}
