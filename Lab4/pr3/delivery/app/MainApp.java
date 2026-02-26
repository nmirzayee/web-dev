package pr3.delivery.app;

import pr3.delivery.model.*;
import pr3.delivery.service.DeliveryService;

import java.util.ArrayList;
import java.util.List;

public class MainApp {

    public static void main(String[] args) {

        // Create engines
        Engine e1 = new Engine("Petrol", 150);
        Engine e2 = new Engine("Diesel", 400);

        // Create vehicles
        Car car = new Car("Toyota Camry", 100, e1, 5);
        Truck truck = new Truck("Volvo Truck", 200, e2, 20);

        // Store in List<Vehicle> (polymorphism)
        List<Vehicle> vehicles = new ArrayList<>();
        vehicles.add(car);
        vehicles.add(truck);

        // Use service
        DeliveryService service = new DeliveryService();

        service.printAllVehicles(vehicles);
        service.calculateAllDeliveries(vehicles);

        double total = service.calculateTotalCost(vehicles);
        System.out.println("Total cost: " + total);
    }
}

