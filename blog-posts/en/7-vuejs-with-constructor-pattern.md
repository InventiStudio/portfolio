---
title:       Vue.js with Constructor Pattern
slug:        vuejs-with-constructor-pattern
tags:        'JAVASCRIPT · VUE.JS · DESIGN PATTERNS · OOP'
alternate:
  pl:        to-do
cover:       vuejs-with-constructor-pattern__cover.png
miniCover:   vuejs-with-constructor-pattern__cover--mini.png
date:        2019-02-16
description: Constructor is a design pattern that allows us to create multiple object instances, which share some common functionalities and are created using the same interface, providing a true consistency. It can be used to create components, plugins, etc, but we find it especially useful in a case of API resources management in our Vue.js front-end applications!
---

## The problem

TODO:

Image you're building an app, where


## What is a Constructor Pattern?

Constructor is a design pattern that allows us to create multiple object instances, which share some common functionalities and are created using the same interface, providing a true consistency. It can be used to create components, plugins, etc, but we find it especially useful in a case of API resources management in our **Vue.js front-end** applications!

## Basic Constructor

In the pre-ES6 era, we could use constructor in the following fashion:

```javascript
function Car(brand, model) {
  this.brand = brand
  this.model = model
  
  this.getName = function() {
    return this.brand.concat(" ", this.model)
  }
}

var ferrariDaytona = new Car("Ferrari", "Daytona")

console.log(ferrariDaytona.brand)     // > "Ferrari"
console.log(ferrariDaytona.getName()) // > "Ferrari Daytona"
```

This solution has two main problems:
1. `getName()` function will be defined for every object instance, which is not very efficient.
2. It doesn't really protect us from type issues, as creating an instance with no arguments, will result in `getName()` function call to throw `Uncaught TypeError: Cannot read property 'concat' of null`.

## Constructor with Prototype

Let's improve our constructor a bit, to fix the above problems!

```javascript
function Car(brand, model) {
  this.brand = brand || ""
  this.model = model || ""
}

Car.prototype.getName = function() {
  // Here we could actually provide some more complex logic
  // for when `brand` and/or `model` are empty Strings.
  return this.brand.concat(" ", this.model)
}

var ferrariDaytona = new Car()

console.log(ferrariDaytona.brand)     // > ""
console.log(ferrariDaytona.getName()) // > " "
```

1. `brand || ""` will protect us when `brand` argument won't be provided. It won't though for truthy values like empty Array or positive Number — keep on reading for that!
2. Defining `getName()` function on `Car.prototype` will result in every Car instance just referencing this function, instead of re-defining it.

## Constructor using class syntax

***Disclaimer***:
We're not really fans of using `class` anywhere else beside the Constructor Pattern described in here, as there are [many dangers](https://twitter.com/_ericelliott/status/573090480004591617) connected with doing so. What's even more - we're totally against building client-side apps using **class inheritance**! In this case though, `class` provides a nice syntactic sugar which, in our opinion, improves readability of the code (which [we care about](https://inventi.studio/en/blog/how-we-improved-readability-of-our-functional-code) a lot!)

Alright, so here's how our example Car constructor looks like using class syntax:

```javascript
import R from "ramda"

class Car {
  constructor(opts = {}) {
    this.brand = R.is(String, opts.brand) ? opts.brand : ""
    this.model = R.is(String, opts.model) ? opts.model : ""
  }
  
  getName() {
    return this.brand.concat(" ", this.model)
  }
}

const ferrariCalifornia = new Car({ brand: "Ferrari", model: "California" })

console.log(ferrariCalifornia.brand)      // > "Ferrari"
console.log(ferrariCalifornia.getName())  // > "Ferrari California"
```

Now, what are the improvements we've done here:

1. First of all, we don't have multiple parameters, but just one, which is an Object with some properties. That prevents bugs when we e.g mistake the order of arguments or miss one of them. Default parameter `opts = {}` also rules out any `Cannot read property X of undefined` when constructor is called with no arguments.
2. We check the type of `opts` properties with Ramda (could be any other dynamic type checking lib, or even your custom code, we just use Ramda for lots of other stuff, hence why). `brand || ""` from the previous examples didn't protect us from truthy values like e.g empty Array or positive Number.
3. We don't need that ugly `Car.prototype.getName` syntax outside of the constructor body.

## Vue.js component form without Constructor

Let's create a simple Vue component with a form to create our Car, without using the Constructor Pattern yet.

```javascript
// template
<form>
  <input v-model="car.brand" type="text" />
  <input v-model="car.model" type="text" />
  <span>{{ carName }}</span>
  <button @click.prevent="createCar()", type="submit" />
</form>

// js
import ApiService from "services/api"

export default {
  data: () => ({
    car: {
      brand: "",
      model: ""
    }
  }),
  
  computed: {
    carName() {
      this.car.brand.concat(" ", this.car.model)
    }
  },
  
  methods: {
    async createCar() {
      await ApiService.post("/api/cars", {
        brand: this.car.brand,
        model: this.car.model
      })
      // Reset form after Car has been created
      this.car.brand = ""
      this.car.model = ""
    }
  }
}
```

