const path = require('path');

module.exports = {
  "parser": "@typescript-eslint/parser",
  "plugins": [
    "@typescript-eslint",
    "import"
  ],
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "node": true,
    "mocha": true
  },
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true
    },
    "project": "./tsconfig.json"
  },
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "globals": {
    "Backendless": "readonly"
  },
  "settings": {
    "import/ignore": [
      "node_modules",
      "\\.(json|css|jpg|png|gif|eot|svg|ttf|woff|woff2|mp4|webm)$"
    ],
    "import/extensions": [
      ".ts",
      ".js",
    ],
    "import/resolver": {
      "node": {
        "extensions": [
          ".js",
          ".ts",
          ".json"
        ]
      },
      "alias": {
        "map": [
          ["models", path.resolve(__dirname, "./app/models")],
          ["utils", path.resolve(__dirname, "./app/utils")],
          ["workflows", path.resolve(__dirname, "./app/workflows")],
          ["types", path.resolve(__dirname, "./app/types")],
          ["app", path.resolve(__dirname, "./app")],
          ["test", path.resolve(__dirname, "./test")],
          ["scripts", path.resolve(__dirname, "./scripts")],
        ],
        "extensions": [".ts"]
      },
    }
  },
  "rules": {
    // enforce "for" loop update clause moving the counter in the right direction
    "for-direction": "error",
    // enforce return statements in getters
    "getter-return": "error",
    // disallow await inside of loops
    "no-await-in-loop": 0,
    // disallow comparing against -0
    "no-compare-neg-zero": "warn",
    // disallow assignment operators in conditional expressions
    "no-cond-assign": "error",
    // disallow constant expressions in conditions
    "no-constant-condition": "warn",
    // disallow control characters in regular expressions
    "no-control-regex": "warn",
    // disallow duplicate arguments in function definitions
    "no-dupe-args": "error",
    // disallow duplicate keys in object literals
    "no-dupe-keys": "error",
    // Rule to disallow a duplicate case label
    "no-duplicate-case": "error",
    // disallow empty block statements
    "no-empty": "warn",
    // disallow empty character classes in regular expressions
    "no-empty-character-class": "warn",
    // disallow reassigning exceptions in catch clauses
    "no-ex-assign": "warn",
    // disallow unnecessary boolean casts
    "no-extra-boolean-cast": "warn",
    // disallow unnecessary parentheses
    // "no-extra-parens": ["error", "all", {
    //   "nestedBinaryExpressions": false,
    //   "ignoreJSX": "all",
    //   "enforceForArrowConditionals": false
    // }],
    // disallow unnecessary semicolons
    "no-extra-semi": "warn",
    // disallow reassigning function declarations
    "no-func-assign": "error",
    // disallow variable or function declarations in nested blocks
    "no-inner-declarations": [
      "error",
      "both"
    ],
    "no-invalid-regexp": [
      "error"
    ],
    "no-irregular-whitespace": [
      "warn"
    ],
    // disallow calling global object properties as functions
    "no-obj-calls": "error",
    // disallow multiple spaces in regular expression literals
    "no-regex-spaces": "error",
    // disallow sparse arrays
    "no-sparse-arrays": "error",
    // Disallow template literal placeholder syntax in regular strings
    "no-template-curly-in-string": "error",
    "no-unexpected-multiline": "error",
    // disallow unreachable code after return, throw, continue, and break statements
    "no-unreachable": "error",
    // disallow control flow statements in finally blocks
    "no-unsafe-finally": "error",
    // disallow negating the left operand of relational operators
    "no-unsafe-negation": "error",
    // require calls to isNaN() when checking for NaN
    "use-isnan": "error",
    // enforce comparing typeof expressions against valid strings
    "valid-typeof": "error",
    // Enforces getter/setter pairs in objects
    "accessor-pairs": "error",
    // Enforces return statements in callbacks of array's methods
    "array-callback-return": "error",
    // Treat var as Block Scoped
    "block-scoped-var": "error",
    // Limit Cyclomatic Complexity
    "complexity": "error",
    // Require Following Curly Brace Conventions
    "curly": "error",
    // Enforce newline before and after dot
    "dot-location": [
      "error",
      "property"
    ],
    // Require Dot Notation
    "dot-notation": [
      "error"
    ],
    // Require === and !==
    "eqeqeq": [
      "error",
      "always"
    ],
    // Require Guarding for-in
    "guard-for-in": "error",
    // Disallow Use of caller/callee
    "no-caller": "error",
    // Disallow lexical declarations in case/default clauses
    "no-case-declarations": "error",
    // Disallow return before else
    "no-else-return": [
      "error",
      {
        "allowElseIf": false
      }
    ],
    "no-empty-function": [
      "error",
      {
        "allow": [
          "methods",
          "arrowFunctions"
        ]
      }
    ],
    // Disallow empty destructuring patterns
    "no-empty-pattern": "error",
    // Disallow Null Comparisons
    "no-eq-null": "error",
    "no-eval": "error",
    // Disallow Extending of Native Objects
    "no-extend-native": "error",
    // Disallow unnecessary function binding
    "no-extra-bind": "error",
    // Disallow Unnecessary Labels
    "no-extra-label": "error",
    // Disallow Case Statement Fallthrough
    "no-fallthrough": "warn",
    // Disallow Floating Decimals
    "no-floating-decimal": "error",
    // Disallow assignment to native objects or read-only global variables
    "no-global-assign": "error",
    // Disallow the type conversion with shorter notations
    "no-implicit-coercion": "error",
    // disallow variable and function declarations in the global scope
    "no-implicit-globals": "error",
    // Disallow Implied eval()
    "no-implied-eval": "error",
    // Disallow Iterator
    "no-iterator": "error",
    // Disallow Labeled Statements
    "no-labels": [
      "error",
      {
        "allowLoop": true
      }
    ],
    // Disallow Unnecessary Nested Blocks
    "no-lone-blocks": "error",
    // Disallow Functions in Loops
    "no-loop-func": "error",
    // Disallow Magic Numbers
    "no-magic-numbers": ["off"],
    // Disallow multiple spaces
    "no-multi-spaces": "warn",
    // Disallow Multiline Strings
    "no-multi-str": "error",
    "no-new-func": "error",
    // Disallow Primitive Wrapper Instances
    "no-new-wrappers": "error",
    // disallow octal literals
    "no-octal": "error",
    // Disallow Reassignment of Function Parameters
    "no-param-reassign": "error",
    // Disallow Use of __proto__
    "no-proto": "error",
    // disallow variable redeclaration
    "no-redeclare": [
      "error",
      {
        "builtinGlobals": true
      }
    ],
    // Disallows unnecessary return await
    "no-return-await": "error",
    // Disallow Script URLs
    "no-script-url": "error",
    // Disallow Self Assignment
    "no-self-assign": [
      "error",
      {
        "props": false
      }
    ],
    // Disallow Self Compare
    "no-self-compare": "error",
    // Disallow Use of the Comma Operator
    "no-sequences": "error",
    // Restrict what can be thrown as an exception
    "no-throw-literal": "error",
    // Disallow unmodified conditions of loops
    "no-unmodified-loop-condition": "error",
    // Disallow Unused Expressions
    "no-unused-expressions": [
      "warn",
      {
        "allowShortCircuit": true
      }
    ],
    // Disallow Unused Labels
    "no-unused-labels": "error",
    // Disallow unnecessary .call() and .apply()
    "no-useless-call": "error",
    // Disallow unnecessary concatenation of strings
    "no-useless-concat": "error",
    // Disallow unnecessary escape usage
    "no-useless-escape": "error",
    // Disallow redundant return statements
    "no-useless-return": "error",
    // Disallow use of the void operator
    "no-void": "error",
    // disallow with statements
    "no-with": "warn",
    // require using Error objects as Promise rejection reasons
    "prefer-promise-reject-errors": [
      "warn",
      {
        "allowEmptyReject": true
      }
    ],
    // Require Radix Parameter
    "radix": "error",
    // Disallow async functions which have no await expression
    "require-await": "error",
    // Require IIFEs to be Wrapped
    "wrap-iife": [
      "error",
      "inside"
    ],
    // Require or disallow Yoda Conditions
    "yoda": [
      "error",
      "never",
      {
        "exceptRange": true
      }
    ],
    // require or disallow strict mode directives
    // "strict": ["error", "global"],
    // require or disallow initialization in variable declarations
    "init-declarations": [
      "error",
      "always"
    ],
    // Disallow Shadowing of Variables Inside of catch
    "no-catch-shadow": "error",
    // disallow deleting variables
    "no-delete-var": "error",
    // Disallow Labels That Are Variables Names
    "no-label-var": "error",
    // Disallow specific global variables
    "no-restricted-globals": [
      "error",
      {
        "name": "event",
        "message": "Use local parameter instead."
      }
    ],
    // disallow variable declarations from shadowing variables declared in the outer scope
    // "no-shadow": ["warn", {
    //   "builtinGlobals": true,
    //   "hoist": "never"
    // }],
    // Disallow Shadowing of Restricted Names
    "no-shadow-restricted-names": "warn",
    // Disallow Undeclared Variables
    "no-undef": [
      "error",
      {
        "typeof": true
      }
    ],
    // Disallow Initializing to undefined
    "no-undef-init": "warn",
    // Disallow Unused Variables
    "no-unused-vars": [
      "warn"
    ],
    // Disallow Early Use
    // "no-use-before-define": ["error", {
    //   "functions": false
    // }],
    // Enforce require() on the top-level module scope
    "global-require": "off",
    // Enforce Callback Error Handling
    "handle-callback-err": "warn",
    // disallow use of the Buffer() constructor
    "no-buffer-constructor": "error",
    // disallow require calls to be mixed with regular variable declarations
    "no-mixed-requires": "warn",
    // Disallow new require
    "no-new-require": "warn",
    // Disallow string concatenation when using __dirname and __filename
    "no-path-concat": "warn",
    // Disallow Synchronous Methods
    "no-sync": "error",
    // enforce line breaks after opening and before closing array brackets
    "array-bracket-newline": [
      "error",
      "consistent"
    ],
    // Disallow or enforce spaces inside of brackets
    "array-bracket-spacing": [
      "error",
      "never"
    ],
    // enforce line breaks after each array element
    // "array-element-newline": ["error", { "multiline": true }],
    // Disallow or enforce spaces inside of blocks after opening block and before closing block
    "block-spacing": "error",
    // Require Brace Style
    "brace-style": [
      "error",
      "1tbs",
      {
        "allowSingleLine": true
      }
    ],
    // Require CamelCase
    "camelcase": "off",
    // require or disallow trailing commas
    "comma-dangle": [
      "warn",
      "only-multiline"
    ],
    // Enforces spacing around commas
    "comma-spacing": [
      "warn",
      {
        "before": false,
        "after": true
      }
    ],
    // Comma style
    "comma-style": [
      "warn",
      "last"
    ],
    // Disallow or enforce spaces inside of computed properties
    "computed-property-spacing": [
      "warn",
      "never"
    ],
    // Require Consistent This
    "consistent-this": [
      "warn",
      "self"
    ],
    // require or disallow newline at the end of files
    "eol-last": [
      "warn",
      "never"
    ],
    // require or disallow spacing between function identifiers and their invocations
    "func-call-spacing": [
      "warn",
      "never"
    ],
    // require function names to match the name of the variable or property to which they are assigned
    "func-name-matching": [
      "warn",
      "always"
    ],
    // Require or disallow named function expressions
    "func-names": [
      "warn",
      "never"
    ],
    // enforce the consistent use of either function declarations or expressions
    "func-style": [
      "warn",
      "declaration",
      {
        "allowArrowFunctions": true
      }
    ],
    // enforce consistent line breaks inside function parentheses
    // "function-paren-newline": ["warn", "multiline"],
    // enforce minimum and maximum identifier lengths
    "id-length": [
      "warn",
      {
        "exceptions": [
          "i",
          "e",
          "t",
          "y",
          "x"
        ]
      }
    ],
    // Enforce the location of arrow function bodies with implicit returns
    "implicit-arrow-linebreak": [
      "error",
      "beside"
    ],
    // enforce consistent indentation
    "indent": [
      "warn",
      2,
      {
        "SwitchCase": 1
      }
    ],
    "key-spacing": [
      "warn",
      {
        "align": "colon"
      }
    ],
    // enforce consistent spacing before and after keywords
    "keyword-spacing": "warn",
    // require or disallow an empty line between class members
    "lines-between-class-members": [
      "warn",
      "always",
      {
        "exceptAfterSingleLine": true
      }
    ],
    // enforce a maximum line length
    "max-len": [
      "warn",
      120
    ],
    // Enforce or disallow newlines between operands of ternary expressions
    "multiline-ternary": [
      "error",
      "always-multiline"
    ],
    // require constructor names to begin with a capital letter
    "new-cap": "warn",
    // require parentheses when invoking a constructor with no arguments
    "new-parens": "warn",
    // require a newline after each call in a method chain
    // "newline-per-chained-call": ["warn", {
    //   "ignoreChainWithDepth": 2
    // }],
    // disallow Array constructors
    "no-array-constructor": "warn",
    // disallow if statements as the only statement in else blocks
    "no-lonely-if": "warn",
    // Disallow mixes of different operators
    "no-mixed-operators": "warn",
    // disallow mixed spaces and tabs for indentation
    "no-mixed-spaces-and-tabs": [
      "warn",
      "smart-tabs"
    ],
    // disallow multiple empty lines
    "no-multiple-empty-lines": [
      "warn",
      {
        "max": 2,
        "maxEOF": 0,
        "maxBOF": 0
      }
    ],
    // disallow negated conditions
    "no-negated-condition": "warn",
    // disallow nested ternary expressions
    "no-nested-ternary": "warn",
    // disallow Object constructors
    "no-new-object": "warn",
    // disallow trailing whitespace at the end of lines
    "no-trailing-spaces": "warn",
    // disallow whitespace before properties
    "no-whitespace-before-property": "warn",
    // enforce the location of single-line statements
    "nonblock-statement-body-position": [
      "warn",
      "beside"
    ],
    // enforce consistent line breaks inside braces
    "object-curly-newline": [
      "warn",
      {
        "ObjectExpression": {
          "consistent": true
        },
        "ObjectPattern": {
          "consistent": true
        }
      }
    ],
    // enforce consistent spacing inside braces
    "object-curly-spacing": [
      "warn",
      "always"
    ],
    // enforce variables to be declared either together or separately in functions
    "one-var": [
      "warn",
      "never"
    ],
    // require or disallow assignment operator shorthand where possible
    "operator-assignment": [
      "warn",
      "always"
    ],
    // enforce consistent linebreak style for operators
    "operator-linebreak": [
      "warn",
      "after",
      {
        "overrides": {
          "?": "ignore",
          ":": "ignore"
        }
      }
    ],
    // require or disallow padding within blocks
    "padded-blocks": [
      "warn",
      "never"
    ],
    // require an empty line before return|export statements
    "padding-line-between-statements": [
      "warn",
      {
        "blankLine": "always",
        "prev": "*",
        "next": "return"
      },
      {
        "blankLine": "always",
        "prev": "*",
        "next": "export"
      }
    ],
    // require quotes around object literal property names
    "quote-props": [
      "warn",
      "consistent"
    ],
    // specify whether double or single quotes should be used
    "quotes": [
      "warn",
      "single",
      "avoid-escape"
    ],
    // require or disallow use of semicolons instead of ASI
    "semi": [
      "warn",
      "never"
    ],
    // Enforce spacing before and after semicolons
    "semi-spacing": [
      "warn",
      {
        "before": false,
        "after": true
      }
    ],
    // enforce location of semicolons
    "semi-style": [
      "warn",
      "last"
    ],
    // Require Or Disallow Space Before Blocks
    "space-before-blocks": "warn",
    // Require or disallow a space before function parenthesis
    "space-before-function-paren": [
      "warn",
      "never"
    ],
    // Disallow or enforce spaces inside of parentheses
    "space-in-parens": [
      "warn",
      "never"
    ],
    // require spacing around infix operators
    "space-infix-ops": "warn",
    // Require or disallow spaces before/after unary operators
    "space-unary-ops": "warn",
    // Enforce spacing around colons of switch statements
    "switch-colon-spacing": "warn",
    // Require or disallow spacing between template tags and their literals
    "template-tag-spacing": "warn",
    // Require braces in arrow function body
    // "arrow-body-style": ["warn", "as-needed"],
    // Require parens in arrow function arguments
    "arrow-parens": [
      "warn",
      "as-needed"
    ],
    // Require space before/after arrow function's arrow
    "arrow-spacing": "warn",
    // Verify calls of super() in constructors
    "constructor-super": "error",
    // enforce consistent spacing around * operators in generator functions
    "generator-star-spacing": [
      "warn",
      {
        "before": true,
        "after": false
      }
    ],
    // Disallow modifying variables of class declarations
    "no-class-assign": "warn",
    // Disallow modifying variables that are declared using const
    "no-const-assign": "warn",
    // Disallow duplicate name in class members
    "no-dupe-class-members": "warn",
    // Disallow duplicate imports
    "no-duplicate-imports": "warn",
    "no-new-symbol": "error",
    // Disallow use of this/super before calling super() in constructors
    "no-this-before-super": "warn",
    // Disallow unnecessary computed property keys on objects
    "no-useless-computed-key": "warn",
    // Disallow unnecessary constructor
    "no-useless-constructor": "warn",
    // Disallow renaming import, export, and destructured assignments to the same name
    "no-useless-rename": "warn",
    // require let or const instead of var
    "no-var": "error",
    "object-shorthand": "warn",
    // Require using arrow functions for callbacks
    "prefer-arrow-callback": "warn",
    // Suggest using const
    "prefer-const": "warn",
    // Prefer destructuring from arrays and objects
    "prefer-destructuring": [
      "warn",
      {
        "VariableDeclarator": {
          "array": false,
          "object": true
        },
        "AssignmentExpression": {
          "array": true,
          "object": true
        }
      },
      {
        "enforceForRenamedProperties": false
      }
    ],
    // disallow parseInt() and Number.parseInt() in favor of binary, octal, and hexadecimal literals
    "prefer-numeric-literals": "warn",
    // Suggest using the rest parameters instead of arguments
    "prefer-rest-params": "warn",
    // Suggest using the spread operator instead of .apply()
    "prefer-spread": "warn",
    // Suggest using template literals instead of string concatenation
    "prefer-template": "warn",
    // Disallow generator functions that do not have yield
    "require-yield": "warn",
    // Enforce spacing between rest and spread operators and their expressions
    "rest-spread-spacing": [
      "warn",
      "never"
    ],
    // require symbol descriptions
    "symbol-description": "warn",
    // Enforce Usage of Spacing in Template Strings
    "template-curly-spacing": "warn",
    // Enforce spacing around the * in yield* expressions
    "yield-star-spacing": [
      "warn",
      {
        "before": true,
        "after": false
      }
    ],
    "import/no-unresolved": [2, { "commonjs": true, "caseSensitiveStrict": true }],
    "import/named": 2,
    "import/namespace": 2,
    "import/default": 2,
    "import/export": 2,
    'import/no-extraneous-dependencies': ['warn', {
      'devDependencies': [
        'test/**/*',
        'bin/**/*',
        'scripts/**/*',
      ]
    }],
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/no-namespace": "off",
    "@typescript-eslint/no-floating-promises": ["error"],
  }
}