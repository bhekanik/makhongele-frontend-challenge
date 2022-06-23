import '@testing-library/jest-dom/extend-expect';
import { cleanup, render, RenderResult } from '@testing-library/react';
import { ScrollTop } from 'src/layouts/fragments/ScrollTop';

afterEach(cleanup);

describe('ScrollTop', () => {
  it('should render the expected elements', () => {
    const component: RenderResult = render(
      <ScrollTop>
        <div>child</div>
      </ScrollTop>,
    );
    expect(component.baseElement).toMatchInlineSnapshot(`
      <body>
        <div>
          <div
            class="ScrollTop__Container-sc-1601196-0 ivYwmh"
            role="presentation"
            style="transform: scale(0); visibility: hidden;"
          >
            <div>
              child
            </div>
          </div>
        </div>
      </body>
    `);
  });
});
