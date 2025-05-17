# Design Patterns

## Factory Design Pattern

See [factoryPattern.js](factoryPattern.js)

The Factory pattern is a versatile design pattern in Node.js that decouples object creation from implementation. It offers several key advantages:

- Allows creation of objects whose class is determined at runtime
- Provides a smaller surface area than direct class usage, making code more robust
- Enables encapsulation through closures
- Offers flexibility in how objects are instantiated

### Key Benefits

1. **Decoupling Creation from Implementation**: A factory wraps object instantiation, giving developers control over how objects are created while keeping consumers agnostic about implementation details.

2. **Implementation Flexibility**: Factories can create different object types based on conditions (e.g., creating different image handlers based on file extensions).

3. **Encapsulation Mechanism**: Using closures, factories can enforce private variables and implement validation logic that wouldn't be possible with direct object properties.

### Real-World Example: Code Profiler

The chapter demonstrates a practical code profiler implementation that shows how factories can provide different implementations based on runtime conditions:

- In development: Returns a full Profiler that measures and logs execution time
- In production: Returns a "noop" (no operation) profiler with empty methods

This approach allows for conditional functionality without modifying client code or adding complexity.

### Industry Usage

The pattern is common in Node.js libraries like Knex (SQL query builder), which exports a factory function that selects the appropriate dialect object based on the database engine before creating and returning the Knex object.
