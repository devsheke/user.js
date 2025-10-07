// Resist fingerprinting
user_pref("privacy.resistFingerprinting", true); // [FF41+]
user_pref("privacy.resistFingerprinting.pbmode", true); // [FF114+]

/****************************************************************************
 * Peskyfox                                                                 *
 * "Aquila non capit muscas"                                                *
 * priority: remove annoyances                                              *
 * version: 133                                                             *
 * url: https://github.com/yokoffing/Betterfox                              *
 * credit: Some prefs are reproduced and adapted from the arkenfox project  *
 * credit urL: https://github.com/arkenfox/user.js                          *
 ***************************************************************************/

/****************************************************************************
 * SECTION: MOZILLA UI                                                      *
 ****************************************************************************/

// PREF: Mozilla VPN
// [1] https://github.com/yokoffing/Betterfox/issues/169
user_pref("browser.privatebrowsing.vpnpromourl", "");
//user_pref("browser.vpn_promo.enabled", false);

// PREF: disable about:addons' Recommendations pane (uses Google Analytics)
user_pref("extensions.getAddons.showPane", false); // HIDDEN

// PREF: disable recommendations in about:addons' Extensions and Themes panes
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);

// PREF: Personalized Extension Recommendations in about:addons and AMO
// [NOTE] This pref has no effect when Health Reports are disabled.
// [SETTING] Privacy & Security>Firefox Data Collection & Use>Allow Firefox to make personalized extension recommendations
user_pref("browser.discovery.enabled", false);

// PREF: disable Fakespot integration [FF116+]
// [1] https://bugzilla.mozilla.org/show_bug.cgi?id=1840156#c0
// [2] https://github.com/arkenfox/user.js/issues/1730
// [3] https://www.fakespot.com/
// [4] https://www.ghacks.net/2023/10/12/firefox-will-soon-tell-you-if-product-reviews-are-reliable/
//user_pref("browser.shopping.experience2023.enabled", false); // DEFAULT
//user_pref("browser.shopping.experience2023.ads.exposure", false); // DEFAULT [FF121+]

// PREF: disable Firefox from asking to set as the default browser
// [1] https://github.com/yokoffing/Betterfox/issues/166
user_pref("browser.shell.checkDefaultBrowser", false);

// PREF: disable Extension Recommendations (CFR: "Contextual Feature Recommender")
// [1] https://support.mozilla.org/en-US/kb/extension-recommendations
user_pref(
  "browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons",
  false,
);
user_pref(
  "browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features",
  false,
);

// PREF: hide "More from Mozilla" in Settings
user_pref("browser.preferences.moreFromMozilla", false);

// PREF: tab and about:config warnings
//user_pref("browser.tabs.warnOnClose", false); // DEFAULT [FF94+]
//user_pref("browser.tabs.warnOnCloseOtherTabs", true); // DEFAULT
//user_pref("browser.tabs.warnOnOpen", true); // DEFAULT
user_pref("browser.aboutConfig.showWarning", false);

// PREF: disable welcome notices
//user_pref("browser.startup.homepage_override.mstone", "ignore"); // What's New page after updates; master switch
user_pref("browser.aboutwelcome.enabled", false); // disable Intro screens
//user_pref("startup.homepage_welcome_url", "");
//user_pref("startup.homepage_welcome_url.additional", "");
//user_pref("startup.homepage_override_url", ""); // What's New page after updates

// PREF: disable "What's New" toolbar icon [FF69+]
//user_pref("browser.messaging-system.whatsNewPanel.enabled", false);

// PREF: new profile switcher
user_pref("browser.profiles.enabled", true);

// PREF: use native title bar buttons [LINUX]
// [1] https://github.com/yokoffing/Betterfox/issues/320
//user_pref("widget.gtk.non-native-titlebar-buttons.enabled", true);

/****************************************************************************
 * SECTION: THEME ADJUSTMENTS                                              *
 ****************************************************************************/

// PREF: enable Firefox to use userChome, userContent, etc.
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);

// PREF: add compact mode back to options
user_pref("browser.compactmode.show", true);

// PREF: preferred color scheme for websites
// [SETTING] General>Language and Appearance>Website appearance
// By default, color scheme matches the theme of your browser toolbar (3).
// Set this pref to choose Dark on sites that support it (0) or Light (1).
// Before FF95, the pref was 2, which determined site color based on OS theme.
// Dark (0), Light (1), System (2), Browser (3) [DEFAULT FF95+]
// [1] https://www.reddit.com/r/firefox/comments/rfj6yc/how_to_stop_firefoxs_dark_theme_from_overriding/hoe82i5/?context=3
user_pref("layout.css.prefers-color-scheme.content-override", 2);

// PREF: disable always using dark theme for private browsing windows [FF106+]
//user_pref("browser.theme.dark-private-windows", false);

// PREF: prevent private windows being separate from normal windows in taskbar [WINDOWS] [FF106+]
user_pref("browser.privateWindowSeparation.enabled", false);

// PREF: show search bar [FF122+]
// Mozilla has removed the search bar option from the settings window.
//user_pref("browser.search.widget.inNavBar", true);

// PREF: new tab page wallpapers
//user_pref("browser.newtabpage.activity-stream.newtabWallpapers.v2.enabled", true); // [DEFAULT FF132+]

/****************************************************************************
 * SECTION: COOKIE BANNER HANDLING                                         *
 ****************************************************************************/

// PREF: Cookie Banner handling
// [NOTE] Feature still enforces Total Cookie Protection to limit 3rd-party cookie tracking [1]
// [1] https://github.com/mozilla/cookie-banner-rules-list/issues/33#issuecomment-1318460084
// [2] https://phabricator.services.mozilla.com/D153642
// [3] https://winaero.com/make-firefox-automatically-click-on-reject-all-in-cookie-banner-consent/
// [4] https://docs.google.com/spreadsheets/d/1Nb4gVlGadyxix4i4FBDnOeT_eJp2Zcv69o-KfHtK-aA/edit#gid=0
// 2: reject banners if it is a one-click option; otherwise, fall back to the accept button to remove banner
// 1: reject banners if it is a one-click option; otherwise, keep banners on screen
// 0: disable all cookie banner handling
user_pref("cookiebanners.service.mode", 1);
user_pref("cookiebanners.service.mode.privateBrowsing", 1);

// PREF: Cookie Banner global rules
// Global rules that can handle a list of cookie banner libraries and providers on any site.
// This is used for click rules that can handle common Consent Management Providers (CMP).
//user_pref("cookiebanners.service.enableGlobalRules", true); // DEFAULT [FF121+]
//user_pref("cookiebanners.service.enableGlobalRules.subFrames", true); // DEFAULT [FF121+]

/****************************************************************************
 * SECTION: TRANSLATIONS                                                   *
 ****************************************************************************/

// PREF: Firefox Translations [FF118+]
// Automated translation of web content is done locally in Firefox, so that
// the text being translated does not leave your machine.
// [ABOUT] Visit about:translations to translate your own text as well.
// [1] https://blog.mozilla.org/en/mozilla/local-translation-add-on-project-bergamot/
// [2] https://blog.nightly.mozilla.org/2023/06/01/firefox-translations-and-other-innovations-these-weeks-in-firefox-issue-139/
// [3] https://www.ghacks.net/2023/08/02/mozilla-firefox-117-beta-brings-an-automatic-language-translator-for-websites-and-it-works-offline/
//user_pref("browser.translations.enable", true); // DEFAULT
//user_pref("browser.translations.autoTranslate", true);

/****************************************************************************
 * SECTION: FULLSCREEN NOTICE                                               *
 ****************************************************************************/

// PREF: remove fullscreen delay
user_pref("full-screen-api.transition-duration.enter", "0 0"); // default=200 200
user_pref("full-screen-api.transition-duration.leave", "0 0"); // default=200 200

// PREF: disable fullscreen notice
user_pref("full-screen-api.warning.delay", -1); // default=500
user_pref("full-screen-api.warning.timeout", 0); // default=3000

/****************************************************************************
 * SECTION: FONT APPEARANCE                                                 *
 ****************************************************************************/

// PREF: smoother font
// [1] https://reddit.com/r/firefox/comments/wvs04y/windows_11_firefox_v104_font_rendering_different/?context=3
//user_pref("gfx.webrender.quality.force-subpixel-aa-where-possible", true);

// PREF: use DirectWrite everywhere like Chrome [WINDOWS]
// [1] https://kb.mozillazine.org/Thunderbird_6.0,_etc.#Font_rendering_and_performance_issues
// [2] https://reddit.com/r/firefox/comments/wvs04y/comment/ilklzy1/?context=3
//user_pref("gfx.font_rendering.cleartype_params.rendering_mode", 5);
//user_pref("gfx.font_rendering.cleartype_params.cleartype_level", 100);
//user_pref("gfx.font_rendering.cleartype_params.force_gdi_classic_for_families", "");
//user_pref("gfx.font_rendering.directwrite.use_gdi_table_loading", false);
// Some users find these helpful:
//user_pref("gfx.font_rendering.cleartype_params.gamma", 1750);
//user_pref("gfx.font_rendering.cleartype_params.enhanced_contrast", 100);
//user_pref("gfx.font_rendering.cleartype_params.pixel_structure", 1);

