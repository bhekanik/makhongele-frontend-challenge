import '@testing-library/jest-dom/extend-expect';
import { cleanup, render, RenderResult } from '@testing-library/react';
import { Movie, OwnProps } from 'src/components/Movie';

afterEach(cleanup);

const props: OwnProps = {
  movie: {
    id: 'some-id',
    title: 'Test Movie 1',
    releaseYear: '2000',
  },
};

describe('Movie', () => {
  it('should render the expected elements', () => {
    const component: RenderResult = render(<Movie {...props} />);
    expect(component.baseElement).toMatchInlineSnapshot(`
      <body>
        <div>
          <nav
            aria-label="breadcrumb"
            class="MuiTypography-root MuiBreadcrumbs-root Movie__Breadcrumbs-sc-nxajl6-1 cOeYcK MuiTypography-body1 MuiTypography-colorTextSecondary"
          >
            <ol
              class="MuiBreadcrumbs-ol"
            >
              <li
                class="MuiBreadcrumbs-li"
              >
                <a
                  href="/"
                >
                  Home
                </a>
              </li>
              <li
                aria-hidden="true"
                class="MuiBreadcrumbs-separator"
              >
                /
              </li>
              <li
                class="MuiBreadcrumbs-li"
              >
                <p
                  class="MuiTypography-root MuiTypography-body1 MuiTypography-colorTextPrimary"
                >
                  Test Movie 1
                </p>
              </li>
            </ol>
          </nav>
          <div
            class="MuiPaper-root MuiCard-root Movie__Card-sc-nxajl6-0 fiepSX MuiPaper-elevation1 MuiPaper-rounded"
          >
            <div
              class="MuiCardContent-root"
            >
              <p
                class="MuiTypography-root MuiTypography-body1 MuiTypography-colorTextSecondary"
              >
                Movie Title
              </p>
              <h1
                class="MuiTypography-root MuiTypography-h4"
              >
                Test Movie 1
              </h1>
              <hr
                class="MuiDivider-root Movie__Divider-sc-nxajl6-2 brAFjS"
              />
              <p
                class="MuiTypography-root MuiTypography-body1 MuiTypography-colorTextSecondary"
              >
                Release Year
              </p>
              <h6
                class="MuiTypography-root MuiTypography-h6"
              >
                2000
              </h6>
              <hr
                class="MuiDivider-root Movie__Divider-sc-nxajl6-2 brAFjS"
              />
              <p
                class="MuiTypography-root MuiTypography-body1 MuiTypography-colorTextSecondary"
              >
                Format
              </p>
              <h6
                class="MuiTypography-root MuiTypography-h6"
              />
              <hr
                class="MuiDivider-root Movie__Divider-sc-nxajl6-2 brAFjS"
              />
              <p
                class="MuiTypography-root MuiTypography-body1 MuiTypography-colorTextSecondary"
              >
                Actors
              </p>
              <h6
                class="MuiTypography-root MuiTypography-h6"
              />
            </div>
          </div>
        </div>
      </body>
    `);
  });
});
