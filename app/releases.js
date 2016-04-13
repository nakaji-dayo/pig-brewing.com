import view from './releases.jsx';


export default function(sources, mount$) {
  return {
    DOM$: mount$.map(view)
  };
};