// PREF: use macOS Appearance Panel text smoothing setting when rendering text [macOS]
//user_pref("gfx.use_text_smoothing_setting", true);

/****************************************************************************
 * SECTION: URL BAR                                                         *
 ****************************************************************************/

// PREF: minimize URL bar suggestions (bookmarks, history, open tabs)
// Dropdown options in the URL bar:
//user_pref("browser.urlbar.suggest.history", false);
//user_pref("browser.urlbar.suggest.bookmark", true); // DEFAULT
//user_pref("browser.urlbar.suggest.clipboard", false);
//user_pref("browser.urlbar.suggest.openpage", false);
user_pref("browser.urlbar.suggest.engines", false);
//user_pref("browser.urlbar.suggest.searches", false);
//user_pref("browser.urlbar.quickactions.enabled", false);
//user_pref("browser.urlbar.shortcuts.quickactions", false);
//user_pref("browser.urlbar.suggest.weather", true); // DEFAULT [FF108]
//user_pref("browser.urlbar.weather.ignoreVPN", false); // DEFAULT
user_pref("browser.urlbar.suggest.calculator", true);
user_pref("browser.urlbar.unitConversion.enabled", true);

// PREF: disable dropdown suggestions with empty query
//user_pref("browser.urlbar.suggest.topsites", false);

// PREF: disable urlbar trending search suggestions [FF118+]
// [SETTING] Search>Search Suggestions>Show trending search suggestions (FF119)
user_pref("browser.urlbar.trending.featureGate", false);
//user_pref("browser.urlbar.suggest.trending", false);

// PREF: disable urlbar suggestions
//user_pref("browser.urlbar.addons.featureGate", false); // [FF115+]
//user_pref("browser.urlbar.fakespot.featureGate", false); // [FF130+] [DEFAULT: false]
//user_pref("browser.urlbar.mdn.featureGate", false); // [FF117+] [HIDDEN PREF]
//user_pref("browser.urlbar.pocket.featureGate", false); // [FF116+] [DEFAULT: false]
//user_pref("browser.urlbar.weather.featureGate", false); // [FF108+] [DEFAULT: false]
//user_pref("browser.urlbar.clipboard.featureGate", false); // [FF118+] [DEFAULT: true FF125+]
//user_pref("browser.urlbar.yelp.featureGate", false); // [FF124+] [DEFAULT: false]

// PREF: disable recent searches [FF120+]
// [NOTE] Recent searches are cleared with history.
// [1] https://support.mozilla.org/kb/search-suggestions-firefox
//user_pref("browser.urlbar.recentsearches.featureGate", false);

// PREF: disable tab-to-search [FF85+]
// Alternatively, you can exclude on a per-engine basis by unchecking them in Options>Search
// [SETTING] Privacy & Security>Address Bar>When using the address bar, suggest>Search engines
//user_pref("browser.urlbar.suggest.engines", false);

// PREF: Adaptive History Autofill
// [1] https://docs.google.com/document/u/1/d/e/2PACX-1vRBLr_2dxus-aYhZRUkW9Q3B1K0uC-a0qQyE3kQDTU3pcNpDHb36-Pfo9fbETk89e7Jz4nkrqwRhi4j/pub
//user_pref("browser.urlbar.autoFill", true); // [DEFAULT]
//user_pref("browser.urlbar.autoFill.adaptiveHistory.enabled", false);

// PREF: adjust the amount of Address bar / URL bar dropdown results
// This value controls the total number of entries to appear in the location bar dropdown.
// [NOTE] Items (bookmarks/history/openpages) with a high "frequency"/"bonus" will always
// be displayed (no we do not know how these are calculated or what the threshold is),
// and this does not affect the search by search engine suggestion.
// disable=0
//user_pref("browser.urlbar.maxRichResults", 5); // default=10

// PREF: text fragments [FF126+ NIGHTLY]
// [1] https://bugzilla.mozilla.org/show_bug.cgi?id=1753933#c6
// [2] https://developer.mozilla.org/en-US/docs/Web/Text_fragments
// [3] https://web.dev/articles/text-fragments
//user_pref("dom.text_fragments.enabled", true); // [DEFAULT]

/****************************************************************************
 * SECTION: AUTOPLAY                                                        *
 ****************************************************************************/

// PREF: do not autoplay media audio
// [NOTE] You can set exceptions under site permissions
// [SETTING] Privacy & Security>Permissions>Autoplay>Settings>Default for all websites
// 0=Allow all, 1=Block non-muted media (default), 5=Block all
//user_pref("media.autoplay.default", 1); // DEFAULT
//user_pref("media.block-autoplay-until-in-foreground", true); // DEFAULT

// PREF: disable autoplay of HTML5 media if you interacted with the site [FF78+]
// 0=sticky (default), 1=transient, 2=user
// Firefox's Autoplay Policy Documentation (PDF) is linked below via SUMO
// [NOTE] If you have trouble with some video sites (e.g. YouTube), then add an exception (see previous PREF)
// [1] https://support.mozilla.org/questions/1293231
//user_pref("media.autoplay.blocking_policy", 2);

/****************************************************************************
 * SECTION: NEW TAB PAGE                                                    *
 ****************************************************************************/

// PREF: startup / new tab page
// 0=blank, 1=home, 2=last visited page, 3=resume previous session
// [NOTE] Session Restore is cleared with history and not used in Private Browsing mode
// [SETTING] General>Startup>Open previous windows and tabs
//user_pref("browser.startup.page", 3);
user_pref("browser.startup.page", 1);

// PREF: set HOME+NEW WINDOW page to blank tab
// about:home=Activity Stream, custom URL, about:blank
// [SETTING] Home>New Windows and Tabs>Homepage and new windows
// [Custom URLs] Set two or more websites in Home Page Field – delimited by |
// [1] https://support.mozilla.org/en-US/questions/1271888#answer-1262899
//user_pref("browser.startup.homepage", "about:blank");

// PREF: set NEWTAB page to blank tab
// true=Firefox Home, false=blank page
// [SETTING] Home>New Windows and Tabs>New tabs
//user_pref("browser.newtabpage.enabled", false);

// PREF: Pinned Shortcuts on New Tab
// [SETTINGS] Home>Firefox Home Content
// [1] https://github.com/arkenfox/user.js/issues/1556
//user_pref("browser.newtabpage.activity-stream.discoverystream.enabled", false);
//user_pref("browser.newtabpage.activity-stream.showSearch", true); // NTP Web Search [DEFAULT]
user_pref("browser.newtabpage.activity-stream.feeds.topsites", false); // Shortcuts
//user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false); // Shortcuts > Sponsored shortcuts [FF83+]
user_pref("browser.newtabpage.activity-stream.showWeather", false); // Weather [FF130+]
//user_pref("browser.newtabpage.activity-stream.system.showWeather", false); // hides Weather as an UI option
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false); // Recommended by Pocket
//user_pref("browser.newtabpage.activity-stream.showSponsored", false); // Sponsored Stories [FF58+]
//user_pref("browser.newtabpage.activity-stream.feeds.section.highlights", false); // Recent Activity [DEFAULT]
//user_pref("browser.newtabpage.activity-stream.section.highlights.includeBookmarks", false);
//user_pref("browser.newtabpage.activity-stream.section.highlights.includeDownloads", false);
//user_pref("browser.newtabpage.activity-stream.section.highlights.includePocket", false);
//user_pref("browser.newtabpage.activity-stream.section.highlights.includeVisited", false);
//user_pref("browser.newtabpage.activity-stream.feeds.snippets", false); // [DEFAULT]

// PREF: wallpapers on New Tab [FF128+ NIGHTLY]
//user_pref("browser.newtabpage.activity-stream.newtabWallpapers.enabled", false); // Wallpapers

// PREF: clear default topsites
// [NOTE] This does not block you from adding your own.
//user_pref("browser.newtabpage.activity-stream.default.sites", "");

// PREF: keep search in the search box; prevent from jumping to address bar
// [1] https://www.reddit.com/r/firefox/comments/oxwvbo/firefox_start_page_search_options/
//user_pref("browser.newtabpage.activity-stream.improvesearch.handoffToAwesomebar", false);

// PREF: Firefox logo to always show
//user_pref("browser.newtabpage.activity-stream.logowordmark.alwaysVisible", true); // DEFAULT

// PREF: Bookmarks Toolbar visibility
// always, never, or newtab
//user_pref("browser.toolbars.bookmarks.visibility", "newtab"); // DEFAULT

/******************************************************************************
 * SECTION: POCKET                                                            *
 ******************************************************************************/

// PREF: Disable built-in Pocket extension
user_pref("extensions.pocket.enabled", false);
//user_pref("extensions.pocket.api"," ");
//user_pref("extensions.pocket.oAuthConsumerKey", " ");
//user_pref("extensions.pocket.site", " ");
//user_pref("extensions.pocket.showHome", false);

