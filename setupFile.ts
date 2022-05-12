import { EsbuildPhoenix } from '@xn-sakina/phoenix';

const setup = () => {
  const ins = new EsbuildPhoenix({
    target: 'es2019',
  });
  return () => {
    ins.restore();
  };
};

export = setup;
