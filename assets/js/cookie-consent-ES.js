  // Init
  window.addEventListener('load', function () {

    // obtain plugin
    var cc = initCookieConsent();

    // run plugin with your configuration
    cc.run({
      current_lang: 'es',
      autoclear_cookies: true,
      page_scripts: true,

      languages: {
        'es': {
          consent_modal: {
            title: 'We use cookies!',
            description: 'We use cookies on our website to enhance your browsing experience by remembering your preferences and analyzing site traffic. By clicking "Accept all", you consent to the use of all cookies. However, you can manage your <a data-bs-toggle="modal" href="#bs-cookie-modal">cookie preferences</a> to provide a controlled consent.',
            primary_btn: {
              text: 'Accept all',
              role: 'accept_all'
            },
            secondary_btn: {
              text: 'Reject all',
              role: 'accept_necessary'
            },
            settings_btn: {
              text: 'Manage preferences'
            },
            consent_footer: {
              description: '<a class="small link-secondary text-decoration-none" href="#">Privacy Policy</a> • <a class="small link-secondary text-decoration-none" href="#">Terms & Conditions</a> • <a class="small link-secondary text-decoration-none" href="#">Imprint</a>'
            }
          },

          settings_modal: {
            title: 'Cookie preferences',
            save_settings_btn: 'Save preferences',
            accept_all_btn: 'Accept all',
            reject_all_btn: 'Reject all',
            close_btn_label: 'Close',
            cookie_table_headers: [
              { col1: 'Name' },
              { col2: 'Domain' },
              { col3: 'Expiration' },
              { col4: 'Description' }
            ],
            blocks: [
              {
                title: 'Cookie usage',
                description: 'We use cookies to ensure the basic functionalities of the website and to enhance your online experience. You can choose for each category to opt-in/out whenever you want. For more details relative to cookies and other sensitive data, please read the full <a href="#">Privacy Policy</a>.'
              }, {
                title: 'Necessary',
                description: 'These cookies are essential for the proper functioning of our website. Without these cookies, the website would not work properly',
                toggle: {
                  value: 'necessary',
                  enabled: true,
                  readonly: true          // cookie categories with readonly=true are all treated as "necessary cookies"
                }
              }, {
                title: 'Analytics',
                description: 'These cookies allow the website to remember the choices you have made in the past',
                toggle: {
                  value: 'analytics',     // your cookie category
                  enabled: false,
                  readonly: false
                },
                cookie_table: [           // list of all expected cookies
                  {
                    col1: '^_ga',         // match all cookies starting with "_ga"
                    col2: 'google.com',
                    col3: '2 years',
                    col4: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.',
                    is_regex: true
                  }, {
                    col1: '_gid',
                    col2: 'google.com',
                    col3: '1 day',
                    col4: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.',
                  }
                ]
              }, {
                title: 'Advertising',
                description: 'These cookies collect information about how you use the website, which pages you visited and which links you clicked on. All of the data is anonymized and cannot be used to identify you',
                toggle: {
                  value: 'advertising',
                  enabled: false,
                  readonly: false
                },
                cookie_table: [             // list of all expected cookies
                  {
                    col1: '_name',
                    col2: 'xyz.com',
                    col3: '2 weeks',
                    col4: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.',
                    is_regex: true
                  }, {
                    col1: '_name',
                    col2: 'xyz.com',
                    col3: '3 days',
                    col4: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.',
                  }
                ]
              }, {
                title: 'More information',
                description: 'For any queries in relation to our policy on cookies and your choices, please <a href="#yourcontactpage">contact us</a>.',
              },

            ]
          }

        }
      }

    });
  });