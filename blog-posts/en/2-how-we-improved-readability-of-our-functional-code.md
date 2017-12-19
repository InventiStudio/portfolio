---
title:       How we improved readability of our functional code
slug:        how-we-improved-readability-of-our-functional-code
alternate:
  pl:        jak-poprawilismy-czytelnosc-naszego-funkcyjnego-kodu
cover:       how-we-improved-readability-of-our-functional-code__cover.jpg
miniCover:   how-we-improved-readability-of-our-functional-code__cover--mini.jpg
date:        2017-09-21
description: One of the most important rules for writing a deterministic, easy-to-debug code is avoiding side effects. The obvious choice if we want to meet this assumption is to use the functional paradigm. This, however, poseses a risk of poor code readability.
---

One of the most important rules for writing a deterministic, easy-to-debug code is avoiding side effects. The obvious choice if we want to meet this assumption is to use the functional paradigm. This, however, poseses a risk of poor code readability. This problem is especially evident in situations where we perform a series of transformations on the input data.

Let's take a look at the available solutions and point out pros and cons of these.

## 1. Traditional assembly of functions, ie. nesting of calls

Nesting calls known from math lessons is a solution that first comes to mind.

```javascript
3 2 1 data  // order of calls
h(g(f(x)))
```

What we need to pay attention to right from the beginning is the reversed order of calls, which in real applications will result in a significant loss of readability of the code. Let's take a  look at a real life example.

```javascript
ctx.send(sortBy(getProp('name'), mapWithArticles(articles, getOnlyAdults(parseData(response)))))
```

or rather

```javascript
ctx.send(
  sortBy(
    getProp('name'),
    mapWithArticles(
      articles,
      getOnlyAdults(
        parseData(
          response
        )
      )
    )
  )
)
```

We don't need an explanation of why this code is not the best (and the most readable) solution by any means.

## 2. Use of temporary variables / constants

The second approach is to use temporary variables storing the results of subsequent transformations.

```javascript
const parsedData = parseData(response)
const onlyAdults = getOnlyAdults(parsedData)
const adultsMappedWithArticles = mapWithArticles(articles, onlyAdults)
const sortedAdultsMappedWithArticles = sortBy(getProp('name'), adultsMappedWithArticles)
ctx.send(sortedAdultsMappedWithOhScrewThisShit)
```

In comparison to the first solution we got a series of calls from the top to the bottom, which is much clearer. Unfortunately, we've created a series of completely unnecessary constants, which we use only in one place (in the next transformation). Additionaly, we fall into the trap of naming. Either we'll come up with long and complex names for the next result's data, or, tired of it, we'll start to call them carelessly. Both scenarios are rather not optimistic.

## 3. Use one variable

By modifying the approach described above we can create one variable that will in turn store each transformation result.

```javascript
let temp
temp = parseData(response)
temp = getOnlyAdults(temp)
temp = mapWithArticles(articles, temp)
temp = sortBy(getProp('name'), temp)
ctx.send(temp)
```

We got rid of the series of variables and the hassle of naming. However, there is another problem. We introduced a mutating variable. After all, that's not what we meant when we decided to write a functional code, right?

## 4. Currying and composition

Currying a function involves replacing a multi-argument function with a function that takes one argument and returns another function that works in the same way as the previous one.

```javascript
f(a,b,c) => f(a)(b)(c)
sortBy(getProp('name'))(data)
```

