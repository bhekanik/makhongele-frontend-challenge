import '@testing-library/jest-dom/extend-expect';
import { cleanup, render, RenderResult } from '@testing-library/react';
import { AddMovieForm } from 'src/components/AddMovieForm';
import { ApolloMockedProvider } from '../../../testUtils/setupJest';

afterEach(cleanup);

describe('AddMovieForm', () => {
  it('should render the expected elements', () => {
    const component: RenderResult = render(
      <ApolloMockedProvider>
        <AddMovieForm />
      </ApolloMockedProvider>,
    );
    expect(component.baseElement).toMatchInlineSnapshot(`
      <body>
        <div>
          <nav
            aria-label="breadcrumb"
            class="MuiTypography-root MuiBreadcrumbs-root styles__Breadcrumbs-sc-7jtdat-4 bMTVgI MuiTypography-body1 MuiTypography-colorTextSecondary"
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
                  New movie
                </p>
              </li>
            </ol>
          </nav>
          <div
            class="MuiPaper-root MuiCard-root styles__Card-sc-7jtdat-3 kgppdf MuiPaper-elevation1 MuiPaper-rounded"
          >
            <div
              class="MuiCardContent-root"
            >
              <form
                class="styles__Form-sc-7jtdat-0 eygjcG"
              >
                <div
                  class="MuiFormControl-root MuiTextField-root styles__TextField-sc-7jtdat-1 agyeC"
                  data-testid="textfield__title"
                >
                  <label
                    class="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-outlined"
                    data-shrink="false"
                  >
                    Title
                  </label>
                  <div
                    class="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-formControl"
                  >
                    <input
                      aria-invalid="false"
                      class="MuiInputBase-input MuiOutlinedInput-input"
                      name="title"
                      type="text"
                      value=""
                    />
                    <fieldset
                      aria-hidden="true"
                      class="PrivateNotchedOutline-root-1 MuiOutlinedInput-notchedOutline"
                    >
                      <legend
                        class="PrivateNotchedOutline-legendLabelled-3"
                      >
                        <span>
                          Title
                        </span>
                      </legend>
                    </fieldset>
                  </div>
                </div>
                <div
                  class="MuiFormControl-root MuiTextField-root styles__TextField-sc-7jtdat-1 agyeC"
                  data-testid="textfield__releaseyear"
                >
                  <label
                    class="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-outlined"
                    data-shrink="false"
                  >
                    Release Year
                  </label>
                  <div
                    class="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-formControl"
                  >
                    <input
                      aria-invalid="false"
                      class="MuiInputBase-input MuiOutlinedInput-input"
                      name="releaseYear"
                      type="text"
                      value=""
                    />
                    <fieldset
                      aria-hidden="true"
                      class="PrivateNotchedOutline-root-1 MuiOutlinedInput-notchedOutline"
                    >
                      <legend
                        class="PrivateNotchedOutline-legendLabelled-3"
                      >
                        <span>
                          Release Year
                        </span>
                      </legend>
                    </fieldset>
                  </div>
                </div>
                <div
                  class="MuiFormControl-root"
                >
                  <label
                    class="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiFormLabel-filled"
                    data-shrink="true"
                    for="format"
                  >
                    Format
                  </label>
                  <div
                    class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-formControl MuiInput-formControl"
                  >
                    <select
                      aria-invalid="false"
                      class="MuiSelect-root MuiSelect-select MuiInputBase-input MuiInput-input"
                      id="format"
                      name="format"
                    >
                      <option
                        value="VHS"
                      >
                        VHS
                      </option>
                      <option
                        value="DVD"
                      >
                        DVD
                      </option>
                      <option
                        value="BLURAY"
                      >
                        BLURAY
                      </option>
                    </select>
                    <svg
                      aria-hidden="true"
                      class="MuiSvgIcon-root MuiSelect-icon"
                      focusable="false"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M7 10l5 5 5-5z"
                      />
                    </svg>
                  </div>
                </div>
                <div
                  class="MuiFormControl-root MuiTextField-root styles__TextField-sc-7jtdat-1 agyeC"
                  data-testid="textfield__actors"
                >
                  <label
                    class="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-outlined"
                    data-shrink="false"
                  >
                    Actors (seperated by comma)
                  </label>
                  <div
                    class="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-formControl"
                  >
                    <input
                      aria-invalid="false"
                      class="MuiInputBase-input MuiOutlinedInput-input"
                      name="actors"
                      type="text"
                      value=""
                    />
                    <fieldset
                      aria-hidden="true"
                      class="PrivateNotchedOutline-root-1 MuiOutlinedInput-notchedOutline"
                    >
                      <legend
                        class="PrivateNotchedOutline-legendLabelled-3"
                      >
                        <span>
                          Actors (seperated by comma)
                        </span>
                      </legend>
                    </fieldset>
                  </div>
                </div>
                <button
                  class="MuiButtonBase-root MuiButton-root MuiButton-contained styles__Button-sc-7jtdat-2 hYLMhm MuiButton-containedPrimary"
                  tabindex="0"
                  type="submit"
                >
                  <span
                    class="MuiButton-label"
                  >
                    Add Movie
                  </span>
                  <span
                    class="MuiTouchRipple-root"
                  />
                </button>
              </form>
            </div>
          </div>
        </div>
      </body>
    `);
  });
});