/******************************************************************************
 * SECTION: DOWNLOADS                                 *
 ******************************************************************************/

// PREF: choose download location
// [SETTING] To set your default "downloads": General>Downloads>Save files to...
// 0=desktop, 1=downloads (default), 2=last used
//user_pref("browser.download.folderList", 1); // DEFAULT

// PREF: always ask how to handle new mimetypes [FF101+]
// Enforce user interaction for greater security.
// [SETTING] General>Files and Applications>Applications>What should Firefox do with other files?
// false=Save files
// true=Ask whether to open or save files
//user_pref("browser.download.always_ask_before_handling_new_types", true);

// PREF: always ask where to download
// [OPTIONAL HARDENING] Enforce user interaction for greater security.
// [SETTING] General>Files and Applications>Downloads>Always ask you where to save files
// [DIALOGUE] "Ask whether to open or save files"
// true=direct download (default)
// false=the user is asked what to do
// [1] https://github.com/yokoffing/Betterfox/issues/267
//user_pref("browser.download.useDownloadDir", false);
//user_pref("browser.download.dir", "C:\Users\<YOUR_USERNAME>\AppData\Local\Temp"); // [WINDOWS]

// PREF: autohide the downloads button
//user_pref("browser.download.autohideButton", true); // DEFAULT

// PREF: disable download panel opening on every download [non-functional?]
// Controls whether to open the download panel every time a download begins.
// [NOTE] The first download ever ran in a new profile will still open the panel.
//user_pref("browser.download.alwaysOpenPanel", false);

// PREF: disable adding downloads to the system's "recent documents" list
user_pref("browser.download.manager.addToRecentDocs", false);

/****************************************************************************
 * SECTION: PDF                                                             *
 ****************************************************************************/

// PREF: enforce Firefox's built-in PDF reader
// This setting controls if the option "Display in Firefox" is available in the setting below
// and by effect controls whether PDFs are handled in-browser or externally ("Ask" or "Open With").
// [1] https://mozilla.github.io/pdf.js/
//user_pref("pdfjs.disabled", false); // DEFAULT

// PREF: allow viewing of PDFs even if the response HTTP headers
// include Content-Disposition:attachment.
//user_pref("browser.helperApps.showOpenOptionForPdfJS", true); // DEFAULT

// PREF: open PDFs inline (FF103+)
user_pref("browser.download.open_pdf_attachments_inline", true);

// PREF: PDF sidebar on load
// 2=table of contents (if not available, will default to 1)
// 1=view pages
// 0=disabled
// -1=remember previous state (default)
//user_pref("pdfjs.sidebarViewOnLoad", 2);

// PREF: default zoom for PDFs [HIDDEN]
// [NOTE] "page-width" not needed if using sidebar on load
//user_pref("pdfjs.defaultZoomValue", page-width);

/****************************************************************************
 * SECTION: TAB BEHAVIOR                                                    *
 ****************************************************************************/

// PREF: search query opens in a new tab (instead of the current tab)
//user_pref("browser.search.openintab", true); // SEARCH BOX
//user_pref("browser.urlbar.openintab", true); // URL BAR

// PREF: control behavior of links that would normally open in a new window
// [NOTE] You can still right-click a link and open in a new window
// 3 (default) = in a new tab; pop-up windows are treated like regular tabs
// 2 = in a new window
// 1 = in the current tab
//user_pref("browser.link.open_newwindow", 3); // DEFAULT

// PREF: determine the behavior of pages opened by JavaScript (like popups)
// 2 (default) = catch new windows opened by JavaScript that do not have
// specific values set (how large the window should be, whether it
// should have a status bar, etc.)
// 1 = let all windows opened by JavaScript open in new windows
// 0 = force all new windows opened by JavaScript into tabs
// [NOTE] Most advertising popups also open in new windows with values set
// [1] https://kb.mozillazine.org/About:config_entries
//user_pref("browser.link.open_newwindow.restriction", 0);

// PREF: override <browser.link.open_newwindow> for external links
// Set if a different destination for external links is needed
// 3=Open in a new tab in the current window
// 2=Open in a new window
// 1=Open in the current tab/window
// -1=no overrides (default)
//user_pref("browser.link.open_newwindow.override.external", -1); // DEFAULT

// PREF: focus behavior for new tabs from links
// Determine whether a link opens in the foreground or background on left-click
// [SETTINGS] Settings>General>Tabs>"When you open a link, image or media in a new tab, switch to it immediately"
// true(default) = opens new tabs by left-click in the background, leaving focus on the current tab
// false = opens new tabs by left-click in the foreground, putting focus on the new tab
// [NOTE] CTRL+SHIFT+CLICK will open new tabs in foreground (default); switching PREF to false will reverse this behavior
// [1] https://kb.mozillazine.org/About:config_entries
//user_pref("browser.tabs.loadInBackground", true); // DEFAULT

// PREF: determines whether pages normally meant to open in a new window (such as
// target="_blank" or from an external program), but that have instead been loaded in a new tab
// This pref takes effect when Firefox has diverted a new window to a new tab instead, then:
// true = loads the new tab in the background, leaving focus on the current tab
// false(default) = loads the new tab in the foreground, taking the focus from the current tab
// [NOTE] Setting this preference to true will still bring the browser to the front when opening links from outside the browser
// [1] https://kb.mozillazine.org/About:config_entries
//user_pref("browser.tabs.loadDivertedInBackground", false); // DEFAULT

// PREF: force bookmarks to open in a new tab, not the current tab
//user_pref("browser.tabs.loadBookmarksInTabs", true);
//user_pref("browser.tabs.loadBookmarksInBackground", true); // load bookmarks in background

// PREF: leave Bookmarks Menu open when selecting a site
user_pref("browser.bookmarks.openInTabClosesMenu", false);

// PREF: restore "View image info" on right-click
user_pref("browser.menu.showViewImageInfo", true);

// PREF: show all matches in Findbar
user_pref("findbar.highlightAll", true);

// PREF: force disable finding text on page without prompting
// [NOTE] Not as powerful as using Ctrl+F.
// [SETTINGS] General>Browsing>"Search for text when you start typing"
// [1] https://github.com/yokoffing/Betterfox/issues/212
//user_pref("accessibility.typeaheadfind", false); // enforce DEFAULT

// PREF: disable middle mouse click opening links from clipboard
// It's been default in Linux since at least FF102.
// [1] https://gitlab.torproject.org/tpo/applications/tor-browser/-/issues/10089
//user_pref("middlemouse.contentLoadURL", false);

// PREF: Prevent scripts from moving and resizing open windows
//user_pref("dom.disable_window_move_resize", true);

// PREF: insert new tabs after groups like it
// true(default) = open new tabs to the right of the parent tab
// false = new tabs are opened at the far right of the tab bar
//user_pref("browser.tabs.insertRelatedAfterCurrent", true); // DEFAULT

// PREF: insert new tabs immediately after the current tab
//user_pref("browser.tabs.insertAfterCurrent", true);

// PREF: leave the browser window open even after you close the last tab
//user_pref("browser.tabs.closeWindowWithLastTab", false);

// PREF: stop websites from reloading pages automatically
// [WARNING] Breaks some sites.
// [1] https://www.ghacks.net/2018/08/19/stop-websites-from-reloading-pages-automatically/
//user_pref("accessibility.blockautorefresh", true);
//user_pref("browser.meta_refresh_when_inactive.disabled", true);

// PREF: do not select the space next to a word when selecting a word
user_pref("layout.word_select.eat_space_to_next_word", false);

// PREF: controls if a double-click word selection also deletes one adjacent whitespace
// This mimics native behavior on macOS.
//user_pref("editor.word_select.delete_space_after_doubleclick_selection", true);

// PREF: do not hide the pointer while typing [LINUX]
//user_pref("widget.gtk.hide-pointer-while-typing.enabled", false);

// PREF: limit events that can cause a pop-up
// Firefox provides an option to provide exceptions for sites, remembered in your Site Settings.
// (default) "change click dblclick auxclick mouseup pointerup notificationclick reset submit touchend contextmenu"
// (alternate) user_pref("dom.popup_allowed_events", "click dblclick mousedown pointerdown");
//user_pref("dom.popup_allowed_events", "click dblclick");
//user_pref("dom.disable_open_during_load", true); // DEFAULT
//user_pref("privacy.popups.showBrowserMessage", true); // DEFAULT

// PREF: enable Tab Previews [FF122+, FF128+]
// [1] https://github.com/yokoffing/Betterfox/issues/309
//user_pref("browser.tabs.hoverPreview.enabled", true);
//user_pref("browser.tabs.hoverPreview.showThumbnails", true); // DEFAULT

/****************************************************************************
 * SECTION: KEYBOARD AND SHORTCUTS                                          *
 ****************************************************************************/

// PREF: disable backspace action
// 0=previous page, 1=scroll up, 2=do nothing
//user_pref("browser.backspace_action", 2); // DEFAULT

