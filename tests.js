describe("getPlainArray", function() {

  it("формирует из однонаправленного списка одномерный массив. Однонаправленный список: { weight: 9, next: { weight: 11, next: { weight: 101 }}}. Ожидаемый результат (массив):  [{weight: 9}, {weight: 11}, {weight: 101}]", function() {
    assert.deepEqual(getPlainArray({weight: 9, next:{weight: 11, next:{weight: 101}}}), [{weight: 9}, {weight: 11}, {weight: 101}]);
  });

});

describe("sortArray", function() {

  it("сортирует одномерный массив по возрастанию( сортируемый массив: [{weight: 88}, {weight: 3}, {weight: 45}, {weight: 6}], ожидаемый массив: [{weight: 3}, {weight: 6}, {weight: 45}, {weight: 88}] )", function() {
    assert.deepEqual(sortArray([{weight: 88}, {weight: 3}, {weight: 45}, {weight: 6}]), [{weight: 3}, {weight: 6}, {weight: 45}, {weight: 88}]);
  });

});

describe("splitArray", function() {

  it("Удаляет из массива элементы, которые не удовлетворяют условию: сумма весов массива не должна превышать константу W (W=100). Входящий массив: [{weight: 10}, {weight: 12}, {weight: 38}, {weight: 40}, {weight: 78}, {weight: 88}, {weight: 100}]. Ожидаемый результат: [{weight: 10}, {weight: 12}, {weight: 38}, {weight: 40}]", function() {
    assert.deepEqual(splitArray([{weight: 10}, {weight: 12}, {weight: 38}, {weight: 40}, {weight: 78}, {weight: 88}, {weight: 100}]), [{weight: 10}, {weight: 12}, {weight: 38}, {weight: 40}]);
  });

});

describe("formUnidirectionalList", function() {

  it("Формирует из одномерного массива однонаправленный связанный список. Входящий массив: [{weight: 10}, {weight: 12}, {weight: 38}, {weight: 40}]. Ожидаемый результат: {weight: 10, next:{ weight: 12, next:{ weight: 38, next:{ weight: 40}}}}", function() {
    assert.deepEqual(formUnidirectionalList([{weight: 10}, {weight: 12}, {weight: 38}, {weight: 40}]), {weight: 10, next:{ weight: 12, next:{ weight: 38, next:{ weight: 40}}}});
  });

});

describe("prepareTreeNode", function() {

  it("Сортирует один узел дерева. Входящий узел дерева: {name: \"узел_1\", leafs: {weight: 9, next:{weight: 3, next:{weight: 45, next:{weight: 70}}}}. Ожидаемый результат: {name: \"узел_1\", leafs: {weight: 3, next:{weight: 9, next:{weight: 45}}}}", function() {
    assert.deepEqual(prepareTreeNode({name: "узел_1", leafs: {weight: 9, next:{weight: 3, next:{weight: 45, next:{weight: 70}}}}}), {name: "узел_1", leafs: {weight: 3, next:{weight: 9, next:{weight: 45}}}});
  });

});

describe("sortTreeView", function() {

  it("Сортирует листья дерева произвольной глубины с учетом W. Входящий узел дерева: {name: \"root\", leafs: {weight: 2, next:{weight: 1, next:{weight: 3, next:{weight: 96}}}}, arr: [{name: \"узел_1\", leafs: {weight: 9, next:{weight: 3, next:{weight: 45, next:{weight: 70}}}}}]}. Ожидаемый результат: {name: \"root\", leafs: {weight: 1, next:{weight: 2, next:{weight: 3}}}, arr: [{name: \"узел_1\", leafs: {weight: 3, next:{weight: 9, next:{weight: 45}}}}]}", function() {
    assert.deepEqual(sortTreeView({name: "root", leafs: {weight: 2, next:{weight: 1, next:{weight: 3, next:{weight: 96}}}}, arr: [{name: "узел_1", leafs: {weight: 9, next:{weight: 3, next:{weight: 45, next:{weight: 70}}}}}]}), {name: "root", leafs: {weight: 1, next:{weight: 2, next:{weight: 3}}}, arr: [{name: "узел_1", leafs: {weight: 3, next:{weight: 9, next:{weight: 45}}}}]});
  });

});