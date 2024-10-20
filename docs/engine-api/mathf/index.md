# MathF

The MathF class provides useful static methods for anything relating to Math with Floats. While most languages have math functions built in, this provides actual Unity/dotnet math functions.

## Methods

Method Name | Return Type | Parameters | Description
--- | --- | --- | ---
Abs | `float` | `float` | Returns the absolute value of a single-precision floating-point number
Acos | `float` | `float` | Returns the angle whose cosine is the specified number
Acosh | `float` | `float` | Returns the angle whose hyperbolic cosine is the specified number
Asin | `float` | `float` | Returns the angle whose sine is the specified number
Asinh | `float` | `float` | Returns the angle whose hyperbolic sine is the specified number
Atan | `float` | `float` | Returns the angle whose tangent is the specified number
Atan2 | `float` | `float`, `float` **OR** [float2](./../float2/index.md) | Returns the angle whose tangent is the quotient of two specified numbers
Atanh | `float` | `float` | Returns the angle whose hyperbolic tangent is the specified number
Cbrt | `float` | `float` | Returns the cube root of a specified number
Ceiling | `float` | `float` | Returns the smallest integral value that is greater than or equal to the specified single-precision floating-point number
Cos | `float` | `float` | Returns the cosine of the specified angle
Cosh | `float` | `float` | Returns the hyperbolic cosine of the specified angle
Exp | `float` | `float` | Returns e raised to the specified power
Floor | `float` | `float` | Returns the largest integral value less than or equal to the specified single-precision floating-point number
FusedMultiplyAdd | `float` | `float`, `float`, `float` | Returns (x * y) + z, rounded as one ternary operation
IEEERemainder | `float` | `float`, `float` **OR** [float2](./../float2/index.md) | Returns the remainder resulting from the division of a specified number by another specified number
Log | `float` | `float` | Returns the natural (base e) logarithm of a specified number
Log | `float` | `float`, `float` **OR** [float2](./../float2/index.md) | Returns the logarithm of a specified number in a specified base.
Log10 | `float` | `float` | Returns the base 10 logarithm of a specified number
Max | `float` | `float`, `float` **OR** [float2](./../float2/index.md) | Returns the larger of two single-precision floating-point numbers
Min | `float` | `float`, `float` **OR** [float2](./../float2/index.md) | Returns the smaller of two single-precision floating-point numbers
Pow | `float` | `float`, `float` **OR** [float2](./../float2/index.md) | Returns a specified number raised to the specified power
Round | `float` | `float`, `int`, [MidpointRounding](./../midpointrounding/index.md) | Rounds a single-precision floating-point value to a specified number of fractional digits, and rounds midpoint values to the nearest even number
Sign | `float` | `float` | Returns an integer that indicates the sign of a single-precision floating-point number
Sin | `float` | `float` | Returns the sine of the specified angle
SinCos | [SinCos](./../sincos/index.md) | `float` | Returns the sine and cosine of the specified angle
Sinh | `float` | `float` | Returns the hyperbolic sine of the specified angle
Sqrt | `float` | `float` | Returns the square root of a specified number
Tan | `float` | `float` | Returns the tangent of the specified angle
Tanh | `float` | `float` | Returns the hyperbolic tangent of the specified angle
Truncate | `float` | `float` | Calculates the integral part of a specified single-precision floating-point number