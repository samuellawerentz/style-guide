import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button as Button$1, Typography, Input, Card as Card$1, Row, Space, Checkbox as Checkbox$1, Tag as Tag$1, Radio as Radio$1, Select as Select$1, Table as Table$1, Layout, Col } from 'antd';

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$c = ".sg.contacto-icon {\n  user-select: none; }\n\n.sg.contacto-loader {\n  border-radius: 50%;\n  position: relative;\n  display: inline-block;\n  animation: rotate-loading 1s infinite linear; }\n  .sg.contacto-loader:after {\n    content: '';\n    position: absolute;\n    width: 60%;\n    height: 100%;\n    background: white; }\n\n@keyframes rotate-loading {\n  to {\n    transform: rotate(360deg); } }\n";
styleInject(css_248z$c);

var _excluded$b = ["className", "name", "size", "color", "style", "hoverColor"];

var Loading = function Loading(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      _ref$strokeSize = _ref.strokeSize,
      strokeSize = _ref$strokeSize === void 0 ? 2 : _ref$strokeSize,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'gray-2' : _ref$color;
  return /*#__PURE__*/React.createElement("span", {
    className: "sg contacto-loader",
    style: {
      width: size,
      height: size,
      boxShadow: "0 0 0 ".concat(strokeSize, "px var(--").concat(color, ") inset")
    }
  });
};
/**
 * Google Icons that are used in the application.
 *
 * Please visit https://fonts.google.com/icons to find different icons and their names
 */


var Icon = function Icon(_ref2) {
  var _ref2$className = _ref2.className,
      className = _ref2$className === void 0 ? '' : _ref2$className,
      name = _ref2.name,
      size = _ref2.size,
      color = _ref2.color,
      style = _ref2.style,
      hoverColor = _ref2.hoverColor,
      props = _objectWithoutProperties(_ref2, _excluded$b);

  var _useState = useState(color ? "var(--".concat(color, ")") : undefined),
      _useState2 = _slicedToArray(_useState, 2),
      iconColor = _useState2[0],
      setIconColor = _useState2[1];

  var iconEventProps = {};

  if (color && hoverColor) {
    iconEventProps = {
      onMouseEnter: function onMouseEnter() {
        return setIconColor("var(--".concat(hoverColor, ")"));
      },
      onMouseLeave: function onMouseLeave() {
        return setIconColor("var(--".concat(color, ")"));
      }
    };
  }

  return /*#__PURE__*/React.createElement("span", _extends({
    className: ['sg contacto-icon', 'material-icons', className].join(' '),
    style: _objectSpread2(_objectSpread2({}, style), {}, {
      color: iconColor,
      fontSize: size,
      cursor: hoverColor && 'pointer',
      overflow: 'hidden',
      maxHeight: size,
      maxWidth: size,
      lineHeight: 1
    })
  }, props, iconEventProps), name);
};
Icon.Loading = Loading;
Icon.propTypes = {
  /**
   * Class to be added
   */
  className: PropTypes.string,

  /**
   * Name of the icon taken from https://fonts.google.com/icons
   */
  name: PropTypes.string,

  /**
   * Size of the icon in pixels. If its 24x24 enter 24.
   */
  size: PropTypes.number,

  /**
   * Color is usuall inherited from the parent.
   * If you want specific color, enter the variable name of the color.
   *
   * The variable names can be found here -
   * https://samuellawerentz.github.io/style-guide/?path=/docs/colors-color-palette--page
   */
  color: PropTypes.string,

  /**
   * Color to be applied when the icon is hovered. It should be a variable name.
   */
  hoverColor: PropTypes.string,
  style: PropTypes.object
};
Icon.defaultProps = {
  name: 'emoji_emotions'
};

var css_248z$b = ".sg.ant-btn.cnto-btn.contacto-button {\n  min-width: 60px;\n  padding: 8px 16px;\n  height: 36px;\n  line-height: 18px;\n  border: 0;\n  border-radius: 0;\n  display: flex;\n  align-items: center; }\n  .sg.ant-btn.cnto-btn.contacto-button--primary {\n    background-color: var(--primary-color);\n    color: var(--white); }\n    .sg.ant-btn.cnto-btn.contacto-button--primary:hover {\n      color: var(--white);\n      background-color: var(--primary-color-5); }\n    .sg.ant-btn.cnto-btn.contacto-button--primary[disabled], .sg.ant-btn.cnto-btn.contacto-button--primary[disabled]:hover {\n      color: var(--white);\n      background-color: var(--primary-color-2); }\n  .sg.ant-btn.cnto-btn.contacto-button--secondary {\n    color: var(--primary-color);\n    border: 1px solid var(--primary-color); }\n    .sg.ant-btn.cnto-btn.contacto-button--secondary:hover {\n      color: var(--primary-color);\n      background-color: var(--dark-bg);\n      border: 1px solid var(--primary-color); }\n    .sg.ant-btn.cnto-btn.contacto-button--secondary[disabled], .sg.ant-btn.cnto-btn.contacto-button--secondary[disabled]:hover {\n      color: var(--primary-color-2);\n      background-color: var(--white);\n      border: 1px solid var(--primary-color-2); }\n  .sg.ant-btn.cnto-btn.contacto-button--secondary-gray {\n    border: 1px solid var(--border-color-1); }\n    .sg.ant-btn.cnto-btn.contacto-button--secondary-gray:hover {\n      background-color: var(--dark-bg);\n      border: 1px solid var(--primary-color); }\n  .sg.ant-btn.cnto-btn.contacto-button--danger-primary {\n    color: var(--white);\n    background-color: var(--danger-color); }\n    .sg.ant-btn.cnto-btn.contacto-button--danger-primary:hover {\n      color: var(--white);\n      background-color: var(--danger-color-5); }\n    .sg.ant-btn.cnto-btn.contacto-button--danger-primary[disabled], .sg.ant-btn.cnto-btn.contacto-button--danger-primary[disabled]:hover {\n      color: var(--white);\n      background-color: var(--danger-color-2); }\n  .sg.ant-btn.cnto-btn.contacto-button--danger-secondary {\n    color: var(--danger-color);\n    border: 1px solid var(--danger-color); }\n    .sg.ant-btn.cnto-btn.contacto-button--danger-secondary:hover {\n      color: var(--danger-color);\n      background-color: var(--danger-color-4);\n      border: 1px solid var(--danger-color); }\n    .sg.ant-btn.cnto-btn.contacto-button--danger-secondary[disabled], .sg.ant-btn.cnto-btn.contacto-button--danger-secondary[disabled]:hover {\n      color: var(--danger-color-2);\n      border: 1px solid var(--danger-color-2);\n      background-color: var(--white); }\n  .sg.ant-btn.cnto-btn.contacto-button--link {\n    color: var(--primary-color);\n    font-weight: 600; }\n    .sg.ant-btn.cnto-btn.contacto-button--link:hover {\n      color: var(--primary-color-5); }\n    .sg.ant-btn.cnto-btn.contacto-button--link[disabled], .sg.ant-btn.cnto-btn.contacto-button--link[disabled]:hover {\n      color: var(--primary-color-2);\n      background-color: var(--white); }\n  .sg.ant-btn.cnto-btn.contacto-button[class*=\"link\"]:hover {\n    background-color: transparent; }\n  .sg.ant-btn.cnto-btn.contacto-button--link-danger {\n    color: var(--danger-color);\n    font-weight: 600; }\n    .sg.ant-btn.cnto-btn.contacto-button--link-danger:hover {\n      color: var(--danger-color-5); }\n    .sg.ant-btn.cnto-btn.contacto-button--link-danger[disabled], .sg.ant-btn.cnto-btn.contacto-button--link-danger[disabled]:hover {\n      color: var(--danger-color-2);\n      background-color: var(--white); }\n  .sg.ant-btn.cnto-btn.contacto-button--small {\n    height: 28px;\n    padding: 4px 8px; }\n  .sg.ant-btn.cnto-btn.contacto-button--large {\n    height: 44px;\n    padding: 12px 16px; }\n  .sg.ant-btn.cnto-btn.contacto-button--extra-large {\n    height: 56px;\n    padding: 16px; }\n  .sg.ant-btn.cnto-btn.contacto-button--full-width {\n    width: 100%;\n    justify-content: center; }\n  .sg.ant-btn.cnto-btn.contacto-button--center {\n    justify-content: center; }\n  .sg.ant-btn.cnto-btn.contacto-button--left {\n    justify-content: flex-start; }\n  .sg.ant-btn.cnto-btn.contacto-button--with-icon {\n    padding-left: 8px; }\n  .sg.ant-btn.cnto-btn.contacto-button--table-action-link {\n    color: var(--secondary-text-color);\n    padding: 8px 0px;\n    padding-left: 0;\n    min-width: auto; }\n    .sg.ant-btn.cnto-btn.contacto-button--table-action-link:hover {\n      color: var(--primary-color);\n      background-color: #fff; }\n  .sg.ant-btn.cnto-btn.contacto-button .contacto-icon {\n    margin-right: 8px; }\n  .sg.ant-btn.cnto-btn.contacto-button--only-icon {\n    padding: 8px;\n    min-width: auto;\n    width: auto; }\n    .sg.ant-btn.cnto-btn.contacto-button--only-icon .contacto-icon {\n      margin-right: 0; }\n      .sg.ant-btn.cnto-btn.contacto-button--only-icon .contacto-icon.small {\n        font-size: 20px; }\n  .sg.ant-btn.cnto-btn.contacto-button[ant-click-animating-without-extra-node]:after {\n    animation: 0s !important; }\n";
styleInject(css_248z$b);

