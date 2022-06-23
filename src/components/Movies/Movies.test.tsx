import '@testing-library/jest-dom/extend-expect';
import { act, cleanup, render, RenderResult } from '@testing-library/react';
import { Movies } from 'src/components/Movies';
import {
  ApolloLoadingProvider,
  ApolloMockedProvider,
} from '../../../testUtils/setupJest';

afterEach(cleanup);

jest.mock('src/components/MoviesList', () => {
  const MockMovieItem = (): JSX.Element => <div>movies list</div>;
  return MockMovieItem;
});

jest.mock('src/components/UploadDialog', () => {
  const MockMovieItem = (): JSX.Element => <div>upload dialog</div>;
  return MockMovieItem;
});

describe('Movies', () => {
  it('should render the expected elements while loading', () => {
    const component: RenderResult = render(
      <ApolloLoadingProvider>
        <Movies />
      </ApolloLoadingProvider>,
    );
    expect(component.baseElement).toMatchInlineSnapshot(`
      <body>
        <div>
          <div
            class="MuiContainer-root styles__MoviesWrapper-sc-1mxx7h8-0 lmdAQw MuiContainer-maxWidthLg"
          >
            <div
              class="styles__ButtonsWrapper-sc-1mxx7h8-1 kjLRFA"
            >
              <button
                class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary"
                tabindex="0"
                type="button"
              >
                <span
                  class="MuiButton-label"
                >
                  New Movie
                </span>
                <span
                  class="MuiTouchRipple-root"
                />
              </button>
              <button
                class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary"
                tabindex="0"
                type="button"
              >
                <span
                  class="MuiButton-label"
                >
                  Upload Movies File
                </span>
                <span
                  class="MuiTouchRipple-root"
                />
              </button>
            </div>
            <div>
              Loading...
            </div>
            <div>
              upload dialog
            </div>
          </div>
        </div>
      </body>
    `);
  });

  it('should render the expected elements when data has been received', async () => {
    const component: RenderResult = render(
      <ApolloMockedProvider>
        <Movies />
      </ApolloMockedProvider>,
    );
    await act(async () => {
      await Promise.resolve();
    });
    expect(component.baseElement).toMatchInlineSnapshot(`
      <body>
        <div>
          <div
            class="MuiContainer-root styles__MoviesWrapper-sc-1mxx7h8-0 lmdAQw MuiContainer-maxWidthLg"
          >
            <div
              class="styles__ButtonsWrapper-sc-1mxx7h8-1 kjLRFA"
            >
              <button
                class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary"
                tabindex="0"
                type="button"
              >
                <span
                  class="MuiButton-label"
                >
                  New Movie
                </span>
                <span
                  class="MuiTouchRipple-root"
                />
              </button>
              <button
                class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary"
                tabindex="0"
                type="button"
              >
                <span
                  class="MuiButton-label"
                >
                  Upload Movies File
                </span>
                <span
                  class="MuiTouchRipple-root"
                />
              </button>
            </div>
            <div>
              movies list
            </div>
            <div>
              upload dialog
            </div>
          </div>
        </div>
      </body>
    `);
  });
});
