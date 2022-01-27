import { svg } from './svg.js';

export const code = ({ size, role, slot, cls, viewBox } = {}) =>
  svg({
    size,
    role,
    slot,
    cls,
    viewBox,
    content:
      '<path d="M6.11 13.262a.5.5 0 00.395.586l.737.143a.5.5 0 00.585-.396L9.926 2.738a.5.5 0 00-.396-.586l-.737-.143a.5.5 0 00-.585.396L6.109 13.262zM1.36 7.246L3.976 5.11a.507.507 0 01.704.063l.64.752a.483.483 0 01-.064.69L3.562 7.998 5.256 9.38c.212.173.24.482.064.69l-.64.752a.507.507 0 01-.704.062L1.36 8.75A.971.971 0 011 7.998c0-.29.132-.566.36-.752zM14.636 7.246L12.02 5.11a.507.507 0 00-.704.063l-.64.752a.483.483 0 00.064.69l1.694 1.382L10.74 9.38a.483.483 0 00-.064.69l.64.752a.507.507 0 00.704.062l2.616-2.134a.971.971 0 00.36-.752.971.971 0 00-.36-.752z" fill="currentColor"></path>'
  });
