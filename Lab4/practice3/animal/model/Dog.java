package practice3.animal.model;

// Dog class inherits from Animal
public class Dog extends Animal {

    // Specific field for Dog
    private String breed;

    // Constructor
    public Dog(String name, int age, String breed) {
        super(name, age); // call parent constructor
        this.breed = breed;
    }

    // Override makeSound()
    @Override
    public void makeSound() {
        System.out.println(name + " says: Woof!");
    }

    // Override eat()
    @Override
    public void eat() {
        System.out.println(name + " eats dog food");
    }

    // Override getInfo()
    @Override
    public void getInfo() {
        super.getInfo(); // print base info first
        System.out.println("Breed: " + breed);
        System.out.println("-------------------");
    }
}
