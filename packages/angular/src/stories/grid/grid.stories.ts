/*
 * Copyright (c) 2016-2020 VMware, Inc.
 * All Rights ReserveThis software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

const basicTemplate = require('!!raw-loader!./basic.html');

export default {
  title: 'Grid',
};

export const Basic = () => {
  return {
    title: 'Basic',
    template: basicTemplate.default,
  };
};