In combination with the composition, known for example from the library [Ramda](http://ramdajs.com/), we can achieve the following effect:

```javascript
const result = R.compose(
  R.sortBy(R.prop('name')),  // 4
  mapWithArticles(articles), // 3
  getOnlyAdults,             // 2
  parseData,                 // 1
)(response)                  // data
ctx.send(result)             // 5
```

We got rid of the mutable variable, but instead we went back to calling the function right to left (in our case from bottom to top). If we then use this data somewhere (ctx.send) it is particularly confusing. The whole code is read from top to bottom, we suddenly flip the flow and after reading the inside calls of the function we turn the flow once again. Such a solution can be confusing *.

**Of course, there are situations where this behavior is desirable, e.g to compose an interface in jsx*

## 5. Composition ltr (left to right)

Fortunately, many libraries provide us with methods to make compositions in our natural direction. In Ramda, it's called `pipe`.

```javascript
const result = R.pipe(
  parseData,                 // 1
  getOnlyAdults,             // 2
  mapWithArticles(articles), // 3
  R.sortBy(R.prop('name')),  // 4
)(response)                  // data
ctx.send(result)             // 5
```

It is much better. The only flaw that still remains is that the input **data** is at the end.

## 6. Pipeline operator

For us, this solution is an unsurpassed design. The operator principle is very simple.

```elixir
# Elixir
a |> b => b(a)
a |> b |> c => c(b(a))
```

This way we can replace the composition with the following code:

```javascript
const result = response        // data
  |> parseData                 // 1
  |> getOnlyAdults             // 2
  |> mapWithArticles(articles) // 3
  |> R.sortBy(R.prop('name'))  // 4
ctx.send(result)               // 5
```

Unfortunately, the pipeline operator is not available in JavaScript. There is an [initiative](https://github.com/tc39/proposal-pipeline-operator) though (which we strongly support!) to introduce it in the next version of EcmaScript, but we still have to wait for that.

**In the meantime, there is nothing to prevent ourself from creating a simple code that, with the advantages of the pipeline operator, will allow us to "chain" functions in a comfortable and readable way.**

## 7. @inventistudio/using-js

**TL;DR**: The solution, which we'll create step by step below, is available on **[npm](https://www.npmjs.com/package/@inventistudio/using-js)** and on **[GitHub](https://github.com/InventiStudio/using-js)**, so if you do not want to go through the creation process and only need a ready-made solution, we send you back there.

### What do we want to archive?

Let's start by defining the assumptions that our solution will have to fulfill in order to be readable for us.

* Data should be passed at the beginning, ie. before the series of transformations
* Functions should be added in order from left to right (top to bottom).
* Each subsequent function should operate on the result of the previous function call, in the special case, the first function on the passed data
* The whole chain of calls should finally return the processed data

Knowing the conditions, let's consider how are we able to meet them.

### How do we archive this?

First of all, we have to reject the possibility of defining our own operator. This is not feasible in JavaScript, and even if it would, it could lead to misunderstandings. The code could be unreadable to outsiders who did not know our operator.

Let's use what JavaScript gives us out of the box. We have functions and objects to use.

On bare data we won't be able to define the methods we need, so we must first wrap the data passed to the object in which we define the necessary functions for the operations on data.

```javascript
function using(data) {
  return {
    do(func) {
      return using(func(data))
    },
  }
}
```

The principle of the above's code is very simple. The `using` function returns an object. It should be treated as a packaging tool. The returned object (package) contains the `do` method, which we pass as a `func` function to the data. It's result is re-wrapped using `using` and returned.

We can use the generated code snippet as follows:

```javascript
const result = using(response)
  .do(something)
  .do(somethingElse)
  .do(oneMoreThing)
```

It is important to note, however, that since `do` always returns an object, all this code assigns the `result` package to the constant, instead of the actual result. Therefore, we need to add another method.

```javascript
function using(data) {
  return {
    do(func) {
      return using(func(data))
    },
    value() {
      return data
    },
  }
}
```

At this point, by typing `.value ()` at the end of the call, we get the actual result. Let's rewrite the example from the beginning of the article then.

```javascript
const result = using(response)   // data
  .do(parseData)                 // 1
  .do(getOnlyAdults)             // 2
  .do(mapWithArticles(articles)) // 3
  .do(R.sortBy(R.prop('name')))  // 4
  .value()
ctx.send(result)                 // 5
```

We have received a readable, easy-to-understand and maintainable code. It works very well with Ramda, but there is nothing to prevent it from using any functional library or custom code.

### What's next?

Actually, we could stop there. We got rid of the excess variables, eliminated the mutations, got a chain of calls from left to right that operates on the data passed at the beginning. **However, the subject of the article is to improve the readability of the code, and in that matter we can definitely do more.**

### Conditional transformations

As our code grows, and the list of functionalities expands, there are situations where sometimes we would like to do something with data and sometimes not, depending on the defined condition. This is particularly common when creating APIs, where we want to give the client the ability to control the response using query parameters. What do we do then? We use ifs, elses and switches.

```javascript
const { limit, includes } = params

let users = await getUsers()

if (limit) {
    users = R.take(limit)(users)
}
if (includes.articles) {
    users = R.map(includeArticles)(users)
}
if (includes.comments) {
    users = R.map(includeComments)(users)
}

ctx.send(users)
```

Looks familiar? While such code is quite understandable, we can certainly improve it. Especially since we do mutations here. Note that each mutation is performed on the `users` variable, which either contains the fetched users or already processed data (e.g if the client passed both the limit and the desire to attach the articles to each user, then the map calling the `includeArticles` function works on data returned by `R.take`)

Let's add `doIf` to the `using` method then, which works similarly, but in a more functional way.

```javascript
function using(data) {
  return {
    do(func) {
      return using(func(data))
    },
    doIf(condition, func) {
      return condition ? this.do(func) : this
    },
    value() {
      return data
    },
  }
}
```

Now we can write the above example as follows:

```javascript
const { limit, includes } = params

const users = using(await getUsers())
  .doIf(limit, R.take(limit))
  .doIf(includes.articles, R.map(includeArticles))
  .doIf(includes.comments, R.map(includeComments))
  .value()

ctx.send(users)
```

Looks better, isn't it?


### Nothing else can be improved?

You can always add more useful methods. In our library [**using-js**](https://github.com/InventiStudio/using-js) in addition to the above code:

* We have added the `doUnless` method, which invokes transforms only when the condition is falsy.
* We allowed the function to be passed as `condition` in both `doIf` and `doUnless` functions. This is extremely useful for more complex conditions that depend on the data itself
* We added the `switch` method, which allows you to select one of the available methods based on the value passed.
* We wrote tests 😎

Try it yourself!

## Summary

One code can be written in many ways. And while the readability of particular solutions is above all a matter of taste, it seems to us that some are better than others. We are counting heavily (and looking forward to) the pipeline operator in JavaScript. But while it is not available, we will use the proposed solution. It seems to us the best way out for now.
