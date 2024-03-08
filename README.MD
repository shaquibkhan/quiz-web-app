- If we need to implement addEventListener on multiple button then we have to loop through it.
- If we are using type='module' in our scripts, then any `onClick` handler in HTML will not work as expected because onClick will look for the defined method in the global scope & when we have defined our function in a `module scripts`, with type="module". Module scripts `encapsulate` thier code and functions defined within is not added `directly` to the global scope.

