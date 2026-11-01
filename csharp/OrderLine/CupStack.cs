namespace OrderLine;

// The stack of clean mugs behind the counter: last in, first out. The
// mugs are kept in a growing array, with the top at the end.
public class CupStack
{
    private List<string> mugs = new List<string>();

    // How many clean mugs are on the stack.
    public int Count => mugs.Count;

    /*
     * Put a clean mug on top of the stack.
     *
     * Push("red mug"), Push("blue mug") -> blue mug is on top
     *
     * Big-O: (write it here)
     */
    public void Push(string mug)
    {
        // Your code here.
    }

    /*
     * Take the mug on top off the stack and return it, or return null if
     * the stack is empty.
     *
     * With red mug, then blue mug pushed: Pop() -> "blue mug"
     *
     * Big-O: (write it here)
     */
    public string? Pop()
    {
        return null;
    }

    /*
     * Return the mug on top without taking it off, or null if the stack is
     * empty.
     *
     * Big-O: (write it here)
     */
    public string? Peek()
    {
        return null;
    }
}
