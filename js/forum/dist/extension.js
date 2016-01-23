System.register('davis/socialprofile/components/SocialButtonsModal', ['flarum/components/Modal', 'flarum/components/Button', 'flarum/utils/string'], function (_export) {
  'use strict';

  var Modal, Button, slug, SocialButtonsModal;
  return {
    setters: [function (_flarumComponentsModal) {
      Modal = _flarumComponentsModal['default'];
    }, function (_flarumComponentsButton) {
      Button = _flarumComponentsButton['default'];
    }, function (_flarumUtilsString) {
      slug = _flarumUtilsString.slug;
    }],
    execute: function () {
      SocialButtonsModal = (function (_Modal) {
        babelHelpers.inherits(SocialButtonsModal, _Modal);

        function SocialButtonsModal() {
          babelHelpers.classCallCheck(this, SocialButtonsModal);
          babelHelpers.get(Object.getPrototypeOf(SocialButtonsModal.prototype), 'constructor', this).apply(this, arguments);
        }

        babelHelpers.createClass(SocialButtonsModal, [{
          key: 'init',
          value: function init() {
            var _this = this;

            babelHelpers.get(Object.getPrototypeOf(SocialButtonsModal.prototype), 'init', this).call(this);

            var curuserid = app.current.user.data.id;
            var url = app.forum.attribute('apiUrl') + '/profile/socialbutton/' + curuserid;
            this.socialaccs = null;
            m.request({ method: "GET", url: url }).then(function (result) {
              if (result.data.attributes.hasOwnProperty("buttons")) {
                _this.socialaccs = JSON.parse(result.data.attributes.buttons);

                _this.urltitle1 = m.prop(_this.socialaccs["0"]["title"]);
                _this.url1 = m.prop(_this.socialaccs["0"]["url"]);
                _this.icon1 = m.prop(_this.socialaccs["0"]["icon"]);

                _this.urltitle2 = m.prop(_this.socialaccs["1"]["title"]);
                _this.url2 = m.prop(_this.socialaccs["1"]["url"]);
                _this.icon2 = m.prop(_this.socialaccs["1"]["icon"]);

                _this.urltitle3 = m.prop(_this.socialaccs["2"]["title"]);
                _this.url3 = m.prop(_this.socialaccs["2"]["url"]);
                _this.icon3 = m.prop(_this.socialaccs["2"]["icon"]);

                _this.urltitle4 = m.prop(_this.socialaccs["3"]["title"]);
                _this.url4 = m.prop(_this.socialaccs["3"]["url"]);
                _this.icon4 = m.prop(_this.socialaccs["3"]["icon"]);
              } else {
                _this.socialaccs = "";
              }
              m.redraw();
            });
            this.urltitle1 = m.prop('');
            this.url1 = m.prop('');
            this.icon1 = m.prop('');

            this.urltitle2 = m.prop('');
            this.url2 = m.prop('');
            this.icon2 = m.prop('');

            this.urltitle3 = m.prop('');
            this.url3 = m.prop('');
            this.icon3 = m.prop('');

            this.urltitle4 = m.prop('');
            this.url4 = m.prop('');
            this.icon4 = m.prop('');
          }
        }, {
          key: 'className',
          value: function className() {
            return 'SocialButtonsModal Modal--small';
          }
        }, {
          key: 'title',
          value: function title() {
            return app.translator.trans('davis-socialprofile.forum.edit.headtitle');
          }
        }, {
          key: 'content',
          value: function content() {
            return m(
              'div',
              { className: 'Modal-body' },
              m(
                'div',
                { className: 'Form' },
                m(
                  'div',
                  { className: 'Form-group form-group-social' },
                  m(
                    'label',
                    null,
                    app.translator.trans('davis-socialprofile.forum.edit.title.m')
                  ),
                  m('input', { className: 'FormControl', placeholder: app.translator.trans('davis-socialprofile.forum.edit.title.pl'), value: this.urltitle1(), oninput: m.withAttr('value', this.urltitle1) }),
                  m(
                    'label',
                    null,
                    app.translator.trans('davis-socialprofile.forum.edit.url.m')
                  ),
                  m('input', { className: 'FormControl', placeholder: app.translator.trans('davis-socialprofile.forum.edit.url.pl'), value: this.url1(), oninput: m.withAttr('value', this.url1) }),
                  m(
                    'label',
                    null,
                    app.translator.trans('davis-socialprofile.forum.edit.icon.m')
                  ),
                  m('input', { className: 'FormControl', placeholder: app.translator.trans('davis-socialprofile.forum.edit.icon.pl'), value: this.icon1(), oninput: m.withAttr('value', this.icon1) })
                ),
                m(
                  'div',
                  { className: 'Form-group form-group-social' },
                  m(
                    'label',
                    null,
                    app.translator.trans('davis-socialprofile.forum.edit.title.m')
                  ),
                  m('input', { className: 'FormControl', placeholder: app.translator.trans('davis-socialprofile.forum.edit.title.pl'), value: this.urltitle2(), oninput: m.withAttr('value', this.urltitle2) }),
                  m(
                    'label',
                    null,
                    app.translator.trans('davis-socialprofile.forum.edit.url.m')
                  ),
                  m('input', { className: 'FormControl', placeholder: app.translator.trans('davis-socialprofile.forum.edit.url.pl'), value: this.url2(), oninput: m.withAttr('value', this.url2) }),
                  m(
                    'label',
                    null,
                    app.translator.trans('davis-socialprofile.forum.edit.icon.m')
                  ),
                  m('input', { className: 'FormControl', placeholder: app.translator.trans('davis-socialprofile.forum.edit.icon.pl'), value: this.icon2(), oninput: m.withAttr('value', this.icon2) })
                ),
                m(
                  'div',
                  { className: 'Form-group form-group-social' },
                  m(
                    'label',
                    null,
                    app.translator.trans('davis-socialprofile.forum.edit.title.m')
                  ),
                  m('input', { className: 'FormControl', placeholder: app.translator.trans('davis-socialprofile.forum.edit.title.pl'), value: this.urltitle3(), oninput: m.withAttr('value', this.urltitle3) }),
                  m(
                    'label',
                    null,
                    app.translator.trans('davis-socialprofile.forum.edit.url.m')
                  ),
                  m('input', { className: 'FormControl', placeholder: app.translator.trans('davis-socialprofile.forum.edit.url.pl'), value: this.url3(), oninput: m.withAttr('value', this.url3) }),
                  m(
                    'label',
                    null,
                    app.translator.trans('davis-socialprofile.forum.edit.icon.m')
                  ),
                  m('input', { className: 'FormControl', placeholder: app.translator.trans('davis-socialprofile.forum.edit.icon.pl'), value: this.icon3(), oninput: m.withAttr('value', this.icon3) })
                ),
                m(
                  'div',
                  { className: 'Form-group form-group-social' },
                  m(
                    'label',
                    null,
                    app.translator.trans('davis-socialprofile.forum.edit.title.m')
                  ),
                  m('input', { className: 'FormControl', placeholder: app.translator.trans('davis-socialprofile.forum.edit.title.pl'), value: this.urltitle4(), oninput: m.withAttr('value', this.urltitle4) }),
                  m(
                    'label',
                    null,
                    app.translator.trans('davis-socialprofile.forum.edit.url.m')
                  ),
                  m('input', { className: 'FormControl', placeholder: app.translator.trans('davis-socialprofile.forum.edit.url.pl'), value: this.url4(), oninput: m.withAttr('value', this.url4) }),
                  m(
                    'label',
                    null,
                    app.translator.trans('davis-socialprofile.forum.edit.icon.m')
                  ),
                  m('input', { className: 'FormControl', placeholder: app.translator.trans('davis-socialprofile.forum.edit.icon.pl'), value: this.icon4(), oninput: m.withAttr('value', this.icon4) })
                ),
                m(
                  'div',
                  { className: 'Form-group', id: 'submit-button-group' },
                  Button.component({
                    type: 'submit',
                    className: 'Button Button--primary EditSocialButtons-save',
                    loading: this.loading,
                    children: app.translator.trans('davis-socialprofile.forum.edit.submit')
                  })
                )
              )
            );
          }
        }, {
          key: 'onsubmit',
          value: function onsubmit(e) {
            var _this2 = this;

            e.preventDefault();

            this.loading = true;
            var buttonData = {
              0: {
                "title": this.urltitle1(),
                "url": this.url1(),
                "icon": this.icon1()
              },
              1: {
                "title": this.urltitle2(),
                "url": this.url2(),
                "icon": this.icon2()
              },
              2: {
                "title": this.urltitle3(),
                "url": this.url3(),
                "icon": this.icon3()
              },
              3: {
                "title": this.urltitle4(),
                "url": this.url4(),
                "icon": this.icon4()
              }
            };
            buttonData = JSON.stringify(buttonData);
            var data = new FormData();
            data.append('buttons', buttonData);
            app.request({
              method: 'POST',
              url: app.forum.attribute('apiUrl') + '/profile/socialbuttons',
              serialize: function serialize(raw) {
                return raw;
              },
              data: data
            }).then(function () {
              return _this2.hide();
            }, function (response) {
              _this2.loading = false;
              _this2.handleErrors(response);
            });
          }
        }]);
        return SocialButtonsModal;
      })(Modal);

      _export('default', SocialButtonsModal);
    }
  };
});;
System.register('davis/socialprofile/main', ['davis/socialprofile/models/SocialButtons', 'flarum/app', 'flarum/extend', 'flarum/components/UserCard', 'flarum/components/Badge', 'davis/socialprofile/components/SocialButtonsModal'], function (_export) {
    'use strict';

    var SocialButtons, app, extend, UserCard, Badge, SocialButtonsModal;
    return {
        setters: [function (_davisSocialprofileModelsSocialButtons) {
            SocialButtons = _davisSocialprofileModelsSocialButtons['default'];
        }, function (_flarumApp) {
            app = _flarumApp['default'];
        }, function (_flarumExtend) {
            extend = _flarumExtend.extend;
        }, function (_flarumComponentsUserCard) {
            UserCard = _flarumComponentsUserCard['default'];
        }, function (_flarumComponentsBadge) {
            Badge = _flarumComponentsBadge['default'];
        }, function (_davisSocialprofileComponentsSocialButtonsModal) {
            SocialButtonsModal = _davisSocialprofileComponentsSocialButtonsModal['default'];
        }],
        execute: function () {

            app.initializers.add('davis-socialprofile-forum', function () {

                app.store.models.socialbuttons = SocialButtons;

                extend(UserCard.prototype, 'init', function () {
                    var _this = this;

                    var theuser = this.props.user;
                    var theurl = app.forum.attribute('apiUrl') + '/profile/socialbutton/' + theuser.data.id;
                    this.socialaccs = null;
                    app.request({ method: "GET", url: theurl }).then(function (result) {
                        if (result.data.attributes.hasOwnProperty("buttons")) {
                            _this.socialaccs = JSON.parse(result.data.attributes.buttons);
                        } else {
                            _this.socialaccs = "";
                        }
                        m.redraw();
                    });
                });

                extend(UserCard.prototype, 'infoItems', function (items) {
                    var _this2 = this;

                    // If request hasn't loaded yet, don't add any items.
                    if (!this.socialaccs) return;

                    var _loop = function (k) {
                        var curaccount = _this2.socialaccs[k];
                        if (curaccount["icon"] !== "") {
                            items.add(curaccount["icon"] + ' social-button', Badge.component({
                                type: "social",
                                icon: curaccount["icon"],
                                label: curaccount["title"],
                                onclick: function onclick() {
                                    window.open(curaccount["url"], '_blank');
                                }
                            }));
                        }
                    };

                    for (var k in this.socialaccs) {
                        _loop(k);
                    }
                    var settingsclass;
                    var settingsicon;
                    var settingslabel;
                    if (this.socialaccs["0"]["icon"] !== '' || this.socialaccs["1"]["icon"] !== '' || this.socialaccs["2"]["icon"] !== '' || this.socialaccs["3"]["icon"] !== '') {
                        settingsclass = 'social-settings';
                        settingsicon = 'cog';
                        settingslabel = app.translator.trans('davis-socialprofile.forum.edit.edit');
                    } else {
                        settingsclass = 'null-social-settings';
                        settingsicon = 'plus';
                        settingslabel = app.translator.trans('davis-socialprofile.forum.edit.add');
                    }
                    if (app.session.user === app.current.user) {
                        items.add('settings' + ' social-button', Badge.component({
                            type: "social " + settingsclass,
                            icon: settingsicon,
                            label: settingslabel,
                            onclick: function onclick() {
                                app.modal.show(new SocialButtonsModal());
                            }
                        }), -1);
                    }
                });
            });
        }
    };
});