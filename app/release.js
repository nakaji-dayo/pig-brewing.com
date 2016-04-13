import view from './release.jsx';
import db from './releaseDB.jsx';
import _ from 'lodash';

export default function(sources, mount$) {
  console.log('in r', sources, mount$);
  if (!mount$) {
    throw new Error('my error');
  }
  
  return {
    DOM$: mount$.map(x => ({
      data: _.find(db, {date: x.route.value.date})
    })).map(view)
  };
};
