package practice3.animal.app;

import practice3.animal.model.Animal;
import practice3.animal.model.Dog;

import java.util.ArrayList;
import java.util.List;

public class MainApp {

    public static void main(String[] args) {

        // Create list of Animal type (polymorphism)
        List<Animal> animals = new ArrayList<>();

        // Add Dog objects
        animals.add(new Dog("Buddy", 3, "Labrador"));
        animals.add(new Dog("Rocky", 5, "German Shepherd"));

        // Loop through list and call methods
        for (Animal a : animals) {
            a.getInfo();      // overridden version runs
            a.makeSound();   // polymorphism
            a.eat();         // polymorphism
            a.eat("meat");   // overloaded method
            System.out.println();
        }
    }
}