// PREF: disable ALT key toggling the menu bar
//user_pref("ui.key.menuAccessKeyFocuses", false);
//user_pref("ui.key.menuAccessKey", 18); // DEFAULT

// PREF: cycle through tabs in recently used order
// [SETTING] Ctrl+Tab cycles through tabs in recently used order
//user_pref("browser.ctrlTab.sortByRecentlyUsed", true);

// PREF: disable websites overriding Firefox's keyboard shortcuts [FF58+]
// 0=ask (default), 1=allow, 2=block
// [SETTING] to add site exceptions: Ctrl+I>Permissions>Override Keyboard Shortcuts ***/
//user_pref("permissions.default.shortcuts", 2);

// PREF: hide frequent sites on right-click of taskbar icon [WINDOWS?]
//user_pref("browser.taskbar.lists.frequent.enabled", false);

/****************************************************************************
 * SECTION: ACCESSIBILITY AND USABILITY                                     *
 ****************************************************************************/

// PREF: disable Reader mode parse on load
// Reader supposedly costs extra CPU after page load.
// [TIP] Use about:reader?url=%s as a keyword to open links automatically in reader mode [1].
// Firefox will not have to parse webpage for Reader when navigating.
// Extremely minimal performance impact, if you disable.
// [1] https://www.reddit.com/r/firefox/comments/621sr2/i_found_out_how_to_automatically_open_a_url_in/
//user_pref("reader.parse-on-load.enabled", false);

// PREF: Spell-check
// 0=none, 1-multi-line, 2=multi-line & single-line
//user_pref("layout.spellcheckDefault", 1); // DEFAULT

// PREF: Spell Checker underline styles [HIDDEN]
// [1] https://kb.mozillazine.org/Ui.SpellCheckerUnderlineStyle#Possible_values_and_their_effects
//user_pref("ui.SpellCheckerUnderlineStyle", 1);

// PREF: remove underlined characters from various settings
//user_pref("ui.key.menuAccessKey", 0);

// PREF: enable CSS moz document rules
// Still needed for Stylus?
// [1] https://reddit.com/r/FirefoxCSS/comments/8x2q97/reenabling_mozdocument_rules_in_firefox_61/
//user_pref("layout.css.moz-document.content.enabled", true);

/****************************************************************************
 * SECTION: BOOKMARK MANAGEMENT                                             *
 ****************************************************************************/

// PREF: limit the number of bookmark backups Firefox keeps
//user_pref("browser.bookmarks.max_backups", 1); // default=15

/****************************************************************************
 * SECTION: ZOOM AND DISPLAY SETTINGS                                       *
 ****************************************************************************/

// PREF: zoom only text on webpage, not other elements
//user_pref("browser.zoom.full", false);

// PREF: allow for more granular control of zoom levels
// Especially useful if you want to set your default zoom to a custom level.
//user_pref("toolkit.zoomManager.zoomValues", ".3,.5,.67,.8,.9,.95,1,1.1,1.2,1.3,1.4,1.5,1.6,1.7,2,2.4,3");

// PREF: restore zooming behavior [macOS] [FF109+]
// On macOS, Ctrl or Cmd + trackpad or mouse wheel now scrolls the page instead of zooming.
// This avoids accidental zooming and matches Safari's and Chrome's behavior.
// The prefs below restores the previous zooming behavior
//user_pref("mousewheel.with_control.action", 3);
//user_pref("mousewheel.with_meta.action", 3);

// PREF: adjust the minimum tab width
// Can be overridden by userChrome.css
//user_pref("browser.tabs.tabMinWidth", 120); // default=76

// PREF: always underline links [FF120+]
//user_pref("layout.css.always_underline_links", false); // DEFAULT

/****************************************************************************
 * SECTION: DEVELOPER TOOLS                                                 *
 ****************************************************************************/

// PREF: wrap long lines of text when using source / debugger
//user_pref("view_source.wrap_long_lines", true);
//user_pref("devtools.debugger.ui.editor-wrapping", true);

// PREF: enable ASRouter Devtools at about:newtab#devtools
// This is useful if you're making your own CSS theme.
// [1] https://firefox-source-docs.mozilla.org/browser/components/newtab/content-src/asrouter/docs/debugging-docs.html
//user_pref("browser.newtabpage.activity-stream.asrouter.devtoolsEnabled", true);

// show user agent styles in the inspector
//user_pref("devtools.inspector.showUserAgentStyles", true);

// show native anonymous content (like scrollbars or tooltips) and user
// agent shadow roots (like the components of an <input> element) in the inspector
//user_pref("devtools.inspector.showAllAnonymousContent", true);

/****************************************************************************
 * SECTION: IMAGE AND MEDIA HANDLING                                        *
 ****************************************************************************/

// PREF: JPEG XL image format [NIGHTLY]
// May not affect anything on ESR/Stable channel [2].
// [TEST] https://www.jpegxl.io/firefox#firefox-jpegxl-tutorial
// [1] https://cloudinary.com/blog/the-case-for-jpeg-xl
// [2] https://bugzilla.mozilla.org/show_bug.cgi?id=1539075#c51
//user_pref("image.jxl.enabled", true);

/****************************************************************************************
 * Fastfox                                                                              *
 * "Non ducor duco"                                                                     *
 * priority: speedy browsing                                                            *
 * version: 133                                                                         *
 * url: https://github.com/yokoffing/Betterfox                                          *
 ***************************************************************************************/

/****************************************************************************
 * SECTION: GENERAL                                                        *
 ****************************************************************************/

// PREF: initial paint delay
// How long FF will wait before rendering the page (in ms)
// [NOTE] You may prefer using 250.
// [NOTE] Dark Reader users may want to use 1000 [3].
// [1] https://bugzilla.mozilla.org/show_bug.cgi?id=1283302
// [2] https://docs.google.com/document/d/1BvCoZzk2_rNZx3u9ESPoFjSADRI0zIPeJRXFLwWXx_4/edit#heading=h.28ki6m8dg30z
// [3] https://old.reddit.com/r/firefox/comments/o0xl1q/reducing_cpu_usage_of_dark_reader_extension/
// [4] https://reddit.com/r/browsers/s/wvNB7UVCpx
//user_pref("nglayout.initialpaint.delay", 5); // DEFAULT; formerly 250
//user_pref("nglayout.initialpaint.delay_in_oopif", 5); // DEFAULT

// PREF: page reflow timer
// Rather than wait until a page has completely downloaded to display it to the user,
// web browsers will periodically render what has been received to that point.
// Because reflowing the page every time additional data is received slows down
// total page load time, a timer was added so that the page would not reflow too often.
// This preference specfies whether that timer is active.
// [1] https://kb.mozillazine.org/Content.notify.ontimer
// true = do not reflow pages at an interval any higher than that specified by content.notify.interval (default)
// false = reflow pages whenever new data is received
//user_pref("content.notify.ontimer", true); // DEFAULT

// PREF: notification interval (in microseconds) to avoid layout thrashing
// When Firefox is loading a page, it periodically reformats
// or "reflows" the page as it loads. The page displays new elements
// every 0.12 seconds by default. These redraws increase the total page load time.
// The default value provides good incremental display of content
// without causing an increase in page load time.
// [NOTE] Lowering the interval will increase responsiveness
// but also increase the total load time.
// [WARNING] If this value is set below 1/10 of a second, it starts
// to impact page load performance.
// [EXAMPLE] 100000 = .10s = 100 reflows/second
// [1] https://searchfox.org/mozilla-central/rev/c1180ea13e73eb985a49b15c0d90e977a1aa919c/modules/libpref/init/StaticPrefList.yaml#1824-1834
// [2] https://web.archive.org/web/20240115073722/https://dev.opera.com/articles/efficient-javascript/?page=3#reflow
// [3] https://web.archive.org/web/20240115073722/https://dev.opera.com/articles/efficient-javascript/?page=3#smoothspeed
user_pref("content.notify.interval", 100000); // (.10s); default=120000 (.12s)

// PREF: new tab preload
// [WARNING] Disabling this may cause a delay when opening a new tab in Firefox.
// [1] https://wiki.mozilla.org/Tiles/Technical_Documentation#Ping
// [2] https://github.com/arkenfox/user.js/issues/1556
//user_pref("browser.newtab.preload", true); // DEFAULT

// PREF: disable EcoQoS [WINDOWS]
// Background tab processes use efficiency mode on Windows 11 to limit resource use.
// [WARNING] Leave this alone, unless you're on Desktop and you rely on
// background tabs to have maximum performance.
// [1] https://devblogs.microsoft.com/performance-diagnostics/introducing-ecoqos/
// [2] https://bugzilla.mozilla.org/show_bug.cgi?id=1796525
// [3] https://bugzilla.mozilla.org/show_bug.cgi?id=1800412
// [4] https://reddit.com/r/firefox/comments/107fj69/how_can_i_disable_the_efficiency_mode_on_firefox/
//user_pref("dom.ipc.processPriorityManager.backgroundUsesEcoQoS", false);

