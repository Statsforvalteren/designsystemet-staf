import type { HTMLAttributes } from 'react';
import React, { forwardRef } from 'react';
import cn from 'classnames';

import { RovingTabindexRoot } from '../../../utility-components/RovingTabIndex';

import classes from './TabList.module.css';

export const TabList = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ children, ...rest }, ref) => {
  return (
    <RovingTabindexRoot
      {...rest}
      role='tablist'
      className={cn(classes.tabItemList, rest.className)}
      ref={ref}
    >
      {children}
    </RovingTabindexRoot>
  );
});
