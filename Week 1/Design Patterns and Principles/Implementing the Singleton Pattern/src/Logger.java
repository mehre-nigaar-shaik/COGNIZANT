public class Logger {

    private static Logger instance;

    // Private constructor
    private Logger() {
        System.out.println("Logger instance created.");
    }

    // Returns the single Logger object
    public static Logger getInstance() {

        if (instance == null) {
            instance = new Logger();
        }

        return instance;
    }

    // Logging method
    public void log(String message) {
        System.out.println("LOG: " + message);
    }
}