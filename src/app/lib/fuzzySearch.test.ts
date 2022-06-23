import fuzzySearch from 'src/app/lib/fuzzySearch';

describe('fuzzySearch', () => {
  it('should search for and find strings', () => {
    expect(fuzzySearch('car', 'cartwheel')).toEqual(true);
    expect(fuzzySearch('cwhl', 'cartwheel')).toEqual(true);
    expect(fuzzySearch('cwheel', 'cartwheel')).toEqual(true);
    expect(fuzzySearch('cartwheel', 'cartwheel')).toEqual(true);
    expect(fuzzySearch('cwheeel', 'cartwheel')).toEqual(false);
    expect(fuzzySearch('lw', 'cartwheel')).toEqual(false);

    // chinese unicode testcase
    expect(fuzzySearch('语言', 'php语言')).toEqual(true);
    expect(fuzzySearch('hp语', 'php语言')).toEqual(true);
    expect(fuzzySearch('Py开发', 'Python开发者')).toEqual(true);
    expect(fuzzySearch('Py 开发', 'Python开发者')).toEqual(false);
    expect(fuzzySearch('爪哇进阶', '爪哇开发进阶')).toEqual(true);
    expect(fuzzySearch('格式工具', '非常简单的格式化工具')).toEqual(true);
    expect(fuzzySearch('正则', '学习正则表达式怎么学习')).toEqual(true);
    expect(fuzzySearch('学习正则', '正则表达式怎么学习')).toEqual(false);
  });
});
