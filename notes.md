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
![](imgs/boring.gif)
---
class: center, middle, inverse

# Because it results in better code.

---
- Heavily suggests that developers should write tests everywhere.

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
//failFunc('what about something that is not foo? this should probably be tested as well');
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
//failFunc(0); //ie. neither conditional is true
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

### Simple working example for Karma and Mocha: https://github.com/nexus-uw/coverage-talk  (Angular 1.x and ES5)

### For a full project using all the goodies (Transitional Angular): https://github.com/rangle/ngcourse-next (Angular 1.x and TypeScript)

### Maybe look at https://github.com/rangle/ng2-redux-starter in the near future?

### Finally, talk to me (Simon)


---

## How is Rangle Doing in the Coverage Department?

1. Back in March of 2015, when coverage was introduced at Rangle, only one project had a real coverage number and most people claimed to be  50 - 90 %.

2. Currently, dont have up to date statics but most projects are now using Istanbul. (check the wall of glory or shame... outside Yuri's office)

---
## Optimizing for test coverage will only result in more unit tests so closing notes on what makes for good tests

- make the upfront investment in fleshing out all the expected functionality in the story's acceptance criteria so people will know what needs to be tested
- dont write tests for coverage, write tests to document what is expected of the software
- when possible, write tests free of developer jargon so other people can get something out of them
ie: 'it should throw an error' vs 'it should require a user name'
ie: 'it should resolve to the successful response' vs 'it should make an API request and return the created thingy'
- expect specific fields of the result that are the result of specific/disintict functionality of the function
(note it should probably be a separate function or module if testing lots of separate things within one 'unit test'. there always is a {whatever-module}-utils-service)
- include error messages in the expectations (ie. expect(masterFunction('what is the meaning of life?')).to.equal(42,'it should do what is expected, not what is different')) so that future people will know why things are expected

---
## Some Examples of Going for Extra Coverage Marks
![](imgs/bonus.png)

---
### Test that the translation strings used in the tests actually exist

```js
$provide.service('$translate', function () {
  return function (translationKey) {
    expect(TRANSLATIONS_DICTIONARY.en[translationKey]).to.be.a('string', 'we should ' +
      'have the english translation for messages');
    expect(TRANSLATIONS_DICTIONARY.fr[translationKey]).to.be.a('string', 'we should ' +
      'have the french translation for messages');
    return Q.when(TRANSLATIONS_DICTIONARY.en[translationKey]);
  };
});
//Where 'TRANSLATIONS_DICTIONARY' is the actual translation file
```
source: Jason while working on Sprout at Work
---
### Test that all of the referenced templates exist in the cache

```js
  beforeEach(inject(function (_$state_, _$templateCache_) {
    $state = _$state_;
    $templateCache = _$templateCache_;
  }));

  function checkRouteTemplateExists(name) {
    describe(name + ' state', function() {
      it('Has a template that exists', function() {
        var currentState = $state.get(name);
        var templateUrl;
        if (currentState.views !== undefined) {
          templateUrl = currentState.views[Object.keys(currentState.views)[0]].templateUrl;
        } else {
          templateUrl = currentState.templateUrl;
        }
        expect($templateCache.get(templateUrl)).to.exist;
      });
    });
  }

  checkRouteTemplateExists('landing');
  checkRouteTemplateExists('home.login');
  ...
});
```
source: Nikolas on Clear Cost Health
---
# And here are some links

- Slides and some working examples [https://github.com/nexus-uw/coverage-talk](https://github.com/nexus-uw/coverage-talk).
- [Wikipedia code coverage page ](http://en.wikipedia.org/wiki/Code_coverage)
- [Coveralls](https://coveralls.io/features): Code coverage CI integration SAS.
- [UW Testing Course ](https://ece.uwaterloo.ca/~lintan/courses/testing/): Deep dive into all the different code coverage methods.
- [ava](https://github.com/sindresorhus/ava): ~parrallel JS unit test framework
- [volkswagen](https://github.com/auchenberg/volkswagen): timely as ever

![](imgs/vVD14D.gif)

---
# doge tax
![](imgs/doge.jpgx)