var _excluded$a = ["type", "size", "label", "icon", "fullWidth", "align", "className", "children"];
var BUTTON_TYPES = ['primary', 'secondary', 'secondary-gray', 'danger-primary', 'danger-secondary', 'link', 'link-danger', 'table-action-link'];
var getButtonClassName = function getButtonClassName(type) {
  var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'default';
  var icon = arguments.length > 2 ? arguments[2] : undefined;
  var className = arguments.length > 3 ? arguments[3] : undefined;
  var onlyIcon = arguments.length > 4 ? arguments[4] : undefined;
  var fullWidth = arguments.length > 5 ? arguments[5] : undefined;
  var align = arguments.length > 6 ? arguments[6] : undefined;
  return ['sg', 'cnto-btn', 'contacto-button', type ? "contacto-button--".concat(type) : '', size ? "contacto-button--".concat(size) : '', icon ? "contacto-button--with-icon" : '', onlyIcon ? 'contacto-button--only-icon' : '', fullWidth ? 'contacto-button--full-width' : '', align ? "contacto-button--".concat(align) : '', className].join(' ');
};
/**
 * Primary UI component for user interaction
 */

var Button = function Button(_ref) {
  var type = _ref.type,
      size = _ref.size,
      label = _ref.label,
      icon = _ref.icon,
      fullWidth = _ref.fullWidth,
      align = _ref.align,
      className = _ref.className,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, _excluded$a);

  return /*#__PURE__*/React.createElement(Button$1, _extends({
    className: getButtonClassName(type, size, icon, className, !(label || children) && icon, fullWidth, align),
    icon: icon ? /*#__PURE__*/React.createElement(Icon, {
      name: icon,
      className: size
    }) : null
  }, props), label || children);
};
Button.propTypes = {
  /**
   * This indicates what type of button should be rendered
   */
  type: PropTypes.oneOf(BUTTON_TYPES),
  className: PropTypes.string,

  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'default', 'large', 'extra-large']),

  /**
   * Button Text
   */
  label: PropTypes.string,

  /**
   * Material UI icon name taken from https://fonts.google.com/icons
   */
  icon: PropTypes.string,

  /**
   * Disable the button
   */
  disabled: PropTypes.bool,

  /**
   * Set to true, if the button needs to expand to full width of the container
   */
  fullWidth: PropTypes.bool,

  /**
   * How to align the text inside the button. Default is center.
   */
  align: PropTypes.oneOf(['left', 'right', 'center']),
  children: PropTypes.any
};
Button.defaultProps = {
  size: 'default',
  type: 'primary'
};

var css_248z$a = ".caption, .sg.contacto-typography--caption, .sg.contacto-typography--caption-bold, .sg.contacto-typography--caption-italic, .sg.contacto-typography--caption-capital {\n  font-size: 12px;\n  line-height: 18px; }\n\n.sg.contacto-typography {\n  color: var(--primary-text-color); }\n  .sg.contacto-typography--large-title {\n    font-size: 26px;\n    line-height: 38px;\n    font-weight: 400; }\n  .sg.contacto-typography--title-1 {\n    font-size: 22px;\n    line-height: 32px;\n    font-weight: 400; }\n  .sg.contacto-typography--title-2 {\n    font-size: 18px;\n    line-height: 26px;\n    font-weight: 400; }\n  .sg.contacto-typography--title-3 {\n    font-size: 16px;\n    line-height: 24px;\n    font-weight: 400; }\n  .sg.contacto-typography--headline {\n    font-size: 14px;\n    line-height: 20px;\n    font-weight: 600; }\n  .sg.contacto-typography--subtitle {\n    font-size: 12px;\n    line-height: 18px;\n    font-weight: 500; }\n  .sg.contacto-typography--body {\n    font-size: 14px;\n    line-height: 20px;\n    font-weight: 400; }\n  .sg.contacto-typography--caption {\n    font-weight: 400; }\n  .sg.contacto-typography--caption-bold {\n    font-weight: 600; }\n  .sg.contacto-typography--caption-italic {\n    font-style: italic; }\n  .sg.contacto-typography--caption-capital {\n    text-transform: uppercase;\n    font-weight: 600; }\n  .sg.contacto-typography--primary {\n    color: var(--primary-color); }\n  .sg.contacto-typography--secondary {\n    color: var(--secondary-text-color); }\n  .sg.contacto-typography.ant-typography-single-line {\n    width: 100%;\n    vertical-align: middle; }\n  .sg.contacto-typography[class*=\"title\"], .sg.contacto-typography--block {\n    display: block; }\n  .sg.contacto-typography--left {\n    text-align: left; }\n  .sg.contacto-typography--right {\n    text-align: right; }\n  .sg.contacto-typography--center {\n    text-align: center; }\n";
styleInject(css_248z$a);

var TEXT_TYPES = [{
  name: 'large-title',
  fontSize: '26px',
  lineHeight: '38px',
  fontWeight: 400
}, {
  name: 'title-1',
  fontSize: '22px',
  lineHeight: '32px',
  fontWeight: 400
}, {
  name: 'title-2',
  fontSize: '18px',
  lineHeight: '26px',
  fontWeight: 400
}, {
  name: 'title-3',
  fontSize: '16px',
  lineHeight: '24px',
  fontWeight: 400
}, {
  name: 'headline',
  fontSize: '14px',
  lineHeight: '20px',
  fontWeight: 600
}, {
  name: 'subtitle',
  fontSize: '12px',
  lineHeight: '18px',
  fontWeight: 500
}, {
  name: 'body',
  fontSize: '14px',
  lineHeight: '20px',
  fontWeight: 400
}, {
  name: 'caption',
  fontSize: '12px',
  lineHeight: '18px',
  fontWeight: 400
}, {
  name: 'caption-bold',
  fontSize: '12px',
  lineHeight: '18px',
  fontWeight: 600
}, {
  name: 'caption-italic',
  fontSize: '12px',
  lineHeight: '18px',
  fontWeight: 400
}, {
  name: 'caption-capital',
  fontSize: '12px',
  lineHeight: '18px',
  fontWeight: 600
}];