// PREF: control how tabs are loaded when a session is restored
// true=Tabs are not loaded until they are selected (default)
// false=Tabs begin to load immediately.
//user_pref("browser.sessionstore.restore_on_demand", true); // DEFAULT
//user_pref("browser.sessionstore.restore_pinned_tabs_on_demand", true);
//user_pref("browser.sessionstore.restore_tabs_lazily", true); // DEFAULT

// PREF: disable preSkeletonUI on startup [WINDOWS]
//user_pref("browser.startup.preXulSkeletonUI", false);

// PREF: lazy load iframes
//user_pref("dom.iframe_lazy_loading.enabled", true); // DEFAULT [FF121+]

/****************************************************************************
 * SECTION: GFX RENDERING TWEAKS                                            *
 ****************************************************************************/

// PREF: Webrender tweaks
// [1] https://searchfox.org/mozilla-central/rev/6e6332bbd3dd6926acce3ce6d32664eab4f837e5/modules/libpref/init/StaticPrefList.yaml#6202-6219
// [2] https://hacks.mozilla.org/2017/10/the-whole-web-at-maximum-fps-how-webrender-gets-rid-of-jank/
// [3] https://www.reddit.com/r/firefox/comments/tbphok/is_setting_gfxwebrenderprecacheshaders_to_true/i0bxs2r/
// [4] https://www.reddit.com/r/firefox/comments/z5auzi/comment/ixw65gb?context=3
// [5] https://gist.github.com/RubenKelevra/fd66c2f856d703260ecdf0379c4f59db?permalink_comment_id=4532937#gistcomment-4532937
//user_pref("gfx.webrender.all", true); // enables WR + additional features
//user_pref("gfx.webrender.precache-shaders", true); // longer initial startup time
//user_pref("gfx.webrender.compositor", true); // DEFAULT WINDOWS macOS
//user_pref("gfx.webrender.compositor.force-enabled", true); // enforce

// PREF: if your hardware doesn't support Webrender, you can fallback to Webrender's software renderer
// [1] https://www.ghacks.net/2020/12/14/how-to-find-out-if-webrender-is-enabled-in-firefox-and-how-to-enable-it-if-it-is-not/
//user_pref("gfx.webrender.software", true); // Software Webrender uses CPU instead of GPU
//user_pref("gfx.webrender.software.opengl", true); // LINUX

// PREF: GPU-accelerated Canvas2D
// Uses Accelerated Canvas2D for hardware acceleration of Canvas2D.
// This provides a consistent acceleration architecture across all platforms
// by utilizing WebGL instead of relying upon Direct2D.
// [WARNING] May cause issues on some Windows machines using integrated GPUs [2] [3]
// Add to your overrides if you have a dedicated GPU.
// [NOTE] Higher values will use more memory.
// [1] https://bugzilla.mozilla.org/show_bug.cgi?id=1741501
// [2] https://github.com/yokoffing/Betterfox/issues/153
// [3] https://github.com/yokoffing/Betterfox/issues/198
//user_pref("gfx.canvas.accelerated", true); // [DEFAULT FF133+]
user_pref("gfx.canvas.accelerated.cache-items", 4096); // default=2048; Chrome=4096
user_pref("gfx.canvas.accelerated.cache-size", 512); // default=256; Chrome=512
user_pref("gfx.content.skia-font-cache-size", 20); // default=5; Chrome=20
// [1] https://bugzilla.mozilla.org/show_bug.cgi?id=1239151#c2

// PREF: prefer GPU over CPU
// At best, the prefs do nothing on Linux/macOS.
// At worst, it'll result in crashes if the sandboxing is a WIP.
// [1] https://firefox-source-docs.mozilla.org/dom/ipc/process_model.html#gpu-process
//user_pref("layers.gpu-process.enabled", true); // DEFAULT WINDOWS
//user_pref("layers.gpu-process.force-enabled", true); // enforce
//user_pref("layers.mlgpu.enabled", true); // LINUX
//user_pref("media.hardware-video-decoding.enabled", true); // DEFAULT WINDOWS macOS
//user_pref("media.hardware-video-decoding.force-enabled", true); // enforce
//user_pref("media.gpu-process-decoder", true); // DEFAULT WINDOWS
//user_pref("media.ffmpeg.vaapi.enabled", true); // LINUX

// PREF: hardware and software decoded video overlay [FF116+]
// [1] https://bugzilla.mozilla.org/show_bug.cgi?id=1829063
// [2] https://phabricator.services.mozilla.com/D175993
//user_pref("gfx.webrender.dcomp-video-hw-overlay-win", true); // DEFAULT
//user_pref("gfx.webrender.dcomp-video-hw-overlay-win-force-enabled", true); // enforce
//user_pref("gfx.webrender.dcomp-video-sw-overlay-win", true); // DEFAULT
//user_pref("gfx.webrender.dcomp-video-sw-overlay-win-force-enabled", true); // enforce

/****************************************************************************
 * SECTION: DISK CACHE                                                     *
 ****************************************************************************/

// PREF: disk cache
// [NOTE] If you think it helps performance, then feel free to override this.
// [SETTINGS] See about:cache
// More efficient to keep the browser cache instead of having to
// re-download objects for the websites you visit frequently.
// [1] https://www.janbambas.cz/new-firefox-http-cache-enabled/
user_pref("browser.cache.disk.enable", true);

// PREF: disk cache size
// [1] https://bugzilla.mozilla.org/buglist.cgi?bug_id=913808,968106,968101
// [2] https://rockridge.hatenablog.com/entry/2014/09/15/165501
// [3] https://www.reddit.com/r/firefox/comments/17oqhw3/firefox_and_ssd_disk_consumption/
//user_pref("browser.cache.disk.smart_size.enabled", false); // force a fixed max cache size on disk
//user_pref("browser.cache.disk.capacity", 512000); // default=256000; size of disk cache; 1024000=1GB, 2048000=2GB
//user_pref("browser.cache.disk.max_entry_size", 51200); // DEFAULT (50 MB); maximum size of an object in disk cache

// PREF: Race Cache With Network (RCWN) [FF59+]
// [ABOUT] about:networking#rcwn
// Firefox concurrently sends requests for cached resources to both the
// local disk cache and the network server. The browser uses whichever
// result arrives first and cancels the other request. This approach sometimes
// loads pages faster because the network can be quicker than accessing the cache
// on a hard drive. When RCWN is enabled, the request might be served from
// the server even if you have valid entry in the cache. Set to false if your
// intention is to increase cache usage and reduce network usage.
// [1] https://slides.com/valentingosu/race-cache-with-network-2017
// [2] https://simonhearne.com/2020/network-faster-than-cache/
// [3] https://support.mozilla.org/en-US/questions/1267945
// [4] https://askubuntu.com/questions/1214862/36-syns-in-a-row-how-to-limit-firefox-connections-to-one-website
// [5] https://bugzilla.mozilla.org/show_bug.cgi?id=1622859
// [6] https://soylentnews.org/comments.pl?noupdate=1&sid=40195&page=1&cid=1067867#commentwrap
//user_pref("network.http.rcwn.enabled", false);

// PREF: attempt to RCWN only if a resource is smaller than this size
//user_pref("network.http.rcwn.small_resource_size_kb", 256); // DEFAULT

// PREF: cache memory pool
// Cache v2 provides a memory pool that stores metadata (such as response headers)
// for recently read cache entries [1]. It is managed by a cache thread, and caches with
// metadata in the pool appear to be reused immediately.
// [1] https://bugzilla.mozilla.org/buglist.cgi?bug_id=986179
//user_pref("browser.cache.disk.metadata_memory_limit", 500); // default=250 (0.25 MB); limit of recent metadata we keep in memory for faster access

// PREF: number of chunks we preload ahead of read
// Large content such as images will load faster.
// [1] https://bugzilla.mozilla.org/buglist.cgi?bug_id=913819,988318
// [2] http://www.janbambas.cz/new-firefox-http-cache-enabled/
//user_pref("browser.cache.disk.preload_chunk_count", 4); // DEFAULT

// PREF: the time period used to re-compute the frecency value of cache entries
// The frequency algorithm is used to select entries, and entries that are recently
// saved or frequently reused are retained. The frecency value determines how
// frequently a page has been accessed and is used by Firefox's cache algorithm.
// The frequency algorithm is used to select entries, and entries that are recently
// saved or frequently reused are retained. The frecency value determines how
// often a page has been accessed and is used by Firefox's cache algorithm.
// When the memory pool becomes full, the oldest data is purged. By default,
// data older than 6 hours is treated as old.
// [1] https://bugzilla.mozilla.org/buglist.cgi?bug_id=942835,1012327
// [2] https://bugzilla.mozilla.org/buglist.cgi?bug_id=913808,968101
//user_pref("browser.cache.frecency_half_life_hours", 6); // DEFAULT

