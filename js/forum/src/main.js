import SocialButtons from 'davis/socialprofile/models/SocialButtons';
import app from 'flarum/app';
import { extend } from 'flarum/extend';
import UserCard from 'flarum/components/UserCard';
import Badge from 'flarum/components/Badge';
import SocialButtonsModal from 'davis/socialprofile/components/SocialButtonsModal';

app.initializers.add('davis-socialprofile-forum', function() {
    
   app.store.models.socialbuttons = SocialButtons;
   
    extend(UserCard.prototype, 'init', function() {
      var theuser = this.props.user;
      var theurl = app.forum.attribute('apiUrl') + '/profile/socialbutton/'+theuser.data.id;
      this.socialaccs = null;
      app.request({method: "GET", url: theurl}).then(result => {
        if(result.data.attributes.hasOwnProperty("buttons")) {
            this.socialaccs = JSON.parse(result.data.attributes.buttons);
        } else {
            this.socialaccs = "";
        }
        m.redraw();
      });
    });
    
    extend(UserCard.prototype, 'infoItems', function(items) {
        // If request hasn't loaded yet, don't add any items.
        if (!this.socialaccs) return;
        
        for (const k in this.socialaccs) {
            const curaccount = this.socialaccs[k];
            if (curaccount["icon"] !== "") {
                items.add(curaccount["icon"] + ' social-button', Badge.component({
                    type: "social",
                    icon: curaccount["icon"],
                    label: curaccount["title"],
                    onclick: function() {
                        window.open(curaccount["url"],'_blank');
                    }
                }));
            }
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
                type: "social "+settingsclass,
                icon: settingsicon,
                label: settingslabel,
                onclick: function(){app.modal.show(new SocialButtonsModal())}
            }), -1);
        }
    });
});