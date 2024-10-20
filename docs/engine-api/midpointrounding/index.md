# MidpointRounding

Specifies the strategy that mathematical rounding methods should use to round a number.

**Enums**

Name | Value | Description
--- | --- | ---
ToEven | 0 | The strategy of rounding to the nearest number, and when a number is halfway between two others, it's rounded toward the nearest even number
AwayFromZero | 1 | The strategy of rounding to the nearest number, and when a number is halfway between two others, it's rounded toward the nearest number that's away from zero
ToZero | 2 | The strategy of directed rounding toward zero, with the result closest to and no greater in magnitude than the infinitely precise result
ToNegativeInfinity | 3 | The strategy of downwards-directed rounding, with the result closest to and no greater than the infinitely precise result
ToPositiveInfinity | 4 | The strategy of upwards-directed rounding, with the result closest to and no less than the infinitely precise result