// PREF: memory limit (in kB) for new cache data not yet written to disk
// Writes to the cache are buffered and written to disk on background with low priority.
// With a slow persistent storage, these buffers may grow when data is coming
// fast from the network. When the amount of unwritten data is exceeded, new
// writes will simply fail. We have two buckets, one for important data
// (priority) like html, css, fonts and js, and one for other data like images, video, etc.
//user_pref("browser.cache.disk.max_chunks_memory_usage", 40960); // DEFAULT (40 MB)
//user_pref("browser.cache.disk.max_priority_chunks_memory_usage", 40960); // DEFAULT (40 MB)

// PREF: how often to validate document in cache
// 0 = once-per-session
// 1 = each-time
// 2 = never
// 3 = when-appropriate/automatically (default)
//user_pref("browser.cache.check_doc_frequency", 3); // DEFAULT

// PREF: enforce free space checks
// When smartsizing is disabled, we could potentially fill all disk space by
// cache data when the disk capacity is not set correctly. To avoid that, we
// check the free space every time we write some data to the cache. The free
// space is checked against two limits. Once the soft limit is reached we start
// evicting the least useful entries, when we reach the hard limit writing to
// the entry fails.
//user_pref("browser.cache.disk.free_space_soft_limit", 10240); // default=5120 (5 MB)
//user_pref("browser.cache.disk.free_space_hard_limit", 2048); // default=1024 (1 MB)

// PREF: compression level for cached JavaScript bytecode [FF102+]
// [1] https://github.com/yokoffing/Betterfox/issues/247
// 0 = do not compress (default)
// 1 = minimal compression
// 9 = maximal compression
//user_pref("browser.cache.jsbc_compression_level", 3);

// PREF: strategy to use for when the bytecode should be encoded and saved [TESTING ONLY]
// -1 makes page load times marginally longer when a page is being loaded for the first time, while
// subsequent reload of websites will be much much faster.
// 0 means that the bytecode is created every 4 page loads [3].
// [1] https://searchfox.org/mozilla-release/source/modules/libpref/init/StaticPrefList.yaml#3461-3488
// [2] https://www.reddit.com/r/firefox/comments/12786yv/improving_performance_in_firefox_android_part_ii/
// [3] https://github.com/zen-browser/desktop/issues/217
// -1 = saved as soon as the script is seen for the first time, independently of the size or last access time
// 0 = saved in order to minimize the page-load time (default)
//user_pref("dom.script_loader.bytecode_cache.enabled", true); // DEFAULT
//user_pref("dom.script_loader.bytecode_cache.strategy", 0); // DEFAULT

/****************************************************************************
 * SECTION: MEMORY CACHE                                                   *
 ****************************************************************************/

// PREF: memory cache
// The "automatic" size selection (default) is based on a decade-old table
// that only contains settings for systems at or below 8GB of system memory [1].
// Waterfox G6 allows it to go above 8GB machines [3].
// Value can be up to the max size of an unsigned 64-bit integer.
// -1=Automatically decide the maximum memory to use to cache decoded images,
// messages, and chrome based on the total amount of RAM
// [1] https://kb.mozillazine.org/Browser.cache.memory.capacity#-1
// [2] https://searchfox.org/mozilla-central/source/netwerk/cache2/CacheObserver.cpp#94-125
// [3] https://github.com/WaterfoxCo/Waterfox/commit/3fed16932c80a2f6b37d126fe10aed66c7f1c214
//user_pref("browser.cache.memory.capacity", -1); // DEFAULT; 256000=256 MB; 512000=500 MB; 1048576=1GB, 2097152=2GB
//user_pref("browser.cache.memory.max_entry_size", 10240); // (10 MB); default=5120 (5 MB)

// PREF: amount of Back/Forward cached pages stored in memory for each tab
// Pages that were recently visited are stored in memory in such a way
// that they don't have to be re-parsed. This improves performance
// when pressing Back and Forward. This pref limits the maximum
// number of pages stored in memory. If you are not using the Back
// and Forward buttons that much, but rather using tabs, then there
// is no reason for Firefox to keep memory for this.
// -1=determine automatically (8 pages)
// [1] https://kb.mozillazine.org/Browser.sessionhistory.max_total_viewers#Possible_values_and_their_effects
//user_pref("browser.sessionhistory.max_total_viewers", 4);

/****************************************************************************
 * SECTION: MEDIA CACHE                                                     *
 ****************************************************************************/

// PREF: media disk cache
//user_pref("media.cache_size", 512000); // DEFAULT

// PREF: media memory cache
// [1] https://hg.mozilla.org/mozilla-central/file/tip/modules/libpref/init/StaticPrefList.yaml#l9652
// [2] https://github.com/arkenfox/user.js/pull/941
user_pref("media.memory_cache_max_size", 65536); // default=8192; AF=65536; alt=131072

// PREF: media cache combine sizes
//user_pref("media.memory_caches_combined_limit_kb", 524288); // DEFAULT; alt=1048576
//user_pref("media.memory_caches_combined_limit_pc_sysmem", 5); // DEFAULT; alt=10; the percentage of system memory that Firefox can use for media caches

// PREF: Media Source Extensions (MSE) web standard
// Disabling MSE allows videos to fully buffer, but you're limited to 720p.
// [WARNING] Disabling MSE may break certain videos.
// false=Firefox plays the old WebM format
// true=Firefox plays the new WebM format (default)
// [1] https://support.mozilla.org/en-US/questions/1008271
//user_pref("media.mediasource.enabled", true); // DEFAULT

// PREF: adjust video buffering periods when not using MSE (in seconds)
// [NOTE] Does not affect videos over 720p since they use DASH playback [1]
// [1] https://lifehacker.com/preload-entire-youtube-videos-by-disabling-dash-playbac-1186454034
user_pref("media.cache_readahead_limit", 7200); // 120 min; default=60; stop reading ahead when our buffered data is this many seconds ahead of the current playback
user_pref("media.cache_resume_threshold", 3600); // 60 min; default=30; when a network connection is suspended, don't resume it until the amount of buffered data falls below this threshold

/****************************************************************************
 * SECTION: IMAGE CACHE                                                     *
 ****************************************************************************/

// PREF: image cache
//user_pref("image.cache.size", 5242880); // DEFAULT; in MiB; alt=10485760 (cache images up to 10MiB in size)
user_pref("image.mem.decode_bytes_at_a_time", 32768); // default=16384; alt=65536; chunk size for calls to the image decoders

// PREF: set minimum timeout to unmap shared surfaces since they have been last used
// This is only used on 32-bit builds of Firefox where there is meaningful
// virtual address space pressure.
// [1] https://phabricator.services.mozilla.com/D109440
// [2] https://bugzilla.mozilla.org/show_bug.cgi?id=1699224
//user_pref("image.mem.shared.unmap.min_expiration_ms", 120000); // default=60000; minimum timeout to unmap shared surfaces since they have been last used

/****************************************************************************
 * SECTION: NETWORK                                                         *
 ****************************************************************************/

// PREF: use bigger packets
// [WARNING] Cannot open HTML files bigger than 4MB if changed [2].
// Reduce Firefox's CPU usage by requiring fewer application-to-driver data transfers.
// However, it does not affect the actual packet sizes transmitted over the network.
// [1] https://www.mail-archive.com/support-seamonkey@lists.mozilla.org/msg74561.html
// [2] https://github.com/yokoffing/Betterfox/issues/279
//user_pref("network.buffer.cache.size", 262144); // 256 kb; default=32768 (32 kb)
//user_pref("network.buffer.cache.count", 128); // default=24

// PREF: increase the absolute number of HTTP connections
// [1] https://kb.mozillazine.org/Network.http.max-connections
// [2] https://kb.mozillazine.org/Network.http.max-persistent-connections-per-server
// [3] https://www.reddit.com/r/firefox/comments/11m2yuh/how_do_i_make_firefox_use_more_of_my_900_megabit/jbfmru6/
user_pref("network.http.max-connections", 1800); // default=900
user_pref("network.http.max-persistent-connections-per-server", 10); // default=6; download connections; anything above 10 is excessive
user_pref("network.http.max-urgent-start-excessive-connections-per-host", 5); // default=3
//user_pref("network.http.max-persistent-connections-per-proxy", 48); // default=32
//user_pref("network.websocket.max-connections", 200); // DEFAULT

// PREF: pacing requests [FF23+]
// Controls how many HTTP requests are sent at a time.
// Pacing HTTP requests can have some benefits, such as reducing network congestion,
// improving web page loading speed, and avoiding server overload.
// Pacing requests adds a slight delay between requests to throttle them.
// If you have a fast machine and internet connection, disabling pacing
// may provide a small speed boost when loading pages with lots of requests.
// false=Firefox will send as many requests as possible without pacing
// true=Firefox will pace requests (default)
user_pref("network.http.pacing.requests.enabled", false);
//user_pref("network.http.pacing.requests.min-parallelism", 10); // default=6
//user_pref("network.http.pacing.requests.burst", 14); // default=10

