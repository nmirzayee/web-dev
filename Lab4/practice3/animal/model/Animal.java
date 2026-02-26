package practice3.animal.model;


// Abstract base class
public abstract class Animal {

    // Fields (common for all animals)
    protected String name;
    protected int age;

    // Constructor to initialize fields
    public Animal(String name, int age) {
        this.name = name;
        this.age = age;
    }

    // Abstract methods (must be implemented in child classes)
    public abstract void makeSound();
    public abstract void eat();

    // 🔹 Overloaded method (same name, different parameter)
    public void eat(String food) {
        System.out.println(name + " eats " + food);
    }

    // Method to print basic info
    public void getInfo() {
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
    }
}
