package pr3.delivery.model;

// Car extends Vehicle
public class Car extends Vehicle {

    private int numberOfSeats;

    // Constructor
    public Car(String model, double baseCost, Engine engine, int numberOfSeats) {
        super(model, baseCost, engine);
        this.numberOfSeats = numberOfSeats;
    }

    // Override delivery cost
    @Override
    public double calculateDeliveryCost() {
        return baseCost + (numberOfSeats * 10);
    }

    // Overloaded method (with extra parameters)
    public double calculateDeliveryCost(double distance, double extraWeight) {
        return baseCost + distance * 2 + extraWeight * 5;
    }
}
