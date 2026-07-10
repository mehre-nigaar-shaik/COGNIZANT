public class TestLogger {

    public static void main(String[] args) {

        // Get the first Logger instance
        Logger logger1 = Logger.getInstance();

        // Log a message
        logger1.log("Application started.");

        // Get the second Logger instance
        Logger logger2 = Logger.getInstance();

        // Log another message
        logger2.log("User logged in.");

        // Check whether both references point to the same object
        if (logger1 == logger2) {
            System.out.println("Only one Logger instance exists.");
        } else {
            System.out.println("Different Logger instances exist.");
        }
    }
}