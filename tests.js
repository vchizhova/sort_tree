describe("getPlainArray", function() {

    it("формирует из однонаправленного списка одномерный массив. Однонаправленный список: { weight: 9, next: { weight: 11, next: { weight: 101, next: null }}}. Ожидаемый результат (массив):  [{weight: 9}, {weight: 11}, {weight: 101}]", function() {
        assert.deepEqual(getPlainArray({
            weight: 9,
            next: {
                weight: 11,
                next: {
                    weight: 101,
                    next: null
                }
            }
        }), [{
            weight: 9
        }, {
            weight: 11
        }, {
            weight: 101
        }]);
    });

});

describe("sortArray", function() {

    it("сортирует одномерный массив по возрастанию( сортируемый массив: [{weight: 88}, {weight: 3}, {weight: 45}, {weight: 6}], ожидаемый массив: [{weight: 3}, {weight: 6}, {weight: 45}, {weight: 88}] )", function() {
        assert.deepEqual(sortArray([{
            weight: 88
        }, {
            weight: 3
        }, {
            weight: 45
        }, {
            weight: 6
        }]), [{
            weight: 3
        }, {
            weight: 6
        }, {
            weight: 45
        }, {
            weight: 88
        }]);
    });

});

describe("splitArray", function() {

    it("Удаляет из массива элементы, которые не удовлетворяют условию: сумма весов массива не должна превышать константу W (W=100). Входящий массив: [{weight: 10}, {weight: 12}, {weight: 38}, {weight: 40}, {weight: 78}, {weight: 88}, {weight: 100}]. Ожидаемый результат: [{weight: 10}, {weight: 12}, {weight: 38}, {weight: 40}]", function() {
        assert.deepEqual(splitArray([{
            weight: 10
        }, {
            weight: 12
        }, {
            weight: 38
        }, {
            weight: 40
        }, {
            weight: 78
        }, {
            weight: 88
        }, {
            weight: 100
        }]), [{
            weight: 10
        }, {
            weight: 12
        }, {
            weight: 38
        }, {
            weight: 40
        }]);
    });

});

describe("formUnidirectionalList", function() {

    it("Формирует из одномерного массива однонаправленный связанный список. Входящий массив: [{weight: 10}, {weight: 12}, {weight: 38}, {weight: 40}]. Ожидаемый результат: {weight: 10, next:{ weight: 12, next:{ weight: 38, next:{ weight: 40, next: null}}}}", function() {
        assert.deepEqual(formUnidirectionalList([{
            weight: 10
        }, {
            weight: 12
        }, {
            weight: 38
        }, {
            weight: 40
        }]), {
            weight: 10,
            next: {
                weight: 12,
                next: {
                    weight: 38,
                    next: {
                        weight: 40,
                        next: null
                    }
                }
            }
        });
    });

});

describe("prepareTreeNode", function() {

    it("Сортирует один узел дерева. Входящий узел дерева: {name: \"узел_1\", leafs: {weight: 9, next:{weight: 3, next:{weight: 45, next:{weight: 70, next: null}}}}. Ожидаемый результат: {name: \"узел_1\", leafs: {weight: 3, next:{weight: 9, next:{weight: 45, next: null}}}}", function() {
        assert.deepEqual(prepareTreeNode({
            name: "узел_1",
            leafs: {
                weight: 9,
                next: {
                    weight: 3,
                    next: {
                        weight: 45,
                        next: {
                            weight: 70,
                            next: null
                        }
                    }
                }
            }
        }), {
            name: "узел_1",
            leafs: {
                weight: 3,
                next: {
                    weight: 9,
                    next: {
                        weight: 45,
                        next: null
                    }
                }
            }
        });
    });

});

describe("sortTreeView", function() {

    var inputTree = {
        name: "root",
        leafs: {
            weight: 0,
            next: {
                weight: 66,
                next: {
                    weight: 96,
                    next: {
                        weight: 55,
                        next: {
                            weight: 111,
                            next: {
                                weight: 11,
                                next: null
                            }
                        }
                    }
                }
            }
        },
        arr: [{
            name: "child_1",
            leafs: {
                weight: 4,
                next: {
                    weight: 77,
                    next: {
                        weight: 1,
                        next: {
                            weight: 2,
                            next: {
                                weight: 0,
                                next: {
                                    weight: 6,
                                    next: null
                                }
                            }
                        }
                    }
                }
            }
        }]
    };
    var expectedTree = {
        name: "root",
        leafs: {
            weight: 0,
            next: {
                weight: 11,
                next: {
                    weight: 55,
                    next: null
                }
            }
        },
        arr: [{
            name: "child_1",
            leafs: {
                weight: 0,
                next: {
                    weight: 1,
                    next: {
                        weight: 2,
                        next: {
                            weight: 4,
                            next: {
                                weight: 6,
                                next: {
                                    weight: 66,
                                    next: null
                                }
                            }
                        }
                    }
                }
            }
        }]
    }
    it("Сортирует листья дерева произвольной глубины с учетом W.", function() {
        assert.deepEqual(sortTreeView(inputTree), expectedTree)
    })
});