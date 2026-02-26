package pr3.delivery.model;


// Base Vehicle class (demonstrates composition with Engine)
public class Vehicle {

    protected String model;
    protected double baseCost;
    protected Engine engine; // composition

    // Constructor
    public Vehicle(String model, double baseCost, Engine engine) {
        this.model = model;
        this.baseCost = baseCost;
        this.engine = engine;
    }

    // Basic delivery cost calculation (will be overridden)
    public double calculateDeliveryCost() {
        return baseCost;
    }

    // Returns vehicle info and shows engine info (composition demo)
    public String getVehicleInfo() {
        System.out.println("Model: " + model);
        System.out.println("Base cost: " + baseCost);
        engine.getEngineInfo(); // accessing composed object
        return "----------------------";
    }
}

