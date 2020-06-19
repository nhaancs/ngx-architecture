# rules-engine

This module is responsible for validate and provide a set of common data validation rules.

## Code structure

### /src/lib/rules

All rules are specified in this folder. 

Important interfaces/classes and their relationships:

```typescript 
/**
 * An interface that defines the required 
 * shape/structure for all rules. 
 */
interface IRuleComponent {
    execute(): RuleResult;
}
```

```typescript 
/**
 * New rules should extend [SimpleRule] or [CompositeRule],
 * these rule abstractions extend [RulePolicy].
 */
export class RulePolicy implements IRuleComponent {
    // implementation hidden
}
```

```typescript 
/**
 * Use this class as a base [extends] class for 
 * simple rules. A simple rule contains a single 
 * rule and target to evaluate.
 */
export class SimpleRule extends RulePolicy {
    // implementation hidden
}
```

```typescript 
/**
 * Use the [CompositeRule] as a base class 
 * for a complex rule - a rule that contains
 * other rules.
 */
export class CompositeRule extends RulePolicy {
    // implementation hidden
}
```

### /src/lib/service

Important interfaces/classes and their relationships:

```typescript 
/**
 * Use this class to create a message for the 
 * current [ServiceContext].
 */
export class ServiceMessage {
    // implementation hidden
}
```

```typescript 
/**
 * Use this class to manage the context 
 * of a single service call.
 *  
 * This class will contain a list of 
 * any service messages added during 
 * the processing of a service request.
 */
export class ServiceContext {
    // implementation hidden
}
```

### /src/lib/validation

Important interfaces/classes and their relationships:

```typescript 
/**
 * Use this interface class to define the structure 
 * of a Validation Context.
 */
export interface IValidationContext {
  /**
   * Use to indicate the status of the validation context. 
   * The value is [true] when all rules are evaluated 
   * without violations.
   */
  isValid: boolean;
  /**
   * Use to indicate the state of the validation context.
   */
  state: ValidationContextState;
  /**
   * A list of results for all rules evaluated.
   */
  results: RuleResult[];
  /**
   * A list of rules that will be evaluated.
   */
  rules: RulePolicy[];

  /**
   * Implement this method to indicate if the validation 
   * context contains any rule violations. Returns [true]
   * when there are one or more rule violations.
   */
  hasRuleViolations(): boolean;

  /**
   * Implement this method to render the rules contained in the validation context.
   */
  renderRules(): IValidationContext;
}
```

```typescript 
/**
 * Use this class to create a new Validation Context 
 * for your application. 
 * With this context, you can add rules and 
 * evaluate the rules.
 *
 * After the rules are evaluated, you can use the 
 * Validation Contextto determine if there are 
 * any rule violations.
 */
export class ValidationContext implements IValidationContext {
    // implementation hidden
}
```

## Example usage: 

```typescript
// New ValidationContext
const validationContext = new ValidationContext();

// Add rules

validationContext.addRule(
    new IsTrue( // SimpleRule
        'LogWriterExists', 
        'The log writer is not configured.', 
        this.hasWriter
    )
);
validationContext.addRule(
    new StringIsNotNullEmptyRange( // CompositeRule
    'SourceIsRequired',
    'The entry source is not valid.',
    this.targetEntry.source,
    1,
    100
    )
);

// Start evaluate rules and
// Add rule evaluation messages to service context
validationContext
    .renderRules()
    .results
    .forEach(ruleResult => {
        const serviceMessage = new ServiceMessage(
            ruleResult.rulePolicy.name,
            ruleResult.rulePolicy.message,
            MessageType.Error
        );
        serviceMessage.DisplayToUser = ruleResult.rulePolicy.isDisplayable;
        serviceMessage.Source = this.actionName;
        this.serviceContext.Messages.push(serviceMessage);
    })

if (validationContext.hasRuleViolations()) {
    this.serviceContext.Messages.forEach(e => {
        if (e.MessageType === MessageType.Error) {
            this.loggingService.log(this.actionName, Severity.Error, e.toString());
        }
    });
}
```

This library was generated with [Nx](https://nx.dev).

## Running unit tests

Run `nx test rules-engine` to execute the unit tests.
