import { themes } from '@storybook/theming';
import { addons } from '@storybook/addons';

addons.setConfig({
  theme: {
    ...themes.dark,
    brandImage: 'https://maryamsarafrazi.com/icon.svg',
    brandTitle: 'Hamish Williams Components',
    brandUrl: 'https://maryamsarafrazi.com',
  },
});
