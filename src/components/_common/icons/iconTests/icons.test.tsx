import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { BurgerIcon } from 'src/components/_common/icons/burgerIcon';
import { CloseIcon } from 'src/components/_common/icons/closeIcon';
import { FilterIcon } from 'src/components/_common/icons/filterIcon';
import { HideSettingsIcon } from 'src/components/_common/icons/hideSettingsIcon';
import { FullScreenIcon } from 'src/components/_common/icons/fullScreenIcon';
import { NormalScreenIcon } from 'src/components/_common/icons/normalScreenIcon';
import { PlusIcon } from 'src/components/_common/icons/plusIcon';
import { ReturnIcon } from 'src/components/_common/icons/returnIcon';
import { ShowSettingsIcon } from 'src/components/_common/icons/showSettingsIcon';
import { SwitchThemeIcon } from 'src/components/_common/icons/switchThemeIcon';

describe('Icons components', () => {
  it('renders BurgerIcon', () => {
    const { container } = render(<BurgerIcon />);
    expect(container.querySelector('svg')).toBeInTheDocument();
  });

  it('renders CloseIcon with data-testid', () => {
    const { getByTestId } = render(<CloseIcon data-testid="close-icon" />);
    expect(getByTestId('close-icon')).toBeInTheDocument();
  });

  it('renders FilterIcon', () => {
    const { container } = render(<FilterIcon />);
    expect(container.querySelector('svg')).toBeInTheDocument();
  });

  it('renders HideSettingsIcon', () => {
    const { container } = render(<HideSettingsIcon />);
    expect(container.querySelector('svg')).toBeInTheDocument();
  });

  it('renders FullScreenIcon', () => {
    const { container } = render(<FullScreenIcon />);
    expect(container.querySelector('svg')).toBeInTheDocument();
  });

  it('renders NormalScreenIcon', () => {
    const { container } = render(<NormalScreenIcon />);
    expect(container.querySelector('svg')).toBeInTheDocument();
  });

  it('renders PlusIcon', () => {
    const { container } = render(<PlusIcon />);
    expect(container.querySelector('svg')).toBeInTheDocument();
  });

  it('renders ReturnIcon', () => {
    const { container } = render(<ReturnIcon />);
    expect(container.querySelector('svg')).toBeInTheDocument();
  });

  it('renders ShowSettingsIcon', () => {
    const { container } = render(<ShowSettingsIcon />);
    expect(container.querySelector('svg')).toBeInTheDocument();
  });

  it('renders SwitchThemeIcon', () => {
    const { container } = render(<SwitchThemeIcon />);
    expect(container.querySelector('svg')).toBeInTheDocument();
  });
});
