/* eslint-disable no-nested-ternary */
/* eslint-disable react/button-has-type */
import React, { CSSProperties, ReactElement } from 'react';
import classNames from 'classnames';
import './index.scss';

interface Props {
  label: string;
  size?: 'small' | 'base' | 'lg' | 'xl';
  type?: 'white' | 'red' | 'primary' | 'text' | 'link' | 'icon' | 'icon-link';
  onClick?: () => void;
  disabled?: boolean;
  icon?: string;
  customElement?: ReactElement | null;
  iconRightAlign?: boolean;
  style?: CSSProperties;
  dropDown?: boolean;
  htmlType?: 'submit' | 'button';
  buttonClassNames?: string;
  buttonLabelClassNames?: string;
  isLoading?: boolean;
}

export const Button = ({
  label,
  size = 'base',
  type,
  onClick,
  disabled,
  icon,
  customElement,
  style,
  iconRightAlign,
  dropDown,
  htmlType,
  buttonClassNames,
  buttonLabelClassNames,
  isLoading
}: Props) => {
  return (
    <button
      style={style}
      className={classNames(
        `btn-${size} ${disabled ? 'btn-disabled' : ''} ${
          type ? `btn-${type}` : ''
        } ${dropDown ? 'btn-drop-down' : ''}`,
        buttonClassNames
      )}
      onClick={onClick}
      disabled={disabled || isLoading}
      type={htmlType}
    >
      {!dropDown && icon && !iconRightAlign ? (
        <i className={classNames(icon, 'button-icon')} />
      ) : null}
      {isLoading &&
        (type === 'white' ||
          type === 'red' ||
          type === 'primary' ||
          type === 'link') && (
          <div className="button-loading">
            <div className="button-loading-inner" />
            <div className="button-loading-inner" />
            <div className="button-loading-inner" />
            <div className="button-loading-inner" />
          </div>
        )}

      {label ? (
        <span
          className={classNames(
            `${
              (!dropDown && icon) || (!dropDown && customElement)
                ? iconRightAlign
                  ? 'icon-right-text'
                  : 'text'
                : ''
            } ${dropDown ? 'drop-dwon-text' : ''}`,
            buttonLabelClassNames
          )}
        >
          {label}
        </span>
      ) : null}
      {icon && iconRightAlign ? <i className={icon} /> : null}
      {customElement && iconRightAlign ? customElement : null}
      {dropDown ? <i className="ri-arrow-down-s-line drop-dwon-icon" /> : null}
    </button>
  );
};

interface PropsBtnGroup {
  children?: React.ReactNode;
}

export const BttonGroup = ({ children }: PropsBtnGroup) => {
  return <div className="btton-group">{children}</div>;
};

interface PropsFloatingActionButton {
  size?: 'sm' | 'md' | 'lg';
  type?: 'default' | 'primary' | 'darken';
  onClick?: () => void;
  disabled?: boolean;
}

export const FloatingActionButton = ({
  size,
  type,
  onClick,
  disabled
}: PropsFloatingActionButton) => {
  return (
    <div
      className={`floating-action-button-${size} floating-action-button-${type} ${
        disabled ? 'floating-action-button-disabled' : ''
      }`}
      onClick={onClick}
      role="presentation"
    >
      <i className="ri-add-fill" />
    </div>
  );
};

Button.defaultProps = {
  size: 'base',
  type: 'white',
  onClick: undefined,
  disabled: false,
  icon: undefined,
  customElement: null,
  iconRightAlign: undefined,
  style: undefined,
  dropDown: undefined,
  htmlType: 'button',
  buttonClassNames: undefined,
  buttonLabelClassNames: undefined,
  isLoading: false
};

FloatingActionButton.defaultProps = {
  size: 'sm',
  type: 'default',
  onClick: undefined,
  disabled: false
};

BttonGroup.defaultProps = {
  children: undefined
};
