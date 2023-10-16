import type { ButtonHTMLAttributes } from 'react';
import React, { forwardRef } from 'react';
import cn from 'classnames';

import { Button } from '../../Button';
import { RovingTabindexItem } from '../../../utility-components/RovingTabIndex';

import classes from './ToggleGroupItem.module.css';
import { useToggleGroupItem } from './useToggleGroupitem';

export type ToggleGroupItemProps = {
  /** The value of the ToggleGroupItem. If not set, the string value of the items children will be used. */
  value?: string;
  /** Icon to be displayed on the ToggleGroupItem */
  icon?: React.ReactNode;
  /** The text to be displayed on the ToggleGroupItem */
  children?: string;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'value' | 'children'>;

export const ToggleGroupItem = forwardRef<
  HTMLButtonElement,
  ToggleGroupItemProps
>((props, ref) => {
  const { children, icon, ...rest } = props;
  const { active, size = 'medium', buttonProps } = useToggleGroupItem(props);
  return (
    <RovingTabindexItem
      {...rest}
      {...buttonProps}
      className={cn(
        children && classes[size],
        classes.toggleGroupItem,
        rest.className,
      )}
      as={Button}
      value={rest.value}
      icon={icon}
      color='first'
      variant={active ? 'filled' : 'quiet'}
      size={size}
      iconPlacement='left'
      ref={ref}
    >
      {children}
    </RovingTabindexItem>
  );
});
