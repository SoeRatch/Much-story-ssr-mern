"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRouterDom = require("react-router-dom");

var _reactRedux = require("react-redux");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _withStyles = _interopRequireDefault(require("@material-ui/core/styles/withStyles"));

var _Drawer = _interopRequireDefault(require("@material-ui/core/Drawer"));

var _Hidden = _interopRequireDefault(require("@material-ui/core/Hidden"));

var _List = _interopRequireDefault(require("@material-ui/core/List"));

var _muchstorynavbutton = _interopRequireDefault(require("../lib/buttons/muchstorynavbutton"));

var _listhoverbutton = _interopRequireDefault(require("../lib/buttons/listhoverbutton"));

var _auth = require("../actions/auth");

var _theme = require("../actions/theme");

var _Grid = require("../lib/Grid");

var _PersonOutline = _interopRequireDefault(require("@material-ui/icons/PersonOutline"));

var _routes = require("../routes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    cursor:pointer;\n    position:fixed;\n    right:20px;\n    top:20px;\n    z-index:999;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    width:35px;\n    height:5px;\n    background-color:#555;\n    margin:6px 0;\n    transition:all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1);\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n position:fixed;\n width:100%;\n top:0;\n padding:0;\n padding-bottom:10px;\n padding-top:10px;\n z-index:999;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var TopBarWrapper = _styledComponents.default.div(_templateObject());

var Bar = _styledComponents.default.div(_templateObject2());

var MenuContainer = _styledComponents.default.div(_templateObject3());

var navStyle = function navStyle(theme) {
  var _drawerPaper;

  return {
    sidebarWrapper: {
      position: "relative",
      marginTop: '50px',
      height: "calc(100vh - 75px)",
      overflow: "auto",
      width: "260px",
      zIndex: "4",
      overflowScrolling: "touch"
    },
    list: {
      marginTop: "20px",
      paddingLeft: "0",
      paddingTop: "0",
      paddingBottom: "0",
      marginBottom: "0",
      listStyle: "none",
      position: "unset"
    },
    drawerPaper: (_drawerPaper = {
      border: "none",
      position: "fixed",
      top: "0",
      bottom: "0",
      left: "0",
      zIndex: "1",
      boxShadow: "0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
      width: 260
    }, _defineProperty(_drawerPaper, theme.breakpoints.up("md"), {
      width: 260,
      position: "fixed",
      height: "100%"
    }), _defineProperty(_drawerPaper, theme.breakpoints.down("sm"), {
      width: 260,
      boxShadow: "0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
      position: "fixed",
      display: "block",
      top: "0",
      height: "100vh",
      right: "0",
      left: "auto",
      zIndex: "1032",
      visibility: "visible",
      overflowY: "visible",
      borderTop: "none",
      textAlign: "left",
      paddingRight: "0px",
      paddingLeft: "0",
      transform: "translate3d(-260px, 0, 0)",
      transition: "all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)"
    }), _drawerPaper)
  };
};

var Nav =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Nav, _React$Component);

  function Nav() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Nav);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Nav)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      mobileOpen: false
    });

    _defineProperty(_assertThisInitialized(_this), "handleScroll", function (e) {
      var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
      var topbarObject = document.getElementById("topbar");
      var topbarObjectMobile = document.getElementById("topbarmobile");
      var navObject = document.getElementById("navwrapper");

      if (scrollTop > 50) {
        var alphaValue = (scrollTop - 50) / 300;
        topbarObject.style.background = "rgba(121, 210, 206,".concat(alphaValue, ")");
        topbarObject.style.boxShadow = "0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)";
        topbarObjectMobile.style.background = "rgba(121, 210, 206,".concat(alphaValue, ")");
        topbarObjectMobile.style.boxShadow = "0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)";
      } else {
        topbarObject.style.background = '';
        topbarObject.style.boxShadow = '';
        topbarObjectMobile.style.background = '';
        topbarObjectMobile.style.boxShadow = '';
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleDrawerToggle", function () {
      var b1 = document.getElementById("bar1");
      var b2 = document.getElementById("bar2");
      var b3 = document.getElementById("bar3");

      _this.setState({
        mobileOpen: !_this.state.mobileOpen
      }, function () {
        if (this.state.mobileOpen) {
          b1.style.transform = "rotate(-45deg) translate(-9px, 6px)";
          b2.style.opacity = "0";
          b3.style.transform = "rotate(45deg) translate(-8px, -8px)";
        } else {
          b1.style.transform = "rotate(0deg)";
          b2.style.opacity = "1";
          b3.style.transform = "rotate(0deg)";
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "resizeFunction", function () {
      if (window.innerWidth >= 960) {
        _this.setState({
          mobileOpen: false
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "componentDidMount", function () {
      window.addEventListener("scroll", _this.handleScroll);
      window.addEventListener("resize", _this.resizeFunction);

      _this.init();
    });

    _defineProperty(_assertThisInitialized(_this), "init", function () {
      _this.props.fetchAllCategoryNames();
    });

    _defineProperty(_assertThisInitialized(_this), "componentWillUnmount", function () {
      window.removeEventListener("scroll", _this.handleScroll);
      window.removeEventListener("resize", _this.resizeFunction);
    });

    _defineProperty(_assertThisInitialized(_this), "loggingout", function (e) {
      e.preventDefault();

      _this.props.logout().then(function (res) {
        _this.props.history.push("/");
      });
    });

    _defineProperty(_assertThisInitialized(_this), "makeCategoryRoute", function (param) {
      return "/category/".concat(param.split(' ').join('-'));
    });

    return _this;
  }

  _createClass(Nav, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          classes = _this$props.classes,
          allcategories = _this$props.allcategories;
      var mobileOpen = this.state.mobileOpen;
      var _this$props2 = this.props,
          isAuthenticated = _this$props2.isAuthenticated,
          logout = _this$props2.logout;
      var ACTIVATE_ACTION = true;
      var defaultcategory = allcategories && allcategories.primary.map(function (item) {
        return {
          route: _this2.makeCategoryRoute(item),
          label: item,
          md: '1.8',
          sm: '2'
        };
      });
      var othercategorynames = allcategories && allcategories.other;
      var defaultcategoryMobile = allcategories && allcategories.primary.map(function (item) {
        return {
          route: _this2.makeCategoryRoute(item),
          label: item,
          md: '4'
        };
      });
      var othercategoryMobile = allcategories && allcategories.other.map(function (item) {
        return {
          route: _this2.makeCategoryRoute(item),
          label: item,
          md: '4'
        };
      });
      return _react.default.createElement("div", {
        style: {
          height: '13.5vh',
          zIndex: '999',
          position: 'relative'
        }
      }, _react.default.createElement(_Hidden.default, {
        smDown: true,
        implementation: "css"
      }, _react.default.createElement(TopBarWrapper, {
        id: "topbar"
      }, _react.default.createElement(_Grid.Row, null, _react.default.createElement(_Grid.Column, {
        xs: "12",
        sm: "2",
        md: "2"
      }, _react.default.createElement(_reactRouterDom.NavLink, {
        to: "/",
        style: {
          textDecoration: 'none'
        }
      }, _react.default.createElement("img", {
        style: {
          width: '120px',
          height: '62px',
          border: '5px solid white'
        },
        src: "https://res.cloudinary.com/surajsharma/image/upload/v1570562620/muchstoryimages/MUCHSTORY-LOGO-V2.jpg",
        lt: "logo"
      }))), !isAuthenticated && _react.default.createElement(_Grid.Column, {
        xs: "12",
        sm: "9",
        md: "9",
        style: {
          opacity: '1'
        },
        id: "navwrapper"
      }, _react.default.createElement(_Grid.Row, null, [].concat(_toConsumableArray(defaultcategory), [{
        route: _routes.HOME_PAGE_ROUTE,
        label: 'Much More ..',
        md: '1.8',
        sm: '2'
      }, {
        route: _routes.CREATE_STORY_ROUTE,
        label: 'Create Story',
        md: '2',
        sm: '2',
        action: ACTIVATE_ACTION
      }]).map(function (link, i) {
        return _react.default.createElement(_Grid.Column, {
          xs: "12",
          sm: link.sm,
          md: link.md,
          key: i,
          style: link.action ? {
            float: 'right'
          } : {}
        }, link.label != 'Much More ..' && _react.default.createElement(_reactRouterDom.NavLink, {
          to: link.route,
          style: {
            textDecoration: 'none'
          },
          activeStyle: {
            color: 'limegreen'
          },
          exact: true
        }, _react.default.createElement(_muchstorynavbutton.default, {
          label: link.label,
          action: link.action
        })), link.label == 'Much More ..' && _react.default.createElement(_listhoverbutton.default, {
          label: link.label,
          action: link.action,
          othercategorynames: othercategorynames
        }));
      }))), isAuthenticated && _react.default.createElement(_Grid.Column, {
        xs: "12",
        sm: "9",
        md: "9",
        style: {
          opacity: '1'
        },
        id: "navwrapper"
      }, _react.default.createElement(_Grid.Row, null, [].concat(_toConsumableArray(defaultcategory), [{
        route: _routes.HOME_PAGE_ROUTE,
        label: 'Much More ..',
        md: '1.8',
        sm: '2'
      }, {
        route: _routes.DASHBOARD_PAGE_ROUTE,
        label: 'Dashboard',
        md: '2',
        sm: '2',
        action: ACTIVATE_ACTION
      }, {
        route: _routes.CREATE_STORY_ROUTE,
        label: 'Create Story',
        md: '2',
        sm: '2',
        action: ACTIVATE_ACTION
      }]).map(function (link, i) {
        return _react.default.createElement(_Grid.Column, {
          xs: "12",
          sm: link.sm,
          md: link.md,
          key: i,
          style: link.action ? {
            float: 'right'
          } : {}
        }, link.label != 'Much More ..' && _react.default.createElement(_reactRouterDom.NavLink, {
          to: link.route,
          style: {
            textDecoration: 'none'
          },
          activeStyle: {
            color: 'limegreen'
          },
          exact: true
        }, _react.default.createElement(_muchstorynavbutton.default, {
          label: link.label,
          action: link.action
        })), link.label == 'Much More ..' && _react.default.createElement(_listhoverbutton.default, {
          label: link.label,
          action: link.action,
          othercategorynames: othercategorynames
        }));
      }))), _react.default.createElement(_Grid.Column, {
        xs: "12",
        sm: "1",
        md: "1",
        style: {
          float: 'right'
        }
      }, isAuthenticated ? _react.default.createElement("div", {
        onClick: this.loggingout,
        style: {
          textDecoration: 'none',
          textAlign: 'center',
          width: '70%',
          float: 'right',
          marginTop: '3px'
        }
      }, _react.default.createElement(_PersonOutline.default, null), _react.default.createElement("p", {
        style: {
          margin: '0',
          fontSize: '13px'
        }
      }, "LOG OUT")) : _react.default.createElement(_reactRouterDom.NavLink, {
        to: "/register",
        style: {
          textDecoration: 'none',
          width: '70%',
          float: 'right',
          marginTop: '3px'
        },
        activeStyle: {
          color: 'limegreen'
        },
        exact: true
      }, _react.default.createElement(_PersonOutline.default, {
        fontSize: "large",
        color: "action"
      })))))), _react.default.createElement(_Hidden.default, {
        mdUp: true,
        implementation: "css"
      }, _react.default.createElement(TopBarWrapper, {
        id: "topbarmobile"
      }, _react.default.createElement(_Grid.Row, null, _react.default.createElement(_Grid.Column, {
        xs: "12",
        sm: "4",
        md: "2"
      }, _react.default.createElement(_reactRouterDom.NavLink, {
        to: "/",
        style: {
          textDecoration: 'none'
        }
      }, _react.default.createElement("img", {
        style: {
          width: '140px',
          height: '64px',
          margin: '0 auto',
          display: 'table',
          borderBottom: '3px solid white'
        },
        src: "https://res.cloudinary.com/surajsharma/image/upload/v1570562620/muchstoryimages/MUCHSTORY-LOGO-V2.jpg",
        lt: "logo"
      }))))), _react.default.createElement(_Drawer.default, {
        open: mobileOpen,
        classes: {
          paper: classes.drawerPaper
        },
        onClose: this.handleDrawerToggle
      }, _react.default.createElement(MenuContainer, {
        onClick: this.handleDrawerToggle
      }, _react.default.createElement(Bar, {
        style: {
          transform: "rotate(-45deg) translate(-9px, 6px)"
        }
      }), _react.default.createElement(Bar, {
        style: {
          opacity: '0'
        }
      }), _react.default.createElement(Bar, {
        style: {
          transform: "rotate(45deg) translate(-8px, -8px)"
        }
      })), _react.default.createElement("div", {
        className: classes.sidebarWrapper
      }, _react.default.createElement(_List.default, {
        className: classes.list
      }, _react.default.createElement(_Grid.Row, null, _react.default.createElement(_Grid.Column, {
        style: {
          marginBottom: '40px'
        },
        onClick: this.handleDrawerToggle
      }, isAuthenticated ? _react.default.createElement("div", {
        onClick: this.loggingout,
        style: {
          textDecoration: 'none'
        }
      }, _react.default.createElement(_muchstorynavbutton.default, {
        label: "logout"
      })) : _react.default.createElement(_reactRouterDom.NavLink, {
        to: "/register",
        style: {
          textDecoration: 'none'
        },
        activeStyle: {
          color: 'limegreen'
        },
        exact: true
      }, _react.default.createElement(_muchstorynavbutton.default, {
        label: "login / signup"
      }))), !isAuthenticated && [{
        route: _routes.CREATE_STORY_ROUTE,
        label: 'Create Story',
        md: '4',
        action: ACTIVATE_ACTION
      }].concat(_toConsumableArray(defaultcategoryMobile), _toConsumableArray(othercategoryMobile)).map(function (link) {
        return _react.default.createElement(_Grid.Column, {
          key: link.route,
          onClick: _this2.handleDrawerToggle
        }, _react.default.createElement(_reactRouterDom.NavLink, {
          to: link.route,
          style: {
            textDecoration: 'none'
          },
          activeStyle: {
            color: 'limegreen'
          },
          exact: true
        }, _react.default.createElement(_muchstorynavbutton.default, {
          label: link.label,
          action: link.action
        })));
      }), isAuthenticated && [{
        route: _routes.CREATE_STORY_ROUTE,
        label: 'Create Story',
        md: '4',
        action: ACTIVATE_ACTION
      }, {
        route: _routes.DASHBOARD_PAGE_ROUTE,
        label: 'Dashboard',
        md: '4',
        action: ACTIVATE_ACTION
      }].concat(_toConsumableArray(defaultcategoryMobile), _toConsumableArray(othercategoryMobile)).map(function (link) {
        return _react.default.createElement(_Grid.Column, {
          key: link.route,
          onClick: _this2.handleDrawerToggle
        }, _react.default.createElement(_reactRouterDom.NavLink, {
          to: link.route,
          style: {
            textDecoration: 'none'
          },
          activeStyle: {
            color: 'limegreen'
          },
          exact: true
        }, _react.default.createElement(_muchstorynavbutton.default, {
          label: link.label,
          action: link.action
        })));
      }))))), _react.default.createElement(MenuContainer, {
        onClick: this.handleDrawerToggle
      }, _react.default.createElement(Bar, {
        id: "bar1"
      }), _react.default.createElement(Bar, {
        id: "bar2"
      }), _react.default.createElement(Bar, {
        id: "bar3"
      }))));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Nav;
}(_react.default.Component);

Nav.propTypes = {
  history: _propTypes.default.shape({
    push: _propTypes.default.func.isRequired
  }).isRequired,
  classes: _propTypes.default.object.isRequired,
  logout: _propTypes.default.func.isRequired,
  fetchAllCategoryNames: _propTypes.default.func.isRequired,
  allcategories: _propTypes.default.shape({
    primary: _propTypes.default.arrayOf(_propTypes.default.string).isRequired,
    other: _propTypes.default.arrayOf(_propTypes.default.string).isRequired
  }).isRequired
};

function mapStateToProps(state) {
  return {
    isAuthenticated: state.user && !!state.user.token,
    allcategories: state.theme && state.theme.allcategories
  };
}

var _default = (0, _reactRouterDom.withRouter)((0, _withStyles.default)(navStyle)((0, _reactRedux.connect)(mapStateToProps, {
  logout: _auth.logout,
  fetchAllCategoryNames: _theme.fetchAllCategoryNames
})(Nav)));

var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(TopBarWrapper, "TopBarWrapper", "/home/suraj/Desktop/JohnyBravo/astav/Production/MUCH-STORY/src/shared/component/nav.jsx");
  reactHotLoader.register(Bar, "Bar", "/home/suraj/Desktop/JohnyBravo/astav/Production/MUCH-STORY/src/shared/component/nav.jsx");
  reactHotLoader.register(MenuContainer, "MenuContainer", "/home/suraj/Desktop/JohnyBravo/astav/Production/MUCH-STORY/src/shared/component/nav.jsx");
  reactHotLoader.register(navStyle, "navStyle", "/home/suraj/Desktop/JohnyBravo/astav/Production/MUCH-STORY/src/shared/component/nav.jsx");
  reactHotLoader.register(Nav, "Nav", "/home/suraj/Desktop/JohnyBravo/astav/Production/MUCH-STORY/src/shared/component/nav.jsx");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "/home/suraj/Desktop/JohnyBravo/astav/Production/MUCH-STORY/src/shared/component/nav.jsx");
  reactHotLoader.register(_default, "default", "/home/suraj/Desktop/JohnyBravo/astav/Production/MUCH-STORY/src/shared/component/nav.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();