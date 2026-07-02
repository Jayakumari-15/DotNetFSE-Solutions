public class Main {

    public static void main(String[] args) {

        Logger log1 = Logger.getInstance();
        log1.printLog("Application Started");

        Logger log2 = Logger.getInstance();
        log2.printLog("User Logged In");

        if (log1 == log2) {
            System.out.println("Only one Logger object is created.");
        } else {
            System.out.println("More than one object is created.");
        }
    }
}
