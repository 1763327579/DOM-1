const div = dom.find('#test')[0];
console.log(div);
console.log(dom.find('.red',div)[0])
dom.style(test,'color', 'red') //设置颜色
const divList = dom.find('.red') // 获取多个 div.red 元素
dom.each(divList,(n)=> console.log(n)) // 遍历 divList 里的所有元素