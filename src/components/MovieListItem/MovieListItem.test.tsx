import '@testing-library/jest-dom/extend-expect';
import { cleanup, render, RenderResult } from '@testing-library/react';
import user from '@testing-library/user-event';
import * as React from 'react';
import MovieListItem, { OwnProps } from 'src/components/MovieListItem';

afterEach(cleanup);

const props: OwnProps = {
  movie: {
    id: 'some-id',
    title: 'Test Movie',
    releaseYear: '2004',
  },
  handleDialogOpen: jest.fn(),
  labelId: 'test-id',
};

describe('MovieListItem', () => {
  let component: RenderResult;
  beforeEach(() => {
    component = render(<MovieListItem {...props} />);
  });

  it('should call handleDialogOpen when the delete button is clicked', () => {
    const listItem = component.getByTestId('btn__delete-todo');
    user.click(listItem);
    expect(props.handleDialogOpen).toHaveBeenCalledTimes(1);
  });

  it('should render the expected elements', () => {
    expect(component.baseElement).toMatchInlineSnapshot(`
      <body>
        <div>
          <li
            class="MuiListItem-container"
          >
            <div
              aria-disabled="false"
              class="MuiButtonBase-root MuiListItem-root styles__ListItem-sc-1mjlecy-0 jZgqAj MuiListItem-gutters MuiListItem-button MuiListItem-secondaryAction"
              role="button"
              tabindex="0"
            >
              <div
                class="MuiListItemAvatar-root"
              >
                <div
                  class="MuiAvatar-root MuiAvatar-circular MuiAvatar-colorDefault"
                >
                  <svg
                    aria-hidden="true"
                    class="MuiSvgIcon-root"
                    focusable="false"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4z"
                    />
                  </svg>
                </div>
              </div>
              <div
                class="MuiListItemText-root styles__ListItemText-sc-1mjlecy-1 cQlWdJ MuiListItemText-multiline"
                id="test-id"
              >
                <span
                  class="MuiTypography-root MuiListItemText-primary MuiTypography-body1 MuiTypography-displayBlock"
                >
                  Test Movie
                </span>
                <p
                  class="MuiTypography-root MuiListItemText-secondary MuiTypography-body2 MuiTypography-colorTextSecondary MuiTypography-displayBlock"
                >
                  <span
                    class="MuiTypography-root MuiTypography-body2 MuiTypography-colorTextPrimary"
                    style="display: inline;"
                  >
                    2004
                  </span>
                   - undefined
                </p>
              </div>
              <span
                class="MuiTouchRipple-root"
              />
            </div>
            <div
              class="MuiListItemSecondaryAction-root"
            >
              <button
                aria-label="comments"
                class="MuiButtonBase-root MuiIconButton-root MuiIconButton-edgeEnd"
                data-testid="btn__delete-todo"
                tabindex="0"
                type="button"
              >
                <span
                  class="MuiIconButton-label"
                >
                  <svg
                    aria-hidden="true"
                    class="MuiSvgIcon-root"
                    focusable="false"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
                    />
                  </svg>
                </span>
                <span
                  class="MuiTouchRipple-root"
                />
              </button>
            </div>
          </li>
        </div>
      </body>
    `);
  });
});
