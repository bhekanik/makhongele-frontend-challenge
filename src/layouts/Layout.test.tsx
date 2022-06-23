import '@testing-library/jest-dom/extend-expect';
import { cleanup, render, RenderResult } from '@testing-library/react';
import { Layout } from 'src/layouts/Layout';

afterEach(cleanup);

describe('Layout', () => {
  it('should render the expected elements', () => {
    const component: RenderResult = render(
      <Layout>
        <div>child</div>
      </Layout>,
    );
    expect(component.baseElement).toMatchInlineSnapshot(`
      <body>
        <div>
          <header
            class="MuiPaper-root MuiAppBar-root MuiAppBar-positionFixed MuiAppBar-colorPrimary mui-fixed MuiPaper-elevation4"
          >
            <div
              class="MuiToolbar-root MuiToolbar-regular MuiToolbar-gutters"
            >
              <button
                class="MuiButtonBase-root MuiButton-root MuiButton-text"
                style="color: white;"
                tabindex="0"
                type="button"
              >
                <span
                  class="MuiButton-label"
                >
                  <h6
                    class="MuiTypography-root MuiTypography-h6 MuiTypography-colorInherit"
                  >
                    Movies App
                  </h6>
                </span>
                <span
                  class="MuiTouchRipple-root"
                />
              </button>
            </div>
          </header>
          <div
            class="MuiToolbar-root MuiToolbar-regular MuiToolbar-gutters"
            id="back-to-top-anchor"
          />
          <div
            class="MuiContainer-root MuiContainer-maxWidthLg"
          >
            <div>
              child
            </div>
          </div>
          <div
            class="ScrollTop__Container-sc-1601196-0 ivYwmh"
            role="presentation"
            style="transform: scale(0); visibility: hidden;"
          >
            <button
              aria-label="scroll back to top"
              class="MuiButtonBase-root MuiFab-root MuiFab-sizeSmall MuiFab-secondary"
              tabindex="0"
              type="button"
            >
              <span
                class="MuiFab-label"
              >
                <svg
                  aria-hidden="true"
                  class="MuiSvgIcon-root"
                  focusable="false"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"
                  />
                </svg>
              </span>
              <span
                class="MuiTouchRipple-root"
              />
            </button>
          </div>
        </div>
      </body>
    `);
  });
});