// PREF: increase DNS cache
// [1] https://developer.mozilla.org/en-US/docs/Web/Performance/Understanding_latency
//user_pref("network.dnsCacheEntries", 1000); // default=400

// PREF: adjust DNS expiration time
// [ABOUT] about:networking#dns
// [NOTE] These prefs will be ignored by DNS resolver if using DoH/TRR.
user_pref("network.dnsCacheExpiration", 3600); // keep entries for 1 hour
//user_pref("network.dnsCacheExpirationGracePeriod", 240); // default=60; cache DNS entries for 4 minutes after they expire

// PREF: the number of threads for DNS
//user_pref("network.dns.max_high_priority_threads", 40); // DEFAULT [FF 123?]
//user_pref("network.dns.max_any_priority_threads", 24); // DEFAULT [FF 123?]

// PREF: increase TLS token caching
user_pref("network.ssl_tokens_cache_capacity", 10240); // default=2048; more TLS token caching (fast reconnects)

/****************************************************************************
 * SECTION: SPECULATIVE LOADING                                            *
 ****************************************************************************/

// These are connections that are not explicitly asked for (e.g., clicked on).
// [1] https://developer.mozilla.org/en-US/docs/Web/Performance/Speculative_loading

// [NOTE] FF85+ partitions (isolates) pooled connections, prefetch connections,
// pre-connect connections, speculative connections, TLS session identifiers,
// and other connections. We can take advantage of the speed of pre-connections
// while preserving privacy. Users may relax hardening to maximize their preference.
// For more information, see SecureFox: "PREF: State Paritioning" and "PREF: Network Partitioning".
// [NOTE] To activate and increase network predictions, go to settings in uBlock Origin and uncheck:
// - "Disable pre-fetching (to prevent any connection for blocked network requests)"
// [NOTE] Add prefs to "MY OVERRIDES" section and uncomment to enable them in your user.js.

// PREF: link-mouseover opening connection to linked server
// When accessing content online, devices use sockets as endpoints.
// The global limit on half-open sockets controls how many speculative
// connection attempts can occur at once when starting new connections [3].
// If the user follows through, pages can load faster since some
// work was done in advance. Firefox opens predictive connections
// to sites when hovering over New Tab thumbnails or starting a
// URL Bar search [1] and hyperlinks within a page [2].
// [NOTE] DNS (if enabled), TCP, and SSL handshakes are set up in advance,
// but page contents are not downloaded until a click on the link is registered.
// [1] https://support.mozilla.org/en-US/kb/how-stop-firefox-making-automatic-connections?redirectslug=how-stop-firefox-automatically-making-connections&redirectlocale=en-US#:~:text=Speculative%20pre%2Dconnections
// [2] https://news.slashdot.org/story/15/08/14/2321202/how-to-quash-firefoxs-silent-requests
// [3] https://searchfox.org/mozilla-central/rev/028c68d5f32df54bca4cf96376f79e48dfafdf08/modules/libpref/init/all.js#1280-1282
// [4] https://www.keycdn.com/blog/resource-hints#prefetch
// [5] https://3perf.com/blog/link-rels/#prefetch
//user_pref("network.http.speculative-parallel-limit", 20); // DEFAULT (FF127+?)

// PREF: DNS prefetching for HTMLLinkElement <link rel="dns-prefetch">
// Used for cross-origin connections to provide small performance improvements.
// You can enable rel=dns-prefetch for the HTTPS document without prefetching
// DNS for anchors, whereas the latter makes more specualtive requests [5].
// [1] https://bitsup.blogspot.com/2008/11/dns-prefetching-for-firefox.html
// [2] https://css-tricks.com/prefetching-preloading-prebrowsing/#dns-prefetching
// [3] https://www.keycdn.com/blog/resource-hints#2-dns-prefetching
// [4] http://www.mecs-press.org/ijieeb/ijieeb-v7-n5/IJIEEB-V7-N5-2.pdf
// [5] https://bugzilla.mozilla.org/show_bug.cgi?id=1596935#c28
user_pref("network.dns.disablePrefetch", true);
user_pref("network.dns.disablePrefetchFromHTTPS", true); // [FF127+ false]

// PREF:  DNS prefetch for HTMLAnchorElement (speculative DNS)
// Disable speculative DNS calls to prevent Firefox from resolving
// hostnames for other domains linked on a page. This may eliminate
// unnecessary DNS lookups, but can increase latency when following external links.
// [1] https://bugzilla.mozilla.org/show_bug.cgi?id=1596935#c28
// [2] https://github.com/arkenfox/user.js/issues/1870#issuecomment-2220773972
//user_pref("dom.prefetch_dns_for_anchor_http_document", false); // [FF128+]
//user_pref("dom.prefetch_dns_for_anchor_https_document", false); // DEFAULT [FF128+]

// PREF: enable <link rel="preconnect"> tag and Link: rel=preconnect response header handling
//user_pref("network.preconnect", true); // DEFAULT

// PREF: preconnect to the autocomplete URL in the address bar
// Whether to warm up network connections for autofill or search results.
// Firefox preloads URLs that autocomplete when a user types into the address bar.
// Connects to destination server ahead of time, to avoid TCP handshake latency.
// [NOTE] Firefox will perform DNS lookup (if enabled) and TCP and TLS handshake,
// but will not start sending or receiving HTTP data.
// [1] https://www.ghacks.net/2017/07/24/disable-preloading-firefox-autocomplete-urls/
//user_pref("browser.urlbar.speculativeConnect.enabled", false);

// PREF: mousedown speculative connections on bookmarks and history [FF98+]
// Whether to warm up network connections for places:menus and places:toolbar.
//user_pref("browser.places.speculativeConnect.enabled", false);

// PREF: network module preload <link rel="modulepreload"> [FF115+]
// High-priority loading of current page JavaScript modules.
// Used to preload high-priority JavaScript modules for strategic performance improvements.
// Module preloading allows developers to fetch JavaScript modules and dependencies
// earlier to accelerate page loads. The browser downloads, parses, and compiles modules
// referenced by links with this attribute in parallel with other resources, rather
// than sequentially waiting to process each. Preloading reduces overall download times.
// Browsers may also automatically preload dependencies without firing extra events.
// Unlike other pre-connection tags (except rel=preload), this tag is mandatory for the browser.
// [1] https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel/modulepreload
//user_pref("network.modulepreload", true); // DEFAULT

// PREF: link prefetching <link rel="prefetch">
// Pre-populates the HTTP cache by prefetching same-site future navigation
// resources or subresources used on those pages.
// Enabling link prefetching allows Firefox to preload pages tagged as important.
// The browser prefetches links with the prefetch-link tag, fetching resources
// likely needed for the next navigation at low priority. When clicking a link
// or loading a new page, prefetching stops and discards hints. Prefetching
// downloads resources without executing them.
// [NOTE] Since link prefetch uses the HTTP cache, it has a number of issues
// with document prefetches, such as being potentially blocked by Cache-Control headers
// (e.g. cache partitioning).
// [1] https://developer.mozilla.org/en-US/docs/Glossary/Prefetch
// [2] http://www.mecs-press.org/ijieeb/ijieeb-v7-n5/IJIEEB-V7-N5-2.pdf
// [3] https://timkadlec.com/remembers/2020-06-17-prefetching-at-this-age/
// [4] https://3perf.com/blog/link-rels/#prefetch
// [5] https://developer.mozilla.org/docs/Web/HTTP/Link_prefetching_FAQ
user_pref("network.prefetch-next", false);

// PREF: Fetch Priority API [FF119+]
// Indicates whether the `fetchpriority` attribute for elements which support it.
// [1] https://web.dev/articles/fetch-priority
// [2] https://nitropack.io/blog/post/priority-hints
// [2] https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/fetchPriority
// [3] https://developer.mozilla.org/en-US/docs/Web/API/HTMLLinkElement/fetchPriority
//user_pref("network.fetchpriority.enabled", true);

// PREF: early hints [FF120+]
// [1] https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/103
// [2] https://developer.chrome.com/blog/early-hints/
// [3] https://blog.cloudflare.com/early-hints/
// [4] https://blog.cloudflare.com/early-hints-performance/
//user_pref("network.early-hints.enabled", true);

// PREF: `Link: rel=preconnect` in 103 Early Hint response [FF120+]
// Used to warm most critical cross-origin connections to provide
// performance improvements when connecting to them.
// [NOTE] When 0, this is limited by "network.http.speculative-parallel-limit".
//user_pref("network.early-hints.preconnect.enabled", true);
//user_pref("network.early-hints.preconnect.max_connections", 10); // DEFAULT

// PREF: Network Predictor (NP)
// When enabled, it trains and uses Firefox's algorithm to preload page resource
// by tracking past page resources. It uses a local file (history) of needed images,
// scripts, etc. to request them preemptively when navigating.
// [NOTE] By default, it only preconnects, doing DNS, TCP, and SSL handshakes.
// No data sends until clicking. With "network.predictor.enable-prefetch" enabled,
// it also performs prefetches.
// [1] https://wiki.mozilla.org/Privacy/Reviews/Necko
// [2] https://www.ghacks.net/2014/05/11/seer-disable-firefox/
// [3] https://github.com/dillbyrne/random-agent-spoofer/issues/238#issuecomment-110214518
// [4] https://www.igvita.com/posa/high-performance-networking-in-google-chrome/#predictor
user_pref("network.predictor.enabled", false);

