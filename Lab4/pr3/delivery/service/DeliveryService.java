package pr3.delivery.service;

import pr3.delivery.model.Vehicle;
import java.util.List;

// Service class to work with vehicles
public class DeliveryService {

    // Print info for all vehicles
    public void printAllVehicles(List<Vehicle> vehicles) {
        for (Vehicle v : vehicles) {
            System.out.println(v.getVehicleInfo());
        }
    }

    // Calculate delivery for each vehicle
    public void calculateAllDeliveries(List<Vehicle> vehicles) {
        for (Vehicle v : vehicles) {
            System.out.println("Delivery cost: " + v.calculateDeliveryCost());
        }
    }

    // Calculate total cost
    public double calculateTotalCost(List<Vehicle> vehicles) {
        double sum = 0;
        for (Vehicle v : vehicles) {
            sum += v.calculateDeliveryCost();
        }
        return sum;
    }
}