var _excluded$9 = ["type", "children", "className", "variant", "color", "style", "align"];
/**
 * Typography for Contacto Apps
 */

var Text = function Text(_ref) {
  var type = _ref.type,
      children = _ref.children,
      className = _ref.className,
      variant = _ref.variant,
      color = _ref.color,
      style = _ref.style,
      align = _ref.align,
      props = _objectWithoutProperties(_ref, _excluded$9);

  return /*#__PURE__*/React.createElement(Typography.Text, _extends({
    className: ['sg', 'contacto-typography', type ? 'contacto-typography--' + type : '', variant ? 'contacto-typography--' + variant : '', align ? 'contacto-typography--' + align + ' contacto-typography--block' : '', className].join(' '),
    style: _objectSpread2(_objectSpread2({}, style), {}, {
      color: color ? "var(--".concat(color, ")") : undefined
    })
  }, props), children);
};
Text.propTypes = {
  /**
   * This indicates the type of the text that is to be used
   */
  type: PropTypes.oneOf(TEXT_TYPES.map(function (type) {
    return type.name;
  })),

  /**
   * This indicates the children of the text node
   */
  children: PropTypes.any,
  className: PropTypes.string,

  /**
   * This indicates whether the text is primary or secondary.
   */
  variant: PropTypes.string,

  /**
   * Color of the text. Please specify a variable name. Hex colors won't work here.
   */
  color: PropTypes.string,

  /**
   * CSS Style property
   */
  style: PropTypes.object,

  /**
   * Text align
   */
  align: PropTypes.oneOf(['left', 'right', 'center'])
};
Text.defaultProps = {
  type: 'body'
};

var css_248z$9 = ".sg.contacto-input-wrapper .contacto-input {\n  border-radius: 0;\n  box-shadow: 0px 0px 8px rgba(106, 110, 128, 0.15);\n  border: 1px solid var(--border-color-1);\n  height: 36px;\n  padding-left: 12px; }\n  .sg.contacto-input-wrapper .contacto-input > * {\n    line-height: 20px; }\n  .sg.contacto-input-wrapper .contacto-input .ant-input-prefix {\n    margin-left: auto; }\n  .sg.contacto-input-wrapper .contacto-input:hover, .sg.contacto-input-wrapper .contacto-input:active, .sg.contacto-input-wrapper .contacto-input:focus, .sg.contacto-input-wrapper .contacto-input[class*='focused'] {\n    border: 1px solid var(--primary-color); }\n  .sg.contacto-input-wrapper .contacto-input[class*='focused'] .contacto-icon {\n    color: var(--primary-color); }\n  .sg.contacto-input-wrapper .contacto-input::placeholder {\n    color: var(--gray-2); }\n  .sg.contacto-input-wrapper .contacto-input[disabled], .sg.contacto-input-wrapper .contacto-input[disabled]:hover {\n    background-color: var(--gray-6);\n    border: 1px solid var(--border-color-1);\n    box-shadow: none; }\n  .sg.contacto-input-wrapper .contacto-input--readonly:not(.increase-specificity),\n  .sg.contacto-input-wrapper .contacto-input--readonly:not(.increase-specificity) input {\n    box-shadow: none;\n    background-color: var(--gray-6);\n    color: var(--primary-text-color); }\n  .sg.contacto-input-wrapper .contacto-input--readonly:not(.increase-specificity):hover {\n    border: 1px solid var(--border-color-1); }\n  .sg.contacto-input-wrapper .contacto-input .ant-input-suffix {\n    color: var(--gray-1); }\n  .sg.contacto-input-wrapper .contacto-input.contacto-input--small {\n    height: 28px; }\n  .sg.contacto-input-wrapper .contacto-input.contacto-input--large {\n    height: 44px; }\n  .sg.contacto-input-wrapper .contacto-input.contacto-input--search-box {\n    box-shadow: none;\n    padding-left: 8px; }\n  .sg.contacto-input-wrapper .contacto-input.contacto-input--no-shadow {\n    box-shadow: none; }\n  .sg.contacto-input-wrapper .contacto-input .anticon.ant-input-clear-icon {\n    font-size: 14px; }\n  .sg.contacto-input-wrapper .contacto-input .ant-input::placeholder {\n    color: var(--gray-2); }\n\n.sg.contacto-input-wrapper .contacto-input-label-wrapper {\n  margin-bottom: 4px;\n  line-height: 0; }\n";
styleInject(css_248z$9);

var _excluded$8 = ["type", "label", "icon", "size", "disabled", "placeholder", "readOnly", "password", "noShadow", "className"];
var TEXTFIELD_TYPES = ['input', 'search-box', 'no-shadow'];
/**
 * This is used to get text input from the user
 */

var TextField = /*#__PURE__*/React.forwardRef(function TextField(_ref, ref) {
  var type = _ref.type,
      label = _ref.label,
      icon = _ref.icon,
      size = _ref.size,
      disabled = _ref.disabled,
      placeholder = _ref.placeholder,
      readOnly = _ref.readOnly,
      password = _ref.password,
      noShadow = _ref.noShadow,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      props = _objectWithoutProperties(_ref, _excluded$8);

  icon = type === 'search-box' ? 'search' : icon;
  var Tag = password ? Input.Password : Input;
  return /*#__PURE__*/React.createElement("div", {
    className: "sg contacto-input-wrapper"
  }, label && /*#__PURE__*/React.createElement("div", {
    className: "contacto-input-label-wrapper"
  }, /*#__PURE__*/React.createElement(Text, {
    type: "caption-bold"
  }, label)), /*#__PURE__*/React.createElement(Tag, _extends({
    ref: ref,
    className: ['contacto-input', 'contacto-input--' + type, 'contacto-input--' + size, noShadow ? 'contacto-input--no-shadow' : '', readOnly ? 'contacto-input--readonly' : '', className].join(' '),
    disabled: readOnly || disabled,
    placeholder: placeholder
  }, props, {
    prefix: icon ? /*#__PURE__*/React.createElement("span", {
      className: "material-icons contacto-icon contacto-icon--input-prefix"
    }, icon) : null
  })));
});
TextField.propTypes = {
  /**
   * This indicates the type of textfield
   */
  type: PropTypes.oneOf(TEXTFIELD_TYPES),
  className: PropTypes.string,

  /**
   * How large should the textfield be?
   */
  size: PropTypes.oneOf(['small', 'default', 'large']),

  /**
   * Placeholder Text
   */
  placeholder: PropTypes.string,

  /**
   * Label for the Input
   */
  label: PropTypes.string,

  /**
   * Material UI icon name taken from https://fonts.google.com/icons
   */
  icon: PropTypes.string,

  /**
   * Disable the textfield
   */
  disabled: PropTypes.bool,

  /**
   * Show the value as readonly
   */
  readOnly: PropTypes.bool,

  /**
   * Set to true, if you don't want the shadow.
   */
  noShadow: PropTypes.bool,

  /**
   * Is it a password field?
   */
  password: PropTypes.bool
};
TextField.defaultProps = {
  size: 'default',
  type: 'input'
};

