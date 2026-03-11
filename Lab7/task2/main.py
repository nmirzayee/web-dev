from models import Animal, Dog, Cat

def main():
    animals = [
        Dog("Rex", 5, "Labrador"),
        Cat("Whiskers", 3, "Black"),
        Animal("Generic", 2, "Unknown")
    ]

    for animal in animals:
        print(animal)              
        print(animal.info())         
        print(f"{animal.name} says: {animal.speak()}")  

        if isinstance(animal, Dog):
            print(animal.fetch("ball"))
        elif isinstance(animal, Cat):
            print(animal.scratch())

        print("-" * 40)
