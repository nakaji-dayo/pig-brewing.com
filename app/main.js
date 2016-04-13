import view from './main.jsx';

export default function(sources, mount$) {
  return {
    DOM$: mount$.map(view)
  };
};