var css_248z$8 = ".sg.contacto-card {\n  --padding: 16px;\n  margin: 24px;\n  max-height: calc(100% - 48px);\n  height: auto;\n  display: flex;\n  flex-flow: column; }\n  .sg.contacto-card .ant-card-head {\n    padding: 0 var(--padding);\n    flex-shrink: 0; }\n  .sg.contacto-card .ant-card-body {\n    padding: 0;\n    flex: 1;\n    min-height: 0;\n    display: flex;\n    flex-flow: column; }\n  .sg.contacto-card .contacto-table-wrapper {\n    margin: 0 calc(-1 * var(--padding)); }\n  .sg.contacto-card .contacto-card-subtitle {\n    white-space: normal;\n    padding-right: 32px; }\n  .sg.contacto-card.contacto-card-align-top .ant-card-head-wrapper {\n    align-items: flex-start; }\n  .sg.contacto-card--has-table-layout {\n    display: flex;\n    flex-flow: column; }\n    .sg.contacto-card--has-table-layout .contacto-table-layout,\n    .sg.contacto-card--has-table-layout .contacto-table-wrapper,\n    .sg.contacto-card--has-table-layout .contacto-table-layout-card-section,\n    .sg.contacto-card--has-table-layout .contacto-table,\n    .sg.contacto-card--has-table-layout .contacto-table .ant-spin-nested-loading,\n    .sg.contacto-card--has-table-layout .contacto-table .ant-spin-container,\n    .sg.contacto-card--has-table-layout .ant-table,\n    .sg.contacto-card--has-table-layout .ant-table-container {\n      flex: 1;\n      min-height: 0;\n      display: flex;\n      flex-flow: column; }\n    .sg.contacto-card--has-table-layout .contacto-table .ant-table-body tr:last-child td {\n      border-bottom: 0; }\n  .sg.contacto-card .contacto-card-section {\n    padding: var(--padding);\n    border-bottom: 1px solid var(--border-color-1); }\n    .sg.contacto-card .contacto-card-section--scroll-y {\n      overflow-y: auto; }\n    .sg.contacto-card .contacto-card-section.contacto-table-layout-card-section {\n      flex: 1;\n      min-height: 0;\n      display: flex;\n      flex-flow: column; }\n      .sg.contacto-card .contacto-card-section.contacto-table-layout-card-section:last-child {\n        padding-bottom: 0;\n        border: 0; }\n    .sg.contacto-card .contacto-card-section:last-child {\n      border-bottom: 0; }\n  .sg.contacto-card .contacto-card-footer-section {\n    border-top: 1px solid var(--border-color-1); }\n";
styleInject(css_248z$8);

var _excluded$7 = ["className", "title", "subtitle", "actionButton", "topAlignButton", "hasTableLayout"];

var Title = function Title(props) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Text, {
    type: "title-2"
  }, props.text)), props.subtitle && /*#__PURE__*/React.createElement("div", {
    className: "contacto-card-subtitle"
  }, /*#__PURE__*/React.createElement(Text, {
    variant: "secondary"
  }, props.subtitle)));
};

var Section = /*#__PURE__*/React.forwardRef(function Section(props, ref) {
  return /*#__PURE__*/React.createElement("div", {
    className: ['contacto-card-section', props.scrollY ? 'contacto-card-section--scroll-y' : '', props.className || ''].join(' '),
    ref: ref
  }, props.children);
});

var Footer = function Footer(props) {
  var _footerRef$current;

  var footerRef = useRef(null);
  var cardBody = (_footerRef$current = footerRef.current) === null || _footerRef$current === void 0 ? void 0 : _footerRef$current.closest('.ant-card-body');
  if (cardBody) cardBody.parentNode.insertBefore(footerRef.current, cardBody.nextSibling);
  return /*#__PURE__*/React.createElement(Section, {
    className: "contacto-card-footer-section",
    ref: footerRef
  }, /*#__PURE__*/React.createElement(Row, {
    justify: "end"
  }, /*#__PURE__*/React.createElement(Space, {
    size: 16,
    direction: "horizontal"
  }, props.footerButtons.map(function (button) {
    return button;
  }))));
};
/**
 * This is a layout that is mostly used in the center, when the screen has a table.
 */


var Card = function Card(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      title = _ref.title,
      subtitle = _ref.subtitle,
      actionButton = _ref.actionButton,
      topAlignButton = _ref.topAlignButton,
      hasTableLayout = _ref.hasTableLayout,
      props = _objectWithoutProperties(_ref, _excluded$7);

  return /*#__PURE__*/React.createElement(Card$1, _extends({
    className: ['sg contacto-card', className, topAlignButton ? 'contacto-card-align-top' : '', hasTableLayout ? 'contacto-card--has-table-layout' : ''].join(' ')
  }, props, {
    title: /*#__PURE__*/React.createElement(Title, {
      text: title,
      subtitle: subtitle
    }),
    extra: actionButton || null
  }));
};
Card.Section = Section;
Card.Footer = Footer;
Card.propTypes = {
  /**
   * Class to be added
   */
  className: PropTypes.string,

  /**
   * Title of the card
   */
  title: PropTypes.any,

  /**
   * Text rendered beneath the title
   */
  subtitle: PropTypes.string,

  /**
   * The action button component. It must be a react component, usually, the Button component.
   */
  actionButton: PropTypes.node,

  /**
   * Should the button be top aligned with the header?
   */
  topAlignButton: PropTypes.bool,

  /**
   * If the card contains the default table view, set this to true
   * for the scroll functionaltiy to work properly
   */
  hasTableLayout: PropTypes.bool
};
Card.defaultProps = {};

