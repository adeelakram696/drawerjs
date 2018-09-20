const drawer = () => {
  let state = null
  return {
    set: (data => {
      state = (typeof data === 'object')? { ...state, ...data }: {...state};
      state = Object.keys(state).length > 0 ? state : null;
    }),
    get: (key) => ((state || {})[key] || null),
    getAll: () => (state),
    getClone: (key) => {
      const clone = JSON.stringify((state || {})[key] || null);
      return JSON.parse(clone);
    },
    clear: (key) => { delete (state || {})[key]; },
    clearAll: () => { state = null; },
    isKeyExist: (key) => (Object.keys((state || {})).includes(key)),
    isExist: (key) => (!!(state || {})[key]),
  }
}
export default drawer();
