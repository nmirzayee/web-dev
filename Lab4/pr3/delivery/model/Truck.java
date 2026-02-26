package pr3.delivery.model;

// Truck extends Vehicle
public class Truck extends Vehicle {

    private int maxLoad;

    // Constructor
    public Truck(String model, double baseCost, Engine engine, int maxLoad) {
        super(model, baseCost, engine);
        this.maxLoad = maxLoad;
    }

    // Override delivery cost
    @Override
    public double calculateDeliveryCost() {
        return baseCost + (maxLoad * 2);
    }

    // Overloaded version
    public double calculateDeliveryCost(double distance, double fuelPrice) {
        return baseCost + distance * fuelPrice + maxLoad;
    }
}