var css_248z$7 = ".sg.contacto-checkbox,\n.sg.contacto-checkbox-group .ant-checkbox-wrapper,\n.sg.contacto-table .ant-table-selection-column .ant-checkbox-wrapper {\n  line-height: 20px;\n  align-items: center; }\n  .sg.contacto-checkbox .ant-checkbox-indeterminate .ant-checkbox-inner,\n  .sg.contacto-checkbox-group .ant-checkbox-wrapper .ant-checkbox-indeterminate .ant-checkbox-inner,\n  .sg.contacto-table .ant-table-selection-column .ant-checkbox-wrapper .ant-checkbox-indeterminate .ant-checkbox-inner {\n    background-color: var(--primary-color);\n    border-color: var(--primary-color); }\n    .sg.contacto-checkbox .ant-checkbox-indeterminate .ant-checkbox-inner:after,\n    .sg.contacto-checkbox-group .ant-checkbox-wrapper .ant-checkbox-indeterminate .ant-checkbox-inner:after,\n    .sg.contacto-table .ant-table-selection-column .ant-checkbox-wrapper .ant-checkbox-indeterminate .ant-checkbox-inner:after {\n      background-color: var(--primary-color);\n      width: 2px;\n      height: 10px;\n      border-radius: 1px;\n      top: 50%;\n      left: 50%;\n      transform: translate(-50%, -50%) scale(1) rotate(90deg);\n      background: white; }\n  .sg.contacto-checkbox.checkbox--no-label .ant-checkbox,\n  .sg.contacto-checkbox-group .ant-checkbox-wrapper.checkbox--no-label .ant-checkbox,\n  .sg.contacto-table .ant-table-selection-column .ant-checkbox-wrapper.checkbox--no-label .ant-checkbox {\n    top: 0.2em; }\n  .sg.contacto-checkbox .ant-checkbox,\n  .sg.contacto-checkbox-group .ant-checkbox-wrapper .ant-checkbox,\n  .sg.contacto-table .ant-table-selection-column .ant-checkbox-wrapper .ant-checkbox {\n    top: 0; }\n    .sg.contacto-checkbox .ant-checkbox-checked:after,\n    .sg.contacto-checkbox-group .ant-checkbox-wrapper .ant-checkbox-checked:after,\n    .sg.contacto-table .ant-table-selection-column .ant-checkbox-wrapper .ant-checkbox-checked:after {\n      border: none; }\n    .sg.contacto-checkbox .ant-checkbox-checked .ant-checkbox-inner,\n    .sg.contacto-checkbox-group .ant-checkbox-wrapper .ant-checkbox-checked .ant-checkbox-inner,\n    .sg.contacto-table .ant-table-selection-column .ant-checkbox-wrapper .ant-checkbox-checked .ant-checkbox-inner {\n      border-color: var(--primary-color);\n      background-color: var(--primary-color); }\n  .sg.contacto-checkbox span,\n  .sg.contacto-checkbox-group .ant-checkbox-wrapper span,\n  .sg.contacto-table .ant-table-selection-column .ant-checkbox-wrapper span {\n    line-height: 20px; }\n  .sg.contacto-checkbox:hover .ant-checkbox-inner,\n  .sg.contacto-checkbox-group .ant-checkbox-wrapper:hover .ant-checkbox-inner,\n  .sg.contacto-table .ant-table-selection-column .ant-checkbox-wrapper:hover .ant-checkbox-inner {\n    border-color: var(--primary-color); }\n  .sg.contacto-checkbox .ant-checkbox-inner,\n  .sg.contacto-checkbox-group .ant-checkbox-wrapper .ant-checkbox-inner,\n  .sg.contacto-table .ant-table-selection-column .ant-checkbox-wrapper .ant-checkbox-inner {\n    width: 18px;\n    height: 18px;\n    border-color: var(--gray-2);\n    border-width: 2px;\n    box-shadow: none; }\n    .sg.contacto-checkbox .ant-checkbox-inner:hover,\n    .sg.contacto-checkbox-group .ant-checkbox-wrapper .ant-checkbox-inner:hover,\n    .sg.contacto-table .ant-table-selection-column .ant-checkbox-wrapper .ant-checkbox-inner:hover {\n      border-color: var(--primary-color); }\n    .sg.contacto-checkbox .ant-checkbox-inner:after,\n    .sg.contacto-checkbox-group .ant-checkbox-wrapper .ant-checkbox-inner:after,\n    .sg.contacto-table .ant-table-selection-column .ant-checkbox-wrapper .ant-checkbox-inner:after {\n      background-color: var(--primary-color);\n      width: 6px;\n      height: 12px;\n      border-radius: 1px;\n      top: 6px;\n      left: 2px; }\n  .sg.contacto-checkbox[class*=\"disabled\"] .ant-checkbox-checked .ant-checkbox-inner,\n  .sg.contacto-checkbox-group .ant-checkbox-wrapper[class*=\"disabled\"] .ant-checkbox-checked .ant-checkbox-inner,\n  .sg.contacto-table .ant-table-selection-column .ant-checkbox-wrapper[class*=\"disabled\"] .ant-checkbox-checked .ant-checkbox-inner {\n    border-color: var(--primary-color-2) !important; }\n  .sg.contacto-checkbox[class*=\"disabled\"] .ant-checkbox-inner,\n  .sg.contacto-checkbox-group .ant-checkbox-wrapper[class*=\"disabled\"] .ant-checkbox-inner,\n  .sg.contacto-table .ant-table-selection-column .ant-checkbox-wrapper[class*=\"disabled\"] .ant-checkbox-inner {\n    border-color: var(--gray-4) !important;\n    background-color: var(--gray-6); }\n    .sg.contacto-checkbox[class*=\"disabled\"] .ant-checkbox-inner:after,\n    .sg.contacto-checkbox-group .ant-checkbox-wrapper[class*=\"disabled\"] .ant-checkbox-inner:after,\n    .sg.contacto-table .ant-table-selection-column .ant-checkbox-wrapper[class*=\"disabled\"] .ant-checkbox-inner:after {\n      background-color: var(--primary-color-2); }\n  .sg.contacto-checkbox[class*=\"disabled\"] span,\n  .sg.contacto-checkbox-group .ant-checkbox-wrapper[class*=\"disabled\"] span,\n  .sg.contacto-table .ant-table-selection-column .ant-checkbox-wrapper[class*=\"disabled\"] span {\n    color: var(--primary-text-color); }\n\n.sg.contacto-table .ant-table-selection-column .ant-checkbox-wrapper .ant-checkbox {\n  top: 0.2em; }\n";
styleInject(css_248z$7);

var _excluded$6 = ["className"],
    _excluded2 = ["className"];
/**
 * Primary Checkbox Component.
 *  Has the same properties that are used in antd.
 *  Visit https://ant.design/components/checkbox/#API for options
 */

var Checkbox = function Checkbox(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      props = _objectWithoutProperties(_ref, _excluded$6);

  return /*#__PURE__*/React.createElement(Checkbox$1, _extends({
    className: ['sg contacto-checkbox', className].join(' ')
  }, props));
};

var CheckboxGroup = function CheckboxGroup(_ref2) {
  var className = _ref2.className,
      props = _objectWithoutProperties(_ref2, _excluded2);

  return /*#__PURE__*/React.createElement(Checkbox$1.Group, _extends({
    className: [className, 'sg', 'contacto-checkbox-group'].join(' ')
  }, props));
};

Checkbox.Group = CheckboxGroup;
Checkbox.propTypes = {
  /**
   * Class to be added
   */
  className: PropTypes.string
};

var css_248z$6 = ".sg.contacto-tag {\n  padding: 4px 8px;\n  border: none; }\n  .sg.contacto-tag .ant-typography {\n    color: inherit; }\n  .sg.contacto-tag--default {\n    background-color: var(--primary-color-4);\n    color: var(--primary-color); }\n  .sg.contacto-tag--success {\n    background-color: var(--success-color-4);\n    color: var(--success-color); }\n  .sg.contacto-tag--danger {\n    background-color: var(--danger-color-4);\n    color: var(--danger-color); }\n  .sg.contacto-tag--progress {\n    background-color: var(--primary-color-3);\n    color: var(--primary-color); }\n  .sg.contacto-tag--disabled {\n    background-color: var(--gray-5);\n    color: var(--secondary-text-color); }\n";
styleInject(css_248z$6);

var _excluded$5 = ["className", "type", "label", "children"];
var TAG_TYPES = ['success', 'danger', 'disabled', 'progress', 'default'];
/**
 * Tag component that is used to specify status of a task
 */

var Tag = function Tag(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      type = _ref.type,
      label = _ref.label,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, _excluded$5);

  return /*#__PURE__*/React.createElement(Tag$1, _extends({
    className: ['sg contacto-tag', className, "contacto-tag--".concat(type)].join(' ')
  }, props), /*#__PURE__*/React.createElement(Text, {
    type: type === 'default' ? 'caption' : 'caption-capital'
  }, label || children));
};
Tag.propTypes = {
  /**
   * Class to be added
   */
  className: PropTypes.string,

  /**
   * The type of tag
   */
  type: PropTypes.oneOf(TAG_TYPES),

  /**
   * The text to be displayed
   */
  label: PropTypes.string,
  children: PropTypes.any
};
Tag.defaultProps = {
  type: 'default'
};

