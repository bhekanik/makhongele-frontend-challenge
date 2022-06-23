import '@testing-library/jest-dom/extend-expect';
import { cleanup, render, RenderResult } from '@testing-library/react';
import user from '@testing-library/user-event';
import { OwnProps, UploadDialog } from 'src/components/UploadDialog';
import { ApolloMockedProvider } from '../../../testUtils/setupJest';

afterEach(cleanup);

const props: OwnProps = {
  open: true,
  handleCancel: jest.fn(),
};

describe('UploadDialog', () => {
  let component: RenderResult;
  beforeEach(() => {
    component = render(
      <ApolloMockedProvider>
        <UploadDialog {...props} />
      </ApolloMockedProvider>,
    );
  });

  it('should call the handleCancel method when the cancel button is clicked', () => {
    const cancelButton = component.getByText(/^cancel$/i);
    user.click(cancelButton);
    expect(props.handleCancel).toHaveBeenCalledTimes(1);
  });

  it('should render the expected elements', () => {
    expect(component.baseElement).toMatchInlineSnapshot(`
      <body
        style="padding-right: 0px; overflow: hidden;"
      >
        <div
          aria-hidden="true"
        >
          <div />
        </div>
        <div
          class="MuiDialog-root"
          role="presentation"
          style="position: fixed; z-index: 1300; right: 0px; bottom: 0px; top: 0px; left: 0px;"
        >
          <div
            aria-hidden="true"
            class="MuiBackdrop-root"
            style="opacity: 1; webkit-transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms; transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;"
          />
          <div
            data-test="sentinelStart"
            tabindex="0"
          />
          <div
            class="MuiDialog-container MuiDialog-scrollPaper"
            role="none presentation"
            style="opacity: 1; webkit-transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms; transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;"
            tabindex="-1"
          >
            <div
              aria-describedby="alert-dialog-description"
              aria-labelledby="alert-dialog-title"
              class="MuiPaper-root MuiDialog-paper MuiDialog-paperScrollPaper MuiDialog-paperWidthSm MuiPaper-elevation24 MuiPaper-rounded"
              role="dialog"
            >
              <div
                class="MuiDialogTitle-root"
                id="alert-dialog-title"
              >
                <h2
                  class="MuiTypography-root MuiTypography-h6"
                >
                  Upload Movies File
                </h2>
              </div>
              <div
                class="MuiDialogContent-root"
              >
                <p
                  class="MuiTypography-root MuiDialogContentText-root MuiTypography-body1 MuiTypography-colorTextSecondary"
                >
                  Select a file to upload. Ensure that the movies are specified correctly.
                </p>
                <input
                  accept=".txt"
                  type="file"
                />
              </div>
              <div
                class="MuiDialogActions-root MuiDialogActions-spacing"
              >
                <button
                  class="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary"
                  tabindex="0"
                  type="button"
                >
                  <span
                    class="MuiButton-label"
                  >
                    Cancel
                  </span>
                  <span
                    class="MuiTouchRipple-root"
                  />
                </button>
                <button
                  class="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary"
                  tabindex="0"
                  type="button"
                >
                  <span
                    class="MuiButton-label"
                  >
                    Upload
                  </span>
                  <span
                    class="MuiTouchRipple-root"
                  />
                </button>
              </div>
            </div>
          </div>
          <div
            data-test="sentinelEnd"
            tabindex="0"
          />
        </div>
      </body>
    `);
  });
});
