import { render, RenderResult } from '@testing-library/svelte';
import Index from './index.svelte';
import userEvent from '@testing-library/user-event';
/**
 * @jest-environment jsdom
 */

describe('Index', () => {
  let renderedComponent: RenderResult;

  beforeEach(() => {
    renderedComponent = render(Index);
  });

  describe('once the component has been rendered', () => {
    test('should show the proper heading', () => {
      expect(renderedComponent.getByText('src/routes/index.svelte')).toBeInTheDocument();
    });

    test('should increment counter', () => {
      const button = renderedComponent.container.querySelector('.btn-increment');
      userEvent.click(button);
      userEvent.click(button);
      expect(renderedComponent.getByText('2')).toBeInTheDocument();
    });
  });
});