var css_248z$5 = ".sg.contacto-radio-input {\n  line-height: 20px;\n  align-items: center; }\n  .sg.contacto-radio-input .ant-radio {\n    top: 0; }\n    .sg.contacto-radio-input .ant-radio-checked .ant-radio-inner {\n      border-color: var(--primary-color); }\n  .sg.contacto-radio-input span {\n    line-height: 20px; }\n  .sg.contacto-radio-input:hover .ant-radio-inner {\n    border-color: var(--primary-color); }\n  .sg.contacto-radio-input .ant-radio-inner {\n    width: 20px;\n    height: 20px;\n    border-color: var(--gray-2);\n    border-width: 2px;\n    box-shadow: none; }\n    .sg.contacto-radio-input .ant-radio-inner:hover {\n      border-color: var(--primary-color); }\n    .sg.contacto-radio-input .ant-radio-inner:after {\n      background-color: var(--primary-color);\n      width: 10px;\n      height: 10px; }\n  .sg.contacto-radio-input[class*=\"disabled\"] .ant-radio-checked .ant-radio-inner {\n    border-color: var(--primary-color-2) !important; }\n  .sg.contacto-radio-input[class*=\"disabled\"] .ant-radio-inner {\n    border-color: var(--gray-4) !important;\n    background-color: var(--gray-6); }\n    .sg.contacto-radio-input[class*=\"disabled\"] .ant-radio-inner:after {\n      background-color: var(--primary-color-2); }\n  .sg.contacto-radio-input[class*=\"disabled\"] span {\n    color: var(--primary-text-color); }\n";
styleInject(css_248z$5);

var _excluded$4 = ["className"];
/**
 * Primary Radio Component.
 *  Has the same properties that are used in antd.
 *  Visit https://ant.design/components/radio/#API for options
 */

var Radio = function Radio(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      props = _objectWithoutProperties(_ref, _excluded$4);

  return /*#__PURE__*/React.createElement(Radio$1, _extends({
    className: ['sg contacto-radio-input', className].join(' ')
  }, props));
};
Radio.Group = Radio$1.Group;
Radio.Button = Radio$1.Button;
Radio.propTypes = {
  className: PropTypes.string
};

var css_248z$4 = ".sg.contacto-select-wrapper .contacto-select {\n  --height: 36px;\n  border-radius: 0;\n  box-shadow: 0px 0px 8px rgba(106, 110, 128, 0.15);\n  border: 1px solid var(--border-color-1);\n  height: var(--height);\n  width: 100%; }\n  .sg.contacto-select-wrapper .contacto-select--no-shadow {\n    box-shadow: none; }\n  .sg.contacto-select-wrapper .contacto-select:hover:not(.ant-select-disabled), .sg.contacto-select-wrapper .contacto-select:active:not(.ant-select-disabled), .sg.contacto-select-wrapper .contacto-select:focus:not(.ant-select-disabled), .sg.contacto-select-wrapper .contacto-select[class*='focused']:not(.ant-select-disabled) {\n    box-shadow: none;\n    border: 1px solid var(--primary-color); }\n    .sg.contacto-select-wrapper .contacto-select:hover:not(.ant-select-disabled) .ant-select-selector, .sg.contacto-select-wrapper .contacto-select:active:not(.ant-select-disabled) .ant-select-selector, .sg.contacto-select-wrapper .contacto-select:focus:not(.ant-select-disabled) .ant-select-selector, .sg.contacto-select-wrapper .contacto-select[class*='focused']:not(.ant-select-disabled) .ant-select-selector {\n      box-shadow: none; }\n  .sg.contacto-select-wrapper .contacto-select .ant-select-selector {\n    border: none;\n    height: calc(var(--height) - 2px);\n    cursor: pointer; }\n    .sg.contacto-select-wrapper .contacto-select .ant-select-selector .ant-select-selection-search-input,\n    .sg.contacto-select-wrapper .contacto-select .ant-select-selector .ant-select-selection-placeholder {\n      height: calc(var(--height) - 2px);\n      line-height: calc(var(--height) - 2px); }\n    .sg.contacto-select-wrapper .contacto-select .ant-select-selector .ant-select-selection-placeholder {\n      color: var(--gray-2); }\n    .sg.contacto-select-wrapper .contacto-select .ant-select-selector .ant-select-selection-item {\n      line-height: calc(var(--height) - 2px); }\n  .sg.contacto-select-wrapper .contacto-select .ant-select-arrow {\n    margin-top: 0;\n    top: 50%;\n    right: 12px;\n    color: var(--gray-1);\n    width: auto;\n    height: auto;\n    font-size: 0;\n    transform: translateY(-50%);\n    cursor: pointer; }\n    .sg.contacto-select-wrapper .contacto-select .ant-select-arrow .contacto-icon--select-caret {\n      font-size: 20px; }\n  .sg.contacto-select-wrapper .contacto-select[class*='focused'] .contacto-icon {\n    color: var(--primary-color); }\n  .sg.contacto-select-wrapper .contacto-select[class*=\"disabled\"], .sg.contacto-select-wrapper .contacto-select[disabled]:hover {\n    background-color: var(--gray-6);\n    border: 1px solid var(--gray-6);\n    box-shadow: none; }\n  .sg.contacto-select-wrapper .contacto-select--readonly:not(.increase-specificity) {\n    box-shadow: none;\n    background-color: var(--gray-6);\n    color: var(--primary-text-color); }\n    .sg.contacto-select-wrapper .contacto-select--readonly:not(.increase-specificity) .ant-select-selector {\n      color: var(--primary-text-color); }\n  .sg.contacto-select-wrapper .contacto-select .ant-select-clear {\n    width: 20px;\n    font-size: 14px;\n    top: 47%; }\n\n.sg.contacto-select-wrapper .contacto-select--small {\n  --height: 28px; }\n  .sg.contacto-select-wrapper .contacto-select--small .ant-select-arrow {\n    right: 8px; }\n\n.sg.contacto-select-wrapper .contacto-select-label-wrapper {\n  margin-bottom: 4px;\n  line-height: 0; }\n\n.sg.contacto-select-wrapper .anticon.anticon-loading {\n  color: var(--gray-2);\n  font-size: 24px; }\n\n.sg.contacto-select-listbox {\n  padding: 0;\n  border-radius: 0; }\n  .sg.contacto-select-listbox .ant-select-item {\n    line-height: 33px;\n    border-bottom: 1px solid var(--border-color); }\n    .sg.contacto-select-listbox .ant-select-item:hover, .sg.contacto-select-listbox .ant-select-item-option-active {\n      background-color: var(--background-highlight-color); }\n  .sg.contacto-select-listbox .ant-select-item-option-selected {\n    background-color: var(--background-highlight-color);\n    color: var(--primary-color); }\n";
styleInject(css_248z$4);

var _excluded$3 = ["label", "icon", "disabled", "placeholder", "readOnly", "className", "dropdownClassName", "listHeight", "size", "onIconClick", "loading", "noShadow"];
/**
 * This is used to select a value from the list of options
 */

var Select = /*#__PURE__*/React.forwardRef(function Select(_ref, ref) {
  var label = _ref.label;
      _ref.icon;
      var disabled = _ref.disabled,
      placeholder = _ref.placeholder,
      readOnly = _ref.readOnly,
      className = _ref.className,
      dropdownClassName = _ref.dropdownClassName,
      listHeight = _ref.listHeight,
      size = _ref.size,
      onIconClick = _ref.onIconClick,
      loading = _ref.loading,
      noShadow = _ref.noShadow,
      props = _objectWithoutProperties(_ref, _excluded$3);

  return /*#__PURE__*/React.createElement("div", {
    className: 'sg contacto-select-wrapper ' + className
  }, label && /*#__PURE__*/React.createElement("div", {
    className: "contacto-select-label-wrapper"
  }, /*#__PURE__*/React.createElement(Text, {
    type: "caption-bold"
  }, label)), /*#__PURE__*/React.createElement(Select$1, _extends({
    className: ['contacto-select', readOnly ? 'contacto-select--readonly' : '', noShadow ? 'contacto-select--no-shadow' : '', "contacto-select--".concat(size)],
    ref: ref,
    disabled: readOnly || disabled,
    listHeight: listHeight || 220,
    placeholder: placeholder,
    dropdownClassName: ['sg contacto-select-listbox', dropdownClassName].join(' '),
    suffixIcon: loading ? /*#__PURE__*/React.createElement(Icon.Loading, null) : /*#__PURE__*/React.createElement("span", {
      className: "material-icons contacto-icon--select-caret",
      onClick: onIconClick
    }, "expand_more")
  }, props)));
});
Select.Option = Select$1.Option;
Select.propTypes = {
  /**
   * How large should the textfield be?
   */
  size: PropTypes.oneOf(['small', 'default', 'large']),

  /**
   * Placeholder Text
   */
  placeholder: PropTypes.string,

  /**
   * Label for the Input
   */
  label: PropTypes.string,

  /**
   * Material UI icon name taken from https://fonts.google.com/icons
   */
  icon: PropTypes.string,

  /**
   * Disable the textfield
   */
  disabled: PropTypes.bool,

  /**
   * Show the value as readonly
   */
  readOnly: PropTypes.bool,

  /**
   * Class name to be added
   */
  className: PropTypes.string,

  /**
   * Class name to be added for the list-box
   */
  dropdownClassName: PropTypes.string,

  /**
   * Height of the dropdown listbox
   */
  listHeight: PropTypes.number,

  /**
   * Show the loader
   */
  loading: PropTypes.bool,

  /**
   * Click handler for the icon
   */
  onIconClick: PropTypes.func,

  /**
   * Set it to true to remove shadow
   */
  noShadow: PropTypes.bool
};
Select.defaultProps = {
  size: 'default'
};

