package pr3.delivery.model;


// Simple Engine class
public class Engine {

    private String type;
    private int horsePower;

    // Constructor
    public Engine(String type, int horsePower) {
        this.type = type;
        this.horsePower = horsePower;
    }

    // Prints engine info
    public void getEngineInfo() {
        System.out.println("Engine type: " + type);
        System.out.println("Horsepower: " + horsePower);
    }
}
