import { defaultOptions } from 'options';
import {
  optionsValidationPlugin,
  optionsValidationPluginName,
} from 'plugins/optionsValidationPlugin';

const getValidationFn = () => {
  const name = Object.keys(optionsValidationPlugin)[0];
  const instance = optionsValidationPlugin[name];
  const validationFn = instance._;

  expect(name).toBe(optionsValidationPluginName);
  expect(typeof validationFn).toBe('function');
  return validationFn;
};

describe('optionsValidationPlugin', () => {
  test('default options matching the options template', () => {
    const validationFn = getValidationFn();

    expect(validationFn(defaultOptions)).toEqual(defaultOptions);
  });

  test('foreign options are in the result', () => {
    const validationFn = getValidationFn();
    const foreignOps = {
      someOption: true,
      someDeepOption: {
        someDeepOption: false,
      },
    };

    // @ts-ignore
    expect(validationFn(foreignOps)).toEqual(foreignOps);
  });
});
