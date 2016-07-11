# es6-instead-lodash
用es6替代lodash


[lodash](https://lodash.com/docs)是一个非常流行的语言增强库，随着es6和es7的发布，js语言本身功能越来越强大，很多lodash的功能就不需要了，在此学习和记录一下


## Array

* _chunk 还没想好

* _.compact
    - 创建一个新数组并包含原数组中所有的非假值元素,filter模拟

```
// lodash
_.compact([0, 1, false, 2, '', 3]);
// => [1, 2, 3]

//es6
[0, 1, false, 2, '', 3].filter(v=>v)

```

* _.concat
    - 合并数组,es5自带concat
```
// lodash
var array = [1];
var other = _.concat(array, 2, [3], [[4]]);
console.log(other);
// → [1, 2, 3, [4]]
console.log(array);
// → [1]

//es6
console.log(array.concat(2, [3], [[4]]))

```


* _.difference(arr1,arr2)
    - 求arr1里有，arr2里没有的元素，filter模拟

```
// lodash
_.difference([1, 2, 3], [4, 2]);
// => [1, 3]

//es6
[1, 2, 3].filter(v=>[4, 2].indexOf(v)<0)

```


* _.drop
    - 获取数组切片内容

```
//lodash
_.drop([1, 2, 3]);
// → [2, 3]
_.drop([1, 2, 3], 2);
// → [3]
_.drop([1, 2, 3], 5);
// → []
_.drop([1, 2, 3], 0);
// → [1, 2, 3]


// es6
var n = 2
[1, 2, 3].slice(n?n:1)
```








## 暂时搞不定的

* _.chunk
* 
