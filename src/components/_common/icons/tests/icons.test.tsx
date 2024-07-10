import React from 'react';
import { render } from '@testing-library/react';
import { BackArrow } from 'src/components/_common/icons/backArrow.tsx';
import { FilterIcon } from 'src/components/_common/icons/filterIcon.tsx';
import { BurgerIcon } from 'src/components/_common/icons/burgerIcon.tsx';
import { FullScreenIcon } from 'src/components/_common/icons/fullScreenIcon.tsx';
import { HideSettingsIcon } from 'src/components/_common/icons/hideSettingsIcon.tsx';
import { NormalScreenIcon } from 'src/components/_common/icons/normalScreenIcon.tsx';
import { PlusIcon } from 'src/components/_common/icons/plusIcon.tsx';
import { ReturnIcon } from 'src/components/_common/icons/returnIcon.tsx';
import { ShowSettingsIcon } from 'src/components/_common/icons/showSettingsIcon.tsx';
import { SwitchThemeIcon } from 'src/components/_common/icons/switchThemeIcon.tsx';

describe('BackArrow Icon', () => {
  test('renders without crashing', () => {
    const { container } = render(<BackArrow />);
    expect(container).toBeInTheDocument();
  });

  it('applies default props correctly', () => {
    const { container } = render(<BackArrow />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveStyle('fontSize: inherit');
    expect(svg).toHaveStyle('color: inherit');
  });

  it('applies custom props correctly', () => {
    const customProps = {
      color: 'red',
      size: '2em',
    };
    const { container } = render(<BackArrow {...customProps} />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveStyle('fontSize: 2em');
    expect(svg).toHaveStyle('color: red');
  });

  it('contains correct SVG structure', () => {
    const { container } = render(<BackArrow />);
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();

    const paths = container.querySelectorAll('path');
    expect(paths.length).toBe(2);
    paths.forEach((path) => {
      expect(path).toHaveAttribute('stroke', '#CDCDCD');
      expect(path).toHaveAttribute('stroke-width', '2');
      expect(path).toHaveAttribute('stroke-linecap', 'round');
    });
  });
});

describe('Filter Icon', () => {
  test('renders without crashing', () => {
    const { container } = render(<FilterIcon />);
    expect(container).toBeInTheDocument();
  });

  it('applies default props correctly', () => {
    const { container } = render(<FilterIcon />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveStyle('fontSize: inherit');
    expect(svg).toHaveStyle('color: inherit');
  });

  it('applies custom props correctly', () => {
    const customProps = {
      color: 'red',
      size: '2em',
    };
    const { container } = render(<FilterIcon {...customProps} />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveStyle('fontSize: 2em');
    expect(svg).toHaveStyle('color: red');
  });

  it('contains correct SVG structure', () => {
    const { container } = render(<FilterIcon />);
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();

    const paths = container.querySelectorAll('path');
    expect(paths.length).toBe(1);
    paths.forEach((path) => {
      expect(path).toHaveAttribute('stroke', '#CDCDCD');
      expect(path).toHaveAttribute('stroke-width', '2');
      expect(path).toHaveAttribute('stroke-linecap', 'round');
    });
  });
});

describe('Burger Icon', () => {
  test('renders without crashing', () => {
    const { container } = render(<BurgerIcon />);
    expect(container).toBeInTheDocument();
  });

  it('applies default props correctly', () => {
    const { container } = render(<BurgerIcon />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveStyle('fontSize: inherit');
    expect(svg).toHaveStyle('color: inherit');
  });

  it('applies custom props correctly', () => {
    const customProps = {
      color: 'red',
      size: '2em',
    };
    const { container } = render(<BurgerIcon {...customProps} />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveStyle('fontSize: 2em');
    expect(svg).toHaveStyle('color: red');
  });

  it('contains correct SVG structure', () => {
    const { container } = render(<BurgerIcon />);
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();

    const paths = container.querySelectorAll('path');
    expect(paths.length).toBe(3);

    const expectedDValues = ['M4 7H24', 'M4 21H20', 'M4 14H14'];

    paths.forEach((path, index) => {
      expect(path).toHaveAttribute('d', expectedDValues[index]);
    });
  });
});

describe('Full Screen Icon', () => {
  test('renders without crashing', () => {
    const { container } = render(<FullScreenIcon />);
    expect(container).toBeInTheDocument();
  });

  it('applies default props correctly', () => {
    const { container } = render(<FullScreenIcon />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveStyle('fontSize: inherit');
    expect(svg).toHaveStyle('color: inherit');
  });

  it('applies custom props correctly', () => {
    const customProps = {
      color: 'red',
      size: '2em',
    };
    const { container } = render(<FullScreenIcon {...customProps} />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveStyle('fontSize: 2em');
    expect(svg).toHaveStyle('color: red');
  });

  it('contains correct SVG structure', () => {
    const { container } = render(<FullScreenIcon />);
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();

    const paths = container.querySelectorAll('path');
    expect(paths.length).toBe(4);
    paths.forEach((path) => {
      expect(path).toHaveAttribute('stroke', '#CDCDCD');
      expect(path).toHaveAttribute('stroke-width', '2');
      expect(path).toHaveAttribute('stroke-linecap', 'round');
    });
  });
});

describe('Hide Settings Icon', () => {
  test('renders without crashing', () => {
    const { container } = render(<HideSettingsIcon />);
    expect(container).toBeInTheDocument();
  });

  it('applies default props correctly', () => {
    const { container } = render(<HideSettingsIcon />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveStyle('fontSize: inherit');
    expect(svg).toHaveStyle('color: inherit');
  });

  it('applies custom props correctly', () => {
    const customProps = {
      color: 'red',
      size: '2em',
    };
    const { container } = render(<HideSettingsIcon {...customProps} />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveStyle('fontSize: 2em');
    expect(svg).toHaveStyle('color: red');
  });

  it('contains correct SVG structure', () => {
    const { container } = render(<HideSettingsIcon />);
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();

    const paths = container.querySelectorAll('path');
    expect(paths.length).toBe(2);
    paths.forEach((path) => {
      expect(path).toHaveAttribute('stroke', '#CDCDCD');
      expect(path).toHaveAttribute('stroke-linecap', 'round');
    });
  });
});

describe('Normal Screen Icon', () => {
  test('renders without crashing', () => {
    const { container } = render(<NormalScreenIcon />);
    expect(container).toBeInTheDocument();
  });

  it('applies default props correctly', () => {
    const { container } = render(<NormalScreenIcon />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveStyle('fontSize: inherit');
    expect(svg).toHaveStyle('color: inherit');
  });

  it('applies custom props correctly', () => {
    const customProps = {
      color: 'red',
      size: '2em',
    };
    const { container } = render(<NormalScreenIcon {...customProps} />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveStyle('fontSize: 2em');
    expect(svg).toHaveStyle('color: red');
  });

  it('contains correct SVG structure', () => {
    const { container } = render(<NormalScreenIcon />);
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();

    const paths = container.querySelectorAll('path');
    expect(paths.length).toBe(4);
    paths.forEach((path) => {
      expect(path).toHaveAttribute('stroke', '#CDCDCD');
      expect(path).toHaveAttribute('stroke-linecap', 'round');
    });
  });
});

describe('Plus Icon', () => {
  test('renders without crashing', () => {
    const { container } = render(<PlusIcon />);
    expect(container).toBeInTheDocument();
  });

  it('applies default props correctly', () => {
    const { container } = render(<PlusIcon />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveStyle('fontSize: inherit');
    expect(svg).toHaveStyle('color: inherit');
  });

  it('applies custom props correctly', () => {
    const customProps = {
      color: 'red',
      size: '2em',
    };
    const { container } = render(<PlusIcon {...customProps} />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveStyle('fontSize: 2em');
    expect(svg).toHaveStyle('color: red');
  });

  it('contains correct SVG structure', () => {
    const { container } = render(<PlusIcon />);
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();

    const paths = container.querySelectorAll('path');
    expect(paths.length).toBe(2);
    paths.forEach((path) => {
      expect(path).toHaveAttribute('stroke', '#CDCDCD');
      expect(path).toHaveAttribute('stroke-width', '2');
      expect(path).toHaveAttribute('stroke-linecap', 'round');
    });
  });
});

describe('Return Icon', () => {
  test('renders without crashing', () => {
    const { container } = render(<ReturnIcon />);
    expect(container).toBeInTheDocument();
  });

  it('applies default props correctly', () => {
    const { container } = render(<ReturnIcon />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveStyle('fontSize: inherit');
    expect(svg).toHaveStyle('color: inherit');
  });

  it('applies custom props correctly', () => {
    const customProps = {
      color: 'red',
      size: '2em',
    };
    const { container } = render(<ReturnIcon {...customProps} />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveStyle('fontSize: 2em');
    expect(svg).toHaveStyle('color: red');
  });

  it('contains correct SVG structure', () => {
    const { container } = render(<ReturnIcon />);
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();

    const paths = container.querySelectorAll('path');
    expect(paths.length).toBe(1);
    paths.forEach((path) => {
      expect(path).toHaveAttribute('stroke', '#CDCDCD');
      expect(path).toHaveAttribute('stroke-width', '2');
      expect(path).toHaveAttribute('stroke-linecap', 'round');
    });
  });
});

describe('Show Settings Icon', () => {
  test('renders without crashing', () => {
    const { container } = render(<ShowSettingsIcon />);
    expect(container).toBeInTheDocument();
  });

  it('applies default props correctly', () => {
    const { container } = render(<ShowSettingsIcon />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveStyle('fontSize: inherit');
    expect(svg).toHaveStyle('color: inherit');
  });

  it('applies custom props correctly', () => {
    const customProps = {
      color: 'red',
      size: '2em',
    };
    const { container } = render(<ShowSettingsIcon {...customProps} />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveStyle('fontSize: 2em');
    expect(svg).toHaveStyle('color: red');
  });

  it('contains correct SVG structure', () => {
    const { container } = render(<ShowSettingsIcon />);
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();

    const paths = container.querySelectorAll('path');
    expect(paths.length).toBe(1);
    paths.forEach((path) => {
      expect(path).toHaveAttribute('stroke', '#CDCDCD');
      expect(path).toHaveAttribute('stroke-linejoin', 'round');
    });
  });
});

describe('Show Theme Icon', () => {
  test('renders without crashing', () => {
    const { container } = render(<SwitchThemeIcon />);
    expect(container).toBeInTheDocument();
  });

  it('applies default props correctly', () => {
    const { container } = render(<SwitchThemeIcon />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveStyle('fontSize: inherit');
    expect(svg).toHaveStyle('color: inherit');
  });

  it('applies custom props correctly', () => {
    const customProps = {
      color: 'red',
      size: '2em',
    };
    const { container } = render(<SwitchThemeIcon {...customProps} />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveStyle('fontSize: 2em');
    expect(svg).toHaveStyle('color: red');
  });

  it('contains correct SVG structure', () => {
    const { container } = render(<SwitchThemeIcon />);
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();

    const paths = container.querySelectorAll('path');
    expect(paths.length).toBe(12);
    paths.forEach((path) => {
      expect(path).toHaveAttribute('fill', '#D9D9D9');
    });
  });
});