var css_248z$3 = ".sg.contacto-table .ant-pagination-item {\n  display: none; }\n\n.sg.contacto-table .ant-spin-blur {\n  overflow: visible; }\n\n.sg.contacto-table .ant-table-pagination.ant-pagination {\n  margin: 0;\n  position: absolute;\n  right: 16px;\n  align-items: center;\n  top: -16px;\n  transform: translateY(-100%); }\n  .sg.contacto-table .ant-table-pagination.ant-pagination .ant-pagination-total-text,\n  .sg.contacto-table .ant-table-pagination.ant-pagination .material-icons {\n    line-height: 36px;\n    height: 36px; }\n\n.sg.contacto-table .ant-pagination-prev,\n.sg.contacto-table .ant-pagination-next {\n  height: auto;\n  min-width: auto;\n  line-height: initial;\n  color: var(--gray-1); }\n  .sg.contacto-table .ant-pagination-prev.ant-pagination-disabled,\n  .sg.contacto-table .ant-pagination-next.ant-pagination-disabled {\n    color: var(--gray-3); }\n\n.sg.contacto-table .ant-pagination-total-text,\n.sg.contacto-table .ant-pagination-prev {\n  margin-right: 16px; }\n\n.sg.contacto-table .ant-table-thead > tr > th,\n.sg.contacto-table .ant-table-thead > tr > td,\n.sg.contacto-table .ant-table-tbody > tr > th,\n.sg.contacto-table .ant-table-tbody > tr > td,\n.sg.contacto-table .ant-table tfoot > tr > th,\n.sg.contacto-table .ant-table tfoot > tr > td {\n  padding: 16px 8px; }\n  .sg.contacto-table .ant-table-thead > tr > th:first-child,\n  .sg.contacto-table .ant-table-thead > tr > td:first-child,\n  .sg.contacto-table .ant-table-tbody > tr > th:first-child,\n  .sg.contacto-table .ant-table-tbody > tr > td:first-child,\n  .sg.contacto-table .ant-table tfoot > tr > th:first-child,\n  .sg.contacto-table .ant-table tfoot > tr > td:first-child {\n    padding-left: 16px; }\n  .sg.contacto-table .ant-table-thead > tr > th:last-child,\n  .sg.contacto-table .ant-table-thead > tr > td:last-child,\n  .sg.contacto-table .ant-table-tbody > tr > th:last-child,\n  .sg.contacto-table .ant-table-tbody > tr > td:last-child,\n  .sg.contacto-table .ant-table tfoot > tr > th:last-child,\n  .sg.contacto-table .ant-table tfoot > tr > td:last-child {\n    padding-right: 16px; }\n\n.sg.contacto-table .ant-table-thead > tr > th {\n  background: var(--gray-6);\n  color: var(--gray-1);\n  font-weight: 400;\n  padding-top: 8px;\n  padding-bottom: 8px;\n  line-height: 20px;\n  border: none;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n  .sg.contacto-table .ant-table-thead > tr > th:before {\n    display: none; }\n\n.sg.contacto-table .ant-table-tbody > tr.ant-table-row:hover > td {\n  background-color: var(--background-highlight-color); }\n\n.sg.contacto-table.ant-table-wrapper {\n  height: 100%; }\n  .sg.contacto-table.ant-table-wrapper .ant-spin-nested-loading {\n    height: 100%; }\n    .sg.contacto-table.ant-table-wrapper .ant-spin-nested-loading .ant-spin-container {\n      height: 100%;\n      display: flex;\n      flex-flow: column nowrap; }\n      .sg.contacto-table.ant-table-wrapper .ant-spin-nested-loading .ant-spin-container .ant-table {\n        flex: auto;\n        overflow: hidden; }\n        .sg.contacto-table.ant-table-wrapper .ant-spin-nested-loading .ant-spin-container .ant-table .ant-table-container {\n          height: 100%;\n          display: flex;\n          flex-flow: column nowrap; }\n          .sg.contacto-table.ant-table-wrapper .ant-spin-nested-loading .ant-spin-container .ant-table .ant-table-container .ant-table-header {\n            flex: none; }\n          .sg.contacto-table.ant-table-wrapper .ant-spin-nested-loading .ant-spin-container .ant-table .ant-table-container .ant-table-body {\n            flex: auto;\n            overflow: auto;\n            overflow-y: auto !important; }\n";
styleInject(css_248z$3);

var _excluded$2 = ["className", "pagination"];
/**
 * The default table that is used in the application.
 * The pagination, cell padding, header and scroll behaviour has been standardised.
 * The options are similar to that of antd table
 */
// eslint-disable-next-line react/prop-types

var Table = function Table(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      pagination = _ref.pagination,
      props = _objectWithoutProperties(_ref, _excluded$2);

  var modifiedPagination = _objectSpread2(_objectSpread2({}, pagination), {}, {
    showSizeChanger: false,
    showTotal: function showTotal(total, range) {
      return "".concat(range[0], "-").concat(range[1], " of ").concat(total);
    },
    itemRender: function itemRender(page, type) {
      if (type === 'prev' || type === 'next') {
        return /*#__PURE__*/React.createElement("span", {
          className: "material-icons"
        }, "navigate_".concat(type === 'prev' ? 'before' : type));
      }
    }
  });

  return /*#__PURE__*/React.createElement(Table$1, _extends({
    className: ['sg contacto-table', className].join(' '),
    scroll: {
      y: true
    },
    pagination: pagination !== false && modifiedPagination
  }, props));
};
Table.propTypes = {
  /**
   * Class to be added
   */
  className: PropTypes.string
};

var css_248z$2 = ".sg.contacto-table-layout .contacto-table-layout--controls {\n  margin-bottom: 16px; }\n";
styleInject(css_248z$2);

/**
 * A common table layout
 *
 */