The issues with this solution that we can see are:
1. Component's code can grow pretty quickly, if we had more properties on Car (let's face it — API resources in real case scenarios usually have more properties than just two).
2. There are a lot of `this.car` repetitive code, that can lead to some unexpected bugs — it's easy to omit one of the properties when there are so many of them.
3. There's no way of reusing some of that logic in other components (or Vuex store!), like properties and default values of them, or `carName` which is defined on the component.

## Vue.js component form with Constructor

Let's see how we could improve the above component using our Car constructor!

...but first — two quick improvements to the constructor itself:

```javascript
import R from "ramda"

class Car {
  constructor(opts = {}) {
    this.brand = R.is(String, opts.brand) ? opts.brand : ""
    this.model = R.is(String, opts.model) ? opts.model : ""
  }
  
  get name() { 
    return this.brand.concat(" ", this.model)
  }
  
  toCreatePayload() {
    return {
      brand: this.brand,
      model: this.model
    }
  }
}
```

What we did here is:
1. We changed `getName()` function to just `name` getter - we don't really need a function for such case, a simple getter will do the thing (like computed properties in Vue components!)
2. We've added `toCreatePayload` function, which will return an Object that is ready to be send to API endpoint, when we need to create a new Car.

Ok, back to our component:

```javascript
// template
<form>
  <input v-model="car.brand" type="text" />
  <input v-model="car.model" type="text" />
  <span>{{ car.name }}</span>
  <button @click.prevent="createCar", type="submit" />
</form>

// js
import ApiService from "services/api"
import Car from "constructors/Car"

export default {
  data: () => ({
    car: new Car()
  }),
  
  methods: {
    async createCar() {
      await ApiService.post("/api/cars", this.car.toCreatePayload())
      // Reset form after Car has been created
      Object.assign(this.car, new Car())
    }
  }
}
```

As you can see:
1. We got rid of the computed property from Vue component, it's now automatically available on each Car instance.
2. With `car: new Car()` in the `data` we don't have to worry about mismatching some default value or forgetting to add some property, so that Vue can make it reactive. Using Car constructor will create an empty instance for us, with default values already being there.
3. Thanks to `toCreatePayload()` function we don't have to worry about which properties are needed for API endpoint, the logic of managing it sits now in one place.
4. Whenever we need to reset the form we just mutate the component's data with another empty instance — `Object.assign` provides a nice trick for doing so, as it can be used to mutate given object.

## What else can we use it for?

Here's a bit more complex example, of what else could we manage using Constructor Pattern:

```javascript
import R from "ramda"
import isValid from "date-fns/is_valid"
import format from "date-fns/is_valid"
import { required, alpha } from "vuelidate/lib/validators"
import ContentService from "services/content"
import Driver from "constructors/Driver"

class Car {
  constructor(opts = {}) {
    this.id         = R.is(String, opts.id) ? opts.id : null
    this.brand      = R.is(String, opts.brand) ? opts.brand : ""
    this.model      = R.is(String, opts.model) ? opts.model : ""
    // We can even use some other constructors inside constructor,
    // for resources that have DB relations
    this.driver     = R.is(Object, opts.driver) ? new Driver(opts.driver) : new Driver()
    // Validations of properites can be more complex
    this.producedAt = opts.producedAt && isValid(opts.producedAt)
      ? format(opts.producedAt, "DD-MM-YYYY")
      : null
  }
  
  // This logic could also be abstracted to some CarService
  get name() { 
    return this.brand.concat(" ", this.model)
  }
  
  toCreatePayload() {
    return {
      brand: this.brand,
      model: this.model
    }
  }
   
  // Call this function when you want to receive object ready to be send to update API endpoint
  toUpdatePayload() {
    return {
      ...this.toCreatePayload(),
      id: this.id
    }
  }
    
  // Static properties allow you use some logic
  // without instantiating the constructor => Car.errors 
  static get errors() {
    return {
      brand: {
        required: ContentService("errors.required", { attr: ContentService("attrs.brand") }),
        alpha: ContentService("errors.alpha", { attr: ContentService("attrs.brand") })
      },
    }
  }
    
  // Want to have your vuelidate validations in one place? No problem!
  static get validations() {
    return {
      brand: { required, alpha }
    }
  }
}
    
const ferrariF1 = new Car({
  brand: "Ferrari",
  model: "SF90",
  driver: { name: "Charles Leclerc 🇲🇨" },
  producedAt: "2018-02-12"
})
```

## Summary

That's it for now folks — hope you can use some of it for your own purposes! Constructor Pattern provides a really nice way of abstracting some shared logic across your application. Although class syntax is not needed here, we find it really useful for improving the code quality. Try it out in your Vue components, you'll be amazed how much debugging time and lines of code it can save you!  
Thank you for reading and take care! ✌️
