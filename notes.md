layout: true
class: middle, inverse
---

# Code Coverage
![](imgs/happypoop_by_halfeatencandybars-d5wq95r.gif)
---
#What is it?
>code coverage is a measure used to describe the degree to which the source code of a program is tested by a particular test suite.

---
class: center, middle, inverse

# Why should we use it?

---
class: center, middle, inverse

# Because it results in better code.

---
- Heavily suggests that developers should write tests.

- A code base with high code coverage has been throughly tested and has a lower chance of containing bugs than a code base with low code coverage.

- Shows where the code base is lacking in tests.

- Improves the test suite by forcing the tests to consider all expected cases, not just the successful ones.

- Helps to detect dead code. If the line/function/use-case can not be covered, then it is probably dead code.

- Generates a measurable metric

---
class: center, middle, inverse

# Where Code Coverage Fails

As shown through trivial examples


![](imgs/bAPfBDRF4Hg0U.gif)

---

# Just because a statement gets executed once, does not mean that it will work in all instances
```javascript
function failFunc(key){
  var something = {
    foo : function() {
      return 'bar';
    }
  };
  return something[key]();
}
failFunc('foo');
```

---

# It will not catch what is not coded.
```javascript
makeRequestToFlakyAPI()
.then(function(){
  hideLoadingSpinners();
});

```
---

# 100% coverage can be a lie.
```javascript
function failFunc(input) {
  var tmp = 0;

  if(input > 0){
    tmp++;
  }

  if(input < 0){
    tmp--;
  }

  return input / tmp;
}

failFunc(1);
failFunc(-1);
```
.footer Istanbul calculates edge pair coverage, for which the above has 100%, but under prime path (or complete coverage), the above would have ~66.66...%.

---

#How we do Coverage?

## Istanbul
![](imgs/Dardanelles_Gun_Turkish_Bronze_15c.png)


---
 Istanbul is a code coverage tools for Javascript that allows for us to calculate how well our tests exercise the code base.


[gotwarlost/istanbul](https://github.com/gotwarlost/istanbul)

---

#Istanbul calculates 4 coverage metrics
- __Statements__:  number of separate code statements (single command)
- __Branches__: number of control paths.
- __Functions__: number of declared functions.
- __Lines__: number of lines of code executed at least once (a single line of text, can contain multiple statements).

#And expresses coverage as

```
 reached/executed at least once
 ------------------------------
 total appearances in the code
```

---


class: middle, inverse

# How to Setup Istanbul Test Coverage
### Ask someone on your project.

### Working example for Karma and Mocha: https://github.com/nexus-uw/coverage-talk

### finally, talk to me


---

## How is Rangle Doing in the Coverage Department?

1. Back in March of 2015,  rangle.io projects have reported estimated test coverage as follows:

     - four projects are at 50-90%
     - one project is at 0-10% (inherited angular code base)
     - one project have not submitted their survey
     - one project is all CSS
     - one project is currently just inherited code

2. In one of those cases (Shape), the results were actually measured using Istanbul. In all other cases their guestimates.

3. Currently, dont have up to date statics but most projects are now using Istanbul.

---
# And here are some links

- Slides and some working examples [https://github.com/nexus-uw/coverage-talk](https://github.com/nexus-uw/coverage-talk).
- [Wikipedia code coverage page ](http://en.wikipedia.org/wiki/Code_coverage)
- [Coveralls](https://coveralls.io/features): Code coverage CI integration SAS.
- [UW Testing Course ](https://ece.uwaterloo.ca/~lintan/courses/testing/): Deep dive into all the different code coverage methods.

![](imgs/vVD14D.gif)