var TableLayout = function TableLayout(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      table = _ref.table,
      searchBar = _ref.searchBar,
      actionButtons = _ref.actionButtons;
  return /*#__PURE__*/React.createElement(Card.Section, {
    className: "contacto-table-layout-card-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: ['sg contacto-table-layout', className].join(' ')
  }, /*#__PURE__*/React.createElement(Row, {
    justify: "space-between",
    className: "contacto-table-layout--controls"
  }, /*#__PURE__*/React.createElement(Space, {
    direction: "horizontal",
    size: 16
  }, /*#__PURE__*/React.createElement("div", {
    className: "contacto-table-layout--search-bar"
  }, searchBar), !!(actionButtons !== null && actionButtons !== void 0 && actionButtons.length) && actionButtons.map(function (actionButtons, i) {
    return /*#__PURE__*/React.createElement("div", {
      className: "contacto-table-layout--action-button",
      key: i
    }, actionButtons);
  }))), /*#__PURE__*/React.createElement("div", {
    className: "contacto-table-wrapper"
  }, table)));
};
TableLayout.propTypes = {
  /**
   * Class to be added
   */
  className: PropTypes.string,

  /**
   * Please provide a table from this same package for this layout to work properly.
   */
  table: PropTypes.node,

  /**
   * Provide a TextField that will be used as a searchbar.
   */
  searchBar: PropTypes.node,

  /**
   * Action buttons on the table, each separated by 16px
   */
  actionButtons: PropTypes.arrayOf(PropTypes.node)
};

var css_248z$1 = ".sg.contacto-sider.ant-layout-sider {\n  background-color: #fff;\n  box-shadow: rgba(0, 0, 0, 0.06) -3px 0px 6px;\n  padding: 32px 16px 16px;\n  transition: none; }\n  .sg.contacto-sider.ant-layout-sider .contacto-sider-children {\n    display: flex;\n    flex-direction: column;\n    height: 100%; }\n  .sg.contacto-sider.ant-layout-sider.ant-layout-sider-collapsed {\n    padding: 32px 0 0; }\n  .sg.contacto-sider.ant-layout-sider .contacto-sider-title, .sg.contacto-sider.ant-layout-sider .contacto-sider-content, .sg.contacto-sider.ant-layout-sider .contacto-sider-footer {\n    min-width: calc(464px - 32px);\n    max-width: calc(464px - 32px); }\n  .sg.contacto-sider.ant-layout-sider.contacto-sider--no-padding {\n    padding: 32px 0 16px; }\n    .sg.contacto-sider.ant-layout-sider.contacto-sider--no-padding .contacto-sider-title, .sg.contacto-sider.ant-layout-sider.contacto-sider--no-padding .contacto-sider-content, .sg.contacto-sider.ant-layout-sider.contacto-sider--no-padding .contacto-sider-footer {\n      min-width: 464px;\n      max-width: 464px;\n      padding: 0 16px; }\n  .sg.contacto-sider.ant-layout-sider .contacto-sider-content {\n    flex-grow: 1;\n    overflow-y: auto;\n    overflow-x: hidden; }\n  .sg.contacto-sider.ant-layout-sider .contacto-sider-title {\n    margin-bottom: 32px; }\n  .sg.contacto-sider.ant-layout-sider .contacto-sider-footer {\n    margin-top: auto;\n    display: flex;\n    justify-content: space-between;\n    flex-direction: row-reverse;\n    padding-top: 16px !important; }\n  .sg.contacto-sider.ant-layout-sider .contacto-sider-close-icon {\n    cursor: pointer;\n    color: var(--gray-1); }\n";
styleInject(css_248z$1);

var _excluded$1 = ["className", "noPadding", "title", "onClose", "children", "footerButtons"];
/**
 * Default sider with the title, close button and standard footer layout.
 */

var Sider = function Sider(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      noPadding = _ref.noPadding,
      title = _ref.title,
      onClose = _ref.onClose,
      children = _ref.children,
      footerButtons = _ref.footerButtons,
      props = _objectWithoutProperties(_ref, _excluded$1);

  var siderRef = useRef(null);
  useEffect(function () {
    siderRef.current && siderRef.current.parentElement.classList.add('ant-layout-has-sider');
  }, []);
  return /*#__PURE__*/React.createElement(Layout.Sider, _extends({
    ref: siderRef,
    className: ['sg contacto-sider', className, noPadding ? 'contacto-sider--no-padding' : ''].join(' '),
    width: 464,
    collapsedWidth: 0
  }, props), /*#__PURE__*/React.createElement("div", {
    className: "contacto-sider-children"
  }, /*#__PURE__*/React.createElement("div", {
    className: "contacto-sider-title"
  }, /*#__PURE__*/React.createElement(Row, {
    justify: "space-between"
  }, /*#__PURE__*/React.createElement(Col, {
    span: 22
  }, /*#__PURE__*/React.createElement(Text, {
    type: "title-2"
  }, title)), /*#__PURE__*/React.createElement("span", {
    className: "material-icons contacto-sider-close-icon",
    onClick: onClose
  }, "close"))), /*#__PURE__*/React.createElement("div", {
    className: "contacto-sider-content"
  }, children), !!(footerButtons !== null && footerButtons !== void 0 && footerButtons.length) && /*#__PURE__*/React.createElement("div", {
    className: "contacto-sider-footer"
  }, footerButtons.map(function (button) {
    return button;
  }))));
};
Sider.propTypes = {
  /**
   * Class to be added
   */
  className: PropTypes.string,

  /**
   * Set this to true, to have 0 padding on the sider and individual padding on the content.
   * This is mostly used for long content which would require scroll.
   */
  noPadding: PropTypes.bool,

  /**
   * Title of the sider
   */
  title: PropTypes.string,

  /**
   * Function handler that is called on clicking the close button
   */
  onClose: PropTypes.func,

  /**
   * React children
   */
  children: PropTypes.any,

  /**
   * An array of buttons that would be rendered with default spaing on the bottom of the footer.
   */
  footerButtons: PropTypes.any
};
Sider.defaultProps = {};

var css_248z = ".sg.contacto-block {\n  display: block; }\n  .sg.contacto-block.contacto-block-column {\n    display: flex;\n    flex-flow: column nowrap; }\n";
styleInject(css_248z);

var _excluded = ["className", "spacing", "style"];

var Column = function Column(props) {
  var columnRef = useRef(null);
  useEffect(function () {
    var _props$spacing, _columnRef$current;

    if ((_props$spacing = props.spacing) !== null && _props$spacing !== void 0 && _props$spacing.length && (_columnRef$current = columnRef.current) !== null && _columnRef$current !== void 0 && _columnRef$current.children.length) {
      var _columnRef$current2;

      Array.from((_columnRef$current2 = columnRef.current) === null || _columnRef$current2 === void 0 ? void 0 : _columnRef$current2.children).forEach(function (child, i) {
        return child.style.marginBottom = "".concat(props.spacing[i % props.spacing.length], "px");
      });
    }
  }, [props.spacing]);
  return /*#__PURE__*/React.createElement("div", {
    className: "sg contacto-block contacto-block-column",
    ref: columnRef
  }, props.children);
};
/**
 * A block element which provides spacing options like margin-bottom and margin-top.
 * This helps in accurate spacing.
 */


var Block = function Block(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      spacing = _ref.spacing,
      style = _ref.style,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['sg contacto-block', className].join(' '),
    style: _objectSpread2(_objectSpread2({}, style), {}, {
      marginTop: spacing === null || spacing === void 0 ? void 0 : spacing[1],
      marginBottom: spacing === null || spacing === void 0 ? void 0 : spacing[0]
    })
  }, props));
};
Block.Column = Column;
Block.propTypes = {
  /**
   * Class name to be added
   */
  className: PropTypes.string,

  /**
   * The [margin-bototm, margin-top] value specified as an array
   */
  spacing: PropTypes.array,

  /**
   * CSS Style object
   */
  style: PropTypes.object
};
Block.defaultProps = {};

export { BUTTON_TYPES, Block, Button, Card, Checkbox, Icon, Radio, Select, Sider, TAG_TYPES, TEXTFIELD_TYPES, Table, TableLayout, Tag, Text, TextField, getButtonClassName };
//# sourceMappingURL=index.es.js.map
