import { render, RenderResult, fireEvent } from '@testing-library/svelte';
import Index from './index.svelte';

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
      fireEvent.click(button);
      // await fireEvent.input(getByPlaceholderText("Nom d'utilisateur"),{target: {value: '.JohnDoe.'}})
      expect(renderedComponent.getByText('1')).toBeInTheDocument();
    });
  });
});
