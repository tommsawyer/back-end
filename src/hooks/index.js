'use strict';

let parseFilterString = (filterString) => {
  let decodedFilterString = decodeURIComponent(filterString);

  try {
    let fieldName = decodedFilterString.split('(')[0];
    let value = JSON.parse(decodedFilterString.split('(')[1].split(',')[0]);
    let param = decodedFilterString.split('(')[1].split(',')[1].slice(0, -1);

    return { fieldName, value, param };
  } catch(e) {
    return null;
  }
}

let applyFilter = (hook, filterString) => {
  let filter = parseFilterString(filterString);

  switch (filter.param) {
    case 'equals':
      hook.params.query[filter.fieldName] = filter.value; break;
    case 'notequals':
      hook.params.query[filter.fieldName] = Object.assign({}, hook.params.query[filter.fieldName], {$ne: filter.value}); break;
    case 'greater':
      hook.params.query[filter.fieldName] = Object.assign({}, hook.params.query[filter.fieldName], {$gt: filter.value}); break;
    case 'less':
      hook.params.query[filter.fieldName] = Object.assign({}, hook.params.query[filter.fieldName], {$lt: filter.value}); break;
  }
}

exports.parseFilters = function() {
  return function(hook) {
    let filters = hook.params.query.filter;

    if (!filters) return hook;

    filters = [].concat(filters);

    filters.forEach(filter => applyFilter(hook, filter));

    delete hook.params.query.filter;
    return hook;
  }
}