// PREF: Network Predictor fetch for resources ahead of time
// Prefetch page resources based on past user behavior.
//user_pref("network.predictor.enable-prefetch", false); // DEFAULT

// PREF: make Network Predictor active when hovering over links
// When hovering over links, Network Predictor uses past resource history to
// preemptively request what will likely be needed instead of waiting for the document.
// Predictive connections automatically open when hovering over links to speed up
// loading, starting some work in advance.
//user_pref("network.predictor.enable-hover-on-ssl", false); // DEFAULT

// PREF: assign Network Predictor confidence levels
// [NOTE] Keep in mind that Network Predictor must LEARN your browsing habits.
// Editing these lower will cause more speculative connections to occur,
// which reduces accuracy over time and has privacy implications.
//user_pref("network.predictor.preresolve-min-confidence", 60); // DEFAULT
//user_pref("network.predictor.preconnect-min-confidence", 90); // DEFAULT
//user_pref("network.predictor.prefetch-min-confidence", 100); // DEFAULT

// PREF: other Network Predictor values
// [NOTE] Keep in mmind that Network Predictor must LEARN your browsing habits.
//user_pref("network.predictor.prefetch-force-valid-for", 10); // DEFAULT; how long prefetched resources are considered valid and usable (in seconds) for the prediction modeling
//user_pref("network.predictor.prefetch-rolling-load-count", 10); // DEFAULT; the maximum number of resources that Firefox will prefetch in memory at one time based on prediction modeling
//user_pref("network.predictor.max-resources-per-entry", 250); // default=100
//user_pref("network.predictor.max-uri-length", 1000); // default=500

/****************************************************************************
 * SECTION: EXPERIMENTAL                                                    *
 ****************************************************************************/

// PREF: CSS Masonry Layout [NIGHTLY]
// [1] https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Masonry_Layout
// [2] https://www.smashingmagazine.com/native-css-masonry-layout-css-grid/
user_pref("layout.css.grid-template-masonry-value.enabled", true);

// PREF: Prioritized Task Scheduling API [NIGHTLY]
// [1] https://blog.mozilla.org/performance/2022/06/02/prioritized-task-scheduling-api-is-prototyped-in-nightly/
// [2] https://medium.com/airbnb-engineering/building-a-faster-web-experience-with-the-posttask-scheduler-276b83454e91
// [3] https://github.com/WICG/scheduling-apis/blob/main/explainers/prioritized-post-task.md
// [4] https://wicg.github.io/scheduling-apis/
// [5] https://caniuse.com/mdn-api_taskcontroller
user_pref("dom.enable_web_task_scheduling", true);

/****************************************************************************
 * SECTION: TAB UNLOAD                                                      *
 ****************************************************************************/

// PREF: unload tabs on low memory
// [ABOUT] about:unloads
// Firefox will detect if your computer’s memory is running low (less than 200MB)
// and suspend tabs that you have not used in awhile.
// [1] https://support.mozilla.org/en-US/kb/unload-inactive-tabs-save-system-memory-firefox
// [2] https://hacks.mozilla.org/2021/10/tab-unloading-in-firefox-93/
//user_pref("browser.tabs.unloadOnLowMemory", true); // DEFAULT

// PREF: determine when tabs unload [WINDOWS] [LINUX]
// Notify TabUnloader or send the memory pressure if the memory resource
// notification is signaled AND the available commit space is lower than
// this value (in MiB).
// Set this to some value, e.g. 4/5 of total memory available on your system:
// 4GB=3276, 8GB=6553, 16GB=13107, 32GB=25698, 64GB=52429
// [1] https://dev.to/msugakov/taking-firefox-memory-usage-under-control-on-linux-4b02
//user_pref("browser.low_commit_space_threshold_mb", 3276); // default=200; WINDOWS LINUX

// PREF: determine when tabs unload [LINUX]
// On Linux, Firefox checks available memory in comparison to total memory,
// and use this percent value (out of 100) to determine if Firefox is in a
// low memory scenario.
// [1] https://dev.to/msugakov/taking-firefox-memory-usage-under-control-on-linux-4b02
//user_pref("browser.low_commit_space_threshold_percent", 20); // default=5; LINUX

// PREF: determine how long (in ms) tabs are inactive before they unload
// 60000=1min; 300000=5min; 600000=10min (default)
//user_pref("browser.tabs.min_inactive_duration_before_unload", 300000); // 5min; default=600000

/****************************************************************************
 * SECTION: PROCESS COUNT                                                  *
 ****************************************************************************/

// PREF: process count
// [ABOUT] View in about:processes.
// With Firefox Quantum (2017), CPU cores = processCount. However, since the
// introduction of Fission [2], the number of website processes is controlled
// by processCount.webIsolated. Disabling fission.autostart or changing
// fission.webContentIsolationStrategy reverts control back to processCount.
// [1] https://www.reddit.com/r/firefox/comments/r69j52/firefox_content_process_limit_is_gone/
// [2] https://firefox-source-docs.mozilla.org/dom/ipc/process_model.html#web-content-processes
//user_pref("dom.ipc.processCount", 8); // DEFAULT; Shared Web Content
//user_pref("dom.ipc.processCount.webIsolated", 1); // default=4; Isolated Web Content

// PREF: use one process for process preallocation cache
//user_pref("dom.ipc.processPrelaunch.fission.number", 1); // default=3; Process Preallocation Cache

// PREF: configure process isolation
// [1] https://hg.mozilla.org/mozilla-central/file/tip/dom/ipc/ProcessIsolation.cpp#l53
// [2] https://www.reddit.com/r/firefox/comments/r69j52/firefox_content_process_limit_is_gone/

// OPTION 1: isolate all websites
// Web content is always isolated into its own `webIsolated` content process
// based on site-origin, and will only load in a shared `web` content process
// if site-origin could not be determined.
//user_pref("fission.webContentIsolationStrategy", 1); // DEFAULT
//user_pref("browser.preferences.defaultPerformanceSettings.enabled", true); // DEFAULT
//user_pref("dom.ipc.processCount.webIsolated", 1); // one process per site origin

// OPTION 2: isolate only "high value" websites
// Only isolates web content loaded by sites which are considered "high
// value". A site is considered high value if it has been granted a
// `highValue*` permission by the permission manager, which is done in
// response to certain actions.
//user_pref("fission.webContentIsolationStrategy", 2);
//user_pref("browser.preferences.defaultPerformanceSettings.enabled", false);
//user_pref("dom.ipc.processCount.webIsolated", 1); // one process per site origin (high value)
//user_pref("dom.ipc.processCount", 8); // determine by number of CPU cores/processors

// OPTION 3: do not isolate websites
// All web content is loaded into a shared `web` content process. This is
// similar to the non-Fission behavior; however, remote subframes may still
// be used for sites with special isolation behavior, such as extension or
// mozillaweb content processes.
//user_pref("fission.webContentIsolationStrategy", 0);
//user_pref("browser.preferences.defaultPerformanceSettings.enabled", false);
//user_pref("dom.ipc.processCount", 8); // determine by number of CPU cores/processors

/****************************************************************************************
 * Smoothfox                                                                            *
 * "Faber est suae quisque fortunae"                                                    *
 * priority: better scrolling                                                           *
 * version: 126.1                                                                       *
 * url: https://github.com/yokoffing/Betterfox                                          *
 ***************************************************************************************/

/****************************************************************************************
 * OPTION: NATURAL SMOOTH SCROLLING V3 [MODIFIED]                                      *
****************************************************************************************/
// credit: https://github.com/AveYo/fox/blob/cf56d1194f4e5958169f9cf335cd175daa48d349/Natural%20Smooth%20Scrolling%20for%20user.js
// recommended for 120hz+ displays
// largely matches Chrome flags: Windows Scrolling Personality and Smooth Scrolling
user_pref("apz.overscroll.enabled", true); // DEFAULT NON-LINUX
user_pref("general.smoothScroll", true); // DEFAULT
user_pref("general.smoothScroll.msdPhysics.continuousMotionMaxDeltaMS", 12);
user_pref("general.smoothScroll.msdPhysics.enabled", true);
user_pref("general.smoothScroll.msdPhysics.motionBeginSpringConstant", 600);
user_pref("general.smoothScroll.msdPhysics.regularSpringConstant", 650);
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaMS", 25);
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaRatio", "2");
user_pref("general.smoothScroll.msdPhysics.slowdownSpringConstant", 250);
user_pref("general.smoothScroll.currentVelocityWeighting", "1");
user_pref("general.smoothScroll.stopDecelerationWeighting", "1");
user_pref("mousewheel.default.delta_multiplier_y", 265); // 250-400; adjust this number to your liking
