interface EnumStepper<TEnumValue extends number> {
    nextStep: (step: TEnumValue) => TEnumValue;
    previousStep: (step: TEnumValue) => TEnumValue;
}

export function createEnumStepper<T extends string, TEnumValue extends number>(
    stepEnum: { [key in T]: TEnumValue }
): EnumStepper<TEnumValue> {
    return {
        nextStep: (step: TEnumValue) =>
            step + 1 >= Object.keys(stepEnum).length / 2
                ? (0 as TEnumValue)
                : ((step + 1) as TEnumValue),
        previousStep: (step: TEnumValue) =>
            step - 1 < 0 ? (0 as TEnumValue) : ((step - 1) as TEnumValue),
    };
}

export default EnumStepper;
